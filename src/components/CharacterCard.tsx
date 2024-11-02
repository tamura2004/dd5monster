import { Character } from "../models/Character.ts";
import { Hr } from "./Hr.tsx";
import { CardText } from "./CardText.tsx";
import { Ability } from "../models/Ability.ts";
import { AbilityCol } from "./AbilityCol.tsx";

type Props = {
  character: Character;
};

export const CharacterCard = ({ character }: Props) => {
  const { id, name, ac, hp, abilities, classLevel, initiative } = character;

  return (
    <div className="card">
      <div className="card-header d-flex gap-2">
        <span>{id}</span>
        <h5 className="card-title mb-0 me-auto">{name}</h5>
        {Object.entries(classLevel).map(([clazz, level]) => (
          <span key={clazz} className="card-text">
            {clazz} {level}レベル
          </span>
        ))}
      </div>
      <div className="card-body py-2">
        <CardText label="AC" text={ac} />
        <CardText label="hp" text={hp} />
        <CardText label="init" text={initiative} />
        <Hr />
        <div className="row text-center">
          {Object.values(Ability).map((ability) => (
            <AbilityCol
              key={ability}
              label={ability as Ability}
              value={abilities[ability as Ability]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
