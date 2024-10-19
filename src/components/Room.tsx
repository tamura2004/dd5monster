import { Unit } from "../hooks/useUnits.ts";
import { Board } from "./Board.tsx";
import { styled } from "styled-components";
import { Initiative } from "./Initiative.tsx";
import { Monster } from "../models/Monster.ts";

type Props = {
  units: Unit[];
  move: (id: string, x: number, y: number) => void;
  monster: Monster;
  initiative: number[];
};

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
