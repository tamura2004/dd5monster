import { TemplateType } from "../models/TemplateType.ts";
import { Rarity } from "../models/Rarity.ts";
import { MonsterType } from "../models/MonsterType.ts";
import { eh, seq } from "./Eh.ts";

const rareTypeTemplates = {
  rarity: Rarity.RARE,
  templateType: TemplateType.TYPE,
};

export const RARE_TYPE_TEMPLATES = [
  {
    ...rareTypeTemplates,
    name: "妖精",
    monsterType: MonsterType.FEY,
    enhancer: seq(eh("30ft"), eh("暗視60'"), eh("魅力++"), eh("超小型")),
  },
  {
    ...rareTypeTemplates,
    name: "エレメンタル",
    monsterType: MonsterType.ELEMENTAL,
    enhancer: seq(eh("30ft"), eh("暗視60'")),
  },
  {
    ...rareTypeTemplates,
    name: "異形",
    monsterType: MonsterType.ABERRATION,
    enhancer: seq(eh("30ft"), eh("暗視60'")),
  },
  {
    ...rareTypeTemplates,
    name: "人造",
    monsterType: MonsterType.CONSTRUCT,
    enhancer: seq(eh("20ft"), eh("不死特性"), eh("暗視60'")),
  },
];
