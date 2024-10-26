export const Rarity = {
  COMMON: "common",
  UNCOMMON: "uncommon",
  RARE: "rare",
  MYTHIC: "mythic",
} as const;
export type Rarity = (typeof Rarity)[keyof typeof Rarity];
