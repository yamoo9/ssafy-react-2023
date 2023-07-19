import S from './NavBar.module.css';

function NavBar() {
  return (
    <nav className={S.nav} lang="en">
      <div className={S.wrapper}>
        <a href="/" className={S.homeLink}>
          <img
            src="https://tailwindui.com/img/logos/mark.svg?color=teal&shade=500"
            alt="tailwind css"
            className={S.logo}
          />
        </a>
        <ul className={S.list}>
          <li>
            <a href="/game" className={S.link}>
              Game
            </a>
          </li>
          <li>
            <a href="/notes" className={S.link}>
              Notes
            </a>
          </li>
          <li>
            <a href="/contacts" className={S.link}>
              Contacts
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
