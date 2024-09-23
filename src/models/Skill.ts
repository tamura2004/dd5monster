export const Skill = {
  ACROBATICS: "運動",
  ANIMAL_HANDLING: "動物使い",
  ARCANA: "魔法学",
  ATHLETICS: "運動",
  DECEPTION: "ペテン",
  HISTORY: "歴史",
  INSIGHT: "看破",
  INTIMIDATION: "脅迫",
  INVESTIGATION: "捜査",
  MEDICINE: "医術",
  NATURE: "自然",
  PERCEPTION: "知覚",
  PERFORMANCE: "演技",
  PERSUASION: "説得",
  RELIGION: "宗教",
  SLEIGHT_OF_HAND: "手先の早業",
  STEALTH: "隠密",
  SURVIVAL: "生存",
} as const;

export type Skill = (typeof Skill)[keyof typeof Skill];
