import { useMemo, useState } from "react";
import { sample } from "../tools/ArrayUtil.ts";
import { MonsterExps } from "../data/monsterExps.ts";
import { CR } from "../models/CR.ts";
import { CrMonsterTable } from "../data/CrMonsterTable.ts";
import { MonsterSize } from "../models/MonsterSize.ts";
import { MonsterType } from "../models/MonsterType.ts";
import { Ability } from "../models/Ability.ts";
import { dice } from "../tools/DiceUtil.ts";
import { Monster } from "../models/Monster.ts";
import { MonsterTemplates, TemplateType } from "../data/MonsterTemplates.ts";

export const useMonster = (totalExp: number) => {
  const [seed, setSeed] = useState<number>(0);

  const { cr, num, exp } = useMemo(
    () =>
      sample(
        Object.keys(MonsterExps)
          .map((cr) => {
            const exp = MonsterExps[cr as CR];
            const num = Math.floor(totalExp / exp);
            return { cr, num, exp };
          })
          .filter(({ num }) => 1 <= num && num <= 20),
      ),
    [seed],
  );

  const monsterRace = useMemo(
    () =>
      sample(
        MonsterTemplates.filter(
          (template) => template.type === TemplateType.RACE,
        ),
      ),
    [seed],
  );
  const monsterClass = useMemo(
    () =>
      sample(
        MonsterTemplates.filter(
          (template) => template.type === TemplateType.CLASS,
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

  const baseMonster: Monster = {
    name: monsterRace.name + monsterClass.name,
    num,
    size: sample(Object.values(MonsterSize)),
    monsterType: sample(Object.values(MonsterType)),
    ac,
    hp,
    save,
    move: [],
    cr,
    exp,
    abilities: {
      [Ability.STR]: dice(3, 6) + baseBonus,
      [Ability.DEX]: dice(3, 6) + baseBonus,
      [Ability.CON]: dice(3, 6) + baseBonus,
      [Ability.INT]: dice(3, 6) + baseBonus,
      [Ability.WIS]: dice(3, 6) + baseBonus,
      [Ability.CHA]: dice(3, 6) + baseBonus,
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
  };

  const monster = monsterRace.enhancer(monsterClass.enhancer(baseMonster));

  return {
    monster,
    setSeed,
  };
};
