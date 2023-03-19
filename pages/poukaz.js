import Footer from "./components/footer";
import Header from "./components/header";
import Head from "next/head";

function Poukaz() {
  return (
    <>
      <Head>
        <title>Dárkový poukaz | Lenka Design</title>
      </Head>
      <Header />
      <div className="pozvanka-block">
        <p>Pokud máte zájem, je možné si zakoupit dárkový poukaz.</p>
      </div>
      <Footer />
    </>
  );
}

export default Poukaz;
