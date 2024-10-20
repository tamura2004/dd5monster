import { Unit, UnitType } from "../models/Unit.ts";
import { MovablePieceStyle } from "../styles/PieceStyle.ts";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { CellBorderSize, CellSize, PieceSize } from "../settings.ts";

export const Piece = (unit: Unit) => {
  const { id, x, y, type } = unit;
  const { setNodeRef, listeners, attributes, transform } = useDraggable({ id });
  const style = {
    transform: CSS.Transform.toString(transform),
  };
  const left =
    x * (CellSize - CellBorderSize) +
    (CellSize - CellBorderSize - PieceSize) / 2;
  const top =
    y * (CellSize - CellBorderSize) +
    (CellSize - CellBorderSize - PieceSize) / 2;

  return (
    <MovablePieceStyle
      $left={left}
      $top={top}
      $isMonster={type === UnitType.Monster}
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      {id}
    </MovablePieceStyle>
  );
};
