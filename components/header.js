import Link from "next/link";
import { useState } from "react";
export default function Header() {
  const [isActive, setIsActive] = useState(false);
  function hamburgerToggle(event) {
    setIsActive((current) => !current);
  }
  return (
    <header>
      <nav className="navbar">
        <div className="navbar-container max-width">
          <Link href="/" className="navbar-logo">
            <img
              src="svg/lenka-design-logo.svg"
              width="200"
              alt="Logo Lenka Design"
            />
          </Link>
          <div
            className={
              isActive ? "hamburger-lines hamburger-clicked" : "hamburger-lines"
            }
            onClick={hamburgerToggle}
          >
            <span className="line line2"></span>
          </div>
          <ul className={isActive ? "menu-items menu-clicked " : "menu-items"}>
            <li className="underline">
              <Link
                href="/"
                className="nav-link bold"
                onClick={hamburgerToggle}
              >
                Úvod
              </Link>
            </li>
            <li className="openner">
              <Link
                href="/nase-sluzby"
                className="nav-link"
                onClick={hamburgerToggle}
              >
                Naše služby
              </Link>
            </li>
            <li>
              <Link
                href="/realizace"
                className="nav-link"
                onClick={hamburgerToggle}
              >
                Realizace
              </Link>
            </li>
            <li>
              <Link
                href="/vizualizace"
                className="nav-link"
                onClick={hamburgerToggle}
              >
                Vizualizace
              </Link>
            </li>
            <li>
              <Link href="/blog" className="nav-link" onClick={hamburgerToggle}>
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/reference"
                className="nav-link"
                onClick={hamburgerToggle}
              >
                Reference
              </Link>
            </li>
            <li>
              <Link
                href="/webove-stranky"
                className="nav-link"
                onClick={hamburgerToggle}
              >
                Web a grafika
              </Link>
            </li>
            <li>
              <Link
                href="/cenik"
                className="nav-link"
                onClick={hamburgerToggle}
              >
                Ceník
              </Link>
            </li>
            <li>
              <Link
                href="/kontakt"
                className="nav-contact"
                onClick={hamburgerToggle}
              >
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
