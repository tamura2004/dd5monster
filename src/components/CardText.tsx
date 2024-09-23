export const CardText = ({
  label,
  text,
}: {
  label: string;
  text: string | number;
}) => (
  <p className="card-text my-0">
    <b>{label}</b>：{text}
  </p>
);
