import Logo from '../assets/person-2.jpg'
export default function Navbar() {
  return (
    <>
      <nav>
        <div className="logo-container">
          <img src={Logo} alt="" />
        </div>
        <ul className="menu-list">
          <li>Home</li>
          <li>About</li>
          <li>Foods</li>
          <li>Contacts</li>
        </ul>
      </nav>
    </>
  );
}
