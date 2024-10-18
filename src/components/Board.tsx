import { DndContext } from "@dnd-kit/core";
import { Cell } from "./Cell.tsx";
import { Piece } from "./Piece.tsx";
import { BoardHeight, BoardWidth, CellSize } from "../settings.ts";
import { styled } from "styled-components";
import { useUnits } from "../hooks/useUnits.ts";

const range = (n: number) => [...Array(n).keys()];

export const Board = () => {
  const { units, move } = useUnits();
  return (
    <>
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
            range(BoardWidth).map((x) => (
              <Cell key={`${x}-${y}`} id={`${x}-${y}`} x={x} y={y} />
            )),
          )}
          {units.map((unit) => (
            <Piece key={unit.id} {...unit} />
          ))}
        </DndContext>
      </BoardStyle>
      <button
        className="btn btn-secondary"
        onClick={() => {
          range(4).forEach((i) => {
            const id = `m${i}`;
            const x = Math.floor(Math.random() * BoardWidth);
            const y = Math.floor(Math.random() * BoardHeight);
            move(id, x, y);
          });
        }}
      >
        モンスター配置
      </button>
    </>
  );
};

const BoardStyle = styled.div`
  position: relative;
  width: ${BoardWidth * CellSize}px;
  height: ${BoardHeight * CellSize}px;
  margin: 0 auto;
`;
