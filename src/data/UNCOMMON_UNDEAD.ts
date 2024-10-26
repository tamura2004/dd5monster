import { Rarity } from "../models/Rarity.ts";
import { TemplateType } from "../models/TemplateType.ts";
import { MonsterType } from "../models/MonsterType.ts";
import { eh, seq } from "./Eh.ts";

export const UNCOMMON_UNDEAD_TEMPLATES = [
  {
    name: "バンシー",
    rarity: Rarity.RARE,
    templateType: TemplateType.RACE,
    monsterType: MonsterType.UNDEAD,
    enhancer: seq(eh("飛行40ft"), eh("慟哭の鳴き声")),
  },
];
