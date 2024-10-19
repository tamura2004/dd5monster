import { Unit } from "../hooks/useUnits.ts";
import { Monster } from "../models/Monster.ts";
import { styled } from "styled-components";
import {
  PieceBorderSize,
  PieceSize,
} from "../settings.ts";

type Props = {
  units: Unit[];
  monster: Monster;
  initiative: number[];
};

export const Initiative = ({ units, monster, initiative }: Props) => {
  const sortedUnits = units.map((unit, i) => ({ ...unit, initiative: initiative[i] })).sort((a, b) => b.initiative - a.initiative);

  return (
    <div className="d-flex flex-column flex-grow-1">
      <h5 className="pb-2">イニシアティブ</h5>
      {sortedUnits.map((unit) => (
        <div
          className="d-flex flex-row mb-2 p-2 border rounded align-items-center"
          key={unit.id}
        >
          <PieceStyle>{unit.id}</PieceStyle>
          <div className="flex-grow-1 p-2">{monster.name}</div>
          <div className="fs-4">{unit.initiative}</div>
        </div>
      ))}
    </div>
  );
};

const PieceStyle = styled.div`
  color: white;
  width: ${PieceSize}px;
  height: ${PieceSize}px;
  background: crimson;
  border: ${PieceBorderSize}px solid darkred;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
