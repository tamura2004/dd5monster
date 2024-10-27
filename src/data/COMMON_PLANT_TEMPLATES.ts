import { Rarity } from "../models/Rarity.ts";
import { TemplateType } from "../models/TemplateType.ts";
import { MonsterType } from "../models/MonsterType.ts";
import { eh, seq } from "./Eh.ts";

const commonPlantTemplates = {
  rarity: Rarity.COMMON,
  templateType: TemplateType.RACE,
  monsterType: MonsterType.PLANT,
};

export const COMMON_PLANT_TEMPLATES = [
  {
    ...commonPlantTemplates,
    name: "ヴァイン",
    enhancer: seq(eh("絡みつき攻撃")),
  },
  {
    ...commonPlantTemplates,
    name: "モス",
    enhancer: seq(eh("毒の胞子")),
  },
  {
    ...commonPlantTemplates,
    name: "サンダーツリー",
    enhancer: seq(eh("サンダーの一撃")),
  },
];
