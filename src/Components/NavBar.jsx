import pigLogo from "../Images/pigLogo.png";
import menuLogo from "../Images/menuSanduichLogo.png";

function NavBar() {
  return (
    <nav className="flex items-center justify-end sm:w-full p-2 shadow-lg mb-10">
      <img src={menuLogo} />
    </nav>
  );
}
export default NavBar;
