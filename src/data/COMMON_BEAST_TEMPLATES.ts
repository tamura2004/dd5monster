import { Rarity } from "../models/Rarity.ts";
import { TemplateType } from "../models/TemplateType.ts";
import { MonsterType } from "../models/MonsterType.ts";
import { eh, seq } from "./Eh.ts";

const commonBeastTemplates = {
  rarity: Rarity.COMMON,
  templateType: TemplateType.RACE,
  monsterType: MonsterType.BEAST,
};

export const COMMON_BEAST_TEMPLATES = [
  {
    ...commonBeastTemplates,
    name: "アウル",
    enhancer: seq(eh("かすめ飛び"), eh("飛行60ft")),
  },
  {
    ...commonBeastTemplates,
    name: "イーグル",
    enhancer: seq(eh("かすめ飛び"), eh("飛行60ft")),
  },
  {
    ...commonBeastTemplates,
    name: "ヴァルチャー",
    enhancer: seq(eh("連携戦闘"), eh("飛行60ft")),
  },
  {
    ...commonBeastTemplates,
    name: "ウィーゼル",
    enhancer: seq(eh("敏捷++"), eh("筋力-")),
  },
  {
    ...commonBeastTemplates,
    name: "アロサウルス",
    enhancer: seq(eh("飛びかかり"), eh("噛みつき")),
  },
  {
    ...commonBeastTemplates,
    name: "アンキロサウルス",
    enhancer: seq(eh("尾の打撃")),
  },
];
