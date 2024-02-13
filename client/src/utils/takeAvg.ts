const takeAvg = (numbers: number[]): string => {
  if (!numbers.length) return "0";
  let sum = numbers.reduce((a, b) => a || 0 + b || 0, 0);
  let avg = (sum / numbers.length).toFixed(1);
  return avg;
};

export default takeAvg;
