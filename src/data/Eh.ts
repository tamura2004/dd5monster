import { Monster } from "../models/Monster.ts";
import { MonsterEnhancer } from "./MonsterTemplates.ts";
import { Ability } from "../models/Ability.ts";

const actionEnhancer = (label: string, text: string) => (m: Monster) => {
  return {
    ...m,
    actions: [
      ...m.actions,
      {
        label,
        text,
      },
    ],
  };
};

const specialAbilityEnhancer =
  (label: string, text: string) => (m: Monster) => {
    return {
      ...m,
      specialAbilities: [...m.specialAbilities, { label, text }],
    };
  };

const moveEnhancer = (move: string) => (m: Monster) => {
  return {
    ...m,
    move: [...m.move, move],
  };
};

const senseEnhancer = (sense: string) => (m: Monster) => {
  return {
    ...m,
    senses: [...m.senses, sense],
  };
};

const languageEnhancer = (language: string) => (m: Monster) => {
  return {
    ...m,
    languages: [...m.languages, language],
  };
};

const abilityEnhancer = (ability: Ability, value: number) => (m: Monster) => {
  return {
    ...m,
    abilities: {
      ...m.abilities,
      [ability]: m.abilities[ability] + value,
    },
  };
};

// monster enhancer
export const eh = (label: string) => (m: Monster) => {
  const ACTIONS = {
    ["ロングソード"]: `攻撃+${m.toHit}、間合い5フィート、目標1つ、ヒット:${m.damage}(${m.diceNum}d6+${m.damageMod})[斬撃]ダメージ`,
    ["噛みつき"]: `攻撃+${m.toHit}、間合い5フィート、目標1つ、ヒット:${m.damage}(${m.diceNum}d6+${m.damageMod})[刺突]ダメージ`,
    ["メイス"]: `攻撃+${m.toHit}、間合い5フィート、目標1つ、ヒット:${m.damage}(${m.diceNum}d6+${m.damageMod})[殴打]ダメージ`,
    ["ロングボウ"]: `攻撃+${m.toHit}、間合い60フィート、目標1つ、ヒット:${m.damage}(${m.diceNum}d6+${m.damageMod})[刺突]ダメージ`,
    ["ファイアボルト"]: `攻撃+${m.toHit}、間合い60フィート、目標1つ、ヒット:${m.damage}(${m.diceNum}d6+${m.damageMod})[炎]ダメージ`,
    ["マジックミサイル"]: `必中、間合い60フィート、目標3つ、ヒット:${Math.floor(m.damage / 6) + 1}[力場]ダメージ`,
  };

  for (const [label_, text] of Object.entries(ACTIONS)) {
    if (label === label_) {
      return actionEnhancer(label, text)(m);
    }
  }

  const SPECIAL_ABILITIES = {
    ["素早い離脱"]: "ボーナス・アクションで離脱・隠れ身ができる",
    ["猛進"]: "ボーナスアクションとして敵方向へ移動できる",
    ["連携戦闘"]: "敵の隣に味方がいるなら、攻撃ロールに有利を得る",
    ["大暴れ"]: "出目20で攻撃に成功したら追加攻撃",
    ["連携打撃"]: "敵の隣に味方がいるなら、追加攻撃",
    ["蛮力"]: "近接攻撃のダメージダイスが一つ増える",
    ["水棲"]: "水中移動と呼吸が可能。水中での攻撃に有利",
    ["人狼の不死身"]:
      "魔法でも銀でもない武器による[刺突][斬撃][殴打]からダメージを受けない",
    ["麻痺の爪"]: `攻撃がヒットした対象は難易度${m.save}の耐久力セーヴに失敗すると1分間麻痺状態になる。対象は自分のターンの終了時に再度セーヴを行い、成功すればこの効果は終了する`,
    ["誘い寄せの歌"]: `このモンスターの歌を聞いて、難易度${m.save}の[判断力]セーヴに失敗すると、このモンスターに対して移動する以外できない。対象は自身のターン終了時に再度セーヴを行い、成功すればこの効果は終了する`,
    ["不死特性"]:
      "毒ダメージを受けず、[消耗]状態、[毒]状態、[魅了]状態、[恐怖]状態にならない。",
    ["硬い骨"]: "ダメージ耐性:[刺突]、ダメージ脆弱性[殴打]",
    ["アンデッドのしぶとさ"]:
      "[光輝]ダメージ以外でヒットポイントが0になった場合、難易度（受けたダメージ+5）の耐久力セーヴに成功すれば1ヒット・ポイント残る。",
    ["慟哭の鳴き声"]: `30ft以内のアンデッドでないクリーチャーは難易度${m.save}の【耐久力】セーヴに失敗するとhpが1になる。成功すると${m.diceNum}d6+${m.damageMod}の[精神]ダメージを受ける。`,
    ["再生"]: `前のターンに[酸][火]のダメージを受けていなければ、自分のターン開始時に${Math.floor(m.hp / 5) + 1}ヒット・ポイント回復する`,
    ["石化の凝視"]:
      `30ft以内で自分の手番を開始したクリーチャーは難易度${m.save - 5}の【耐久力】セーヴに失敗すると石化状態になる。` +
      `難易度${m.save}で失敗すると拘束状態になる。再度失敗すると石化状態になる。` +
      `目を逸らすことを選べば石化を免れるが、メデューサへの攻撃・防御に不利を受ける`,
    ["キュア・ライト・ウーンズ"]: `(チャージ5-6)1回のアクションで${m.diceNum}d6のhpを回復する`,
    ["精密射撃"]:
      "ボーナスアクションで30ft以上遠い敵への遠隔武器攻撃に有利を得る。",
    ["かすめ飛び"]: "飛行によって敵の間合いから出る際に機会攻撃を誘発しない",
    ["飛びかかり"]: `20ft以上敵に向かって直線上に移動して攻撃をヒットさせたら、対象は難易度${m.save}の[筋力]セーヴに失敗すると伏せ状態になる。伏せ状態の敵に対して追加攻撃ができる`,
    ["尾の打撃"]: `攻撃がヒットした対象は難易度${m.save}の[筋力]セーヴに失敗すると伏せ状態になる。`,
  };

  for (const [label_, text] of Object.entries(SPECIAL_ABILITIES)) {
    if (label === label_) {
      return specialAbilityEnhancer(label, text)(m);
    }
  }
  if (label.endsWith("ft")) {
    return moveEnhancer(label)(m);
  }
  if (label.startsWith("暗視")) {
    return senseEnhancer(label)(m);
  }
  if (label.endsWith("語")) {
    return languageEnhancer(label)(m);
  }
  const abilityMap: Record<string, [Ability, number]> = {
    "筋力＋": [Ability.STR, 4],
    "筋力＋＋": [Ability.STR, 8],
    "筋力－": [Ability.STR, -4],
    "筋力－－": [Ability.STR, -8],
    "敏捷＋": [Ability.DEX, 4],
    "敏捷＋＋": [Ability.DEX, 8],
    "敏捷－": [Ability.DEX, -4],
    "敏捷－－": [Ability.DEX, -8],
    "耐久＋": [Ability.CON, 4],
    "耐久＋＋": [Ability.CON, 8],
    "耐久－": [Ability.CON, -4],
    "耐久－－": [Ability.CON, -8],
    "知力＋": [Ability.INT, 4],
    "知力＋＋": [Ability.INT, 8],
    "知力－": [Ability.INT, -4],
    "知力－－": [Ability.INT, -8],
    "判断＋": [Ability.WIS, 4],
    "判断＋＋": [Ability.WIS, 8],
    "判断－": [Ability.WIS, -4],
    "判断－－": [Ability.WIS, -8],
    "魅力＋": [Ability.CHA, 4],
    "魅力＋＋": [Ability.CHA, 8],
    "魅力－": [Ability.CHA, -4],
    "魅力－－": [Ability.CHA, -8],
  };

  if (label in abilityMap) {
    const [ability, value] = abilityMap[label];
    return abilityEnhancer(ability, value)(m);
  }
  throw new Error(`Unknown label: ${label}`);
};

export const seq =
  (...enhancers: MonsterEnhancer[]) =>
  (monster: Monster) =>
    enhancers.reduce((m, enhancer) => enhancer(m), monster);
