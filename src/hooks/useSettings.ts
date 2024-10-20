import { useMemo, useState } from "react";
import { Settings } from "../models/Settings.ts";
import { Difficulty } from "../models/Difficulty.ts";
import { ExpTable } from "../data/ExpTable.ts";

export const useSettings = (initialSettings: Settings) => {
  const [settings, setSettings] = useState(initialSettings);

  const totalExp = useMemo(() => {
    const { level, numCharacters, difficulty } = settings;
    return ExpTable[difficulty][level - 1] * numCharacters;
  }, [settings]);

  const setLevel = (level: number) => {
    setSettings({ ...settings, level });
  };
  const setNumCharacters = (numCharacters: number) => {
    setSettings({ ...settings, numCharacters });
  };
  const setDifficulty = (difficulty: Difficulty) => {
    setSettings({ ...settings, difficulty });
  };

  return { settings, setLevel, setNumCharacters, setDifficulty, totalExp };
};
