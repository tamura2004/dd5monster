import { useEffect, useMemo, useState } from "react";
import { sample } from "../tools/ArrayUtil.ts";
import { MonsterExps } from "../data/monsterExps.ts";
import { CR } from "../models/CR.ts";
import { CrMonsterTable } from "../data/CrMonsterTable.ts";
import { MonsterSize } from "../models/MonsterSize.ts";
import { MonsterType } from "../models/MonsterType.ts";
import { Ability } from "../models/Ability.ts";
import { Monster } from "../models/Monster.ts";
import { MonsterTemplates, TemplateType } from "../data/MonsterTemplates.ts";
import { doc, onSnapshot, setDoc } from "firebase/firestore";
import { db } from "../firebase.ts";
import { MonsterUtil } from "../tools/MonsterUtil.ts";

export const useMonster = (totalExp: number) => {
  const [seed, setSeed] = useState<number>(0);
  const [monster, setMonster] = useState<Monster>(MonsterUtil.empty);

  useEffect(() => {
    onSnapshot(doc(db, "monster", "monster"), (doc) => {
      setMonster(doc.data() as Monster);
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

  const monsterType = useMemo(
    () =>
      sample(
        MonsterTemplates.filter(
          (template) => template.templateType === TemplateType.TYPE,
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
            template.monsterType === monsterType.monsterType,
        ),
      ),
    [seed],
  );

  const monsterClass = useMemo(
    () =>
      sample(
        MonsterTemplates.filter(
          (template) => template.templateType === TemplateType.CLASS,
        ),
      ),
    [seed],
  );

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
    monsterType: MonsterType.HUMANOID,
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

  const generatedMonster = monsterType.enhancer(
    monsterRace.enhancer(monsterClass.enhancer(baseMonster)),
  );

  const reRollMonster = () => {
    setSeed(Math.random());
    setDoc(doc(db, "monster", "monster"), generatedMonster).then();
  };

  return {
    monster,
    reRollMonster,
  };
};
