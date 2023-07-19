import { Link } from 'react-router-dom';
import S from './NavBar.module.css';

function NavBar() {
  return (
    <nav className={S.nav} lang="en">
      <div className={S.wrapper}>
        <Link to="/" className={S.homeLink}>
          <img
            src="https://tailwindui.com/img/logos/mark.svg?color=teal&shade=500"
            alt="tailwind css"
            className={S.logo}
          />
        </Link>
        <ul className={S.list}>
          <li>
            <Link to="/game" className={S.link}>
              Game
            </Link>
          </li>
          <li>
            <Link to="/notes" className={S.link}>
              Notes
            </Link>
          </li>
          <li>
            <Link to="/contacts" className={S.link}>
              Contacts
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
