import { DndContext } from "@dnd-kit/core";
import { Cell } from "./Cell.tsx";
import { BoardHeight, BoardWidth, CellSize } from "../settings.ts";
import { styled } from "styled-components";
import { range } from "../tools/ArrayUtil.ts";
import { Unit, UnitType } from "../models/Unit.ts";
import { Piece } from "./Piece.tsx";
import { CellStyle } from "../styles/CellStyle.tsx";

type Props = {
  move: (id: string, x: number, y: number) => void;
  units: Unit[];
  board: string[];
};

export const Board = ({ move, units, board }: Props) => {
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
            board[y][x] === "." ? (
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
        {units
          .filter((unit) => unit.hp > 0 || unit.type === UnitType.Character)
          .map((unit) => (
            <Piece key={unit.id} {...unit} />
          ))}
      </DndContext>
    </BoardStyle>
  );
};

export const BoardStyle = styled.div`
  position: relative;
  width: ${BoardWidth * CellSize}px;
  height: ${BoardHeight * CellSize}px;
`;
