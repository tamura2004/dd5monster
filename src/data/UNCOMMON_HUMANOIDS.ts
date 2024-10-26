import { Rarity } from "../models/Rarity.ts";
import { MonsterType } from "../models/MonsterType.ts";
import { TemplateType } from "../models/TemplateType.ts";
import { eh, seq } from "./Eh.ts";

const uncommonHumanoidTemplate = {
  rarity: Rarity.UNCOMMON,
  monsterType: MonsterType.HUMANOID,
  templateType: TemplateType.RACE,
};

const UNCOMMON_HUMANOIDS: Record<string, string[]> = {
  ["ノール"]: ["大暴れ"],
  ["ホブゴブリン"]: ["連携打撃"],
  ["バグベア"]: ["蛮力"],
  ["マーフォーク"]: ["水泳30ft"],
  ["サハギン"]: ["水泳30ft"],
  ["カエルフォーク"]: ["水泳30ft"],
  ["リザードフォーク"]: ["水泳30ft"],
  ["ワーウルフ"]: ["人狼の不死身"],
  ["ワーラット"]: ["人狼の不死身"],
  ["ワーベア"]: ["人狼の不死身"],
};

export const UNCOMMON_HUMANOIDS_TEMPLATES = Object.entries(
  UNCOMMON_HUMANOIDS,
).map(([name, labels]) => ({
  ...uncommonHumanoidTemplate,
  name,
  enhancer: seq(...labels.map((label) => eh(label))),
}));
