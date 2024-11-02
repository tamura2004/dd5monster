import { Monster } from "../models/Monster.ts";
import { Hr } from "./Hr.tsx";
import { CardText } from "./CardText.tsx";
import { Ability } from "../models/Ability.ts";
import { AbilityCol } from "./AbilityCol.tsx";

type Props = {
  monster: Monster;
};

export const MonsterCard = ({ monster }: Props) => {
  const {
    name,
    num,
    size,
    monsterType,
    ac,
    hp,
    move,
    cr,
    exp,
    abilities,
    actions,
    skills,
    senses,
    languages,
    specialAbilities,
  } = monster;

  return (
    <div className="card">
      <div className="card-header d-flex">
        <h5 className="card-title mb-0">{name}</h5>
        <span className="ms-auto">{num}体</span>
      </div>
      <div className="card-body py-2">
        <p className="card-text my-0">
          {size}・{monsterType}、中立にして悪
        </p>
        <Hr />
        <CardText label="AC" text={ac} />
        <CardText label="hp" text={hp} />
        <CardText label="移動速度" text={move.join("、")} />
        <Hr />
        {Object.keys(skills).length > 0 && (
          <CardText
            label="技能"
            text={Object.entries(skills)
              .map(([skill, value]) => `${skill}+${value}`)
              .join("、")}
          />
        )}
        <CardText label="感覚" text={senses.join("、")} />
        {Object.keys(languages).length > 0 && (
          <CardText label="言語" text={languages.join("、")} />
        )}
        <CardText label="脅威度" text={`${cr}(${exp}exp)`} />
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
        <hr className="my-1" />
        <h6 className="card-title mt-2">アクション</h6>
        {actions.map(({ label, text }) => (
          <CardText key={label} label={label} text={text} />
        ))}
        <hr className="my-1" />
        {specialAbilities.map(({ label, text }) => (
          <CardText key={label} label={label} text={text} />
        ))}
      </div>
    </div>
  );
};
