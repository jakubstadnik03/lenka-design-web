import Footer from "./components/footer";
import Header from "./components/header";
import BlogBox from "./components/blogBox";
import Head from "next/head";
export default function Realizace() {
  return (
    <>
      <Head>
        <title>Blog | Lenka Design</title>
      </Head>
      <Header />
      <main className="max-width">
        <h1>Blog</h1>
        <div className="blog">
          <BlogBox
            file="word/eshopy.pdf"
            title="Eshopy"
            text="Během Covid restrikcí se trend nakupování nábytku a dekorací přes e-shopy stal běžným, protože k zařízení či vylepšení interiéru zákazníkům nic jiného nezbývalo. Tento trend bude ještě ale asi chvíli přetrvávat. 
          Zde najdete tipy  o tom, jak a kde nakupovat na e-shopech, na co si dát pozor a jak nenaletět!"
            image="img/blog/blog_eshopy.jpg"
          />
          <BlogBox
            file="word/home_office.pdf"
            title="Home office"
            text="Práce z domu  patří v této době mezi nejdiskutovanější téma. Sama proto ráda přispěji ze své vlastní skoro 10leté zkušenosti a k tomu přidám pár tipů na zamyšlení a případnou realizaci.
          Tipy na jednoduché zařízení celé domácí pracovny a na co nezapomenout…"
            image="img/blog/blog_home_office.jpg"
          />
          <BlogBox
            file="word/jaro_v_interieru.pdf"
            title="Jaro v interiéru"
            text="Měli bychom vpustit jaro i do našich domovů, aby nám přineslo radost a svěžest. 
                    Náš interiér můžeme rozjasnit nejen novými barvami, ale i pár kousky nového nábytku či jen dekoracemi a květinami."
            image="img/blog/blog_jaro_v_interieru.jpg"
          />
          <BlogBox
            file="word/rolety_den_a_noc.pdf"
            title="Rolety Den a noc jako funkční designový prvek"
            text="Rolety den a noc jsou jistě funkčním řešením zastínění místností. Ale nemají pouze praktickou úlohu. Samozřejmě, že je můžete využít jako designový prvek a dokreslit a sladit celou místnost.
                        Skládají se z jednotlivých „lamel“ látky a síťky dle Vašeho výběru. Stejně jako u žaluzií, i u rolet den a noc se můžete rozhodnout pro vytažení celé látky nahoru a tím okno zcela odkrýt, případně stažení až dolů a okno zakrýt."
            image="img/blog/rolety_den_a_noc.jpg"
          />
          <BlogBox
            file="word/vstupni_prostory.pdf"
            title="Nepodceňujte vstupní prostory!"
            text="Vstupní prostor je vlastně to první do čeho člověk vstoupí, co spatří a také jako poslední z něho odchází. Je to prostor, který nás vítá, působí na nás, navodí atmosféru, dodá náladu a pohodu domova a je vizitkou pro návštěvy."
            image="img/blog/blog_vstupni_prostory.jpg"
          />
          <BlogBox
            file="word/vylepseni_detskeho_pokoje.pdf"
            title="Vylepšení dětského pokoje"
            text="Zkuste udělat změnu a zeď či část zdi natřít černou tabulovou barvou. Další možnost je magnetická barva, která nemusí zůstat černá..
                Také jsou časté samolepicí tabulové tapety, které lze omýt vodou a je zde i rychlá instalace. Hezké jemné tapety pokojík zútulní. Korkové zdi tlumí zvuk a slouží také jako nástěnky."
            image="img/blog/blog_detske_pokoje.jpg"
          />
          <BlogBox
            file="word/koupelny.pdf"
            title="Nové styly koupelen"
            text="Chcete si pořídit novou koupelnu a nevíte pro jaký typ se rozhodnout? 
                                    Mezi nejnovější trendy patří plastické 3D OBKLADY…
                                    Nadčasový vzhled vytvoříte také z keramických obkladů s PŘÍRODNÍM DEKOREM…
                                    Do podvědomí se nyní dostávají celoplošné, omývatelné a vodě-odolné TAPETY. "
            image="img/blog/blog_koupelny.jpg"
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
