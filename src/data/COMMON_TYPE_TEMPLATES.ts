import { TemplateType } from "../models/TemplateType.ts";
import { MonsterType } from "../models/MonsterType.ts";
import { Rarity } from "../models/Rarity.ts";
import { eh, seq } from "./Eh.ts";

const commonTypeTemplate = {
  rarity: Rarity.COMMON,
  templateType: TemplateType.TYPE,
};

export const COMMON_TYPE_TEMPLATES = [
  {
    ...commonTypeTemplate,
    name: MonsterType.UNDEAD,
    monsterType: MonsterType.UNDEAD,
    enhancer: seq(eh("20ft"), eh("不死特性"), eh("暗視60'")),
  },
  {
    ...commonTypeTemplate,
    name: MonsterType.HUMANOID,
    monsterType: MonsterType.HUMANOID,
    enhancer: seq(eh("30ft"), eh("共通語")),
  },
  {
    ...commonTypeTemplate,
    name: MonsterType.BEAST,
    monsterType: MonsterType.BEAST,
    enhancer: seq(eh("40ft"), eh("暗視60'")),
  },
];
