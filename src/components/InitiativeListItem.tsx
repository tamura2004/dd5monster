import { Unit, UnitType } from "../models/Unit.ts";
import { PieceStyle } from "../styles/PieceStyle.ts";

type Props = {
  unit: Unit;
};

export const InitiativeListItem = ({ unit }: Props) => {
  return (
    <div
      className="d-flex flex-row mb-2 p-2 border rounded align-items-center"
      key={unit.id}
    >
      <PieceStyle {...unit} $isMonster={unit.type === UnitType.Monster}>
        {unit.id}
      </PieceStyle>
      <div className="flex-grow-1 p-2">{unit.name}</div>
      <div className="fs-5">{unit.initiative}</div>
    </div>
  );
};
