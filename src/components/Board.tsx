import { DndContext } from "@dnd-kit/core";
import { Cell } from "./Cell.tsx";
import { BoardData, BoardHeight, BoardWidth, CellSize } from "../settings.ts";
import { styled } from "styled-components";
import { range } from "../tools/ArrayUtil.ts";
import { Unit } from "../models/Unit.ts";
import { Piece } from "./Piece.tsx";
import { CellStyle } from "../styles/CellStyle.tsx";

type Props = {
  move: (id: string, x: number, y: number) => void;
  units: Unit[];
};

export const Board = ({ move, units }: Props) => {
  return (
    <BoardStyle>
      <DndContext
        onDragEnd={({ over, active }) => {
          if (over && over.data.current && active) {
            const { x, y } = over.data.current;
            const id = active.id.toString();
            move(id, x, y);
          }
        }}
      >
        {range(BoardHeight).map((y) =>
          range(BoardWidth).map((x) =>
            BoardData[y][x] === "." ? (
              <Cell key={`${x}-${y}`} id={`${x}-${y}`} x={x} y={y} />
            ) : (
              <CellStyle
                key={`${x}-${y}`}
                x={x}
                y={y}
                $backgroundColor="black"
              />
            ),
          ),
        )}
        {units.map((unit) => (
          <Piece key={unit.id} {...unit} />
        ))}
      </DndContext>
    </BoardStyle>
  );
};

const BoardStyle = styled.div`
  position: relative;
  width: ${BoardWidth * CellSize}px;
  height: ${BoardHeight * CellSize}px;
`;
