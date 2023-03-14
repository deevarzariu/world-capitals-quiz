import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { reset as resetQuestions } from "../reducers/questionSlice";
import { reset as resetScore } from "../reducers/scoreSlice";
import { RootState } from "../store";

import Button from "../components/Button";

function ResultsPage() {
  const result = useSelector((state: RootState) => state.score.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // dispatch(increment());
  // dispatch(increment());
  function restart() {
    dispatch(resetQuestions());
    dispatch(resetScore());
    navigate("/");
  }

  return (
    <div className="page">
      <div>Your Results Here: {result}</div>
      <Button onClick={restart}>Try Again</Button>
    </div>
  );
}

export default ResultsPage;
