import { Ability } from "../models/Ability.ts";

export const AbilityCol = ({
  label,
  value,
}: {
  label: Ability;
  value: number;
}) => {
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
