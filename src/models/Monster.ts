import { Ability } from "./Ability.ts";
import { MonsterSize } from "./MonsterSize.ts";
import { Skill } from "./Skill.ts";
import {MonsterType} from "./MonsterType.ts";

export type Monster = {
  name: string;
  size: MonsterSize;
  monsterType: MonsterType;
  ac: number;
  hp: number;
  save: number;
  move: string;
  cr: string;
  exp: number;
  abilities: Record<Ability, number>;
  skills: Partial<Record<Skill, number>>;
  feats: Record<string, string>;
  actions: Record<string, string>;
  toHit: number;
};
