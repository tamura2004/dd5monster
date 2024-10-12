import { Difficulty } from "../data/Difficulty.ts";

export type Settings = {
  level: number;
  numCharacters: number;
  difficulty: Difficulty;
};

export const initialSettings: Settings = {
  level: 4,
  numCharacters: 4,
  difficulty: Difficulty.NORMAL,
};
