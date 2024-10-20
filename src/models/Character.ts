import { Ability } from "./Ability.ts";

export const Clazz = {
  Fighter: "ファイター",
  Wizard: "ウィザード",
  Rogue: "ローグ",
  Cleric: "クレリック",
  Bard: "バード",
  Monk: "モンク",
  Paladin: "パラディン",
  Ranger: "レンジャー",
  Sorcerer: "ソーサラー",
  Warlock: "ウォーロック",
  Barbarian: "バーバリアン",
  Druid: "ドルイド",
} as const;
export type Clazz = (typeof Clazz)[keyof typeof Clazz];

export type Character = {
  id: string;
  name: string;
  level: number;
  classLevel: Partial<Record<Clazz, number>>;
  ac: number;
  hp: number;
  abilities: Record<Ability, number>;
};

export const Characters: Record<string, Character> = {
  ["岩熊"]: {
    id: "岩熊",
    name: "ロックベアー",
    level: 4,
    classLevel: {
      [Clazz.Barbarian]: 2,
      [Clazz.Druid]: 2,
    },
    ac: 18,
    hp: 54,
    abilities: {
      [Ability.STR]: 16,
      [Ability.DEX]: 14,
      [Ability.CON]: 16,
      [Ability.INT]: 8,
      [Ability.WIS]: 16,
      [Ability.CHA]: 8,
    },
  },
  ["灰鼠"]: {
    id: "灰鼠",
    name: "グレイラット",
    level: 4,
    classLevel: {
      [Clazz.Wizard]: 2,
      [Clazz.Rogue]: 2,
    },
    ac: 18,
    hp: 36,
    abilities: {
      [Ability.STR]: 16,
      [Ability.DEX]: 14,
      [Ability.CON]: 14,
      [Ability.INT]: 10,
      [Ability.WIS]: 10,
      [Ability.CHA]: 10,
    },
  },
  ["狂犬"]: {
    id: "狂犬",
    name: "マッドドッグ",
    level: 4,
    classLevel: {
      [Clazz.Barbarian]: 2,
      [Clazz.Ranger]: 2,
    },
    ac: 16,
    hp: 42,
    abilities: {
      [Ability.STR]: 14,
      [Ability.DEX]: 16,
      [Ability.CON]: 14,
      [Ability.INT]: 8,
      [Ability.WIS]: 12,
      [Ability.CHA]: 8,
    },
  },
  ["赤狼"]: {
    id: "赤狼",
    name: "レッドウルフ",
    level: 4,
    classLevel: {
      [Clazz.Rogue]: 2,
      [Clazz.Ranger]: 2,
    },
    ac: 15,
    hp: 34,
    abilities: {
      [Ability.STR]: 14,
      [Ability.DEX]: 16,
      [Ability.CON]: 12,
      [Ability.INT]: 8,
      [Ability.WIS]: 12,
      [Ability.CHA]: 8,
    },
  },
};
