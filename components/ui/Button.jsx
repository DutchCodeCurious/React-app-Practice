export const Button = ({ text, task }) => {
  return (
    <button className="Button" onClick={task}>
      {text}
    </button>
  );
};
