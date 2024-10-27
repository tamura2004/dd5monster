import { useEffect, useMemo, useState } from "react";
import { sample } from "../tools/ArrayUtil.ts";
import { MonsterExps } from "../data/monsterExps.ts";
import { CR } from "../models/CR.ts";
import { CrMonsterTable } from "../data/CrMonsterTable.ts";
import { MonsterSize } from "../models/MonsterSize.ts";
import { MonsterType } from "../models/MonsterType.ts";
import { Ability } from "../models/Ability.ts";
import { Monster } from "../models/Monster.ts";
import { MonsterTemplates } from "../data/MonsterTemplates.ts";
import { doc, onSnapshot, setDoc } from "firebase/firestore";
import { db } from "../firebase.ts";
import { MonsterUtil } from "../tools/MonsterUtil.ts";
import { seq } from "../data/Eh.ts";
import { TemplateType } from "../models/TemplateType.ts";
import { Rarity } from "../models/Rarity.ts";

export const useMonster = (totalExp: number) => {
  const [seed, setSeed] = useState<number>(0);
  const [monster, setMonster] = useState<Monster>(MonsterUtil.empty);

  useEffect(() => {
    onSnapshot(doc(db, "monster", "monster"), (doc) => {
      if (doc.data() != null) {
        setMonster(doc.data() as Monster);
      }
    });
  }, []);

  const { cr, num, exp } = useMemo(
    () =>
      sample(
        Object.keys(MonsterExps)
          .map((cr) => {
            const exp = MonsterExps[cr as CR];
            const num = Math.floor(totalExp / exp);
            return { cr, num, exp };
          })
          .filter(({ num }) => 1 <= num && num <= 15),
      ),
    [seed],
  );

  const raritySet = new Set<Rarity>([Rarity.COMMON]);
  if (Math.random() < 0.5) {
    raritySet.add(Rarity.UNCOMMON);
    // if (Math.random() < 0.5) {
    //   raritySet.add(Rarity.RARE);
    //   if (Math.random() < 0.5) {
    //     raritySet.add(Rarity.MYTHIC);
    //   }
    // }
  }

  const monsterType = useMemo(
    () =>
      sample(
        MonsterTemplates.filter(
          (template) =>
            template.templateType === TemplateType.TYPE &&
            raritySet.has(template.rarity),
        ),
      ),
    [seed],
  );

  const monsterRace = useMemo(
    () =>
      sample(
        MonsterTemplates.filter(
          (template) =>
            template.templateType === TemplateType.RACE &&
            template.monsterType === monsterType.monsterType &&
            raritySet.has(template.rarity),
        ),
      ),
    [seed],
  );

  const monsterClass = useMemo(
    () =>
      sample(
        MonsterTemplates.filter(
          (template) =>
            template.templateType === TemplateType.CLASS &&
            raritySet.has(template.rarity),
        ),
      ),
    [seed],
  );

  console.log(`monsterType: ${monsterType.name}`);
  console.log(`monsterRace: ${monsterRace.name}`);
  console.log(`monsterClass: ${monsterClass.name}`);

  const { baseBonus, ac, hpMin, hpMax, atBonus, damageMin, damageMax, save } =
    CrMonsterTable[cr as CR];
  const hp = Math.floor((hpMin + hpMax) / 2);
  const damage = Math.floor((damageMin + damageMax) / 2);
  const diceNum = Math.floor(damage / 3.5);
  const damageMod = Math.floor(damage - diceNum * 3.5);
  const initiative = Math.floor(Math.random() * 20) + baseBonus;

  const baseMonster: Monster = {
    name: monsterRace.name + monsterClass.name,
    num,
    size: MonsterSize.MEDIUM,
    monsterType: monsterType.monsterType ?? MonsterType.HUMANOID,
    ac,
    hp,
    save,
    move: [],
    cr,
    exp,
    abilities: {
      [Ability.STR]: 8 + baseBonus,
      [Ability.DEX]: 8 + baseBonus,
      [Ability.CON]: 8 + baseBonus,
      [Ability.INT]: 8 + baseBonus,
      [Ability.WIS]: 8 + baseBonus,
      [Ability.CHA]: 8 + baseBonus,
    },
    skills: {},
    senses: [],
    languages: [],
    specialAbilities: [],
    actions: [],
    toHit: atBonus,
    damage,
    diceNum,
    damageMod,
    baseBonus,
    initiative,
  };

  const generatedMonster = seq(
    monsterRace.enhancer,
    monsterType.enhancer,
    monsterClass.enhancer,
  )(baseMonster);

  const reRollMonster = () => {
    setSeed(Math.random());
    setDoc(doc(db, "monster", "monster"), generatedMonster).then();
  };

  return {
    monster,
    reRollMonster,
  };
};
