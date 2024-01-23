const FieldTitle = ({
  title,
  validation,
}: {
  title: string;
  validation: boolean | string;
}) => (
  <span className={validation == true ? " text-green-700" : "text-rose-500"}>
    {title
      .split(/(?=[A-Z])/)
      .join(" ")
      .toLowerCase()}
  </span>
);

export default FieldTitle;
