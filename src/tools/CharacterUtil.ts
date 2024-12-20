import { Character } from "../models/Character.ts";
import { Unit, UnitType } from "../models/Unit.ts";
import { BoardData, BoardHeight, BoardWidth } from "../settings.ts";
import { Ability } from "../models/Ability.ts";

const randomPos = () => {
  while (true) {
    const x = Math.floor(Math.random() * BoardWidth);
    const y = Math.floor(Math.random() * 4 + BoardHeight - 4);
    if (BoardData[y][x] === ".") return { x, y };
  }
};

const unit = (character: Character): Unit => {
  const { id, name, hp } = character;
  const { x, y } = randomPos();
  return {
    id,
    type: UnitType.Character,
    name,
    x,
    y,
    hp,
  };
};

const rollInitiative = (character: Character) => {
  return Math.floor(Math.random() * 20) + 1 + dexMod(character);
};

const dexMod = (character: Character) => {
  return Math.floor((character.abilities[Ability.DEX] - 10) / 2);
};

export const CharacterUtil = {
  unit,
  rollInitiative,
};
