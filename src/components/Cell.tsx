import { useDroppable } from "@dnd-kit/core";
import {CellStyle} from "./CellStyle.tsx";

type Props = {
  x: number;
  y: number;
  id: string;
};

export const Cell = ({ x, y, id }: Props) => {
  const { setNodeRef, isOver } = useDroppable({ id, data: { x, y } });
  const backgroundColor = isOver ? "lightgreen" : "white";
  return (
    <CellStyle
      ref={setNodeRef}
      x={x}
      y={y}
      $backgroundColor={backgroundColor}
    />
  );
};
