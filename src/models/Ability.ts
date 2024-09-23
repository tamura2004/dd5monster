export const Ability = {
  STR: "筋力",
  DEX: "敏捷",
  CON: "耐久",
  INT: "知力",
  WIS: "判断",
  CHA: "魅力",
} as const;
export type Ability = typeof Ability[keyof typeof Ability];
