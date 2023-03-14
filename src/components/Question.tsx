import { Country } from "../types/Country";
import "../assets/styles/Question.css";

type Props = {
  country: string;
  options: Country[];
  onClick: (option: Country) => void;
};

function Question({ country, options, onClick }: Props) {
  return (
    <div className="question">
      <div className="question-text">What is the capital of {country}?</div>
      <div>
        {options.map((option) => (
          <div
            key={option.name.official}
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
