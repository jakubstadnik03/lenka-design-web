"use strict";
(() => {
var exports = {};
exports.id = 654;
exports.ids = [654];
exports.modules = {

/***/ 2483:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Realizace)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/blogBox.js

function BlogBox(props) {
    let myStyle = {
        backgroundImage: `url(${props.image})`
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("figure", {
        className: "blog-box",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("figcaption", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "blog-img ",
                    rel: "noreferrer",
                    style: myStyle,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        target: "_blank",
                        rel: "noreferrer",
                        href: props.file,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            className: "blog-name",
                            children: props.title
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: props.text
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                target: "_blank",
                                rel: "noreferrer",
                                href: props.file,
                                children: "St\xe1hnout cel\xfd čl\xe1nek"
                            })
                        })
                    ]
                })
            ]
        })
    });
}

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./pages/blog-old.js



function Realizace() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "Blog | Lenka Design"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                className: "max-width",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        children: "Blog"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "blog",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(BlogBox, {
                                file: "word/eshopy.pdf",
                                title: "Eshopy",
                                text: "Během Covid restrikc\xed se trend nakupov\xe1n\xed n\xe1bytku a dekorac\xed přes e-shopy stal běžn\xfdm, protože k zař\xedzen\xed či vylepšen\xed interi\xe9ru z\xe1kazn\xedkům nic jin\xe9ho nezb\xfdvalo. Tento trend bude ještě ale asi chv\xedli přetrv\xe1vat.  Zde najdete tipy  o tom, jak a kde nakupovat na e-shopech, na co si d\xe1t pozor a jak nenaletět!",
                                image: "img/blog/blog_eshopy.jpg"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(BlogBox, {
                                file: "word/home_office.pdf",
                                title: "Home office",
                                text: "Pr\xe1ce z domu  patř\xed v t\xe9to době mezi nejdiskutovanějš\xed t\xe9ma. Sama proto r\xe1da přispěji ze sv\xe9 vlastn\xed skoro 10let\xe9 zkušenosti a k tomu přid\xe1m p\xe1r tipů na zamyšlen\xed a př\xedpadnou realizaci. Tipy na jednoduch\xe9 zař\xedzen\xed cel\xe9 dom\xe1c\xed pracovny a na co nezapomenout…",
                                image: "img/blog/blog_home_office.jpg"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(BlogBox, {
                                file: "word/jaro_v_interieru.pdf",
                                title: "Jaro v interi\xe9ru",
                                text: "Měli bychom vpustit jaro i do našich domovů, aby n\xe1m přineslo radost a svěžest.  N\xe1š interi\xe9r můžeme rozjasnit nejen nov\xfdmi barvami, ale i p\xe1r kousky nov\xe9ho n\xe1bytku či jen dekoracemi a květinami.",
                                image: "img/blog/blog_jaro_v_interieru.jpg"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(BlogBox, {
                                file: "word/rolety_den_a_noc.pdf",
                                title: "Rolety Den a noc jako funkčn\xed designov\xfd prvek",
                                text: "Rolety den a noc jsou jistě funkčn\xedm řešen\xedm zast\xedněn\xed m\xedstnost\xed. Ale nemaj\xed pouze praktickou \xfalohu. Samozřejmě, že je můžete využ\xedt jako designov\xfd prvek a dokreslit a sladit celou m\xedstnost. Skl\xe1daj\xed se z jednotliv\xfdch „lamel“ l\xe1tky a s\xedťky dle Vašeho v\xfdběru. Stejně jako u žaluzi\xed, i u rolet den a noc se můžete rozhodnout pro vytažen\xed cel\xe9 l\xe1tky nahoru a t\xedm okno zcela odkr\xfdt, př\xedpadně stažen\xed až dolů a okno zakr\xfdt.",
                                image: "img/blog/rolety_den_a_noc.jpg"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(BlogBox, {
                                file: "word/vstupni_prostory.pdf",
                                title: "Nepodceňujte vstupn\xed prostory!",
                                text: "Vstupn\xed prostor je vlastně to prvn\xed do čeho člověk vstoup\xed, co spatř\xed a tak\xe9 jako posledn\xed z něho odch\xe1z\xed. Je to prostor, kter\xfd n\xe1s v\xedt\xe1, působ\xed na n\xe1s, navod\xed atmosf\xe9ru, dod\xe1 n\xe1ladu a pohodu domova a je vizitkou pro n\xe1vštěvy.",
                                image: "img/blog/blog_vstupni_prostory.jpg"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(BlogBox, {
                                file: "word/vylepseni_detskeho_pokoje.pdf",
                                title: "Vylepšen\xed dětsk\xe9ho pokoje",
                                text: "Zkuste udělat změnu a zeď či č\xe1st zdi natř\xedt černou tabulovou barvou. Dalš\xed možnost je magnetick\xe1 barva, kter\xe1 nemus\xed zůstat čern\xe1.. Tak\xe9 jsou čast\xe9 samolepic\xed tabulov\xe9 tapety, kter\xe9 lze om\xfdt vodou a je zde i rychl\xe1 instalace. Hezk\xe9 jemn\xe9 tapety pokoj\xedk z\xfatuln\xed. Korkov\xe9 zdi tlum\xed zvuk a slouž\xed tak\xe9 jako n\xe1stěnky.",
                                image: "img/blog/blog_detske_pokoje.jpg"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(BlogBox, {
                                file: "word/koupelny.pdf",
                                title: "Nov\xe9 styly koupelen",
                                text: "Chcete si poř\xeddit novou koupelnu a nev\xedte pro jak\xfd typ se rozhodnout?  Mezi nejnovějš\xed trendy patř\xed plastick\xe9 3D OBKLADY… Nadčasov\xfd vzhled vytvoř\xedte tak\xe9 z keramick\xfdch obkladů s PŘ\xcdRODN\xcdM DEKOREM… Do podvědom\xed se nyn\xed dost\xe1vaj\xed celoplošn\xe9, om\xfdvateln\xe9 a vodě-odoln\xe9 TAPETY. ",
                                image: "img/blog/blog_koupelny.jpg"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2483));
module.exports = __webpack_exports__;

})();