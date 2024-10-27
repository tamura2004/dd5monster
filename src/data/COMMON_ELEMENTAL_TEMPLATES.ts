import { Rarity } from "../models/Rarity.ts";
import { TemplateType } from "../models/TemplateType.ts";
import { MonsterType } from "../models/MonsterType.ts";
import { eh, seq } from "./Eh.ts";

const commonElementalTemplates = {
  rarity: Rarity.COMMON,
  templateType: TemplateType.RACE,
  monsterType: MonsterType.ELEMENTAL,
};

export const COMMON_ELEMENTAL_TEMPLATES = [
  {
    ...commonElementalTemplates,
    name: "エア・エレメンタル",
    enhancer: seq(eh("飛行60ft"), eh("竜巻変化")),
  },
  {
    ...commonElementalTemplates,
    name: "アース・エレメンタル",
    enhancer: seq(eh("地潜り")),
  },
  {
    ...commonElementalTemplates,
    name: "ファイア・エレメンタル",
    enhancer: seq(eh("燃焼攻撃"), eh("無形の存在")),
  },
  {
    ...commonElementalTemplates,
    name: "ウォーター・エレメンタル",
    enhancer: seq(eh("水泳60ft"), eh("水没")),
  },
];
