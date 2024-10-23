import { PieceStyle } from "../styles/PieceStyle.ts";
import { Monster } from "../models/Monster.ts";
import { Character } from "../models/Character.ts";

type Props = {
  item: Character | Monster;
};

const isMonster = (item: any): item is Monster => {
  return item.monsterType !== undefined;
};

export const InitiativeListItem = ({ item }: Props) => {
  return (
    <div
      className="d-flex flex-row mb-2 p-2 border rounded align-items-center"
      key={item.name}
    >
      {isMonster(item) ? (
        <PieceStyle {...item} $isMonster={true}>
          怪物
        </PieceStyle>
      ) : (
        <PieceStyle {...item} $isMonster={false}>
          {item.id}
        </PieceStyle>
      )}
      <div className="flex-grow-1 p-2">{item.name}</div>
      <div className="row">
        <div className="fs-6 col d-flex flex-column">
          <div style={{ fontSize: 12 }}>hp</div>
          <div>{item.hp}</div>
        </div>
        <div className="fs-6 col">{item.initiative}</div>
      </div>
    </div>
  );
};
