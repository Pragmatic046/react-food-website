import Logo from "../assets/images/fast-food.png";
export default function Navbar() {
  return (
    <>
      <nav>
        <div className="logo-container">
          <img src={Logo} alt="logo" />
        </div>
        <ul className="menu-list">
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Foods</a></li>
          <li><a href="">Contacts</a></li>
        </ul>
      </nav>
    </>
  );
}
