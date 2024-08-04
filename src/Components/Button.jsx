function Button({ buttonText }) {
  return (
    <div>
      <button className="text-xl py-3 px-7 mt-8 mb-2 bg-radiantGreen text-blue-2 rounded-full">
        {buttonText}
      </button>
    </div>
  );
}
export default Button;
