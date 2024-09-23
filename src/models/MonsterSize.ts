export const MonsterSize = {
  TINY: "超小型",
  SMALL: "小型",
  MEDIUM: "中型",
  LARGE: "大型",
  HUGE: "超大型",
  GARGANTUAN: "巨大",
} as const;

export type MonsterSize = (typeof MonsterSize)[keyof typeof MonsterSize];
