import { useMemo, useState } from "react";
import { Difficulty } from "../data/difficulty.ts";
import { baseExp } from "../data/baseExp.ts";
import { sample } from "../tools/ArrayUtil.ts";
import { monsterExps } from "../data/monsterExps.ts";
import { monsterRaces } from "../data/monsterRaces.ts";
import { monsterClasses } from "../data/monsterClasses.ts";
import { monsterTerrains } from "../data/monsterTerrains.ts";
import { CR } from "../models/CR.ts";
import { crMonsters } from "../data/crMonsters.ts";
import { MonsterSize } from "../models/MonsterSize.ts";
import { MonsterType } from "../models/MonsterType.ts";
import { Ability } from "../models/Ability.ts";
import { dice } from "../tools/DiceUtil.ts";
import { Monster } from "../models/Monster.ts";

export const useSettings = () => {
  const [level, setLevel] = useState<number>(4);
  const [numCharacters, setNumCharacters] = useState<number>(4);
  const [difficulty, setDifficulty] = useState<Difficulty>(Difficulty.NORMAL);
  const [seed, setSeed] = useState<number>(0);

  const totExp = useMemo(
    () => baseExp[difficulty][level - 1] * numCharacters,
    [level, numCharacters, difficulty, seed],
  );

  const cr = useMemo(
    () =>
      sample(
        Object.keys(monsterExps).filter((cr) => {
          const numMonster = totExp / monsterExps[cr as CR];
          return 1 <= numMonster && numMonster <= 20;
        }),
      ) as CR,
    [totExp, seed],
  );
  const exp = monsterExps[cr as CR];

  const monsterRace = useMemo(() => sample(monsterRaces), [seed]);
  const monsterClass = useMemo(() => sample(monsterClasses), [seed]);
  const monsterTerrain = useMemo(() => sample(monsterTerrains), [seed]);
  const { baseBonus, ac, hpMin, hpMax, atBonus, damageMin, damageMax, save } =
    crMonsters[cr as CR];
  const hp = Math.floor((hpMin + hpMax) / 2);
  const damage = Math.floor((damageMin + damageMax) / 2);
  const diceNum = Math.floor(damage / 3.5);
  const damageMod = Math.floor(damage - diceNum * 3.5);

  const monster: Monster = {
    name: monsterTerrain + monsterRace + monsterClass,
    size: sample(Object.values(MonsterSize)),
    monsterType: sample(Object.values(MonsterType)),
    ac,
    hp,
    save,
    move: "30ft",
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
    skills: {
      "運動": 6,
      "生存": 3,
      "知覚": 3,
    },
    feats: {
      "マルチアタック": "シミターで２回の攻撃を行う",
      "呪文発動能力": `呪文セーブ難易度+${save}、呪文攻撃ロール+${atBonus}`,
      "初級呪文(回数無制限)": "ファイアーボルト、メイジハンド、ダークネス",
      "1レベル呪文(3回)": "マジックミサイル、シールド",
      "2レベル呪文(2回)": "ウェブ、ミストバリア",
      "3レベル呪文(1回)": "ファイアボール",
    },
    actions: {
      "シミター": `近接武器攻撃:攻撃+${atBonus}、間合い5フィート、目標1つ、ヒット:${damage}(${diceNum}d6+${damageMod})[斬撃]ダメージ`,
    },
    toHit: atBonus,
  };

  return {
    level,
    setLevel,
    numCharacters,
    setNumCharacters,
    difficulty,
    setDifficulty,
    totExp,
    cr,
    exp,
    setSeed,
    monsterRace,
    monsterClass,
    monsterTerrain,
    baseBonus,
    ac,
    hpMin,
    hpMax,
    atBonus,
    damageMin,
    damageMax,
    save,
    hp,
    monster,
  };
};
