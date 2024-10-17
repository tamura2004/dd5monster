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
  TYPE: "type",
  TERRAIN: "terrain",
  RACE: "race",
  CLASS: "class",
} as const;

export type TemplateType = (typeof TemplateType)[keyof typeof TemplateType];

export type MonsterTemplate = {
  name: string;
  templateType: TemplateType;
  monsterType?: MonsterType
  rarity: Rarity;
  enhancer: MonsterEnhancer;
};
// export const MonsterType = {
//   ABERRATION: "異形",
//   BEAST: "野獣",
//   CELESTIAL: "天使",
//   CONSTRUCT: "人造",
//   DRAGON: "ドラゴン",
//   ELEMENTAL: "エレメンタル",
//   FEY: "妖精",
//   FIEND: "悪魔",
//   GIANT: "巨人",
//   HUMANOID: "人型",
//   MONSTROSITY: "怪物",
//   OOZE: "粘体",
//   PLANT: "植物",
//   UNDEAD: "アンデッド",
// } as const;
export type MonsterEnhancer = (monster: Monster) => Monster;

export const enhanceSpecialAbilities = (label: string, text: string) => (monster: Monster) => {
  return {
    ...monster,
    specialAbilities: [
      ...monster.specialAbilities,
      { label, text },
    ],
  };
}

export const MonsterTemplates: MonsterTemplate[] = [
  {
    name: "アンデッド",
    templateType: TemplateType.TYPE,
    monsterType: MonsterType.UNDEAD,
    rarity: Rarity.COMMON,
    enhancer: (monster) => {
      const { senses, specialAbilities } = monster;
      return {
        ...monster,
        size: MonsterSize.MEDIUM,
        monsterType: MonsterType.UNDEAD,
        move: ["30ft"],
        senses: [...senses, "暗視60フィート", "受動〈知覚〉9"],
        specialAbilities: [
          ...specialAbilities,
          {
            label: "不死特性",
            text: "毒ダメージを受けず、[消耗]状態、[毒]状態、[魅了]状態、[恐怖]状態にならない。",
          },
        ],
      };
    },
  },
  {
    name: "人型",
    templateType: TemplateType.TYPE,
    monsterType: MonsterType.HUMANOID,
    rarity: Rarity.COMMON,
    enhancer: (monster) => {
      const { skills, senses, languages } = monster;
      return {
        ...monster,
        size: MonsterSize.MEDIUM,
        monsterType: MonsterType.HUMANOID,
        move: ["30ft"],
        skills: { ...skills, [Skill.PERCEPTION]: monster.baseBonus },
        senses: [...senses, `受動〈知覚〉${10 + monster.baseBonus}`],
        languages: [...languages, "共通語"],
      };
    },
  },
  {
    name: "グール",
    rarity: Rarity.COMMON,
    templateType: TemplateType.RACE,
    monsterType: MonsterType.UNDEAD,
    enhancer: enhanceSpecialAbilities("麻痺の爪","攻撃がヒットしたならば難易度${monster.save}の耐久力セーヴに失敗すると1分間麻痺状態になる。対象は自分のターンの終了時に再度セーヴを行い、成功すればこの効果は終了する"),
  },
  {
    name: "スケルトン",
    rarity: Rarity.COMMON,
    templateType: TemplateType.RACE,
    monsterType: MonsterType.UNDEAD,
    enhancer: enhanceSpecialAbilities("ダメージ脆弱性", "[殴打]"),
  },
  {
    name: "ゾンビ",
    rarity: Rarity.COMMON,
    templateType: TemplateType.RACE,
    monsterType: MonsterType.UNDEAD,
    enhancer: enhanceSpecialAbilities("不死", "[光輝]ダメージ以外でヒットポイントが0になった場合、難易度（受けたダメージ+5）の耐久力セーヴに成功すれば1ヒット・ポイント残る。"),
  },
  {
    name: "バンシー",
    rarity: Rarity.RARE,
    templateType: TemplateType.RACE,
    monsterType: MonsterType.UNDEAD,
    enhancer: (monster) => {
      return {
        ...monster,
        move: [...monster.move, "飛行40ft"],
        specialAbilities: [
          ...monster.specialAbilities,
          {
            label: "慟哭(1回/日)",
            text: `30ft以内のアンデッドでないクリーチャーは難易度${monster.save}の【耐久力】セーヴに失敗するとhpが0になる。成功すると${monster.diceNum}d6+${monster.damageMod}の[精神]ダメージを受ける。`,
          }
        ],
      }
    }
  },
  {
    name: "ゴブリン",
    rarity: Rarity.COMMON,
    templateType: TemplateType.RACE,
    monsterType: MonsterType.HUMANOID,
    enhancer: enhanceSpecialAbilities("素早い脱出", "自分のターンごとにボーナス・アクションとして離脱アクションまたは隠れ身アクションを行なえる"),
  },
  {
    name: "オーク",
    rarity: Rarity.COMMON,
    templateType: TemplateType.RACE,
    monsterType: MonsterType.HUMANOID,
    enhancer: enhanceSpecialAbilities("猛進", "ボーナスアクションとして敵対的なクリーチャーに近づくように移動ができる"),
  },
  {
    name: "コボルド",
    rarity: Rarity.COMMON,
    templateType: TemplateType.RACE,
    monsterType: MonsterType.HUMANOID,
    enhancer: enhanceSpecialAbilities("連携戦闘", "敵の隣に味方がいるなら、攻撃ロールに有利を得る"),
  },
  {
    name: "ノール",
    rarity: Rarity.UNCOMMON,
    templateType: TemplateType.RACE,
    monsterType: MonsterType.HUMANOID,
    enhancer: enhanceSpecialAbilities("大暴れ", "近接攻撃で敵のhpを0にしたならば、ボーナスアクションとして追加攻撃ができる"),
  },
  {
    name: "ホブゴブリン",
    rarity: Rarity.UNCOMMON,
    templateType: TemplateType.RACE,
    monsterType: MonsterType.HUMANOID,
    enhancer: enhanceSpecialAbilities("連携打撃", "敵の隣に味方がいるなら、武器攻撃は追加で2d6ダメージを与える"),
  },
  {
    name: "バグベア",
    rarity: Rarity.UNCOMMON,
    templateType: TemplateType.RACE,
    monsterType: MonsterType.HUMANOID,
    enhancer: enhanceSpecialAbilities("蛮力", "近接攻撃のダメージダイスが一つ増える"),
  },
  {
    name: "マーフォーク",
    rarity: Rarity.UNCOMMON,
    templateType: TemplateType.RACE,
    monsterType: MonsterType.HUMANOID,
    enhancer: (monster) => {
      return {
        ...monster,
        move: [...monster.move, "水泳40ft"],
        specialAbilities: [...monster.specialAbilities, {
          label: "水陸両性",
          text: "空気を呼吸することも水を呼吸することもできる",
        }],
      }
    }
  },
  {
    name: "リザードフォーク",
    rarity: Rarity.UNCOMMON,
    templateType: TemplateType.RACE,
    monsterType: MonsterType.HUMANOID,
    enhancer: (monster) => {
      return {
        ...monster,
        ac: monster.ac + 2, // 外皮+2
        move: [...monster.move, "水泳30ft"],
        specialAbilities: [...monster.specialAbilities, {
          label: "息こらえ",
          text: "最大１０分まで息を止めることができる",
        }],
      }
    }
  },
  {
    name: "ワーウルフ",
    rarity: Rarity.RARE,
    templateType: TemplateType.RACE,
    monsterType: MonsterType.HUMANOID,
    enhancer: (monster) => {
      return {
        ...monster,
        move: ["40ft"],
        specialAbilities: [...monster.specialAbilities, {
          label: "ダメージ完全耐性",
          text: "魔法でも銀でもない武器による[刺突][斬撃][殴打]からダメージを受けない",
        }],
      }
    }
  },
  {
    name: "トロール",
    templateType: TemplateType.RACE,
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
    templateType: TemplateType.RACE,
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
    templateType: TemplateType.RACE,
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
    templateType: TemplateType.RACE,
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
    templateType: TemplateType.CLASS,
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
            label: "連携戦闘",
            text: "敵に隣接して味方がいるなら攻撃ロールに有利を得る。",
          },
        ],
      };
    },
  },
  {
    name: "プリースト",
    templateType: TemplateType.CLASS,
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
    templateType: TemplateType.CLASS,
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
    templateType: TemplateType.CLASS,
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
