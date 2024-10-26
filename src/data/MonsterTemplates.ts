import { Monster } from "../models/Monster.ts";
import { MonsterType } from "../models/MonsterType.ts";
import { COMMON_HUMANOIDS_TEMPLATES } from "./COMMON_HUMANOIDS.ts";
import { UNCOMMON_HUMANOIDS_TEMPLATES } from "./UNCOMMON_HUMANOIDS.ts";
import { TemplateType } from "../models/TemplateType.ts";
import { Rarity } from "../models/Rarity.ts";
import { COMMON_UNDEAD_TEMPLATES } from "./COMMON_UNDEAD.ts";
import { UNCOMMON_UNDEAD_TEMPLATES } from "./UNCOMMON_UNDEAD.ts";
import { UNCOMMON_GIANT_TEMPLATES } from "./UNCOMMON_GIANT_TEMPLATES.ts";
import { COMMON_CLASS_TEMPLATES } from "./COMMON_CLASS_TEMPLATES.ts";
import { MONSTER_TYPE_TEMPLATES } from "./MONSTER_TYPE_TEMPLATES.ts";
import { COMMON_MONSTROSITY_TEMPLATES } from "./COMMON_MONSTROSITY_TEMPLATES.ts";
import { COMMON_BEAST_TEMPLATES } from "./COMMON_BEAST_TEMPLATES.ts";

export type MonsterTemplate = {
  name: string;
  templateType: TemplateType;
  monsterType?: MonsterType;
  rarity: Rarity;
  enhancer: MonsterEnhancer;
};

export type MonsterEnhancer = (monster: Monster) => Monster;

export const MonsterTemplates: MonsterTemplate[] = [
  ...COMMON_HUMANOIDS_TEMPLATES,
  ...UNCOMMON_HUMANOIDS_TEMPLATES,
  ...COMMON_UNDEAD_TEMPLATES,
  ...UNCOMMON_UNDEAD_TEMPLATES,
  ...UNCOMMON_GIANT_TEMPLATES,
  ...COMMON_CLASS_TEMPLATES,
  ...MONSTER_TYPE_TEMPLATES,
  ...COMMON_MONSTROSITY_TEMPLATES,
  ...COMMON_BEAST_TEMPLATES,
];
