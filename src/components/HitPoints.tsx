import { Unit, UnitType } from "../models/Unit.ts";
import { HitPointListItem } from "./HitPointListItem.tsx";
import { Monster } from "../models/Monster.ts";

type Props = {
  units: Unit[];
  setHitPoint: (id: string, hp: number) => void;
  monster: Monster;
};

export const HitPoints = ({ units, setHitPoint, monster }: Props) => {
  return (
    <div>
      <h5>ヒットポイント管理</h5>
      {units
        .filter((unit) => unit.type === UnitType.Monster)
        .map((unit) => (
          <HitPointListItem
            key={unit.name}
            unit={unit}
            setHitPoint={setHitPoint}
            monster={monster}
          />
        ))}
    </div>
  );
};
