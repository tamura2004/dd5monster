import { Monster } from "../models/Monster.ts";
import { Ability } from "../models/Ability.ts";

const monsterModifiers: Record<string, (monster: Monster) => Monster> = {
  "STR+": (monster) => {
    const str = monster.abilities[Ability.STR];
    return {
      ...monster,
      abilities: { ...monster.abilities, [Ability.STR]: str + 4 },
    };
  },
  "DEX+": (monster) => {
    const dex = monster.abilities[Ability.DEX];
    return {
      ...monster,
      abilities: { ...monster.abilities, [Ability.DEX]: dex + 4 },
    };
  },
  "CON+": (monster) => {
    const con = monster.abilities[Ability.CON];
    return {
      ...monster,
      abilities: { ...monster.abilities, [Ability.CON]: con + 4 },
    };
  },
  "INT+": (monster) => {
    const int = monster.abilities[Ability.INT];
    return {
      ...monster,
      abilities: { ...monster.abilities, [Ability.INT]: int + 4 },
    };
  },
  "WIS+": (monster) => {
    const wis = monster.abilities[Ability.WIS];
    return {
      ...monster,
      abilities: { ...monster.abilities, [Ability.WIS]: wis + 4 },
    };
  },
  "CHA+": (monster) => {
    const cha = monster.abilities[Ability.CHA];
    return {
      ...monster,
      abilities: { ...monster.abilities, [Ability.CHA]: cha + 4 },
    };
  },
  "STR-": (monster) => {
    const str = monster.abilities[Ability.STR];
    return {
      ...monster,
      abilities: { ...monster.abilities, [Ability.STR]: str - 4 },
    };
  },
  "DEX-": (monster) => {
    const dex = monster.abilities[Ability.DEX];
    return {
      ...monster,
      abilities: { ...monster.abilities, [Ability.DEX]: dex - 4 },
    };
  },
  "CON-": (monster) => {
    const con = monster.abilities[Ability.CON];
    return {
      ...monster,
      abilities: { ...monster.abilities, [Ability.CON]: con - 4 },
    };
  },
  "INT-": (monster) => {
    const int = monster.abilities[Ability.INT];
    return {
      ...monster,
      abilities: { ...monster.abilities, [Ability.INT]: int - 4 },
    };
  },
  "WIS-": (monster) => {
    const wis = monster.abilities[Ability.WIS];
    return {
      ...monster,
      abilities: { ...monster.abilities, [Ability.WIS]: wis - 4 },
    };
  },
  "CHA-": (monster) => {
    const cha = monster.abilities[Ability.CHA];
    return {
      ...monster,
      abilities: { ...monster.abilities, [Ability.CHA]: cha - 4 },
    };
  },
  "STR0": (monster) => {
    return {
      ...monster,
      abilities: { ...monster.abilities, [Ability.STR]: 0 },
    };
  },
  "DEX0": (monster) => {
    return {
      ...monster,
      abilities: { ...monster.abilities, [Ability.DEX]: 0 },
    };
  },
  "CON0": (monster) => {
    return {
      ...monster,
      abilities: { ...monster.abilities, [Ability.CON]: 0 },
    };
  },
  "INT0": (monster) => {
    return {
      ...monster,
      abilities: { ...monster.abilities, [Ability.INT]: 0 },
    };
  },
  "WIS0": (monster) => {
    return {
      ...monster,
      abilities: { ...monster.abilities, [Ability.WIS]: 0 },
    };
  },
  "CHA0": (monster) => {
    return {
      ...monster,
      abilities: { ...monster.abilities, [Ability.CHA]: 0 },
    };
  },
  "石化の凝視": (monster) => {
    return {
      ...monster,
      actions: { ...monster.actions, "石化の凝視": `
        無力状態でないとき、30フィート以内で互いに相手を見ることができる１体に対して、石化の凝視を
        試みることができる。そうしたとき、難易度${monster.save}の【耐久力】セーブに失敗したら、
        魔法により石になり始め、拘束状態になる。次の自分のターンの終了時に、再びこのセーブを行い、
        成功すれば効果は終了する。失敗した場合、石化状態となる。この石化はグレーターレストレーション
        その他の魔法によって解放されるまで続く。
        不意を打たれていないクリーチャーは、自分のターンの開始時に目を逸らして避けることができる。
        その場合、そのクリーチャーは石化の凝視を避けることができるが、盲目状態とみなされ、攻撃に不利を受ける。
      ` },
    };
  },
};
