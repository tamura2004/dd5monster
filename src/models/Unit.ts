export const UnitType = {
  Monster: "Monster",
  Character: "Character",
} as const;
export type UnitType = (typeof UnitType)[keyof typeof UnitType];

export type Unit = {
  id: string;
  type: UnitType;
  y: number;
  x: number;
};
