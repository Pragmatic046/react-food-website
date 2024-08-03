import Logo from '../assets/hamburger.png'
export default function Navbar({title}) {
  return (
    <>
      <nav>
        <div className="logo-container">
          <img src={Logo} alt="logo" />
        </div>
        <h1>{title}</h1>
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
