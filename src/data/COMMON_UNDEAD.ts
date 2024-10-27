import { MonsterType } from "../models/MonsterType.ts";
import { TemplateType } from "../models/TemplateType.ts";
import { Rarity } from "../models/Rarity.ts";
import { eh, seq } from "./Eh.ts";

const commonUndeadTemplates = {
  rarity: Rarity.COMMON,
  templateType: TemplateType.RACE,
  monsterType: MonsterType.UNDEAD,
};

export const COMMON_UNDEAD_TEMPLATES = [
  {
    ...commonUndeadTemplates,
    name: "グール",
    enhancer: seq(eh("麻痺の爪")),
  },
  {
    ...commonUndeadTemplates,
    name: "スケルトン",
    enhancer: seq(eh("硬い骨")),
  },
  {
    ...commonUndeadTemplates,
    name: "ゾンビ",
    enhancer: seq(eh("アンデッドのしぶとさ")),
  },
];
