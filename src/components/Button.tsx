import "../assets/styles/Button.css";

type Props = {
  children: string | React.ReactNode;
  onClick: () => void;
};

function Button({ children, onClick }: Props) {
  return (
    <button className="btn" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
