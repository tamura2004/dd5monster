export const Difficulty = {
    EASY: "簡単",
    NORMAL: "通常",
    HARD: "困難",
    HELL: "死地",
} as const;
export type Difficulty = (typeof Difficulty)[keyof typeof Difficulty];
