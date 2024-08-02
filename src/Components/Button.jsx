function Button({ buttonText }) {
  return (
    <div>
      <button className="text-xl py-3 px-7 mt-8 bg-radiantGreen text-blue-2 rounded-full">
        {buttonText}
      </button>
    </div>
  );
}
export default Button;
