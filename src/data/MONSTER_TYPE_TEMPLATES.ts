import { TemplateType } from "../models/TemplateType.ts";
import { MonsterType } from "../models/MonsterType.ts";
import { Rarity } from "../models/Rarity.ts";
import { eh, seq } from "./Eh.ts";

export const MONSTER_TYPE_TEMPLATES = [
  {
    name: "アンデッド",
    templateType: TemplateType.TYPE,
    monsterType: MonsterType.UNDEAD,
    rarity: Rarity.COMMON,
    enhancer: seq(eh("20ft"), eh("不死特性"), eh("暗視60'")),
  },
  {
    name: "人型",
    templateType: TemplateType.TYPE,
    monsterType: MonsterType.HUMANOID,
    rarity: Rarity.COMMON,
    enhancer: seq(eh("30ft"), eh("共通語")),
  },
  {
    name: "野獣",
    templateType: TemplateType.TYPE,
    monsterType: MonsterType.BEAST,
    rarity: Rarity.COMMON,
    enhancer: seq(eh("40ft"), eh("暗視60'")),
  },
  {
    name: "巨人",
    templateType: TemplateType.TYPE,
    monsterType: MonsterType.GIANT,
    rarity: Rarity.UNCOMMON,
    enhancer: seq(eh("40ft"), eh("巨人語"), eh("筋力＋＋"), eh("知力－－")),
  },
  {
    name: "怪物",
    templateType: TemplateType.TYPE,
    monsterType: MonsterType.MONSTROSITY,
    rarity: Rarity.UNCOMMON,
    enhancer: seq(eh("30ft"), eh("暗視60'")),
  },
  {
    name: "妖精",
    templateType: TemplateType.TYPE,
    monsterType: MonsterType.FEY,
    rarity: Rarity.UNCOMMON,
    enhancer: seq(eh("30ft"), eh("暗視60'")),
  },
  {
    name: "植物",
    templateType: TemplateType.TYPE,
    monsterType: MonsterType.PLANT,
    rarity: Rarity.UNCOMMON,
    enhancer: seq(eh("30ft"), eh("暗視60'")),
  },
  {
    name: "エレメンタル",
    templateType: TemplateType.TYPE,
    monsterType: MonsterType.ELEMENTAL,
    rarity: Rarity.UNCOMMON,
    enhancer: seq(eh("30ft"), eh("暗視60'")),
  },
  {
    name: "粘体",
    templateType: TemplateType.TYPE,
    monsterType: MonsterType.OOZE,
    rarity: Rarity.UNCOMMON,
    enhancer: seq(eh("20ft"), eh("不死特性"), eh("暗視60'")),
  },
  {
    name: "異形",
    templateType: TemplateType.TYPE,
    monsterType: MonsterType.ABERRATION,
    rarity: Rarity.UNCOMMON,
    enhancer: seq(eh("30ft"), eh("暗視60'")),
  },
  {
    name: "悪魔",
    templateType: TemplateType.TYPE,
    monsterType: MonsterType.FIEND,
    rarity: Rarity.RARE,
    enhancer: seq(eh("30ft"), eh("暗視60'")),
  },
  {
    name: "天使",
    templateType: TemplateType.TYPE,
    monsterType: MonsterType.CELESTIAL,
    rarity: Rarity.RARE,
    enhancer: seq(eh("飛行60ft")),
  },
  {
    name: "ドラゴン",
    templateType: TemplateType.TYPE,
    monsterType: MonsterType.DRAGON,
    rarity: Rarity.RARE,
    enhancer: seq(eh("飛行60ft")),
  },
  {
    name: "人造",
    templateType: TemplateType.TYPE,
    monsterType: MonsterType.CONSTRUCT,
    rarity: Rarity.RARE,
    enhancer: seq(eh("20ft"), eh("不死特性"), eh("暗視60'")),
  },
];
