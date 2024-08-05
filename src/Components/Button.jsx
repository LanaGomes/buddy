function Button({ buttonText, onClick }) {
  return (
    <div>
      <button
        onClick={onClick}
        className="text-xl py-5 px-9 mt-5 mb-2 bg-radiantGreen text-blue-2  rounded-full"
      >
        {buttonText}
      </button>
    </div>
  );
}
export default Button;
