import { MonsterType } from "../models/MonsterType.ts";
import { TemplateType } from "../models/TemplateType.ts";
import { Rarity } from "../models/Rarity.ts";
import { eh, seq } from "./Eh.ts";

const commonUndeadTemplates = {
  rarity: Rarity.COMMON,
  templateType: TemplateType.RACE,
  monsterType: MonsterType.UNDEAD,
};

export const COMMON_UNDEAD: Record<string, string[]> = {
  ["グール"]: ["麻痺の爪"],
  ["スケルトン"]: ["硬い骨"],
  ["ゾンビ"]: ["アンデッドのしぶとさ"],
};

export const COMMON_UNDEAD_TEMPLATES = Object.entries(COMMON_UNDEAD).map(
  ([name, labels]) => ({
    ...commonUndeadTemplates,
    name,
    enhancer: seq(...labels.map((label) => eh(label))),
  }),
);
