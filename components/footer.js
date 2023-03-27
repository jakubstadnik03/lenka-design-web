import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="max-width">
        <div className="row">
          <div className="footer-col">
            <h4>Naše služby</h4>
            <ul>
              <li>
                <Link href="/komercni-interier">Návrhy bytových interiérů</Link>
              </li>
              <li>
                <Link href="/bytovy-interier">Návrhy komerčních interiérů</Link>
              </li>
              <li>
                <Link href="/homestaging">Homestaging</Link>
              </li>
              <li>
                <Link href="/webove-stranky">Web a grafika</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Užitečné</h4>
            <ul>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/ceník">Ceník</Link>
              </li>
              <li>
                <Link href="/reference">Reference</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Kontakt</h4>
            <ul>
              <li>
                <div>
                  Minkovická 170, 46312 Šimonovice, Liberec Česká republika
                </div>
              </li>
              <li>
                <a href="tel:+420723838086">Telefon: +420 723 838 086</a>
              </li>
              <li>
                <a href="mailto:tadnikovalenka@gmail.com">
                  E-mail: stadnikovalenka@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>sledujte nás</h4>
            <div className="social-links">
              <a href="https://www.facebook.com/lenkadesign.cz">
                <img src="svg/facebook.svg" alt="" />
              </a>
              <a href="https://www.instagram.com/designlenka/?hl=cs">
                <img src="svg/instagram.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
