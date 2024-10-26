import { TemplateType } from "../models/TemplateType.ts";
import { Rarity } from "../models/Rarity.ts";
import { MonsterType } from "../models/MonsterType.ts";
import { eh, seq } from "./Eh.ts";

export const UNCOMMON_GIANT_TEMPLATES = [
  {
    name: "トロール",
    templateType: TemplateType.RACE,
    rarity: Rarity.UNCOMMON,
    monsterType: MonsterType.GIANT,
    enhancer: seq(eh("再生")),
  },
];
