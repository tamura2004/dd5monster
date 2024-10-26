import { TemplateType } from "../models/TemplateType.ts";
import { Rarity } from "../models/Rarity.ts";
import { eh, seq } from "./Eh.ts";
import { MonsterType } from "../models/MonsterType.ts";

const commonMonstrosityTemplate = {
  templateType: TemplateType.RACE,
  rarity: Rarity.COMMON,
  monsterType: MonsterType.MONSTROSITY,
};

export const COMMON_MONSTROSITY_TEMPLATES = [
  {
    ...commonMonstrosityTemplate,
    name: "ハーピー",
    enhancer: seq(eh("飛行40ft"), eh("誘い寄せの歌"), eh("共通語")),
  },
  {
    ...commonMonstrosityTemplate,
    name: "メデューサ",
    enhancer: seq(eh("石化の凝視"), eh("暗視60フィート"), eh("共通語")),
  },
];
