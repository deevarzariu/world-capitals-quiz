import { Option } from "../types/Option";
import "../assets/styles/Question.css";

type Props = {
  country: string;
  options: Option[];
  onClick: (option: Option) => void;
};

function Question({ country, options, onClick }: Props) {
  return (
    <div className="question">
      <div className="question-text">What is the capital of {country}?</div>
      <div>
        {options.map((option) => (
          <div
            key={option.country}
            className="question-option"
            onClick={() => onClick(option)}
          >
            {option.capital}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Question;
