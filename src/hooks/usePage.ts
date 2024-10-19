import { BoardHeight, BoardWidth } from "../settings.ts";
import {useMemo, useState} from "react";
import { range } from "../tools/ArrayUtil.ts";
import {Monster} from "../models/Monster.ts";

export const Page = {
  Setting: "Setting",
  Monster: "Monster",
  Room: "Room",
} as const;
export type Page = (typeof Page)[keyof typeof Page];

export const usePage = (
  reRollMonster: () => void,
  move: (id: string, x: number, y: number) => void,
  monster: Monster,
  deleteUnit: (id: string) => void,
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
        range(monster.num).forEach((i) => {
          const id = `m${i}`;
          const x = Math.floor(Math.random() * BoardWidth);
          const y = Math.floor(Math.random() * BoardHeight);
          move(id, x, y);
        });
        range(20 - monster.num).forEach((i) => {
          const id = `m${i + monster.num}`;
          deleteUnit(id);
        });
        break;
      default:
        break;
    }
  };

  const reRollLabel = useMemo(() => {
    switch (page) {
      case Page.Setting:
        return "モンスターを作成";
      case Page.Monster:
        return "モンスターを再作成";
      case Page.Room:
        return "ユニットを配置";
      default:
        return "";
    }
  }, [page]);

  return { page, setPage, reRoll, reRollLabel };
};
