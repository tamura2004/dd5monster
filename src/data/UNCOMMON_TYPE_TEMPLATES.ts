import { TemplateType } from "../models/TemplateType.ts";
import { MonsterType } from "../models/MonsterType.ts";
import { Rarity } from "../models/Rarity.ts";
import { eh, seq } from "./Eh.ts";

const uncommonTypeTemplates = {
  rarity: Rarity.UNCOMMON,
  templateType: TemplateType.TYPE,
};

export const UNCOMMON_TYPE_TEMPLATES = [
  {
    ...uncommonTypeTemplates,
    name: "巨人",
    monsterType: MonsterType.GIANT,
    enhancer: seq(
      eh("40ft"),
      eh("巨人語"),
      eh("筋力--"),
      eh("知力--"),
      eh("大型"),
    ),
  },
  {
    ...uncommonTypeTemplates,
    name: "怪物",
    monsterType: MonsterType.MONSTROSITY,
    enhancer: seq(eh("30ft"), eh("暗視60'")),
  },

  {
    ...uncommonTypeTemplates,
    name: "植物",
    monsterType: MonsterType.PLANT,
    enhancer: seq(eh("30ft"), eh("暗視60'"), eh("知力--")),
  },
  {
    ...uncommonTypeTemplates,
    name: "粘体",
    monsterType: MonsterType.OOZE,
    enhancer: seq(eh("20ft"), eh("不死特性"), eh("暗視60'"), eh("知力--")),
  },
];
