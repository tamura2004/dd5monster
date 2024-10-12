type Props = {
  label: string;
  text: string | number;
};

export const CardText = ({ label, text }: Props) => (
  <p className="card-text my-0">
    <b>{label}</b>：{text}
  </p>
);
