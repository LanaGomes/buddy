import pigLogo from "../Images/pigLogo.png";
import menuLogo from "../Images/menuSanduichLogo.png";

function NavBar() {
  return (
    <nav className="bg-white-hotWhite flex items-center justify-between sm:w-full p-3">
      <img src={pigLogo} />
      <img src={menuLogo} />
    </nav>
  );
}
export default NavBar;
