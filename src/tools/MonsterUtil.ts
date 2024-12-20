import { Ability } from "../models/Ability.ts";
import { Monster } from "../models/Monster.ts";
import { Unit, UnitType } from "../models/Unit.ts";
import { BoardData, BoardWidth } from "../settings.ts";
import { sample } from "./ArrayUtil.ts";

const initiative = (monster: Monster) => {
  return Math.floor(Math.random() * 20) + 1 + dexMod(monster);
};

const dexMod = (monster: Monster) => {
  return Math.floor((monster.abilities[Ability.DEX] - 10) / 2);
};

const randomPos = () => {
  while (true) {
    const x = Math.floor(Math.random() * BoardWidth);
    const y = Math.floor(Math.random() * 10);
    if (BoardData[y][x] === ".") return { x, y };
  }
};

const unit = (monster: Monster, i: number) => {
  const { x, y } = randomPos();
  const { hp, name } = monster;
  return {
    id: `m${i}`,
    type: UnitType.Monster,
    name,
    x,
    y,
    hp,
  } as Unit;
};

const moveEnhancer = (move: string) => (monster: Monster) => ({
  ...monster,
  move: [...monster.move, move],
});

const saEnhancer = (label: string, text: string) => (monster: Monster) => ({
  ...monster,
  specialAbilities: [...monster.specialAbilities, { label, text }],
});

const toDmDice = (damage_: number) => {
  const damage = Math.floor(damage_);
  const dice = sample([4, 6, 8, 10, 12]);
  const average = (dice + 1) / 2;
  const diceNum = Math.max(1, Math.floor(damage / average));
  const damageMod = Math.floor(damage - diceNum * average);
  const damageModStr =
    damageMod === 0 ? "" : damageMod > 0 ? `+${damageMod}` : `${damageMod}`;
  return `${damage}(${diceNum}d${dice}${damageModStr})`;
};

export const empty: Monster = {
  name: "string",
  num: 1,
  size: "中型",
  monsterType: "人型",
  ac: 10,
  hp: 1,
  save: 1,
  move: [],
  skills: {},
  senses: [],
  languages: [],
  cr: "string",
  exp: -1,
  abilities: {
    [Ability.STR]: 10,
    [Ability.DEX]: 10,
    [Ability.CON]: 10,
    [Ability.INT]: 10,
    [Ability.WIS]: 10,
    [Ability.CHA]: 10,
  },
  actions: [],
  specialAbilities: [],
  toHit: -1,
  damage: -1,
  diceNum: -1,
  damageMod: -1,
  baseBonus: -1,
  initiative: -1,
};

export const MonsterUtil = {
  initiative,
  dexMod,
  unit,
  empty,
  moveEnhancer,
  saEnhancer,
  toDmDice,
};
