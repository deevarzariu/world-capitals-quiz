import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import "../assets/styles/StartPage.css";

function StartPage() {
  const navigate = useNavigate();

  function start() {
    navigate("/quiz");
  }

  return (
    <div className="page">
      <h1 className="start-title">The World Capitals Quiz</h1>
      <p className="start-subtitle">
        Can you guess all the selected world capitals?
      </p>
      <Button onClick={start}>Start</Button>
    </div>
  );
}

export default StartPage;
