import { Ability } from "./Ability.ts";
import { MonsterSize } from "./MonsterSize.ts";
import { Skill } from "./Skill.ts";
import { MonsterType } from "./MonsterType.ts";

type Entry = {
  label: string;
  text: string;
}

export type Monster = {
  name: string;
  num: number;
  size: MonsterSize;
  monsterType: MonsterType;
  ac: number;
  hp: number;
  save: number;
  move: string[];
  skills: Partial<Record<Skill, number>>;
  senses: string[];
  languages: string[];
  cr: string;
  exp: number;
  abilities: Record<Ability, number>;
  actions: Entry[];
  specialAbilities: Entry[];
  toHit: number;
  damage: number;
  diceNum: number;
  damageMod: number;
};
