function Button({ buttonText }) {
  return (
    <div>
      <button className="text-xl py-4 px-9 mt-5 mb-2 bg-radiantGreen text-darkgreen  rounded-full">
        {buttonText}
      </button>
    </div>
  );
}
export default Button;
