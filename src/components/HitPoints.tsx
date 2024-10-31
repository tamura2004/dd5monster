import { Unit, UnitType } from "../models/Unit.ts";
import { HitPointListItem } from "./HitPointListItem.tsx";
import { Monster } from "../models/Monster.ts";
import { useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { arrayMove, SortableContext } from "@dnd-kit/sortable";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";

type Props = {
  units: Unit[];
  setHitPoint: (id: string, hp: number) => void;
  monster: Monster;
};

export const HitPoints = ({ units, setHitPoint, monster }: Props) => {
  const [monsterUnits, setMonsterUnits] = useState<Unit[]>(units);

  return (
    <div>
      <h5>ヒットポイント管理</h5>
      <DndContext
        collisionDetection={closestCenter}
        modifiers={[restrictToVerticalAxis]}
        onDragEnd={({ active, over }) => {
          if (over == null || active.id === over.id) return;
          const oldIndex = monsterUnits.findIndex(
            (unit) => unit.id === active.id,
          );
          const newIndex = monsterUnits.findIndex(
            (unit) => unit.id === over.id,
          );
          setMonsterUnits(arrayMove(monsterUnits, oldIndex, newIndex));
        }}
      >
        <SortableContext items={monsterUnits}>
          {monsterUnits
            .filter((unit) => unit.type === UnitType.Monster)
            .map((unit) => (
              <HitPointListItem
                key={unit.id}
                unit={unit}
                setHitPoint={setHitPoint}
                monster={monster}
              />
            ))}
        </SortableContext>
      </DndContext>
    </div>
  );
};
