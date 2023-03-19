import Link from "next/link";
import { useState } from "react";
export default function Header() {
  const [isActive, setIsActive] = useState(false);
  function hamburgerToggle(event) {
    // event.currentTarget.classList.toggle('hamburger-clicked')
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
              isActive ? "hamburger-clicked hamburger-lines" : "hamburger-lines"
            }
            onClick={hamburgerToggle}
          >
            <span className="line line2"></span>
          </div>
          <ul className={isActive ? "menu-items menu-clicked " : "menu-items"}>
            <li className="underline">
              <Link href="/" className="nav-link bold">
                Úvod
              </Link>
            </li>
            <li className="openner">
              <Link href="/nase-sluzby" className="nav-link">
                Naše služby
              </Link>
              {/* <ul className="nav-submenu">
                <li>
                  <Link href="/nase-sluzby" className="nav-link">
                    Komercni interiery
                  </Link>
                </li>
                <li>
                  <Link href="/nase-sluzby" className="nav-link">
                    soukromí interier
                  </Link>
                </li>
                <li>
                  <Link href="/nase-sluzby" className="nav-link">
                    Homestaging
                  </Link>
                </li>
                <li>
                  <Link href="/nase-sluzby" className="nav-link">
                    Konzultace
                  </Link>
                </li>
              </ul> */}
            </li>
            <li>
              <Link href="/realizace" className="nav-link">
                Realizace
              </Link>
            </li>
            <li>
              <Link href="/vizualizace" className="nav-link">
                Vizualizace
              </Link>
            </li>
            <li>
              <Link href="/blog" className="nav-link">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/reference" className="nav-link">
                Reference
              </Link>
            </li>
            <li>
              <Link href="/webove-stranky" className="nav-link">
                Web a grafika
              </Link>
            </li>
            <li>
              <Link href="/cenik" className="nav-link">
                Ceník
              </Link>
            </li>
            <li>
              <Link href="/kontakt" className="nav-contact">
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
