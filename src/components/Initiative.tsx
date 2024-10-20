import { Monster } from "../models/Monster.ts";
import { Unit } from "../models/Unit.ts";
import { InitiativeListItem } from "./InitiativeListItem.tsx";

type Props = {
  units: Unit[];
  monster: Monster;
};

export const Initiative = ({ units }: Props) => {
  const sortedUnits = units.sort((a, b) => b.initiative - a.initiative);

  return (
    <div className="d-flex flex-column flex-grow-1">
      <h5 className="pb-2">イニシアティブ</h5>
      {sortedUnits.map((unit) => (
        <InitiativeListItem key={unit.id} unit={unit} />
      ))}
    </div>
  );
};
