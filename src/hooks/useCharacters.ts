import { Character } from "../models/Character.ts";
import { useState } from "react";

export const useCharacters = (initialCharacters: Record<string, Character>) => {
  const [characters, setCharacters] = useState(initialCharacters);

  const setCharacter = (id: string, character: Character) => {
    setCharacters((prev) => ({ ...prev, [id]: character }));
  };

  return { characters, setCharacter };
};
