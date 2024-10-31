import { Monster } from "../models/Monster.ts";
import { InitiativeListItem } from "./InitiativeListItem.tsx";
import { Character } from "../models/Character.ts";

type Props = {
  monster: Monster;
  characters: Character[];
};

export const Initiative = ({ monster, characters }: Props) => {
  const sorted: Array<Monster | Character> = [monster, ...characters].sort(
    (a, b) => b.initiative - a.initiative,
  );

  return (
    <div className="d-flex flex-column flex-grow-1">
      <h5 className="pb-2">イニシアティブ</h5>
      {sorted.map((item) => (
        <InitiativeListItem key={item.name} item={item} />
      ))}
    </div>
  );
};
