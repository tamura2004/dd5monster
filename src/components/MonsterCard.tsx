import { Monster } from "../models/Monster.ts";
import { Hr } from "./Hr.tsx";
import { CardText } from "./CardText.tsx";
import { Ability } from "../models/Ability.ts";

type Props = {
  monster: Monster;
};

const AbilityCol = ({ label, value }: { label: Ability; value: number }) => {
  const modify = Math.floor((value - 10) / 2);
  const modifyStr = modify >= 0 ? `+${modify}` : modify.toString();
  return (
    <div className="col px-0">
      <p className="my-0"><b>{label}</b></p>
      <p className="my-0">
        {value}({modifyStr})
      </p>
    </div>
  );
};

export const MonsterCard = ({ monster }: Props) => {
  const {
    name,
    size,
    monsterType,
    ac,
    hp,
    move,
    cr,
    exp,
    abilities,
    feats,
    actions,
  } = monster;

  return (
    <div className="card">
      <h5 className="card-header">{name}</h5>
      <div className="card-body py-2">
        <p className="card-text my-0">
          {size}・{monsterType}、中立にして悪
        </p>
        <Hr />
        <CardText label="AC" text={ac} />
        <CardText label="hp" text={hp} />
        <CardText label="移動速度" text={move} />
        <Hr />
        <CardText label="技能" text="運動+6、生存+3、知覚+3" />
        <CardText label="感覚" text="運動+6、生存+3、知覚+3" />
        <CardText label="言語" text="運動+6、生存+3、知覚+3" />
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
          {/*<AbilityCol label={Ability.STR} value={abilities[Ability.STR]} />*/}
          {/*<AbilityCol label={Ability.DEX} value={abilities[Ability.DEX]} />*/}
          {/*<AbilityCol label={Ability.CON} value={abilities[Ability.CON]} />*/}
          {/*<AbilityCol label={Ability.INT} value={abilities[Ability.INT]} />*/}
          {/*<AbilityCol label={Ability.WIS} value={abilities[Ability.WIS]} />*/}
          {/*<AbilityCol label={Ability.CHA} value={abilities[Ability.CHA]} />*/}
        </div>
        <hr className="my-1" />
        {Object.entries(feats).map(([label, text]) => (
          <CardText key={label} label={label} text={text} />
        ))}
        <hr className="my-1" />
        <h6 className="card-title mt-2">アクション</h6>
        {Object.entries(actions).map(([label, text]) => (
          <CardText key={label} label={label} text={text} />
        ))}
      </div>
    </div>
  );
};
