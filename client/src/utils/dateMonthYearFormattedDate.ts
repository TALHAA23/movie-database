import months from "./months";

const dateMonthYearFormattedDate = (data: Date) => {
  if (!(data instanceof Date)) data = new Date(data);

  const getDate = data.getDate();
  const month = months[data.getMonth()];
  const year = data.getFullYear();

  return `${getDate}-${month}-${year}`;
};

export default dateMonthYearFormattedDate;
