import { Board } from "./Board.tsx";
import { styled } from "styled-components";
import { Initiative } from "./Initiative.tsx";
import { Monster } from "../models/Monster.ts";
import { Unit } from "../models/Unit.ts";

type Props = {
  units: Unit[];
  move: (id: string, x: number, y: number) => void;
  monster: Monster;
  initiative: number[];
};

export const Characters = [
  { id: "岩熊", name: "ロックベアー", x: 3, y: 3, initiative: 8, type: "pc" },
  { id: "灰鼠", name: "グレイラット", x: 2, y: 1, initiative: 18, type: "pc" },
];

export const Room = (props: Props) => {
  return (
    <RoomStyle>
      <Board {...props} />
      <Initiative {...props} />
    </RoomStyle>
  );
};

const RoomStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
