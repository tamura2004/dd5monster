import { Monster } from "../models/Monster.ts";
import { Skill } from "../models/Skill.ts";
import { MonsterType } from "../models/MonsterType.ts";
import { MonsterSize } from "../models/MonsterSize.ts";

export const Rarity = {
  COMMON: "common",
  UNCOMMON: "uncommon",
  RARE: "rare",
  MYTHIC: "mythic",
} as const;

export type Rarity = (typeof Rarity)[keyof typeof Rarity];

export const TemplateType = {
  TERRAIN: "terrain",
  RACE: "race",
  CLASS: "class",
} as const;

export type TemplateType = (typeof TemplateType)[keyof typeof TemplateType];

export type MonsterTemplate = {
  name: string;
  type: TemplateType;
  rarity: Rarity;
  enhancer: MonsterEnhancer;
};

export type MonsterEnhancer = (monster: Monster) => Monster;

export const MonsterTemplates: MonsterTemplate[] = [
  {
    name: "ゴブリン",
    type: TemplateType.RACE,
    rarity: Rarity.COMMON,
    enhancer: (monster) => {
      const { skills, senses, languages, specialAbilities } = monster;
      return {
        ...monster,
        size: MonsterSize.SMALL,
        monsterType: MonsterType.HUMANOID,
        move: ["30ft"],
        skills: { ...skills, [Skill.STEALTH]: 6 },
        senses: [...senses, "暗視60フィート", "受動〈知覚〉9"],
        languages: [...languages, "ゴブリン語"],
        specialAbilities: [
          ...specialAbilities,
          {
            label: "素早い脱出",
            text: "自分のターンごとにボーナス・アクションとして離脱アクションまたは隠れ身アクションを行なえる。",
          },
        ],
      };
    },
  },
  {
    name: "トロール",
    type: TemplateType.RACE,
    rarity: Rarity.UNCOMMON,
    enhancer: (monster) => {
      const { skills, senses, languages, specialAbilities, save } = monster;
      return {
        ...monster,
        size: MonsterSize.LARGE,
        monsterType: MonsterType.GIANT,
        move: ["30ft"],
        skills: { ...skills, [Skill.STEALTH]: 6 },
        senses: [...senses, "暗視60フィート", `受動〈知覚〉${save}`],
        languages: [...languages, "巨人語"],
        specialAbilities: [
          ...specialAbilities,
          {
            label: "再生",
            text: "[酸][火]以外のダメージを自分のターン開始時に10hp回復する。",
          },
        ],
      };
    },
  },
  {
    name: "ハーピー",
    type: TemplateType.RACE,
    rarity: Rarity.UNCOMMON,
    enhancer: (monster) => {
      const { senses, languages, specialAbilities, save } = monster;
      return {
        ...monster,
        size: MonsterSize.MEDIUM,
        monsterType: MonsterType.MONSTROSITY,
        move: ["20ft", "飛行40ft"],
        senses: [...senses, "暗視60フィート", "受動〈知覚〉10"],
        languages: [...languages, "共通語"],
        specialAbilities: [
          ...specialAbilities,
          {
            label: "誘い寄せの歌",
            text: `300ft以内で難易度${save + 2}の[判断力]セーヴに失敗すると魅了状態になり、最短距離での移動アクション以外行えない`,
          },
        ],
      };
    },
  },
  {
    name: "ゾンビ",
    type: TemplateType.RACE,
    rarity: Rarity.COMMON,
    enhancer: (monster) => {
      const { senses, specialAbilities } = monster;
      return {
        ...monster,
        size: MonsterSize.MEDIUM,
        monsterType: MonsterType.UNDEAD,
        move: ["10ft"],
        senses: [...senses, "暗視60フィート", "受動〈知覚〉9"],
        specialAbilities: [
          ...specialAbilities,
          {
            label: "不死",
            text: "[光輝]ダメージ以外でヒットポイントが0になった場合、難易度（受けたダメージ+5）の耐久力セーヴに成功すれば1ヒット・ポイント残る。",
          },
          {
            label: "不死特性",
            text: "毒ダメージを受けず、[消耗]状態、[毒]状態、[魅了]状態、[恐怖]状態にならない。",
          },
        ],
      };
    },
  },
  {
    name: "メデューサ",
    type: TemplateType.RACE,
    rarity: Rarity.UNCOMMON,
    enhancer: (monster) => {
      const { senses, skills, specialAbilities, languages, save } = monster;
      return {
        ...monster,
        size: MonsterSize.MEDIUM,
        monsterType: MonsterType.UNDEAD,
        move: ["30ft"],
        skills: {
          ...skills,
          [Skill.STEALTH]: 5,
          [Skill.DECEPTION]: 5,
          [Skill.PERCEPTION]: 10,
        },
        senses: [...senses, "暗視60フィート", `受動〈知覚〉${save}`],
        languages: [...languages, "共通語"],
        specialAbilities: [
          ...specialAbilities,
          {
            label: "石化の凝視",
            text: `30ft以内で自分の手番を開始したクリーチャーは難易度${save+5}の【耐久力】セーヴに失敗すると石化状態になる。`
            +`難易度${save}で失敗すると拘束状態になる。再度失敗すると石化状態になる。`
            +`目を逸らすことを選べば石化を免れるが、メデューサへの攻撃・防御に不利を受ける`,
          },
        ],
      };
    },
  },
  {
    name: "ソルジャー",
    type: TemplateType.CLASS,
    rarity: Rarity.COMMON,
    enhancer: (monster) => {
      const { actions, toHit, damage, diceNum, damageMod, specialAbilities } =
        monster;
      return {
        ...monster,
        actions: [
          ...actions,
          {
            label: "シミター",
            text: `近接武器攻撃:攻撃+${toHit + 2}、間合い5フィート、目標1つ、ヒット:${damage}(${diceNum}d6+${damageMod})[斬撃]ダメージ`,
          },
        ],
        specialAbilities: [
          ...specialAbilities,
          {
            label: "連携先頭",
            text: "敵に隣接して味方がいるなら攻撃ロールに有利を得る。",
          },
        ],
      };
    },
  },
  {
    name: "プリースト",
    type: TemplateType.CLASS,
    rarity: Rarity.COMMON,
    enhancer: (monster) => {
      const { actions, toHit, damage, diceNum, damageMod, specialAbilities } =
        monster;
      return {
        ...monster,
        actions: [
          ...actions,
          {
            label: "メイス",
            text: `近接武器攻撃:攻撃+${toHit + 2}、間合い5フィート、目標1つ、ヒット:${damage}(${diceNum}d6+${damageMod})[殴打]ダメージ`,
          },
        ],
        specialAbilities: [
          ...specialAbilities,
          {
            label: "呪文能力",
            text: "キュア・ライト・ウーンズ（無制限）、インフリクト・ライト・ウーンズ（無制限）",
          },
        ],
      };
    },
  },
  {
    name: "アーチャー",
    type: TemplateType.CLASS,
    rarity: Rarity.COMMON,
    enhancer: (monster) => {
      const { actions, toHit, damage, diceNum, damageMod, specialAbilities } =
        monster;
      return {
        ...monster,
        actions: [
          ...actions,
          {
            label: "ロングボウ",
            text: `遠隔武器攻撃:攻撃+${toHit + 2}、間合い300フィート、目標1つ、ヒット:${damage}(${diceNum}d6+${damageMod})[刺突]ダメージ`,
          },
        ],
        specialAbilities: [
          ...specialAbilities,
          {
            label: "精密射撃",
            text: "ボーナスアクションで30ft以上遠い敵への遠隔武器攻撃に有利を得る。",
          },
        ],
      };
    },
  },
  {
    name: "メイジ",
    type: TemplateType.CLASS,
    rarity: Rarity.COMMON,
    enhancer: (monster) => {
      const { actions, toHit, specialAbilities } = monster;
      return {
        ...monster,
        actions: [
          ...actions,
          {
            label: "ファイアーボルト",
            text: `近接呪文攻撃:攻撃+${toHit + 4}、間合い5フィート、目標1つ、ヒット:(1d10)[火]ダメージ`,
          },
        ],
        specialAbilities: [
          ...specialAbilities,
          {
            label: "呪文発動能力",
            text: "マジックミサイル（無制限）",
          },
        ],
      };
    },
  },
];
