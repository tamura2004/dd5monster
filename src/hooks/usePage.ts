import { useMemo, useState } from "react";

export const Page = {
  Setting: "Setting",
  Monster: "Monster",
  Room: "Room",
  HitPoint: "HitPoint",
} as const;
export type Page = (typeof Page)[keyof typeof Page];

export const usePage = (reRollByPage: Record<Page, () => void>) => {
  const [page, setPage] = useState<Page>(Page.Setting);

  const reRollLabel = useMemo(() => {
    switch (page) {
      case Page.Setting:
        return "モンスターを作成";
      case Page.Monster:
        return "モンスターを再作成";
      case Page.Room:
        return "ユニットを配置";
      case Page.HitPoint:
        return "ヒットポイントを初期化";
      default:
        return "";
    }
  }, [page]);

  const reRoll = () => {
    reRollByPage[page]();
  };

  return { page, setPage, reRoll, reRollLabel };
};
