import { BoardHeight, BoardWidth } from "../settings.ts";
import { useState } from "react";
import { range } from "../tools/ArrayUtil.ts";

export const Page = {
  Setting: "Setting",
  Monster: "Monster",
  Room: "Room",
} as const;
export type Page = (typeof Page)[keyof typeof Page];

export const usePage = (
  reRollMonster: () => void,
  move: (id: string, x: number, y: number) => void,
) => {
  const [page, setPage] = useState<Page>(Page.Setting);

  const reRoll = () => {
    switch (page) {
      case Page.Setting:
        reRollMonster();
        setPage(Page.Monster);
        break;
      case Page.Monster:
        reRollMonster();
        break;
      case Page.Room:
        range(4).forEach((i) => {
          const id = `m${i}`;
          const x = Math.floor(Math.random() * BoardWidth);
          const y = Math.floor(Math.random() * BoardHeight);
          move(id, x, y);
        });
        break;
      default:
        break;
    }
  };
  return { page, setPage, reRoll };
};
