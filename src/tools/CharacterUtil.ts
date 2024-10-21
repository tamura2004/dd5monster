import { Character } from "../models/Character.ts";
import { Unit, UnitType } from "../models/Unit.ts";
import { BoardData, BoardHeight, BoardWidth } from "../settings.ts";

const randomPos = () => {
  while (true) {
    const x = Math.floor(Math.random() * BoardWidth);
    const y = Math.floor(Math.random() * 4 + BoardHeight - 4);
    if (BoardData[y][x] === ".") return { x, y };
  }
};

const unit = (character: Character): Unit => {
  const { id } = character;
  const { x, y } = randomPos();
  return {
    id,
    type: UnitType.Character,
    x,
    y,
  };
};

export const CharacterUtil = {
  unit,
};
