import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import usePagination from "../hooks/usePagination";

import { ITEMS_PER_PAGE, NB_PAGES } from "../constants";
import { RootState } from "../store";

import { reset as resetScore, selectScore } from "../reducers/scoreSlice";
import { selectRandomCountries } from "../services/country";
import { convertCountryToOption } from "../utils/helpers";

import Button from "../components/Button";
import "../assets/styles/ResultsPage.css";

function ResultsPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const countries = useSelector((state: RootState) =>
    selectRandomCountries(state)
  );
  const options = countries.map((country) => convertCountryToOption(country));

  const { resetPage } = usePagination(NB_PAGES, ITEMS_PER_PAGE, options);

  const score = useSelector(selectScore);

  function restart() {
    dispatch(resetScore());
    resetPage();
    navigate("/");
  }

  return (
    <div className="page">
      <div className="result-text">
        Congratulations, you got {score} out of {NB_PAGES} correct.
      </div>
      <Button onClick={restart}>Try Again</Button>
    </div>
  );
}

export default ResultsPage;
