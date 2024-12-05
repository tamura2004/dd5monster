import { useDroppable } from "@dnd-kit/core";
import { CellStyle } from "../styles/CellStyle.tsx";

type Props = {
  x: number;
  y: number;
  id: string;
  backgroundColor: string;
};

export const Cell = ({ x, y, id, backgroundColor }: Props) => {
  const { setNodeRef, isOver } = useDroppable({ id, data: { x, y } });
  return (
    <CellStyle
      ref={setNodeRef}
      x={x}
      y={y}
      $backgroundColor={isOver ? "lightgreen" : backgroundColor}
    />
  );
};
