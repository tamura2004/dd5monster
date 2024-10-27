import { TemplateType } from "../models/TemplateType.ts";
import { Rarity } from "../models/Rarity.ts";
import { eh, seq } from "./Eh.ts";

const commonClassTemplate = {
  rarity: Rarity.COMMON,
  templateType: TemplateType.CLASS,
};

export const COMMON_CLASS_TEMPLATES = [
  {
    ...commonClassTemplate,
    name: "ソルジャー",
    enhancer: seq(eh("連携戦闘"), eh("ロングソード"), eh("筋力+")),
  },
  {
    ...commonClassTemplate,
    name: "プリースト",
    enhancer: seq(eh("メイス"), eh("キュア・ライト・ウーンズ"), eh("判断+")),
  },
  {
    ...commonClassTemplate,
    name: "アーチャー",
    enhancer: seq(eh("ロングボウ"), eh("精密射撃"), eh("敏捷+")),
  },
  {
    ...commonClassTemplate,
    name: "メイジ",
    enhancer: seq(eh("ファイアボルト"), eh("マジックミサイル"), eh("知力+")),
  },
];
