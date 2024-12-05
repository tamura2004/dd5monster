export const Tile = {
  Wall: "#",
  Water: "W",
  Special: "S",
  Empty: ".",
} as const;

export type Tile = typeof Tile[keyof typeof Tile];

export const TileColor: Record<string, string> = {
  [Tile.Wall]: "black",
  [Tile.Water]: "dodgerblue",
  [Tile.Special]: "yellow",
  [Tile.Empty]: "white",
} as const;
