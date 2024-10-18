export const sample = <T>(arr: T[]) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export const range = (n: number) => [...Array(n).keys()];
