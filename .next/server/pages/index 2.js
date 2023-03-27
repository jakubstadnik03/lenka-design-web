(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 6616:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_slideshow_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3886);
/* harmony import */ var react_slideshow_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slideshow_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_slideshow_image_dist_styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5383);
/* harmony import */ var react_slideshow_image_dist_styles_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_slideshow_image_dist_styles_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_sluzbyNav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2855);






function Home() {
    const slideImages = [
        {
            url: "img/uvod/uvod1.jpg"
        },
        {
            url: "img/uvod/uvod2.jpg"
        },
        {
            url: "img/uvod/uvod3.jpg"
        },
        {
            url: "img/uvod/uvod4.jpg"
        },
        {
            url: "img/uvod/uvod5.jpg"
        }
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: "N\xe1vrh interi\xe9ru Liberec, interi\xe9rov\xfd design | Lenka Design"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        className: "hero",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "hero-text",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        children: "Lenka Design"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        children: "Design na m\xedru dle vašeho př\xe1n\xed"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "slide-container",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_slideshow_image__WEBPACK_IMPORTED_MODULE_3__.Slide, {
                                    autoplay: true,
                                    duration: 4000,
                                    children: slideImages.map((slideImage, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "each-slide",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "slide",
                                                style: {
                                                    backgroundImage: `url(${slideImage.url})`
                                                }
                                            })
                                        }, index))
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        className: "nase-sluzby max-width",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "max-width uvodni_text texty ",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        children: "Naše služby"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "uvodni-text-bold",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                            children: "Chcete svůj interi\xe9r změnit, z\xfatulnit a c\xedtit se v něm př\xedjemně?"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "uvodni-text-bold",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                            children: "Stav\xedte dům či\xa0předěl\xe1v\xe1te byt a nev\xedte, jak vše nejl\xe9pe uspoř\xe1dat a zař\xeddit?"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "sluzby-wrapper scroll sluzby-main",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sluzbyNav__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                        img: "img/sluzby/navrhy_bytovych_interieru_small.jpg",
                                        title: "N\xe1vrhy bytov\xfdch interi\xe9rů",
                                        link: "/bytovy-interier"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sluzbyNav__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                        img: "img/sluzby/navrhy_komercnich_interieru_small.jpg",
                                        title: "N\xe1vrh komerčn\xedch interi\xe9rů",
                                        link: "/komercni-interier"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sluzbyNav__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                        img: "img/sluzby/homestaging_small.jpg",
                                        title: "Homestaging",
                                        link: "/homestaging"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sluzbyNav__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                        img: "img/sluzby/konzultace_small.jpg",
                                        title: "Konzultace",
                                        link: "/konzultace"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        className: "max-width uvodni_text texty ",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "none",
                                children: "Design interi\xe9ru v Liberci"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                children: [
                                    "Věnuji se n\xe1vrhům interi\xe9rů, bytov\xe9mu designu a Home stagingu již přes 8let, m\xfdm c\xedlem je, aby každ\xfd klient byl spokojen. Mohu V\xe1m nab\xeddnout 3D vizualizaci, n\xe1vrhy dispozic nebo jen osobn\xed konzultaci v interi\xe9rov\xe9m designu. Pracuji i online a přes videokonference. Soustřed\xedm se na projekty a n\xe1vrhy interi\xe9rů v Liberci a okol\xed. Upřednostňuji př\xedrodn\xed materi\xe1ly či jejich imitace. Moj\xed největš\xed inspirac\xed je př\xedroda. Př\xedroda n\xe1s vytvořila, ovlivňuje n\xe1s, a proto se v jej\xed bl\xedzkosti c\xedt\xedme nejl\xe9pe. Nechci V\xe1s ale ovlivňovat m\xfdm stylem, m\xfdm c\xedlem je pochopit ten V\xe1š a pomoci V\xe1m zrealizovat V\xe1š sen, kter\xfd m\xe1te…",
                                    " "
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        id: "citat",
                        className: "max-width texty citat ",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "none",
                                children: "Lenka St\xe1dn\xedkov\xe1"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "Každ\xe9ho z n\xe1s ovlivňuje\xa0a formuje, jak bydl\xedme, někdy stač\xed jen m\xe1lo a dojde k velik\xe9 změně a člověk se doma c\xedt\xed hned l\xe9pe."
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                children: [
                                    " ",
                                    "Doporučuji\xa0konzultace s design\xe9rem již v době hrub\xe9 stavby, ušetř\xedte si stres i n\xe1klady do budoucna. Vkusně, prakticky a zodpovědně dojdeme ke spr\xe1vn\xe9mu c\xedli."
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "Mga. Lenka St\xe1dn\xedkov\xe1"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        id: "o-mne",
                        className: "max-width texty max-width",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "none",
                                children: "Lenka St\xe1dn\xedkov\xe1 Design"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "img/lenka.jpg",
                                alt: "Lenka St\xe1dn\xedkov\xe1",
                                className: "portret"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "o_mne_text",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "Po absolvov\xe1n\xed\xa0Technick\xe9 univerzity v Liberci v oboru Podnikov\xe1 Ekonomika jsem žila 14 let v zahranič\xed\xa0(USA, Holandsku a Velk\xe9 Brit\xe1nii), vychov\xe1vala 3 děti, čerpala jsem inspirace a zkušenosti nejen životn\xed, ale i profesn\xed. Po mnoha stěhov\xe1n\xed, přestavb\xe1ch \xa0domů\xa0 i stavbě vlastn\xedho domu a chalupy, jsem se rozhodla změnit\xa0svou profesi\xa0a studovat Interi\xe9rov\xfd design. Ve\xa0Velk\xe9 Brit\xe1nii jsem absolvovala\xa0studium bakal\xe1řsk\xe9ho a pot\xe9 magistersk\xe9ho\xa0Interi\xe9rov\xe9ho designu. Moc mě to\xa0bavilo, až se architektura a design stali\xa0moj\xed prac\xed i kon\xedčkem."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "Pod vlastn\xed firmou jsem zpracovala již stovku projektů, konzultac\xed, rekonstrukc\xed a novostaveb. Nad\xe1le se k tomu vzděl\xe1v\xe1m, sleduji nejnovějš\xed trendy, inovace a veletrhy, aby moje z\xe1liba ušetřila klientům čas pomohla plnit jejich sny."
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 5383:
/***/ (() => {



/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 3886:
/***/ ((module) => {

"use strict";
module.exports = require("react-slideshow-image");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,855], () => (__webpack_exec__(6616)));
module.exports = __webpack_exports__;

})();