import { Character } from "../models/Character.ts";
import { PieceStyle } from "../styles/PieceStyle.ts";
import { range } from "../tools/ArrayUtil.ts";
import { Ability } from "../models/Ability.ts";

type Props = {
  character: Character;
  setActive: (active: boolean) => void;
  setDex: (dexterity: number) => void;
  setHp: (hitPoints: number) => void;
};

export const CharacterListItem = ({
  character,
  setActive,
  setDex,
  setHp,
}: Props) => {
  return (
    <div
      className="d-flex flex-row mb-2 p-2 border rounded align-items-center"
      key={character.id}
    >
      <div className="form-check form-switch me-4">
        <input
          className="form-check-input"
          type="checkbox"
          id="isActive"
          checked={character.active}
          onChange={(e) => {
            setActive(e.target.checked);
          }}
        />
        {character.active ? (
          <label className="form-check-label" htmlFor="isActive">
            参加
          </label>
        ) : (
          <label className="form-check-label" htmlFor="isActive">
            留守
          </label>
        )}
      </div>
      <PieceStyle {...character} $isMonster={false}>
        {character.id}
      </PieceStyle>
      <div className="flex-grow-1 p-2">
        <div className="fs-6">
          <span>{character.name}</span>
        </div>
      </div>
      <div className="fs-5 px-2">hp</div>
      <select
        value={character.hp}
        className="form-select form-select-lg me-4"
        style={{ width: "4em" }}
        onChange={(e) => setHp(parseInt(e.target.value))}
      >
        {range(100).map((i) => (
          <option key={i} value={i}>
            {i}
          </option>
        ))}
      </select>
      <div className="fs-5 px-2">敏捷</div>
      <select
        value={character.abilities[Ability.DEX]}
        className="form-select form-select-lg"
        style={{ width: "4em" }}
        onChange={(e) => setDex(parseInt(e.target.value))}
      >
        {range(25).map((i) => (
          <option key={i} value={i}>
            {i}
          </option>
        ))}
      </select>
    </div>
  );
};
