import { MonsterType } from "../models/MonsterType.ts";
import { eh, seq } from "./Eh.ts";
import { TemplateType } from "../models/TemplateType.ts";
import { Rarity } from "../models/Rarity.ts";

const commonHumanoidTemplate = {
  rarity: Rarity.COMMON,
  monsterType: MonsterType.HUMANOID,
  templateType: TemplateType.RACE,
};

const COMMON_HUMANOIDS: Record<string, string[]> = {
  ["ゴブリン"]: ["素早い離脱"],
  ["オーク"]: ["猛進"],
  ["コボルド"]: ["連携戦闘"],
};

export const COMMON_HUMANOIDS_TEMPLATES = Object.entries(COMMON_HUMANOIDS).map(
  ([name, labels]) => ({
    ...commonHumanoidTemplate,
    name,
    enhancer: seq(...labels.map((label) => eh(label))),
  }),
);
