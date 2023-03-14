export function generateRandomNum(max: number) {
  return Math.floor(Math.random() * max);
}

export function generateRandomNumArr(length: number, max: number) {
  const numbers = [];
  while (numbers.length < length) {
    const r = generateRandomNum(max);
    if (numbers.indexOf(r) === -1) {
      numbers.push(r);
    }
  }
  return numbers;
}
