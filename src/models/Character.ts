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
  active: boolean;
  id: string;
  name: string;
  level: number;
  classLevel: Partial<Record<Clazz, number>>;
  ac: number;
  hp: number;
  abilities: Record<Ability, number>;
  initiative: number;
};

export const Characters: Record<string, Character> = {
  ["岩熊"]: {
    active: false,
    id: "岩熊",
    name: "ロックベアー",
    level: 4,
    classLevel: {
      [Clazz.Barbarian]: 2,
      [Clazz.Druid]: 2,
    },
    ac: 18,
    hp: 56,
    abilities: {
      [Ability.STR]: 18,
      [Ability.DEX]: 16,
      [Ability.CON]: 18,
      [Ability.INT]: 14,
      [Ability.WIS]: 18,
      [Ability.CHA]: 14,
    },
    initiative: 6,
  },
  ["灰鼠"]: {
    active: true,
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
      [Ability.STR]: 14,
      [Ability.DEX]: 18,
      [Ability.CON]: 16,
      [Ability.INT]: 18,
      [Ability.WIS]: 14,
      [Ability.CHA]: 18,
    },
    initiative: 17,
  },
  ["虎妹"]: {
    active: true,
    id: "虎妹",
    name: "タイガーリリー",
    level: 4,
    classLevel: {
      [Clazz.Bard]: 2,
      [Clazz.Cleric]: 2,
    },
    ac: 18,
    hp: 36,
    abilities: {
      [Ability.STR]: 12,
      [Ability.DEX]: 18,
      [Ability.CON]: 14,
      [Ability.INT]: 18,
      [Ability.WIS]: 18,
      [Ability.CHA]: 18,
    },
    initiative: 17,
  },
  ["エマ"]: {
    active: true,
    id: "エマ",
    name: "エマさん",
    level: 4,
    classLevel: {
      [Clazz.Barbarian]: 2,
      [Clazz.Monk]: 2,
    },
    ac: 16,
    hp: 40,
    abilities: {
      [Ability.STR]: 18,
      [Ability.DEX]: 18,
      [Ability.CON]: 18,
      [Ability.INT]: 14,
      [Ability.WIS]: 14,
      [Ability.CHA]: 16,
    },
    initiative: 18,
  },
  ["エド"]: {
    active: true,
    id: "エド",
    name: "エドワルド先生",
    level: 4,
    classLevel: {
      [Clazz.Cleric]: 2,
      [Clazz.Wizard]: 2,
    },
    ac: 18,
    hp: 36,
    abilities: {
      [Ability.STR]: 12,
      [Ability.DEX]: 18,
      [Ability.CON]: 14,
      [Ability.INT]: 18,
      [Ability.WIS]: 18,
      [Ability.CHA]: 18,
    },
    initiative: 10,
  },
  ["玄武"]: {
    active: true,
    id: "玄武",
    name: "ゲンブ",
    level: 4,
    classLevel: {
      [Clazz.Fighter]: 2,
      [Clazz.Barbarian]: 2,
    },
    ac: 22,
    hp: 64,
    abilities: {
      [Ability.STR]: 20,
      [Ability.DEX]: 17,
      [Ability.CON]: 20,
      [Ability.INT]: 11,
      [Ability.WIS]: 18,
      [Ability.CHA]: 11,
    },
    initiative: 10,
  },
  ["飛燕"]: {
    active: true,
    id: "飛燕",
    name: "ヒエン",
    level: 4,
    classLevel: {
      [Clazz.Cleric]: 2,
      [Clazz.Monk]: 2,
    },
    ac: 20,
    hp: 52,
    abilities: {
      [Ability.STR]: 16,
      [Ability.DEX]: 20,
      [Ability.CON]: 20,
      [Ability.INT]: 12,
      [Ability.WIS]: 18,
      [Ability.CHA]: 12,
    },
    initiative: 10,
  },
};
