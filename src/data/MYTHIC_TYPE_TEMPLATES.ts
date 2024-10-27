import { MonsterType } from "../models/MonsterType.ts";
import { eh, seq } from "./Eh.ts";
import { Rarity } from "../models/Rarity.ts";
import { TemplateType } from "../models/TemplateType.ts";

const mythicTypeTemplates = {
  templateType: TemplateType.TYPE,
  rarity: Rarity.MYTHIC,
};

export const MYTHIC_TYPE_TEMPLATES = [
  {
    ...mythicTypeTemplates,
    name: "悪魔",
    monsterType: MonsterType.FIEND,
    enhancer: seq(eh("飛行60ft"), eh("知力++"), eh("魅力++")),
  },
  {
    ...mythicTypeTemplates,
    name: "天使",
    monsterType: MonsterType.CELESTIAL,
    enhancer: seq(eh("飛行60ft"), eh("魅力++")),
  },
  {
    ...mythicTypeTemplates,
    name: "ドラゴン",
    monsterType: MonsterType.DRAGON,
    enhancer: seq(eh("飛行60ft")),
  },
];
