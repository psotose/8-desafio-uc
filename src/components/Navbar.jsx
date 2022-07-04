
const Navbar = () => {
  return (
    <header className="navbar">
      <a className="navbar__logo navbar__a">
        <span>
          <i className="fas fa-trophy fa-3x"></i>
        </span>
        <div className="navbar__letters-logo-p">
          <p>Retro</p>
          <p>Consultancy</p>
        </div>
      </a>
      <nav className="navbar__nav">
        <ul className="navbar__container-list">
          <li className="navbar__list">
            <a className="navbar__a" aria-current="page">Home</a>
          </li>
          <li className="navbar__list">
            <a className="navbar__a">About</a>
          </li>
          <li className="navbar__list">
            <a className="navbar__a">Services</a>
          </li>
          <li className="navbar__list">
            <a className="navbar__a">Portfolio</a>
          </li>
          <li className="navbar__list nav-item dropdown">
            <a className="navbar__a" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Pages
            </a>
          </li>
          <li className="navbar__list">
            <a className="navbar__a">Contact</a>
          </li>
        </ul>
      </nav>
    </header>  
  )
};

export default Navbar;