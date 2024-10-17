import { DndContext } from "@dnd-kit/core";
import { useState } from "react";
import { Cell } from "./Cell.tsx";
import { Piece } from "./Piece.tsx";
import { BoardHeight, BoardWidth, CellSize } from "../settings.ts";
import { styled } from "styled-components";

const range = (n: number) => [...Array(n).keys()];

export const Board = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  return (
    <BoardStyle>
      <DndContext
        onDragEnd={({ over }) => {
          if (over) {
            const { id } = over;
            const [_x, _y] = String(id)
              .split("-")
              .map((n) => Number(n));
            setX(_x);
            setY(_y);
          }
        }}
      >
        {range(BoardHeight).map((y) =>
          range(BoardWidth).map((x) => (
            <Cell key={`${x}-${y}`} id={`${x}-${y}`} x={x} y={y} />
          )),
        )}
        <Piece x={x} y={y} id="piece" />
      </DndContext>
    </BoardStyle>
  );
};

const BoardStyle = styled.div`
  position: relative;
  width: ${BoardWidth * CellSize}px;
  height: ${BoardHeight * CellSize}px;
  margin: 0 auto;
`;
