import { CR } from "../models/CR.ts";

type CrMonster = {
  baseBonus: number;
  ac: number;
  hpMin: number;
  hpMax: number;
  atBonus: number;
  damageMin: number;
  damageMax: number;
  save: number;
};

export const crMonsters: Record<CR, CrMonster> = {
  "1/8": {
    baseBonus: 2,
    ac: 13,
    hpMin: 7,
    hpMax: 35,
    atBonus: 3,
    damageMin: 2,
    damageMax: 3,
    save: 13,
  },
  "1/4": {
    baseBonus: 2,
    ac: 13,
    hpMin: 36,
    hpMax: 49,
    atBonus: 3,
    damageMin: 4,
    damageMax: 5,
    save: 13,
  },
  "1/2": {
    baseBonus: 2,
    ac: 13,
    hpMin: 50,
    hpMax: 70,
    atBonus: 3,
    damageMin: 6,
    damageMax: 8,
    save: 13,
  },
  "1": {
    baseBonus: 2,
    ac: 13,
    hpMin: 71,
    hpMax: 85,
    atBonus: 3,
    damageMin: 9,
    damageMax: 14,
    save: 13,
  },
  "2": {
    baseBonus: 2,
    ac: 13,
    hpMin: 86,
    hpMax: 100,
    atBonus: 3,
    damageMin: 15,
    damageMax: 20,
    save: 13,
  },
  "3": {
    baseBonus: 2,
    ac: 13,
    hpMin: 101,
    hpMax: 115,
    atBonus: 3,
    damageMin: 21,
    damageMax: 26,
    save: 13,
  },
  "4": {
    baseBonus: 2,
    ac: 14,
    hpMin: 116,
    hpMax: 130,
    atBonus: 4,
    damageMin: 27,
    damageMax: 32,
    save: 14,
  },
  "5": {
    baseBonus: 3,
    ac: 15,
    hpMin: 131,
    hpMax: 145,
    atBonus: 5,
    damageMin: 33,
    damageMax: 38,
    save: 15,
  },
  "6": {
    baseBonus: 3,
    ac: 15,
    hpMin: 146,
    hpMax: 160,
    atBonus: 5,
    damageMin: 39,
    damageMax: 44,
    save: 15,
  },
  "7": {
    baseBonus: 3,
    ac: 15,
    hpMin: 161,
    hpMax: 175,
    atBonus: 5,
    damageMin: 45,
    damageMax: 50,
    save: 15,
  },
  "8": {
    baseBonus: 3,
    ac: 16,
    hpMin: 176,
    hpMax: 190,
    atBonus: 5,
    damageMin: 51,
    damageMax: 56,
    save: 16,
  },
  "9": {
    baseBonus: 4,
    ac: 16,
    hpMin: 191,
    hpMax: 205,
    atBonus: 6,
    damageMin: 57,
    damageMax: 62,
    save: 16,
  },
  "10": {
    baseBonus: 4,
    ac: 17,
    hpMin: 206,
    hpMax: 220,
    atBonus: 6,
    damageMin: 63,
    damageMax: 68,
    save: 17,
  },
  "11": {
    baseBonus: 4,
    ac: 17,
    hpMin: 221,
    hpMax: 235,
    atBonus: 6,
    damageMin: 69,
    damageMax: 74,
    save: 17,
  },
  "12": {
    baseBonus: 4,
    ac: 17,
    hpMin: 236,
    hpMax: 250,
    atBonus: 6,
    damageMin: 75,
    damageMax: 80,
    save: 17,
  },
  "13": {
    baseBonus: 5,
    ac: 18,
    hpMin: 251,
    hpMax: 265,
    atBonus: 7,
    damageMin: 81,
    damageMax: 86,
    save: 18,
  },
  "14": {
    baseBonus: 5,
    ac: 18,
    hpMin: 266,
    hpMax: 280,
    atBonus: 7,
    damageMin: 87,
    damageMax: 92,
    save: 18,
  },
  "15": {
    baseBonus: 5,
    ac: 18,
    hpMin: 281,
    hpMax: 295,
    atBonus: 7,
    damageMin: 93,
    damageMax: 98,
    save: 18,
  },
  "16": {
    baseBonus: 5,
    ac: 18,
    hpMin: 296,
    hpMax: 310,
    atBonus: 7,
    damageMin: 99,
    damageMax: 104,
    save: 18,
  },
  "17": {
    baseBonus: 6,
    ac: 19,
    hpMin: 311,
    hpMax: 325,
    atBonus: 8,
    damageMin: 105,
    damageMax: 110,
    save: 19,
  },
  "18": {
    baseBonus: 6,
    ac: 19,
    hpMin: 326,
    hpMax: 340,
    atBonus: 8,
    damageMin: 111,
    damageMax: 116,
    save: 19,
  },
  "19": {
    baseBonus: 6,
    ac: 19,
    hpMin: 341,
    hpMax: 355,
    atBonus: 8,
    damageMin: 117,
    damageMax: 122,
    save: 19,
  },
  "20": {
    baseBonus: 6,
    ac: 19,
    hpMin: 356,
    hpMax: 400,
    atBonus: 8,
    damageMin: 123,
    damageMax: 140,
    save: 19,
  },
  "21": {
    baseBonus: 7,
    ac: 19,
    hpMin: 401,
    hpMax: 445,
    atBonus: 9,
    damageMin: 141,
    damageMax: 158,
    save: 19,
  },
  "22": {
    baseBonus: 7,
    ac: 19,
    hpMin: 446,
    hpMax: 490,
    atBonus: 9,
    damageMin: 159,
    damageMax: 176,
    save: 19,
  },
  "23": {
    baseBonus: 7,
    ac: 19,
    hpMin: 491,
    hpMax: 535,
    atBonus: 9,
    damageMin: 177,
    damageMax: 194,
    save: 19,
  },
  "24": {
    baseBonus: 7,
    ac: 19,
    hpMin: 536,
    hpMax: 580,
    atBonus: 9,
    damageMin: 195,
    damageMax: 212,
    save: 19,
  },
  "25": {
    baseBonus: 8,
    ac: 19,
    hpMin: 581,
    hpMax: 625,
    atBonus: 10,
    damageMin: 213,
    damageMax: 230,
    save: 19,
  },
  "26": {
    baseBonus: 8,
    ac: 19,
    hpMin: 626,
    hpMax: 670,
    atBonus: 10,
    damageMin: 231,
    damageMax: 248,
    save: 19,
  },
  "27": {
    baseBonus: 8,
    ac: 19,
    hpMin: 671,
    hpMax: 715,
    atBonus: 10,
    damageMin: 249,
    damageMax: 266,
    save: 19,
  },
  "28": {
    baseBonus: 8,
    ac: 19,
    hpMin: 716,
    hpMax: 760,
    atBonus: 10,
    damageMin: 267,
    damageMax: 284,
    save: 19,
  },
  "29": {
    baseBonus: 9,
    ac: 19,
    hpMin: 761,
    hpMax: 805,
    atBonus: 11,
    damageMin: 285,
    damageMax: 302,
    save: 19,
  },
  "30": {
    baseBonus: 9,
    ac: 19,
    hpMin: 806,
    hpMax: 850,
    atBonus: 11,
    damageMin: 303,
    damageMax: 320,
    save: 19,
  },
};
