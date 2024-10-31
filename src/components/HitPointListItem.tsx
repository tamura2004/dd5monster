import { Unit, UnitType } from "../models/Unit.ts";
import { PieceStyle } from "../styles/PieceStyle.ts";
import { Monster } from "../models/Monster.ts";
import { range } from "../tools/ArrayUtil.ts";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

type Props = {
  unit: Unit;
  setHitPoint: (id: string, hp: number) => void;
  monster: Monster;
};

export const HitPointListItem = ({ unit, setHitPoint, monster }: Props) => {
  const {
    isDragging,
    setActivatorNodeRef,
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: unit.id });

  return (
    <div
      ref={setNodeRef}
      style={{
        transform: CSS.Transform.toString(transform),
        transition,
      }}
      className="d-flex flex-row mb-2 p-2 border rounded align-items-center"
      key={unit.name}
    >
      <i
        ref={setActivatorNodeRef}
        className="bi bi-grip-vertical fs-5 px-2"
        style={{
          cursor: isDragging ? "grabbing" : "grab",
        }}
        {...attributes}
        {...listeners}
      />
      <PieceStyle {...unit} $isMonster={unit.type === UnitType.Monster}>
        {unit.id}
      </PieceStyle>
      <div className="flex-grow-1 p-2">
        <div className="fs-6">
          <span>{monster.name}</span>
          {unit.hp <= 0 && <span className="text-danger">[撃破]</span>}
        </div>
      </div>
      <div className="fs-5 px-2">hp</div>
      <select
        value={unit.hp}
        className="form-select form-select-lg w-25"
        onChange={(e) => setHitPoint(unit.id, parseInt(e.target.value))}
      >
        {range(monster.hp + 1).map((i) => (
          <option key={i} value={i}>
            {i}
          </option>
        ))}
      </select>
    </div>
  );
};
