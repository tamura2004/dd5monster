import { range } from "../tools/ArrayUtil.ts";
import { BoardHeight, BoardWidth } from "../settings.ts";
import { CellStyle } from "../styles/CellStyle.tsx";
import { BoardStyle } from "./Board.tsx";

type Props = {
  board: string[];
  flipCell: (x: number, y: number) => void;
};

export const EditRoom = ({ board, flipCell }: Props) => {
  return (
    <BoardStyle>
      {range(BoardHeight).map((y) =>
        range(BoardWidth).map((x) => (
          <CellStyle
            key={`${x}-${y}`}
            x={x}
            y={y}
            $backgroundColor={board[y][x] === "#" ? "black" : "white"}
            onClick={() => flipCell(x, y)}
          />
        )),
      )}
    </BoardStyle>
  );
};
