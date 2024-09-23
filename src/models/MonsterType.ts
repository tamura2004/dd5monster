export const MonsterType = {
  ABERRATION: "異形",
  BEAST: "野獣",
  CELESTIAL: "天使",
  CONSTRUCT: "人造",
  DRAGON: "ドラゴン",
  ELEMENTAL: "エレメンタル",
  FEY: "妖精",
  FIEND: "悪魔",
  GIANT: "巨人",
  HUMANOID: "人型",
  MONSTROSITY: "怪物",
  OOZE: "粘体",
  PLANT: "植物",
  UNDEAD: "アンデッド",
} as const;

export type MonsterType = (typeof MonsterType)[keyof typeof MonsterType];
