import { Country } from "../types/Country";
import { Option } from "../types/Option";

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

export function getRandomOption(options: Option[]) {
  const index = generateRandomNum(options.length);
  return options.find((_, idx) => idx === index);
}

export function convertCountryToOption(country: Country): Option {
  return {
    country: country.name.common,
    capital: country.capital,
  };
}
