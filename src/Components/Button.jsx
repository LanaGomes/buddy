function Button({ buttonText, onClick, aditionalClassNames }) {
  return (
    <div>
      <button
        onClick={onClick}
        className={`${aditionalClassNames} text-base py-3 w-24 mt-4 mb-2 rounded-full`}
      >
        {buttonText}
      </button>
    </div>
  );
}
export default Button;
