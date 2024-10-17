import { Monster } from "../models/Monster.ts";
import { Hr } from "./Hr.tsx";
import { CardText } from "./CardText.tsx";
import { Ability } from "../models/Ability.ts";

type Props = {
  monster: Monster;
  roll: () => void;
};

const AbilityCol = ({ label, value }: { label: Ability; value: number }) => {
  const modify = Math.floor((value - 10) / 2);
  const modifyStr = modify >= 0 ? `+${modify}` : modify.toString();
  return (
    <div className="col px-0">
      <p className="my-0">
        <b>{label}</b>
      </p>
      <p className="my-0">
        {value}({modifyStr})
      </p>
    </div>
  );
};

export const MonsterCard = ({ monster, roll }: Props) => {
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
        <i className="bi bi-arrow-clockwise" />
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
        <Hr />
        <button className="btn btn-sm btn-secondary mt-2" onClick={roll}>再生成</button>
      </div>
    </div>
  );
};
