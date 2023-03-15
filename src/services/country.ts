import { createSelector } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Country } from "../types/Country";
import { generateRandomNum, generateRandomNumArr } from "../utils/helpers";

export const countryApi = createApi({
  reducerPath: "countryApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://restcountries.com/v3.1/" }),
  endpoints: (builder) => ({
    getCountries: builder.query<Country[], void>({
      query: () => "all?fields=name,capital",
    }),
  }),
});

export const { useGetCountriesQuery } = countryApi;

export const selectCountriesResult = countryApi.endpoints.getCountries.select();

const selectCountriesData = createSelector(
  selectCountriesResult,
  (countriesResult) =>
    countriesResult.data?.filter((country) => country.capital.length)
);

export const selectRandomCountries = createSelector(
  selectCountriesData,
  (countries) => {
    if (!countries) return [];
    const randomNumbers = generateRandomNumArr(40, countries.length);
    return countries.filter((_, idx: number) => randomNumbers.includes(idx));
  }
);
