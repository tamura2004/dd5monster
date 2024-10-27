import { MonsterType } from "../models/MonsterType.ts";
import { eh, seq } from "./Eh.ts";
import { TemplateType } from "../models/TemplateType.ts";
import { Rarity } from "../models/Rarity.ts";

const commonHumanoidTemplate = {
  rarity: Rarity.COMMON,
  monsterType: MonsterType.HUMANOID,
  templateType: TemplateType.RACE,
};

export const COMMON_HUMANOIDS_TEMPLATES = [
  {
    ...commonHumanoidTemplate,
    name: "ゴブリン",
    enhancer: seq(eh("素早い離脱")),
  },
  {
    ...commonHumanoidTemplate,
    name: "オーク",
    enhancer: seq(eh("猛進")),
  },
  {
    ...commonHumanoidTemplate,
    name: "コボルド",
    enhancer: seq(eh("連携戦闘")),
  },
];
