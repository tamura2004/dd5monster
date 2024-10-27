import { Rarity } from "../models/Rarity.ts";
import { TemplateType } from "../models/TemplateType.ts";
import { MonsterType } from "../models/MonsterType.ts";
import { eh, seq } from "./Eh.ts";

const commonFeyTemplates = {
  rarity: Rarity.COMMON,
  templateType: TemplateType.RACE,
  monsterType: MonsterType.FEY,
};

export const COMMON_FEY_TEMPLATES = [
  {
    ...commonFeyTemplates,
    name: "ドリアード",
    enhancer: seq(eh("木々との一体化"), eh("共通語")),
  },
  {
    ...commonFeyTemplates,
    name: "ピクシー",
    enhancer: seq(eh("飛行30ft"), eh("共通語")),
  },
  {
    ...commonFeyTemplates,
    name: "サテュロス",
    enhancer: seq(eh("共通語")),
  },
];
