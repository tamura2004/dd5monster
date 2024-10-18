import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { styled } from "styled-components";
import {
  CellBorderSize,
  CellSize,
  PieceBorderSize,
  PieceSize,
} from "../settings.ts";

type Props = {
  x: number;
  y: number;
  id: string;
};

export const Piece = ({ x, y, id }: Props) => {
  const { setNodeRef, listeners, attributes, transform } = useDraggable({ id });
  const style = {
    transform: CSS.Transform.toString(transform),
  };
  return (
    <PieceStyle
      ref={setNodeRef}
      style={style}
      $x={x}
      $y={y}
      {...attributes}
      {...listeners}
    >
      {id}
    </PieceStyle>
  );
};

const PieceStyle = styled.div<{ $x: number; $y: number }>`
  position: absolute;
  left: ${(props) =>
    props.$x * (CellSize - CellBorderSize) +
    (CellSize - CellBorderSize - PieceSize) / 2}px;
  top: ${(props) =>
    props.$y * (CellSize - CellBorderSize) +
    (CellSize - CellBorderSize - PieceSize) / 2}px;
  cursor: grab;
  text-align: center;
  color: white;
  line-height: ${PieceSize}px;
  width: ${PieceSize}px;
  height: ${PieceSize}px;
  background: dodgerblue;
  border: ${PieceBorderSize}px solid darkblue;
  border-radius: 50%;
`;