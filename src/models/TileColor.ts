export const Tile = {
  Wall: "#",
  Water: "W",
  Poison: "P",
  Special: "S",
  Bush: "B",
  Empty: ".",
} as const;

export type Tile = (typeof Tile)[keyof typeof Tile];

export const TileColor: Record<string, string> = {
  [Tile.Wall]: "black",
  [Tile.Water]: "dodgerblue",
  [Tile.Poison]: "DarkMagenta",
  [Tile.Special]: "yellow",
  [Tile.Bush]: "limeGreen",
  [Tile.Empty]: "white",
} as const;
