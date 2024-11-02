import { Rarity } from "../models/Rarity.ts";
import { TemplateType } from "../models/TemplateType.ts";
import { MonsterType } from "../models/MonsterType.ts";
import { eh, seq } from "./Eh.ts";

const commonOozeTemplates = {
  rarity: Rarity.COMMON,
  templateType: TemplateType.RACE,
  monsterType: MonsterType.OOZE,
};

export const COMMON_OOZE_TEMPLATES = [
  {
    ...commonOozeTemplates,
    name: "ジェルクラウド",
    enhancer: seq(eh("腐敗性触手")),
  },
  {
    ...commonOozeTemplates,
    name: "オーカーズ・ジェリー",
    enhancer: seq(eh("腐敗性触手")),
  },
  {
    ...commonOozeTemplates,
    name: "ブラックプディング",
    enhancer: seq(eh("腐敗性触手")),
  },
];
