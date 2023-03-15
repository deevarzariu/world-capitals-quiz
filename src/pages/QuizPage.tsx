import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import usePagination from "../hooks/usePagination";

import { increment, selectScore } from "../reducers/scoreSlice";
import {
  selectRandomCountries,
  useGetCountriesQuery,
} from "../services/country";
import { convertCountryToOption } from "../utils/helpers";

import { RootState } from "../store";
import { Option } from "../types/Option";
import { ITEMS_PER_PAGE, NB_PAGES } from "../constants";

import Question from "../components/Question";

function QuizPage() {
  const dispatch = useDispatch();
  const { error, isLoading } = useGetCountriesQuery();

  const countries = useSelector((state: RootState) =>
    selectRandomCountries(state)
  );
  const options = countries.map((country) => convertCountryToOption(country));

  const { currentPage, currentOptions, currentAnswer, nextPage } =
    usePagination(NB_PAGES, ITEMS_PER_PAGE, options);

  const handleClick = useCallback(
    function (option: Option) {
      if (option.country === currentAnswer?.country) {
        dispatch(increment());
      }
      nextPage();
    },
    [currentAnswer, currentPage]
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  if (options) {
    return (
      <div className="page">
        <Question
          country={currentAnswer?.country || ""}
          options={currentOptions}
          onClick={handleClick}
        />
      </div>
    );
  }

  return null;
}

export default QuizPage;
