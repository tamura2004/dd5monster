import { Difficulty } from "../data/difficulty.ts";

export type Settings = {
  level: number | null;
  numCharacters: number | null;
  difficulty: Difficulty | null;
};

export const initialSettings: Settings = {
  level: null,
  numCharacters: null,
  difficulty: null,
};
