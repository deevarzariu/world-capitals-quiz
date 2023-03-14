import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { goForward } from "../reducers/questionSlice";
import { increment } from "../reducers/scoreSlice";
import { RootState } from "../store";

import Question from "../components/Question";
import { Country } from "../types/Country";
import {
  selectCurrentCountry,
  selectRandomCountries,
  useGetCountriesQuery,
} from "../services/country";

function QuizPage() {
  const { error, isLoading } = useGetCountriesQuery();
  const countries = useSelector((state: RootState) =>
    selectRandomCountries(state)
  );
  const currentCountry = useSelector((state: RootState) =>
    selectCurrentCountry(state)
  );
  console.log(currentCountry);

  // const score = useSelector((state: RootState) => state.score.value);
  const currentQuestion = useSelector(
    (state: RootState) => state.question.current
  );
  const limit = useSelector((state: RootState) => state.question.limit);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleClick(option: Country) {
    console.log(option.name.official, currentCountry?.name.official);
    if (option.name.official === currentCountry?.name.official) {
      dispatch(increment());
    }

    dispatch(goForward());
    if (currentQuestion > limit) {
      navigate("/results");
    } else {
      navigate(`/question/${currentQuestion}`);
    }
  }

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
          country={currentCountry?.name.official || ""}
          options={countries}
          onClick={handleClick}
        />
      </div>
    );
  }

  return null;
}

export default QuizPage;
