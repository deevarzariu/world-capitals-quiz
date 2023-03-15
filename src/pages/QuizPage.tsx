import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { goForward } from "../reducers/questionSlice";
import { increment } from "../reducers/scoreSlice";
import { RootState } from "../store";

import Question from "../components/Question";
import {
  selectCurrentCountry,
  selectRandomCountries,
  useGetCountriesQuery,
} from "../services/country";
import { convertCountryToOption } from "../utils/helpers";
import { Option } from "../types/Option";
import { useCallback } from "react";

function QuizPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, isLoading } = useGetCountriesQuery();

  const countries = useSelector((state: RootState) =>
    selectRandomCountries(state)
  );
  const currentCountry = useSelector((state: RootState) =>
    selectCurrentCountry(state)
  );
  const currentQuestion = useSelector(
    (state: RootState) => state.question.current
  );
  const limit = useSelector((state: RootState) => state.question.limit);

  const handleClick = useCallback(
    function (option: Option) {
      if (option.country === currentCountry?.name.common) {
        dispatch(increment());
      }

      dispatch(goForward());
      if (currentQuestion > limit) {
        navigate("/results");
      } else {
        navigate(`/question/${currentQuestion}`);
      }
    },
    [currentCountry]
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  if (countries) {
    return (
      <div className="page">
        <Question
          country={currentCountry?.name.common || ""}
          options={countries.map((country) => convertCountryToOption(country))}
          onClick={handleClick}
        />
      </div>
    );
  }

  return null;
}

export default QuizPage;
