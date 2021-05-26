(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Arrow/Arrow.styled.tsx":
/*!*******************************************!*\
  !*** ./components/Arrow/Arrow.styled.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledArrow": function() { return /* binding */ StyledArrow; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const StyledArrow = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
    
    position: absolute;
    top: 85%;
    left: 50%;
    transform: translate(-50%,-50%);



    span {
        display: block;
        width: 30px;
        height: 30px;
        border-bottom: 5px solid #8BE9FD;
        border-right: 5px solid #f28500;
        transform: rotate(45deg);
        margin: -10px;
        animation: animate 2s infinite;

        :nth-child(2){
            animation-delay: -0.2s;
        }
    
        :nth-child(3){
            animation-delay: -0.4s;
        }

    @media (max-width: ${({
  theme
}) => theme.mobileS}) {
        width: 20px;
        height: 20px;
    }
    }

    @keyframes animate {
        0% {
            opacity: 0;
            transform: rotate(45deg) translate(-20px,-20px);
        }

        50% {
            opacity: 1;
        }

        100% {
            opacity: 0;
            transform: rotate(45deg) translate(20px,20px);
        }
    }
`;

/***/ }),

/***/ "./components/Arrow/Arrow.tsx":
/*!************************************!*\
  !*** ./components/Arrow/Arrow.tsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Arrow": function() { return /* binding */ Arrow; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Arrow_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Arrow.styled */ "./components/Arrow/Arrow.styled.tsx");

var _jsxFileName = "D:\\web_development\\projekty\\portfolio_v2\\next-typescript-portfolio\\components\\Arrow\\Arrow.tsx";


const Arrow = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Arrow_styled__WEBPACK_IMPORTED_MODULE_2__.StyledArrow, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, undefined);
};

/***/ }),

/***/ "./components/Cards/CardItem/CardItem.styled.tsx":
/*!*******************************************************!*\
  !*** ./components/Cards/CardItem/CardItem.styled.tsx ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardContainer": function() { return /* binding */ CardContainer; },
/* harmony export */   "CardWrapper": function() { return /* binding */ CardWrapper; },
/* harmony export */   "StyledCard": function() { return /* binding */ StyledCard; },
/* harmony export */   "CardAboutMe": function() { return /* binding */ CardAboutMe; },
/* harmony export */   "CardContact": function() { return /* binding */ CardContact; },
/* harmony export */   "H1Card": function() { return /* binding */ H1Card; },
/* harmony export */   "Paragraph": function() { return /* binding */ Paragraph; },
/* harmony export */   "ParagraphExtended": function() { return /* binding */ ParagraphExtended; },
/* harmony export */   "ActivityWrapper": function() { return /* binding */ ActivityWrapper; },
/* harmony export */   "Sport": function() { return /* binding */ Sport; },
/* harmony export */   "Workout": function() { return /* binding */ Workout; },
/* harmony export */   "Mtb": function() { return /* binding */ Mtb; },
/* harmony export */   "Books": function() { return /* binding */ Books; },
/* harmony export */   "Pools": function() { return /* binding */ Pools; },
/* harmony export */   "TechContainer": function() { return /* binding */ TechContainer; },
/* harmony export */   "TechWrapper": function() { return /* binding */ TechWrapper; },
/* harmony export */   "TechWrapper2": function() { return /* binding */ TechWrapper2; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const CardContainer = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
    height: 100vh;
    width: 100%;
    background-color: #323A42;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;
const CardWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
    width: 90%;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
const StyledCard = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
    height: 25em;
    width: 35em;
    background-color: #004c99;
    border-radius: 10px;
    border-bottom: 6px solid #66FCF1;
    margin: 10px 30px;
    padding: 5px 10px;
    position: relative;
    box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.8);

@media (max-width: ${({
  theme
}) => theme.laptop}) {
    height: 20em;
    width: 30em;
}

@media (max-width: ${({
  theme
}) => theme.mobileS}) {
    height: 34em;
    width: 23em;
}
`;
const CardAboutMe = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(StyledCard)`

@media (max-width: ${({
  theme
}) => theme.mobileS}) {
    height: 30em;
    width: 23em;
}
`;
const CardContact = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(StyledCard)`

@media (max-width: ${({
  theme
}) => theme.mobileS}) {
    height: 26em;
    width: 23em;
}
`;
const H1Card = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().h1)`
    font-size: 1.7rem;
    font-weight: 700;
    color: #66FCF1;
    text-align: center;
`;
const Paragraph = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().p)`
    font-size: 1.3rem;
    font-weight: 600;
    color: #C5C6C7;
    text-align: justify;
    height: 14em;
    margin: 0px;
    position: relative;

@media (max-width: ${({
  theme
}) => theme.laptop}) {
    font-size: 1rem;
}    
`;
const ParagraphExtended = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Paragraph)`
    font-size: 1.4rem;
    text-align: center;
    margin-top: 68.50px;
    height: 10em;

@media (max-width: ${({
  theme
}) => theme.laptop}) {
    font-size: 1.2rem;
    margin-top: 40px;
} 

@media (max-width: ${({
  theme
}) => theme.mobileS}) {
    font-size: 1.2rem;
    margin-top: 60px;
    height: 10em;
}
`;
const ActivityWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;
const Sport = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
    display: inline-block;
    color: #06d6a0;

`;
const Workout = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Sport)`
    color: #ffd60a;
    margin-left: 20px;
`;
const Mtb = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Workout)`
    color: #76c893;
`;
const Books = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Mtb)`
    color: #dda15e;
`;
const Pools = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Books)`
    color: #4cc9f0;
`;
const TechContainer = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-content: center;
    text-align: center;
    color: #C5C6C7;
`;
const TechWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
    margin-top: 20px;

@media (max-width: ${({
  theme
}) => theme.laptop}) {
    margin-top: 0px;    
}
    
   div {
       display: inline-block;
   }
`;
const TechWrapper2 = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(TechWrapper)`
   
`;

/***/ }),

/***/ "./components/Cards/CardItem/CardItem.tsx":
/*!************************************************!*\
  !*** ./components/Cards/CardItem/CardItem.tsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardItem": function() { return /* binding */ CardItem; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Emojis_Boy_Boy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Emojis/Boy/Boy */ "./components/Emojis/Boy/Boy.tsx");
/* harmony import */ var _Emojis_Phone_Phone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Emojis/Phone/Phone */ "./components/Emojis/Phone/Phone.tsx");
/* harmony import */ var _Emojis_Technologies_Technologies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Emojis/Technologies/Technologies */ "./components/Emojis/Technologies/Technologies.tsx");
/* harmony import */ var _TechnologyList_NextT_NextT_styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../TechnologyList/NextT/NextT.styled */ "./components/TechnologyList/NextT/NextT.styled.tsx");
/* harmony import */ var _TechnologyList_ReactT_ReactT_styled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../TechnologyList/ReactT/ReactT.styled */ "./components/TechnologyList/ReactT/ReactT.styled.tsx");
/* harmony import */ var _TechnologyList_StorybookT_StorybookT_styled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../TechnologyList/StorybookT/StorybookT.styled */ "./components/TechnologyList/StorybookT/StorybookT.styled.tsx");
/* harmony import */ var _TechnologyList_StyledComponentsT_StyledComponentsT_styled__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../TechnologyList/StyledComponentsT/StyledComponentsT.styled */ "./components/TechnologyList/StyledComponentsT/StyledComponentsT.styled.tsx");
/* harmony import */ var _TechnologyList_StyledSystemT_StyledSystemT_styled__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../TechnologyList/StyledSystemT/StyledSystemT.styled */ "./components/TechnologyList/StyledSystemT/StyledSystemT.styled.tsx");
/* harmony import */ var _TechnologyList_TypescriptT_TypescriptT_styled__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../TechnologyList/TypescriptT/TypescriptT.styled */ "./components/TechnologyList/TypescriptT/TypescriptT.styled.tsx");
/* harmony import */ var _CardItem_styled__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./CardItem.styled */ "./components/Cards/CardItem/CardItem.styled.tsx");


var _jsxFileName = "D:\\web_development\\projekty\\portfolio_v2\\next-typescript-portfolio\\components\\Cards\\CardItem\\CardItem.tsx";









 // import { NextT } from '../../TechnologyList/NextT/NextT';
// import { ReactT } from '../../TechnologyList/ReactT/ReactT';
// import { StorybookT } from '../../TechnologyList/StorybookT/StorybookT';
// import { StyledComponentsT } from '../../TechnologyList/StyledComponentsT/StyledComponentsT';
// import { StyledSystemT } from '../../TechnologyList/StyledSystemT/StyledSystemT';
// import { TypescriptT } from '../../TechnologyList/TypescriptT/TypescriptT';


const CardItem = ({}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CardItem_styled__WEBPACK_IMPORTED_MODULE_11__.CardContainer, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CardItem_styled__WEBPACK_IMPORTED_MODULE_11__.CardWrapper, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CardItem_styled__WEBPACK_IMPORTED_MODULE_11__.CardAboutMe, {
          id: "o-mne",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Emojis_Boy_Boy__WEBPACK_IMPORTED_MODULE_2__.Boy, {
            symbol: "\uD83D\uDC66\uD83C\uDFFD",
            label: "boy"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CardItem_styled__WEBPACK_IMPORTED_MODULE_11__.H1Card, {
            children: "O mne"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CardItem_styled__WEBPACK_IMPORTED_MODULE_11__.Paragraph, {
            children: ["Som Junior Front End Developer, ktor\xFD m\xE1 v sebe ve\u013Ek\xFA t\xFA\u017Ebu tvori\u0165. Vytv\xE1ra\u0165 diela, o ktor\xFDch vie, \u017Ee druh\xFDm spravia rados\u0165. Sna\u017E\xEDm sa de\u0148 po dni na sebe pracova\u0165 a pr\xEDs\u0165 na ka\u017Ed\xFD probl\xE9m. Ak ma zrovna nen\xE1jdete k\xF3di\u0165, tak ma ur\u010Dite n\xE1jdete jazdi\u0165 v pr\xEDrode na bicykli alebo cvi\u010Di\u0165.", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CardItem_styled__WEBPACK_IMPORTED_MODULE_11__.ActivityWrapper, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CardItem_styled__WEBPACK_IMPORTED_MODULE_11__.Sport, {
                children: "#\xA0 \u0161port"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CardItem_styled__WEBPACK_IMPORTED_MODULE_11__.Workout, {
                children: "#\xA0 workout"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CardItem_styled__WEBPACK_IMPORTED_MODULE_11__.Mtb, {
                children: "#\xA0 mtb"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CardItem_styled__WEBPACK_IMPORTED_MODULE_11__.Books, {
                children: "#\xA0 knihy"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CardItem_styled__WEBPACK_IMPORTED_MODULE_11__.Pools, {
                children: "#\xA0 baz\xE9ny"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 29
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 25
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CardItem_styled__WEBPACK_IMPORTED_MODULE_11__.CardContact, {
          id: "kontakt",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Emojis_Phone_Phone__WEBPACK_IMPORTED_MODULE_3__.Phone, {
            symbol: "\uD83D\uDCF1",
            label: "phone"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CardItem_styled__WEBPACK_IMPORTED_MODULE_11__.H1Card, {
            children: "Kontakt"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CardItem_styled__WEBPACK_IMPORTED_MODULE_11__.ParagraphExtended, {
            children: ["+421 905 495 677", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 33
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 33
            }, undefined), "slivos.frontend@gmail.com"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 29
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 25
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CardItem_styled__WEBPACK_IMPORTED_MODULE_11__.StyledCard, {
          id: "technologie",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Emojis_Technologies_Technologies__WEBPACK_IMPORTED_MODULE_4__.Technologies, {
            symbol: "\uD83D\uDD27",
            label: "technologies"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CardItem_styled__WEBPACK_IMPORTED_MODULE_11__.H1Card, {
            children: "Technol\xF3gie"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CardItem_styled__WEBPACK_IMPORTED_MODULE_11__.TechContainer, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CardItem_styled__WEBPACK_IMPORTED_MODULE_11__.TechWrapper, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologyList_NextT_NextT_styled__WEBPACK_IMPORTED_MODULE_5__.SvgNext, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 105,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: "Next-JS - junior"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 106,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologyList_ReactT_ReactT_styled__WEBPACK_IMPORTED_MODULE_6__.SvgReact, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 107,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: "React-JS - junior"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 108,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologyList_StorybookT_StorybookT_styled__WEBPACK_IMPORTED_MODULE_7__.SvgStory, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 109,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: "Storybook - junior"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 110,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CardItem_styled__WEBPACK_IMPORTED_MODULE_11__.TechWrapper2, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologyList_TypescriptT_TypescriptT_styled__WEBPACK_IMPORTED_MODULE_10__.SvgType, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 113,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: "Typescript - junior"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologyList_StyledSystemT_StyledSystemT_styled__WEBPACK_IMPORTED_MODULE_9__.SvgStyledSys, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 115,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: "Styled-system - junior"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologyList_StyledComponentsT_StyledComponentsT_styled__WEBPACK_IMPORTED_MODULE_8__.SvgStyledComp, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 117,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: "Styled-components - intermediate"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 118,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 25
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 21
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }, undefined)
  }, void 0, false);
};

/***/ }),

/***/ "./components/Emojis/Boy/Boy.styled.tsx":
/*!**********************************************!*\
  !*** ./components/Emojis/Boy/Boy.styled.tsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledBoy": function() { return /* binding */ StyledBoy; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const StyledBoy = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().span)`
    font-size: 1.8rem;
    position: absolute;
    top: 15px;
    left: 180px;

@media (max-width: ${({
  theme
}) => theme.laptop}) {
    font-size: 1.5rem;
    top: 25px;
    left: 160px;
} 

@media (max-width: ${({
  theme
}) => theme.mobileS}) {
    font-size: 1.5rem;
    float: left;
    margin-left: -70px;
}

@media (max-width: ${({
  theme
}) => theme.mobile4XS}) {
    margin-left: -90px;
}

@media (max-width: ${({
  theme
}) => theme.mobile5XS}) {
    margin-left: -110px;
}
`;

/***/ }),

/***/ "./components/Emojis/Boy/Boy.tsx":
/*!***************************************!*\
  !*** ./components/Emojis/Boy/Boy.tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Boy": function() { return /* binding */ Boy; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Boy_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Boy.styled */ "./components/Emojis/Boy/Boy.styled.tsx");

var _jsxFileName = "D:\\web_development\\projekty\\portfolio_v2\\next-typescript-portfolio\\components\\Emojis\\Boy\\Boy.tsx";


;
function Boy(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Boy_styled__WEBPACK_IMPORTED_MODULE_2__.StyledBoy, {
    role: "img",
    "aria-label": props.label ? props.label : "",
    "aria-hidden": props.label ? "false" : "true",
    children: props.symbol
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, this);
}
;

/***/ }),

/***/ "./components/Emojis/Phone/Phone.styled.tsx":
/*!**************************************************!*\
  !*** ./components/Emojis/Phone/Phone.styled.tsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledPhone": function() { return /* binding */ StyledPhone; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const StyledPhone = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().span)`
    font-size: 1.8rem;
    position: absolute;
    top: 15px;
    left: 180px;

@media (max-width: ${({
  theme
}) => theme.laptop}) {
    font-size: 1.5rem;
    top: 25px;
    left: 160px;
} 

@media (max-width: ${({
  theme
}) => theme.mobileS}) {
    margin-left: -70px;
}

@media (max-width: ${({
  theme
}) => theme.mobile4XS}) {
    margin-left: -90px;
}

@media (max-width: ${({
  theme
}) => theme.mobile5XS}) {
    margin-left: -110px;
}
`;

/***/ }),

/***/ "./components/Emojis/Phone/Phone.tsx":
/*!*******************************************!*\
  !*** ./components/Emojis/Phone/Phone.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Phone": function() { return /* binding */ Phone; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Phone_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Phone.styled */ "./components/Emojis/Phone/Phone.styled.tsx");

var _jsxFileName = "D:\\web_development\\projekty\\portfolio_v2\\next-typescript-portfolio\\components\\Emojis\\Phone\\Phone.tsx";


;
function Phone(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Phone_styled__WEBPACK_IMPORTED_MODULE_2__.StyledPhone, {
    role: "img",
    "aria-label": props.label ? props.label : "",
    "aria-hidden": props.label ? "false" : "true",
    children: props.symbol
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, this);
}
;

/***/ }),

/***/ "./components/Emojis/Technologies/Technologies.styled.tsx":
/*!****************************************************************!*\
  !*** ./components/Emojis/Technologies/Technologies.styled.tsx ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledTechnologies": function() { return /* binding */ StyledTechnologies; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const StyledTechnologies = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().span)`
    font-size: 1.8rem;
    position: absolute;
    top: 15px;
    left: 150px;

@media (max-width: ${({
  theme
}) => theme.laptop}) {
    font-size: 1.5rem;
    top: 25px;
    left: 125px;
} 

@media (max-width: ${({
  theme
}) => theme.mobileS}) {
    margin-left: -70px;
}

@media (max-width: ${({
  theme
}) => theme.mobile4XS}) {
    margin-left: -90px;
}

@media (max-width: ${({
  theme
}) => theme.mobile5XS}) {
    margin-left: -105px;
}
`;

/***/ }),

/***/ "./components/Emojis/Technologies/Technologies.tsx":
/*!*********************************************************!*\
  !*** ./components/Emojis/Technologies/Technologies.tsx ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Technologies": function() { return /* binding */ Technologies; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Technologies_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Technologies.styled */ "./components/Emojis/Technologies/Technologies.styled.tsx");

var _jsxFileName = "D:\\web_development\\projekty\\portfolio_v2\\next-typescript-portfolio\\components\\Emojis\\Technologies\\Technologies.tsx";


;
function Technologies(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Technologies_styled__WEBPACK_IMPORTED_MODULE_2__.StyledTechnologies, {
    role: "img",
    "aria-label": props.label ? props.label : "",
    "aria-hidden": props.label ? "false" : "true",
    children: props.symbol
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, this);
}
;

/***/ }),

/***/ "./components/Header/Burger/Burger.styled.tsx":
/*!****************************************************!*\
  !*** ./components/Header/Burger/Burger.styled.tsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledBurger": function() { return /* binding */ StyledBurger; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const StyledBurger = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().button)`
  position: fixed;
  top: 0.9375rem;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 200;
  
  &:focus {
    outline: none;
  }
  
  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({
  theme
}) => theme.primaryBurger};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({
  open
}) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({
  open
}) => open ? '0' : '1'};
      transform: ${({
  open
}) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({
  open
}) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }

@media (min-width: 961px) {
      display: none;
  }
`;

/***/ }),

/***/ "./components/Header/Burger/Burger.tsx":
/*!*********************************************!*\
  !*** ./components/Header/Burger/Burger.tsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Burger": function() { return /* binding */ Burger; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Menu_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Menu/Menu */ "./components/Header/Menu/Menu.tsx");
/* harmony import */ var _Burger_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Burger.styled */ "./components/Header/Burger/Burger.styled.tsx");


var _jsxFileName = "D:\\web_development\\projekty\\portfolio_v2\\next-typescript-portfolio\\components\\Header\\Burger\\Burger.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




;
function Burger(props) {
  const {
    0: open,
    1: setOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Burger_styled__WEBPACK_IMPORTED_MODULE_3__.StyledBurger, _objectSpread(_objectSpread({
      open: open,
      onClick: () => setOpen(!open)
    }, props), {}, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 13
      }, this)]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Menu_Menu__WEBPACK_IMPORTED_MODULE_2__.Menu, {
      open: open
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }, this)]
  }, void 0, true);
}
;

/***/ }),

/***/ "./components/Header/Header.styled.tsx":
/*!*********************************************!*\
  !*** ./components/Header/Header.styled.tsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledHeader": function() { return /* binding */ StyledHeader; },
/* harmony export */   "Ul": function() { return /* binding */ Ul; },
/* harmony export */   "Li": function() { return /* binding */ Li; },
/* harmony export */   "StyledAnchor": function() { return /* binding */ StyledAnchor; },
/* harmony export */   "Logo": function() { return /* binding */ Logo; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const StyledHeader = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().header)`
    position: fixed;
    z-index: 100;
    width: 100%;
    height: 60px;
    background-color: #66FCF1;
    color: #131D4D;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 5px #5e5b5b;
   
@media (max-width: ${({
  theme
}) => theme.mobileL}) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    
}   
`;
const Ul = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul)`
   list-style: none;
   padding: 0;
   margin-left: 20px;
   display: flex;
   justify-content: center;
   align-items: center;
   
@media (max-width: ${({
  theme
}) => theme.mobileL}) {
       display: none;
}
`;
const Li = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().li)`
    margin: 0 30px;
    
`;
const StyledAnchor = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().a)`
    text-decoration: none;
    cursor: pointer;
    font-size: 1.05rem;
    font-weight: 650;
    transition: color 0.3s linear;
    letter-spacing: 0.5px;
    

    &:hover {
        color: #6c757d;
        
    }
    
`;
const Logo = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().span)`
    margin-right: 20px;
    font-size: 2.2rem;
    font-weight: 700;
    cursor: pointer;

`;

/***/ }),

/***/ "./components/Header/Header.tsx":
/*!**************************************!*\
  !*** ./components/Header/Header.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Header": function() { return /* binding */ Header; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll */ "react-scroll");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Header_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header.styled */ "./components/Header/Header.styled.tsx");


var _jsxFileName = "D:\\web_development\\projekty\\portfolio_v2\\next-typescript-portfolio\\components\\Header\\Header.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const Header = (_ref) => {
  let props = Object.assign({}, _ref);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header_styled__WEBPACK_IMPORTED_MODULE_3__.StyledHeader, _objectSpread(_objectSpread({}, props), {}, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header_styled__WEBPACK_IMPORTED_MODULE_3__.Ul, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Link, {
          to: "domov",
          spy: true,
          smooth: true,
          duration: 1000,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header_styled__WEBPACK_IMPORTED_MODULE_3__.Li, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header_styled__WEBPACK_IMPORTED_MODULE_3__.StyledAnchor, {
              children: "DOMOV"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 33
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 29
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 25
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Link, {
          to: "o-mne",
          spy: true,
          smooth: true,
          duration: 1000,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header_styled__WEBPACK_IMPORTED_MODULE_3__.Li, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header_styled__WEBPACK_IMPORTED_MODULE_3__.StyledAnchor, {
              children: "O MNE"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 33
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 29
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 25
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Link, {
          to: "kontakt",
          spy: true,
          smooth: true,
          duration: 1000,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header_styled__WEBPACK_IMPORTED_MODULE_3__.Li, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header_styled__WEBPACK_IMPORTED_MODULE_3__.StyledAnchor, {
              children: "KONTAKT"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 29
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 25
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 21
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Link, {
        to: "domov",
        spy: true,
        smooth: true,
        duration: 1000,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header_styled__WEBPACK_IMPORTED_MODULE_3__.Logo, {
          children: "Samuel Slivo\u0161"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 25
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 21
      }, undefined)]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, undefined)
  }, void 0, false);
};

/***/ }),

/***/ "./components/Header/Menu/Menu.styled.tsx":
/*!************************************************!*\
  !*** ./components/Header/Menu/Menu.styled.tsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledMenu": function() { return /* binding */ StyledMenu; },
/* harmony export */   "MenuContainer": function() { return /* binding */ MenuContainer; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const StyledMenu = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().nav)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({
  theme
}) => theme.primaryDark};
  height: 100vh;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({
  open
}) => open ? 'translateX(0)' : 'translateX(-100%)'};
  box-shadow: ${({
  open
}) => open ? '5px 5px 20px rgba(0, 0, 0, 0.8)' : ' '};
  
  @media (min-width: 961px) {
    display: none;
  }

  @media (max-width: ${({
  theme
}) => theme.mobileXS}) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({
  theme
}) => theme.primaryLight};
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: ${({
  theme
}) => theme.mobileXS}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({
  theme
}) => theme.primaryHover};
    }
  }
`;
const MenuContainer = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${({
  open
}) => open ? 'rgba(0, 0, 0, 0.3)' : ' '};
  z-index: ${({
  open
}) => open ? '99' : ''};
`;

/***/ }),

/***/ "./components/Header/Menu/Menu.tsx":
/*!*****************************************!*\
  !*** ./components/Header/Menu/Menu.tsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Menu": function() { return /* binding */ Menu; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Menu_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Menu.styled */ "./components/Header/Menu/Menu.styled.tsx");

var _jsxFileName = "D:\\web_development\\projekty\\portfolio_v2\\next-typescript-portfolio\\components\\Header\\Menu\\Menu.tsx";


;
function Menu(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Menu_styled__WEBPACK_IMPORTED_MODULE_2__.MenuContainer, {
    open: props.open,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Menu_styled__WEBPACK_IMPORTED_MODULE_2__.StyledMenu, {
      open: props.open,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "/",
        children: "DOMOV"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "/",
        children: "O MNE"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "/",
        children: "KONTAKT"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 7
  }, this);
}
;

/***/ }),

/***/ "./components/Icons/SvgNextjs.js":
/*!***************************************!*\
  !*** ./components/Icons/SvgNextjs.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\web_development\\projekty\\portfolio_v2\\next-typescript-portfolio\\components\\Icons\\SvgNextjs.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function SvgNextjs(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", _objectSpread(_objectSpread({
    height: "1em",
    viewBox: "0.145 0.207 147.685 89.291",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M34.992 23.495h27.855v2.219H37.546v16.699h23.792v2.219H37.546v18.334h25.591v2.219H34.992zm30.35 0h2.96l13.115 18.334 13.405-18.334L113.055.207 83.1 43.756l15.436 21.429H95.46L81.417 45.683 67.316 65.185h-3.018L79.85 43.756 65.343 23.495zm34.297 2.219v-2.219h31.742v2.219h-14.623v39.47h-2.554v-39.47H99.64zM.145 23.495h3.192l44.011 66.003L29.16 65.185 2.814 26.648l-.116 38.537H.145zm130.98 38.801c-.523 0-.914-.405-.914-.928 0-.524.391-.929.913-.929.528 0 .913.405.913.929 0 .523-.385.928-.913.928zm2.508-2.443H135c.019.742.56 1.24 1.354 1.24.888 0 1.391-.535 1.391-1.539v-6.356h1.391v6.362c0 1.808-1.043 2.849-2.77 2.849-1.62 0-2.732-1.01-2.732-2.556zm7.322-.08h1.379c.118.853.95 1.395 2.149 1.395 1.117 0 1.937-.58 1.937-1.377 0-.685-.521-1.097-1.708-1.377l-1.155-.28c-1.62-.38-2.36-1.166-2.36-2.487 0-1.602 1.304-2.668 3.26-2.668 1.82 0 3.15 1.066 3.23 2.58h-1.354c-.13-.828-.85-1.346-1.894-1.346-1.1 0-1.832.53-1.832 1.34 0 .642.472 1.01 1.64 1.284l.987.243c1.838.43 2.596 1.178 2.596 2.53 0 1.72-1.33 2.799-3.453 2.799-1.987 0-3.323-1.029-3.422-2.637z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (SvgNextjs);

/***/ }),

/***/ "./components/Icons/SvgReactjs.js":
/*!****************************************!*\
  !*** ./components/Icons/SvgReactjs.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\web_development\\projekty\\portfolio_v2\\next-typescript-portfolio\\components\\Icons\\SvgReactjs.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function SvgReactjs(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", _objectSpread(_objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 32 32"
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {
      transform: "translate(.648 2.438) scale(.05696)",
      fill: "none",
      fillRule: "evenodd",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("circle", {
        r: 50.167,
        cy: 237.628,
        cx: 269.529,
        fill: "#00d8ff"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {
        stroke: "#00d8ff",
        strokeWidth: 24,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
          d: "M269.53 135.628c67.356 0 129.928 9.665 177.107 25.907 56.844 19.57 91.794 49.233 91.794 76.093 0 27.99-37.04 59.503-98.083 79.728-46.15 15.29-106.88 23.272-170.818 23.272-65.554 0-127.63-7.492-174.3-23.44C36.184 297.006.62 265.085.62 237.628c0-26.642 33.37-56.076 89.415-75.616 47.355-16.51 111.472-26.384 179.486-26.384z"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
          d: "M180.736 186.922c33.65-58.348 73.28-107.724 110.92-140.48C337.006 6.976 380.163-8.48 403.43 4.937c24.248 13.983 33.042 61.814 20.067 124.796-9.8 47.618-33.234 104.212-65.176 159.6-32.75 56.788-70.25 106.82-107.377 139.272-46.98 41.068-92.4 55.93-116.185 42.213-23.08-13.3-31.906-56.92-20.834-115.233 9.355-49.27 32.832-109.745 66.8-168.664z"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
          d: "M180.82 289.482c-33.745-58.282-56.72-117.287-66.31-166.255-11.544-59-3.382-104.11 19.864-117.566 24.224-14.024 70.055 2.244 118.14 44.94 36.356 32.28 73.688 80.837 105.723 136.173 32.844 56.733 57.46 114.21 67.036 162.582 12.117 61.213 2.31 107.984-21.453 121.74-23.057 13.348-65.25-.784-110.24-39.5-38.013-32.71-78.682-83.253-112.76-142.115z"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (SvgReactjs);

/***/ }),

/***/ "./components/Icons/SvgStorybook.js":
/*!******************************************!*\
  !*** ./components/Icons/SvgStorybook.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\web_development\\projekty\\portfolio_v2\\next-typescript-portfolio\\components\\Icons\\SvgStorybook.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function SvgStorybook(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", _objectSpread(_objectSpread({
    width: "1em",
    height: "1em",
    viewBox: "0 0 256 319",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    preserveAspectRatio: "xMidYMid"
  }, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("defs", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M9.872 293.324L.012 30.574C-.315 21.895 6.338 14.54 15.005 14L238.494.032c8.822-.552 16.42 6.153 16.972 14.975.02.332.031.665.031.998v286.314c0 8.839-7.165 16.004-16.004 16.004-.24 0-.48-.005-.718-.016l-213.627-9.595c-8.32-.373-14.963-7.065-15.276-15.388z",
        id: "storybook_svg__a"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mask", {
      id: "storybook_svg__b",
      fill: "#fff",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("use", {
        xlinkHref: "#storybook_svg__a"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("use", {
      fill: "#FF4785",
      xlinkHref: "#storybook_svg__a"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M188.665 39.127l1.527-36.716L220.884 0l1.322 37.863a2.387 2.387 0 01-3.864 1.96l-11.835-9.325-14.013 10.63a2.387 2.387 0 01-3.829-2.001zm-39.251 80.853c0 6.227 41.942 3.243 47.572-1.131 0-42.402-22.752-64.684-64.415-64.684-41.662 0-65.005 22.628-65.005 56.57 0 59.117 79.78 60.249 79.78 92.494 0 9.052-4.433 14.426-14.184 14.426-12.705 0-17.729-6.49-17.138-28.552 0-4.786-48.458-6.278-49.936 0-3.762 53.466 29.548 68.887 67.665 68.887 36.935 0 65.892-19.687 65.892-55.326 0-63.36-80.961-61.663-80.961-93.06 0-12.728 9.455-14.425 15.07-14.425 5.909 0 16.546 1.042 15.66 24.801z",
      fill: "#FFF",
      mask: "url(#storybook_svg__b)"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, this)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (SvgStorybook);

/***/ }),

/***/ "./components/Icons/SvgStyledComponents.js":
/*!*************************************************!*\
  !*** ./components/Icons/SvgStyledComponents.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\web_development\\projekty\\portfolio_v2\\next-typescript-portfolio\\components\\Icons\\SvgStyledComponents.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function SvgStyledComponents(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", _objectSpread(_objectSpread({
    viewBox: "0 0 318 318",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: "1em",
    height: "1em"
  }, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("defs", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        id: "styled-components_svg__a",
        d: "M0 0h318v318H0z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mask", {
        id: "styled-components_svg__b",
        fill: "#fff",
        height: 318,
        width: 318,
        x: 0,
        y: 0,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("use", {
          xlinkHref: "#styled-components_svg__a"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {
      fill: "none",
      fillRule: "evenodd",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("use", {
        mask: "url(#styled-components_svg__b)",
        stroke: "none",
        strokeWidth: 8,
        xlinkHref: "#styled-components_svg__a"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M44.284 229.416c-4.428 0-7.344 2.376-7.344 5.544 0 2.808 1.728 4.68 5.652 5.76 3.564 1.008 4.32 1.512 4.32 3.096 0 1.44-1.332 2.304-3.384 2.304-1.944 0-3.708-.756-5.184-1.872l-2.304 2.592c1.764 1.584 4.32 2.7 7.596 2.7 4.356 0 8.028-2.088 8.028-6.048 0-3.384-2.196-4.968-6.084-6.012-3.24-.9-3.996-1.476-3.996-2.736 0-1.152 1.044-1.908 2.88-1.908 1.692 0 3.204.54 4.788 1.548l1.8-2.7c-1.8-1.404-4.032-2.268-6.768-2.268zm20.412 15.732l1.62 2.952c-1.368.972-3.096 1.44-4.788 1.44-3.744-.036-5.724-2.16-5.724-6.228v-10.044h-2.988v-3.312h2.988v-4.212l4.608-.54v4.752h4.428l-.468 3.312h-3.96v9.936c0 1.872.612 2.628 2.016 2.628.72 0 1.44-.216 2.268-.684zm19.62-15.192l-6.192 19.116c-1.44 4.464-4.248 7.344-9.9 7.776l-.468-3.348c3.78-.576 5.004-1.8 6.084-4.5h-1.584l-6.048-19.044h4.896l4.14 15.984 4.32-15.984zm7.308 19.584a7.55 7.55 0 003.06-.648l-.972-3.24c-.324.108-.648.18-1.08.18-.756 0-1.08-.432-1.08-1.332v-22.68l-4.608.504v22.32c0 3.132 1.764 4.896 4.68 4.896zm21.744-10.512c0 .612-.072 1.368-.108 1.872h-11.952c.324 3.888 2.16 5.148 4.68 5.148 1.692 0 3.096-.54 4.752-1.692l1.908 2.628c-1.872 1.512-4.176 2.556-7.056 2.556-5.904 0-9.072-3.924-9.072-9.936 0-5.796 3.06-10.188 8.46-10.188 5.328 0 8.388 3.6 8.388 9.612zm-4.572-1.116v-.216c0-3.132-1.116-5.004-3.708-5.004-2.16 0-3.528 1.44-3.78 5.22zm20.124-16.092l4.608.504V249h-4.068l-.324-2.412c-1.152 1.728-2.988 2.952-5.436 2.952-4.752 0-7.236-3.996-7.236-10.044 0-5.868 2.952-10.08 7.668-10.08 2.016 0 3.6.864 4.788 2.052zm-3.924 24.228c1.692 0 2.844-.828 3.924-2.448v-8.712c-1.008-1.224-2.088-2.016-3.636-2.016-2.376 0-3.96 2.016-3.96 6.588 0 4.896 1.404 6.588 3.672 6.588zM44.44 265.416c-5.472 0-8.892 4.14-8.892 10.224s3.42 9.9 8.928 9.9c2.448 0 4.428-.792 6.156-2.196l-2.052-2.916c-1.404.9-2.412 1.368-3.852 1.368-2.592 0-4.284-1.62-4.284-6.228 0-4.572 1.62-6.516 4.284-6.516 1.44 0 2.592.432 3.852 1.368l2.052-2.772c-1.8-1.548-3.708-2.232-6.192-2.232zm17.316 0c5.616 0 8.928 3.816 8.928 10.044 0 6.012-3.348 10.08-8.964 10.08s-8.964-3.816-8.964-10.08c0-5.976 3.348-10.044 9-10.044zm0 3.492c-2.7 0-4.14 2.052-4.14 6.552 0 4.572 1.404 6.588 4.104 6.588s4.104-2.052 4.104-6.588-1.404-6.552-4.068-6.552zm33.444-3.492c-2.52 0-4.284 1.224-5.724 3.204-.72-2.016-2.376-3.204-4.608-3.204-2.412 0-4.14 1.116-5.508 3.024l-.36-2.484h-3.996V285h4.608v-13.248c1.044-1.764 2.016-2.88 3.636-2.88 1.116 0 2.088.684 2.088 3.06V285h4.608v-13.248c1.044-1.764 2.016-2.88 3.6-2.88 1.152 0 2.088.684 2.088 3.06V285h4.608v-13.788c0-3.6-2.016-5.796-5.04-5.796zm20.268 0c4.968 0 7.056 3.924 7.056 10.008 0 5.832-2.7 10.116-7.524 10.116-1.944 0-3.6-.684-4.788-2.088v8.892l-4.608.504v-26.892h4.032l.252 2.34c1.512-1.98 3.528-2.88 5.58-2.88zm-1.764 16.596c2.52 0 3.996-1.944 3.996-6.552 0-4.824-1.296-6.588-3.6-6.588-1.62 0-2.988 1.116-3.888 2.592v8.568c.9 1.332 2.052 1.98 3.492 1.98zm21.132-16.596c5.616 0 8.928 3.816 8.928 10.044 0 6.012-3.348 10.08-8.964 10.08s-8.964-3.816-8.964-10.08c0-5.976 3.348-10.044 9-10.044zm0 3.492c-2.7 0-4.14 2.052-4.14 6.552 0 4.572 1.404 6.588 4.104 6.588s4.104-2.052 4.104-6.588-1.404-6.552-4.068-6.552zm23.4-3.492c-2.412 0-4.32 1.116-5.796 3.024l-.36-2.484h-3.996V285h4.608v-13.248c1.116-1.764 2.34-2.88 3.996-2.88 1.44 0 2.34.684 2.34 3.06V285h4.608v-13.788c0-3.636-1.98-5.796-5.4-5.796zm26.388 9.612c0 .612-.072 1.368-.108 1.872h-11.952c.324 3.888 2.16 5.148 4.68 5.148 1.692 0 3.096-.54 4.752-1.692l1.908 2.628c-1.872 1.512-4.176 2.556-7.056 2.556-5.904 0-9.072-3.924-9.072-9.936 0-5.796 3.06-10.188 8.46-10.188 5.328 0 8.388 3.6 8.388 9.612zm-4.572-1.116v-.216c0-3.132-1.116-5.004-3.708-5.004-2.16 0-3.528 1.44-3.78 5.22zm18.864-8.496c-2.412 0-4.32 1.116-5.796 3.024l-.36-2.484h-3.996V285h4.608v-13.248c1.116-1.764 2.34-2.88 3.996-2.88 1.44 0 2.34.684 2.34 3.06V285h4.608v-13.788c0-3.636-1.98-5.796-5.4-5.796zm20.052 15.732c-.828.468-1.548.684-2.268.684-1.404 0-2.016-.756-2.016-2.628v-9.936h3.96l.468-3.312h-4.428v-4.752l-4.608.54v4.212h-2.988v3.312h2.988v10.044c0 4.068 1.98 6.192 5.724 6.228 1.692 0 3.42-.468 4.788-1.44zm10.224-15.732c-4.428 0-7.344 2.376-7.344 5.544 0 2.808 1.728 4.68 5.652 5.76 3.564 1.008 4.32 1.512 4.32 3.096 0 1.44-1.332 2.304-3.384 2.304-1.944 0-3.708-.756-5.184-1.872l-2.304 2.592c1.764 1.584 4.32 2.7 7.596 2.7 4.356 0 8.028-2.088 8.028-6.048 0-3.384-2.196-4.968-6.084-6.012-3.24-.9-3.996-1.476-3.996-2.736 0-1.152 1.044-1.908 2.88-1.908 1.692 0 3.204.54 4.788 1.548l1.8-2.7c-1.8-1.404-4.032-2.268-6.768-2.268zM79.8 87.2l-36.2 22.5 36.2 22.9-3.7 4.6-37.7-23.6v-7.9l38.1-23.6m189.3 22.7v7.8l-37.7 23.6-3.7-4.9 36.1-22.6L224.4 86l3.2-4.9",
        fill: "aqua"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("text", {
        fill: "#000",
        fontFamily: "AppleColorEmoji, Apple Color Emoji",
        fontSize: 100,
        letterSpacing: 0.5,
        transform: "translate(38 44)",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tspan", {
          x: 70,
          y: 100,
          children: '\uD83D\uDC85'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, this)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (SvgStyledComponents);

/***/ }),

/***/ "./components/Icons/SvgStyledSystem.js":
/*!*********************************************!*\
  !*** ./components/Icons/SvgStyledSystem.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\web_development\\projekty\\portfolio_v2\\next-typescript-portfolio\\components\\Icons\\SvgStyledSystem.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function SvgStyledSystem(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", _objectSpread(_objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "-18 -18 36 36",
    width: "1em",
    height: "1em",
    display: "block",
    overflow: "visible",
    color: "#000",
    fill: "none",
    stroke: "currentColor"
  }, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M0-16l-14 8V8l14 8 14-8V-8L0-16z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M0-16V0m-14 8L0 0l14 8",
      strokeWidth: 0.25
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, this)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (SvgStyledSystem);

/***/ }),

/***/ "./components/Icons/SvgTypescript.js":
/*!*******************************************!*\
  !*** ./components/Icons/SvgTypescript.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\web_development\\projekty\\portfolio_v2\\next-typescript-portfolio\\components\\Icons\\SvgTypescript.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function SvgTypescript(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", _objectSpread(_objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 400 400",
    width: "1em",
    height: "1em"
  }, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M0 200V0h400v400H0",
      fill: "#007acc"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M87.7 200.7V217h52v148h36.9V217h52v-16c0-9 0-16.3-.4-16.5 0-.3-31.7-.4-70.2-.4l-70 .3v16.4l-.3-.1zM321.4 184c10.2 2.4 18 7 25 14.3 3.7 4 9.2 11 9.6 12.8 0 .6-17.3 12.3-27.8 18.8-.4.3-2-1.4-3.6-4-5.2-7.4-10.5-10.6-18.8-11.2-12-.8-20 5.5-20 16 0 3.2.6 5 1.8 7.6 2.7 5.5 7.7 8.8 23.2 15.6 28.6 12.3 41 20.4 48.5 32 8.5 13 10.4 33.4 4.7 48.7-6.4 16.7-22 28-44.3 31.7-7 1.2-23 1-30.5-.3-16-3-31.3-11-40.7-21.3-3.7-4-10.8-14.7-10.4-15.4l3.8-2.4 15-8.7 11.3-6.6 2.6 3.5c3.3 5.2 10.7 12.2 15 14.6 13 6.7 30.4 5.8 39-2 3.7-3.4 5.3-7 5.3-12 0-4.6-.7-6.7-3-10.2-3.2-4.4-9.6-8-27.6-16-20.7-8.8-29.5-14.4-37.7-23-4.7-5.2-9-13.3-11-20-1.5-5.8-2-20-.6-25.7 4.3-20 19.4-34 41-38 7-1.4 23.5-.8 30.4 1l-.2.2z",
      fill: "#fff"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, this)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (SvgTypescript);

/***/ }),

/***/ "./components/MainSection/MainSection.styled.tsx":
/*!*******************************************************!*\
  !*** ./components/MainSection/MainSection.styled.tsx ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainSecContainer": function() { return /* binding */ MainSecContainer; },
/* harmony export */   "SectionWelcome": function() { return /* binding */ SectionWelcome; },
/* harmony export */   "StyledH1": function() { return /* binding */ StyledH1; },
/* harmony export */   "StyledP": function() { return /* binding */ StyledP; },
/* harmony export */   "SocialContainer": function() { return /* binding */ SocialContainer; },
/* harmony export */   "SocialWrapper": function() { return /* binding */ SocialWrapper; },
/* harmony export */   "SocialLink": function() { return /* binding */ SocialLink; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const MainSecContainer = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
    height: 100vh;
    width: 100%;
    background: linear-gradient( 
    rgba(19,29,77,0.6),
    rgba(19,29,77,0.6)
    ),
    url("/images/img1.jpg") center center/cover
    no-repeat;
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const SectionWelcome = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;
const StyledH1 = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().h1)`
    font-size: 10rem;
    font-weight: bold;
    margin: 0;
    color: #66FCF1;
    margin-top: -100px;

@media (max-width: ${({
  theme
}) => theme.mobileM}) {
    font-size: 8.5rem;
}

@media (max-width: ${({
  theme
}) => theme.mobileXS}) {
    font-size: 7rem;
}
`;
const StyledP = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().p)`
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
    margin: 0;
    color: #C5C6C7;

@media (max-width: ${({
  theme
}) => theme.mobileM}) {
    font-size: 1.3rem;
}

@media (max-width: ${({
  theme
}) => theme.mobileXS}) {
    font-size: 1.15rem;
}
`;
const SocialContainer = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`

`;
const SocialWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
    
`;
const SocialLink = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().a)`
    color: #fff;
    font-size: 1.5rem;
    cursor: pointer;
    transition: color 0.3s linear;
    position: relative;
    top: 30px;

    &:hover {
        color: #66FCF1;
    }
`;

/***/ }),

/***/ "./components/MainSection/MainSection.tsx":
/*!************************************************!*\
  !*** ./components/MainSection/MainSection.tsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainSection": function() { return /* binding */ MainSection; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MainSection_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MainSection.styled */ "./components/MainSection/MainSection.styled.tsx");
/* harmony import */ var _Arrow_Arrow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Arrow/Arrow */ "./components/Arrow/Arrow.tsx");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fi */ "react-icons/fi");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "D:\\web_development\\projekty\\portfolio_v2\\next-typescript-portfolio\\components\\MainSection\\MainSection.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





;
const MainSection = (_ref) => {
  let props = Object.assign({}, _ref);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MainSection_styled__WEBPACK_IMPORTED_MODULE_2__.MainSecContainer, {
    id: "domov",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MainSection_styled__WEBPACK_IMPORTED_MODULE_2__.SectionWelcome, _objectSpread(_objectSpread({}, props), {}, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MainSection_styled__WEBPACK_IMPORTED_MODULE_2__.StyledH1, {
        children: "Vitajte"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 20
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MainSection_styled__WEBPACK_IMPORTED_MODULE_2__.StyledP, {
        children: ["Vol\xE1m sa Samuel a moj\xEDm zameran\xEDm je Front End Development.", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 20
        }, undefined), "R\xE1d sa ponor\xEDm do svojej fant\xE1zie a jej v\xFDsledok prenesiem do k\xF3du.", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 20
        }, undefined), "Bav\xED ma tvori\u0165 zauj\xEDmav\xE9 a modern\xE9 web str\xE1nky."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 20
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MainSection_styled__WEBPACK_IMPORTED_MODULE_2__.SocialContainer, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MainSection_styled__WEBPACK_IMPORTED_MODULE_2__.SocialWrapper, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MainSection_styled__WEBPACK_IMPORTED_MODULE_2__.SocialLink, {
            href: "http://github.com/",
            target: "_blank",
            rel: "noopener noreferrer",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__.FiGithub, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 32
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 28
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 24
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 20
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Arrow_Arrow__WEBPACK_IMPORTED_MODULE_3__.Arrow, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 20
      }, undefined)]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 16
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 12
  }, undefined);
};

/***/ }),

/***/ "./components/TechnologyList/NextT/NextT.styled.tsx":
/*!**********************************************************!*\
  !*** ./components/TechnologyList/NextT/NextT.styled.tsx ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledNextT": function() { return /* binding */ StyledNextT; },
/* harmony export */   "SvgNext": function() { return /* binding */ SvgNext; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Icons_SvgNextjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Icons/SvgNextjs */ "./components/Icons/SvgNextjs.js");


const StyledNextT = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().span)`
    font-size: 1.1rem;
    font-weight: 600;
    color: #C5C6C7;
    position: absolute;
    top: 45px;
    left: 335px;

    strong {
        color: #C9D0D3;
    }

@media (max-width: ${({
  theme
}) => theme.laptop}) {
    font-size: 1rem;
    left: 280px;
    top: 20px;
}

@media (max-width: ${({
  theme
}) => theme.mobileS}) {
    font-size: 1rem;
    float: right;
    margin-top: 10px;
    margin-left: -80px;
}

@media (max-width: ${({
  theme
}) => theme.mobileXXS}) {
    margin-left: -90px;
}

@media (max-width: ${({
  theme
}) => theme.mobile3XS}) {
    margin-left: -110px;
}
`;
const SvgNext = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Icons_SvgNextjs__WEBPACK_IMPORTED_MODULE_1__.default)`
    font-size: 2.2rem;
    fill: #C9D0D3;
    display: block;
    margin: auto;
`;

/***/ }),

/***/ "./components/TechnologyList/ReactT/ReactT.styled.tsx":
/*!************************************************************!*\
  !*** ./components/TechnologyList/ReactT/ReactT.styled.tsx ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledReactT": function() { return /* binding */ StyledReactT; },
/* harmony export */   "SvgReact": function() { return /* binding */ SvgReact; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Icons_SvgReactjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Icons/SvgReactjs */ "./components/Icons/SvgReactjs.js");


const StyledReactT = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().span)`
    font-size: 1.1rem;
    font-weight: 600;
    color: #C5C6C7;
    position: absolute;
    left: 80px;
    top: 5px;

    strong {
        color: #00D8FF;
    }

@media (max-width: ${({
  theme
}) => theme.laptop}) {
    font-size: 1rem;
    left: 70px;
    top: -10px;
}

@media (max-width: ${({
  theme
}) => theme.mobileS}) {
    font-size: 1rem;
    float: left;
}

@media (max-width: ${({
  theme
}) => theme.mobile3XS}) {
    margin-left: 20px;
}
`;
const SvgReact = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Icons_SvgReactjs__WEBPACK_IMPORTED_MODULE_1__.default)`
    font-size: 2.2rem;
    display: block;
    margin: auto;

`;

/***/ }),

/***/ "./components/TechnologyList/StorybookT/StorybookT.styled.tsx":
/*!********************************************************************!*\
  !*** ./components/TechnologyList/StorybookT/StorybookT.styled.tsx ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledStorybook": function() { return /* binding */ StyledStorybook; },
/* harmony export */   "SvgStory": function() { return /* binding */ SvgStory; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Icons_SvgStorybook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Icons/SvgStorybook */ "./components/Icons/SvgStorybook.js");


const StyledStorybook = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().span)`
    font-size: 1.1rem;
    font-weight: 600;
    color: #C5C6C7;
    position: absolute;
    top: 240px;
    left: 315px;
    

    strong {
        color: #FF4785;
    }

@media (max-width: ${({
  theme
}) => theme.laptop}) {
    font-size: 1rem;
    left: 260px;
    top: 175px;
}

@media (max-width: ${({
  theme
}) => theme.mobileS}) {
    font-size: 1rem;
    float: right;
    margin-top: 70px;
    margin-left: -80px;
}

@media (max-width: ${({
  theme
}) => theme.mobileXXS}) {
    margin-left: -90px;
}

@media (max-width: ${({
  theme
}) => theme.mobile3XS}) {
    margin-left: -110px;
}
`;
const SvgStory = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Icons_SvgStorybook__WEBPACK_IMPORTED_MODULE_1__.default)`
    font-size: 2.2rem;
    display: block;
    margin: auto;
    

`;

/***/ }),

/***/ "./components/TechnologyList/StyledComponentsT/StyledComponentsT.styled.tsx":
/*!**********************************************************************************!*\
  !*** ./components/TechnologyList/StyledComponentsT/StyledComponentsT.styled.tsx ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledCompT": function() { return /* binding */ StyledCompT; },
/* harmony export */   "SvgStyledComp": function() { return /* binding */ SvgStyledComp; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Icons_SvgStyledComponents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Icons/SvgStyledComponents */ "./components/Icons/SvgStyledComponents.js");


const StyledCompT = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().span)`
    font-size: 1.1rem;
    font-weight: 600;
    color: #C5C6C7;
    position: absolute;
    top: 150px;
    left: 190px;

    strong {
        color: #D3B83D;
    }

@media (max-width: ${({
  theme
}) => theme.laptop}) {
    font-size: 1rem;
    left: 150px;
    top: 105px;
}

@media (max-width: ${({
  theme
}) => theme.mobileS}) {
    font-size: 1rem;
    float: right;
    margin-top: 20px;
    margin-left: -80px;
}

@media (max-width: ${({
  theme
}) => theme.mobileXXS}) {
    margin-left: -90px;
}

@media (max-width: ${({
  theme
}) => theme.mobile3XS}) {
    margin-left: -110px;
}
`;
const SvgStyledComp = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Icons_SvgStyledComponents__WEBPACK_IMPORTED_MODULE_1__.default)`
    font-size: 3rem;
    display: block;
    margin: auto;
`;

/***/ }),

/***/ "./components/TechnologyList/StyledSystemT/StyledSystemT.styled.tsx":
/*!**************************************************************************!*\
  !*** ./components/TechnologyList/StyledSystemT/StyledSystemT.styled.tsx ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledSys": function() { return /* binding */ StyledSys; },
/* harmony export */   "SvgStyledSys": function() { return /* binding */ SvgStyledSys; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Icons_SvgStyledSystem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Icons/SvgStyledSystem */ "./components/Icons/SvgStyledSystem.js");


const StyledSys = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().span)`
    font-size: 1.1rem;
    font-weight: 600;
    color: #C5C6C7;
    position: absolute;
    top: 200px;
    left: 80px;

    strong {
        color: #000;
    }

@media (max-width: ${({
  theme
}) => theme.laptop}) {
    font-size: 1rem;
    left: 70px;
    top: 145px;
}

@media (max-width: ${({
  theme
}) => theme.mobileS}) {
    font-size: 1rem;
    float: left;
    margin-top: 40px;
}

@media (max-width: ${({
  theme
}) => theme.mobile3XS}) {
    margin-left: 20px;
}
`;
const SvgStyledSys = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Icons_SvgStyledSystem__WEBPACK_IMPORTED_MODULE_1__.default)`
    font-size: 2.2rem;
    display: block;
    margin: auto;
`;

/***/ }),

/***/ "./components/TechnologyList/TypescriptT/TypescriptT.styled.tsx":
/*!**********************************************************************!*\
  !*** ./components/TechnologyList/TypescriptT/TypescriptT.styled.tsx ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledTypescript": function() { return /* binding */ StyledTypescript; },
/* harmony export */   "SvgType": function() { return /* binding */ SvgType; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Icons_SvgTypescript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Icons/SvgTypescript */ "./components/Icons/SvgTypescript.js");


const StyledTypescript = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().span)`
    font-size: 1.1rem;
    font-weight: 600;
    color: #C5C6C7;
    position: absolute;
    top: 90px;
    left: 80px;

    strong {
        color: #3d92ca;
    }

@media (max-width: ${({
  theme
}) => theme.laptop}) {
    font-size: 1rem;
    left: 70px;
    top: 60px;
}

@media (max-width: ${({
  theme
}) => theme.mobileS}) {
    font-size: 1rem;
    float: left;
    margin-top: 10px;
}

@media (max-width: ${({
  theme
}) => theme.mobile3XS}) {
    margin-left: 20px;
}
`;
const SvgType = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Icons_SvgTypescript__WEBPACK_IMPORTED_MODULE_1__.default)`
    font-size: 2.2rem;
    display: block;
    margin: auto;
`;

/***/ }),

/***/ "./components/particles/GlobalStyle.tsx":
/*!**********************************************!*\
  !*** ./components/particles/GlobalStyle.tsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalStyle": function() { return /* binding */ GlobalStyle; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle`
html, body {
  padding: 0;
  margin: 0;
  top: 0;
  left: 0;
  font-family: 'Cairo', 'Segoe UI', Arial, Geneva, Verdana, sans-serif
}

* {
  box-sizing: border-box;
  /* outline: 3px solid black; */
}
`;

/***/ }),

/***/ "./components/particles/theme.tsx":
/*!****************************************!*\
  !*** ./components/particles/theme.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "theme": function() { return /* binding */ theme; }
/* harmony export */ });
const theme = {
  primaryDark: '#0D0C1D',
  primaryLight: '#999999',
  primaryBurger: '#131D4D',
  primaryHover: '#2c7191',
  mobile5XS: '390px',
  mobile4XS: '444px',
  mobile3XS: '505px',
  mobileXXS: '518px',
  mobileXS: '576px',
  mobileS: '620px',
  mobileM: '768px',
  mobileL: '960px',
  laptop: '1395px'
};

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header/Header */ "./components/Header/Header.tsx");
/* harmony import */ var _components_Header_Burger_Burger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header/Burger/Burger */ "./components/Header/Burger/Burger.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_particles_GlobalStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/particles/GlobalStyle */ "./components/particles/GlobalStyle.tsx");
/* harmony import */ var _components_particles_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/particles/theme */ "./components/particles/theme.tsx");
/* harmony import */ var _components_MainSection_MainSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/MainSection/MainSection */ "./components/MainSection/MainSection.tsx");
/* harmony import */ var _components_Cards_CardItem_CardItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Cards/CardItem/CardItem */ "./components/Cards/CardItem/CardItem.tsx");

var _jsxFileName = "D:\\web_development\\projekty\\portfolio_v2\\next-typescript-portfolio\\pages\\index.tsx";








function Home() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(styled_components__WEBPACK_IMPORTED_MODULE_4__.ThemeProvider, {
    theme: _components_particles_theme__WEBPACK_IMPORTED_MODULE_6__.theme,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_particles_GlobalStyle__WEBPACK_IMPORTED_MODULE_5__.GlobalStyle, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header_Header__WEBPACK_IMPORTED_MODULE_2__.Header, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header_Burger_Burger__WEBPACK_IMPORTED_MODULE_3__.Burger, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MainSection_MainSection__WEBPACK_IMPORTED_MODULE_7__.MainSection, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Cards_CardItem_CardItem__WEBPACK_IMPORTED_MODULE_8__.CardItem, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, this);
}
;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-icons/fi":
/*!*********************************!*\
  !*** external "react-icons/fi" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-icons/fi");;

/***/ }),

/***/ "react-scroll":
/*!*******************************!*\
  !*** external "react-scroll" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-scroll");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXR5cGVzY3JpcHQtcG9ydGZvbGlvLy4vY29tcG9uZW50cy9BcnJvdy9BcnJvdy5zdHlsZWQudHN4Iiwid2VicGFjazovL25leHQtdHlwZXNjcmlwdC1wb3J0Zm9saW8vLi9jb21wb25lbnRzL0Fycm93L0Fycm93LnRzeCIsIndlYnBhY2s6Ly9uZXh0LXR5cGVzY3JpcHQtcG9ydGZvbGlvLy4vY29tcG9uZW50cy9DYXJkcy9DYXJkSXRlbS9DYXJkSXRlbS5zdHlsZWQudHN4Iiwid2VicGFjazovL25leHQtdHlwZXNjcmlwdC1wb3J0Zm9saW8vLi9jb21wb25lbnRzL0NhcmRzL0NhcmRJdGVtL0NhcmRJdGVtLnRzeCIsIndlYnBhY2s6Ly9uZXh0LXR5cGVzY3JpcHQtcG9ydGZvbGlvLy4vY29tcG9uZW50cy9FbW9qaXMvQm95L0JveS5zdHlsZWQudHN4Iiwid2VicGFjazovL25leHQtdHlwZXNjcmlwdC1wb3J0Zm9saW8vLi9jb21wb25lbnRzL0Vtb2ppcy9Cb3kvQm95LnRzeCIsIndlYnBhY2s6Ly9uZXh0LXR5cGVzY3JpcHQtcG9ydGZvbGlvLy4vY29tcG9uZW50cy9FbW9qaXMvUGhvbmUvUGhvbmUuc3R5bGVkLnRzeCIsIndlYnBhY2s6Ly9uZXh0LXR5cGVzY3JpcHQtcG9ydGZvbGlvLy4vY29tcG9uZW50cy9FbW9qaXMvUGhvbmUvUGhvbmUudHN4Iiwid2VicGFjazovL25leHQtdHlwZXNjcmlwdC1wb3J0Zm9saW8vLi9jb21wb25lbnRzL0Vtb2ppcy9UZWNobm9sb2dpZXMvVGVjaG5vbG9naWVzLnN0eWxlZC50c3giLCJ3ZWJwYWNrOi8vbmV4dC10eXBlc2NyaXB0LXBvcnRmb2xpby8uL2NvbXBvbmVudHMvRW1vamlzL1RlY2hub2xvZ2llcy9UZWNobm9sb2dpZXMudHN4Iiwid2VicGFjazovL25leHQtdHlwZXNjcmlwdC1wb3J0Zm9saW8vLi9jb21wb25lbnRzL0hlYWRlci9CdXJnZXIvQnVyZ2VyLnN0eWxlZC50c3giLCJ3ZWJwYWNrOi8vbmV4dC10eXBlc2NyaXB0LXBvcnRmb2xpby8uL2NvbXBvbmVudHMvSGVhZGVyL0J1cmdlci9CdXJnZXIudHN4Iiwid2VicGFjazovL25leHQtdHlwZXNjcmlwdC1wb3J0Zm9saW8vLi9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuc3R5bGVkLnRzeCIsIndlYnBhY2s6Ly9uZXh0LXR5cGVzY3JpcHQtcG9ydGZvbGlvLy4vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLnRzeCIsIndlYnBhY2s6Ly9uZXh0LXR5cGVzY3JpcHQtcG9ydGZvbGlvLy4vY29tcG9uZW50cy9IZWFkZXIvTWVudS9NZW51LnN0eWxlZC50c3giLCJ3ZWJwYWNrOi8vbmV4dC10eXBlc2NyaXB0LXBvcnRmb2xpby8uL2NvbXBvbmVudHMvSGVhZGVyL01lbnUvTWVudS50c3giLCJ3ZWJwYWNrOi8vbmV4dC10eXBlc2NyaXB0LXBvcnRmb2xpby8uL2NvbXBvbmVudHMvSWNvbnMvU3ZnTmV4dGpzLmpzIiwid2VicGFjazovL25leHQtdHlwZXNjcmlwdC1wb3J0Zm9saW8vLi9jb21wb25lbnRzL0ljb25zL1N2Z1JlYWN0anMuanMiLCJ3ZWJwYWNrOi8vbmV4dC10eXBlc2NyaXB0LXBvcnRmb2xpby8uL2NvbXBvbmVudHMvSWNvbnMvU3ZnU3Rvcnlib29rLmpzIiwid2VicGFjazovL25leHQtdHlwZXNjcmlwdC1wb3J0Zm9saW8vLi9jb21wb25lbnRzL0ljb25zL1N2Z1N0eWxlZENvbXBvbmVudHMuanMiLCJ3ZWJwYWNrOi8vbmV4dC10eXBlc2NyaXB0LXBvcnRmb2xpby8uL2NvbXBvbmVudHMvSWNvbnMvU3ZnU3R5bGVkU3lzdGVtLmpzIiwid2VicGFjazovL25leHQtdHlwZXNjcmlwdC1wb3J0Zm9saW8vLi9jb21wb25lbnRzL0ljb25zL1N2Z1R5cGVzY3JpcHQuanMiLCJ3ZWJwYWNrOi8vbmV4dC10eXBlc2NyaXB0LXBvcnRmb2xpby8uL2NvbXBvbmVudHMvTWFpblNlY3Rpb24vTWFpblNlY3Rpb24uc3R5bGVkLnRzeCIsIndlYnBhY2s6Ly9uZXh0LXR5cGVzY3JpcHQtcG9ydGZvbGlvLy4vY29tcG9uZW50cy9NYWluU2VjdGlvbi9NYWluU2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vbmV4dC10eXBlc2NyaXB0LXBvcnRmb2xpby8uL2NvbXBvbmVudHMvVGVjaG5vbG9neUxpc3QvTmV4dFQvTmV4dFQuc3R5bGVkLnRzeCIsIndlYnBhY2s6Ly9uZXh0LXR5cGVzY3JpcHQtcG9ydGZvbGlvLy4vY29tcG9uZW50cy9UZWNobm9sb2d5TGlzdC9SZWFjdFQvUmVhY3RULnN0eWxlZC50c3giLCJ3ZWJwYWNrOi8vbmV4dC10eXBlc2NyaXB0LXBvcnRmb2xpby8uL2NvbXBvbmVudHMvVGVjaG5vbG9neUxpc3QvU3Rvcnlib29rVC9TdG9yeWJvb2tULnN0eWxlZC50c3giLCJ3ZWJwYWNrOi8vbmV4dC10eXBlc2NyaXB0LXBvcnRmb2xpby8uL2NvbXBvbmVudHMvVGVjaG5vbG9neUxpc3QvU3R5bGVkQ29tcG9uZW50c1QvU3R5bGVkQ29tcG9uZW50c1Quc3R5bGVkLnRzeCIsIndlYnBhY2s6Ly9uZXh0LXR5cGVzY3JpcHQtcG9ydGZvbGlvLy4vY29tcG9uZW50cy9UZWNobm9sb2d5TGlzdC9TdHlsZWRTeXN0ZW1UL1N0eWxlZFN5c3RlbVQuc3R5bGVkLnRzeCIsIndlYnBhY2s6Ly9uZXh0LXR5cGVzY3JpcHQtcG9ydGZvbGlvLy4vY29tcG9uZW50cy9UZWNobm9sb2d5TGlzdC9UeXBlc2NyaXB0VC9UeXBlc2NyaXB0VC5zdHlsZWQudHN4Iiwid2VicGFjazovL25leHQtdHlwZXNjcmlwdC1wb3J0Zm9saW8vLi9jb21wb25lbnRzL3BhcnRpY2xlcy9HbG9iYWxTdHlsZS50c3giLCJ3ZWJwYWNrOi8vbmV4dC10eXBlc2NyaXB0LXBvcnRmb2xpby8uL2NvbXBvbmVudHMvcGFydGljbGVzL3RoZW1lLnRzeCIsIndlYnBhY2s6Ly9uZXh0LXR5cGVzY3JpcHQtcG9ydGZvbGlvLy4vcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovL25leHQtdHlwZXNjcmlwdC1wb3J0Zm9saW8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL25leHQtdHlwZXNjcmlwdC1wb3J0Zm9saW8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9maVwiIiwid2VicGFjazovL25leHQtdHlwZXNjcmlwdC1wb3J0Zm9saW8vZXh0ZXJuYWwgXCJyZWFjdC1zY3JvbGxcIiIsIndlYnBhY2s6Ly9uZXh0LXR5cGVzY3JpcHQtcG9ydGZvbGlvL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vbmV4dC10eXBlc2NyaXB0LXBvcnRmb2xpby9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsiU3R5bGVkQXJyb3ciLCJzdHlsZWQiLCJ0aGVtZSIsIm1vYmlsZVMiLCJBcnJvdyIsIkNhcmRDb250YWluZXIiLCJDYXJkV3JhcHBlciIsIlN0eWxlZENhcmQiLCJsYXB0b3AiLCJDYXJkQWJvdXRNZSIsIkNhcmRDb250YWN0IiwiSDFDYXJkIiwiUGFyYWdyYXBoIiwiUGFyYWdyYXBoRXh0ZW5kZWQiLCJBY3Rpdml0eVdyYXBwZXIiLCJTcG9ydCIsIldvcmtvdXQiLCJNdGIiLCJCb29rcyIsIlBvb2xzIiwiVGVjaENvbnRhaW5lciIsIlRlY2hXcmFwcGVyIiwiVGVjaFdyYXBwZXIyIiwiQ2FyZEl0ZW0iLCJTdHlsZWRCb3kiLCJtb2JpbGU0WFMiLCJtb2JpbGU1WFMiLCJCb3kiLCJwcm9wcyIsImxhYmVsIiwic3ltYm9sIiwiU3R5bGVkUGhvbmUiLCJQaG9uZSIsIlN0eWxlZFRlY2hub2xvZ2llcyIsIlRlY2hub2xvZ2llcyIsIlN0eWxlZEJ1cmdlciIsInByaW1hcnlCdXJnZXIiLCJvcGVuIiwiQnVyZ2VyIiwic2V0T3BlbiIsInVzZVN0YXRlIiwiU3R5bGVkSGVhZGVyIiwibW9iaWxlTCIsIlVsIiwiTGkiLCJTdHlsZWRBbmNob3IiLCJMb2dvIiwiSGVhZGVyIiwiU3R5bGVkTWVudSIsInByaW1hcnlEYXJrIiwibW9iaWxlWFMiLCJwcmltYXJ5TGlnaHQiLCJwcmltYXJ5SG92ZXIiLCJNZW51Q29udGFpbmVyIiwiTWVudSIsIlN2Z05leHRqcyIsIlN2Z1JlYWN0anMiLCJTdmdTdG9yeWJvb2siLCJTdmdTdHlsZWRDb21wb25lbnRzIiwiU3ZnU3R5bGVkU3lzdGVtIiwiU3ZnVHlwZXNjcmlwdCIsIk1haW5TZWNDb250YWluZXIiLCJTZWN0aW9uV2VsY29tZSIsIlN0eWxlZEgxIiwibW9iaWxlTSIsIlN0eWxlZFAiLCJTb2NpYWxDb250YWluZXIiLCJTb2NpYWxXcmFwcGVyIiwiU29jaWFsTGluayIsIk1haW5TZWN0aW9uIiwiU3R5bGVkTmV4dFQiLCJtb2JpbGVYWFMiLCJtb2JpbGUzWFMiLCJTdmdOZXh0IiwiU3R5bGVkUmVhY3RUIiwiU3ZnUmVhY3QiLCJTdHlsZWRTdG9yeWJvb2siLCJTdmdTdG9yeSIsIlN0eWxlZENvbXBUIiwiU3ZnU3R5bGVkQ29tcCIsIlN0eWxlZFN5cyIsIlN2Z1N0eWxlZFN5cyIsIlN0eWxlZFR5cGVzY3JpcHQiLCJTdmdUeXBlIiwiR2xvYmFsU3R5bGUiLCJjcmVhdGVHbG9iYWxTdHlsZSIsIkhvbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLE1BQU1BLFdBQVcsR0FBR0MsOERBQVc7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNDLE9BQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBaERPLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGUDtB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QTtBQUFBLGNBRkYsZUFHRSw4REFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEYsZUFJRSw4REFBQyw0RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkYsZUFLRSw4REFBQyx5RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBV0Q7QUFBQSxDOzs7Ozs7Ozs7OztBQzdCRCxtQzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSwrQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0eWxlZEFycm93ID0gc3R5bGVkLmRpdmBcclxuICAgIFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA4NSU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG5cclxuXHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjOEJFOUZEO1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogNXB4IHNvbGlkICNmMjg1MDA7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAgIG1hcmdpbjogLTEwcHg7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBhbmltYXRlIDJzIGluZmluaXRlO1xyXG5cclxuICAgICAgICA6bnRoLWNoaWxkKDIpe1xyXG4gICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjJzO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIDpudGgtY2hpbGQoMyl7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuNHM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1vYmlsZVN9KSB7XHJcbiAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBrZXlmcmFtZXMgYW5pbWF0ZSB7XHJcbiAgICAgICAgMCUge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKC0yMHB4LC0yMHB4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIDUwJSB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZSgyMHB4LDIwcHgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuYFxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBTdHlsZWRBcnJvdyB9IGZyb20gJy4vQXJyb3cuc3R5bGVkJztcclxuXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgQXJyb3c6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8U3R5bGVkQXJyb3c+XHJcbiAgICAgICAgICAgIDxzcGFuIC8+XHJcbiAgICAgICAgICAgIDxzcGFuIC8+XHJcbiAgICAgICAgICAgIDxzcGFuIC8+XHJcbiAgICAgICAgPC9TdHlsZWRBcnJvdz5cclxuICAgIClcclxufTtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgQ2FyZENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzIzQTQyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgQ2FyZFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFN0eWxlZENhcmQgPSBzdHlsZWQuZGl2YFxyXG4gICAgaGVpZ2h0OiAyNWVtO1xyXG4gICAgd2lkdGg6IDM1ZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA0Yzk5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci1ib3R0b206IDZweCBzb2xpZCAjNjZGQ0YxO1xyXG4gICAgbWFyZ2luOiAxMHB4IDMwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggMzBweCByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5sYXB0b3B9KSB7XHJcbiAgICBoZWlnaHQ6IDIwZW07XHJcbiAgICB3aWR0aDogMzBlbTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubW9iaWxlU30pIHtcclxuICAgIGhlaWdodDogMzRlbTtcclxuICAgIHdpZHRoOiAyM2VtO1xyXG59XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJkQWJvdXRNZSA9IHN0eWxlZChTdHlsZWRDYXJkKWBcclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1vYmlsZVN9KSB7XHJcbiAgICBoZWlnaHQ6IDMwZW07XHJcbiAgICB3aWR0aDogMjNlbTtcclxufVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgQ2FyZENvbnRhY3QgPSBzdHlsZWQoU3R5bGVkQ2FyZClgXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tb2JpbGVTfSkge1xyXG4gICAgaGVpZ2h0OiAyNmVtO1xyXG4gICAgd2lkdGg6IDIzZW07XHJcbn1cclxuYFxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBIMUNhcmQgPSBzdHlsZWQuaDFgXHJcbiAgICBmb250LXNpemU6IDEuN3JlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogIzY2RkNGMTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFBhcmFncmFwaCA9IHN0eWxlZC5wYFxyXG4gICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICNDNUM2Qzc7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgaGVpZ2h0OiAxNGVtO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5sYXB0b3B9KSB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbn0gICAgXHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBQYXJhZ3JhcGhFeHRlbmRlZCA9IHN0eWxlZChQYXJhZ3JhcGgpYFxyXG4gICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA2OC41MHB4O1xyXG4gICAgaGVpZ2h0OiAxMGVtO1xyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubGFwdG9wfSkge1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG59IFxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubW9iaWxlU30pIHtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgbWFyZ2luLXRvcDogNjBweDtcclxuICAgIGhlaWdodDogMTBlbTtcclxufVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgQWN0aXZpdHlXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgU3BvcnQgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgY29sb3I6ICMwNmQ2YTA7XHJcblxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgV29ya291dCA9IHN0eWxlZChTcG9ydClgXHJcbiAgICBjb2xvcjogI2ZmZDYwYTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgTXRiID0gc3R5bGVkKFdvcmtvdXQpYFxyXG4gICAgY29sb3I6ICM3NmM4OTM7XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBCb29rcyA9IHN0eWxlZChNdGIpYFxyXG4gICAgY29sb3I6ICNkZGExNWU7XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBQb29scyA9IHN0eWxlZChCb29rcylgXHJcbiAgICBjb2xvcjogIzRjYzlmMDtcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFRlY2hDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjQzVDNkM3O1xyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgVGVjaFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmxhcHRvcH0pIHtcclxuICAgIG1hcmdpbi10b3A6IDBweDsgICAgXHJcbn1cclxuICAgIFxyXG4gICBkaXYge1xyXG4gICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBUZWNoV3JhcHBlcjIgPSBzdHlsZWQoVGVjaFdyYXBwZXIpYFxyXG4gICBcclxuYFxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCb3kgfSBmcm9tICcuLi8uLi9FbW9qaXMvQm95L0JveSc7XHJcbmltcG9ydCB7IFBob25lIH0gZnJvbSAnLi4vLi4vRW1vamlzL1Bob25lL1Bob25lJztcclxuaW1wb3J0IHsgVGVjaG5vbG9naWVzIH0gZnJvbSAnLi4vLi4vRW1vamlzL1RlY2hub2xvZ2llcy9UZWNobm9sb2dpZXMnO1xyXG5pbXBvcnQgeyBTdmdOZXh0IH0gZnJvbSAnLi4vLi4vVGVjaG5vbG9neUxpc3QvTmV4dFQvTmV4dFQuc3R5bGVkJztcclxuaW1wb3J0IHsgU3ZnUmVhY3QgfSBmcm9tICcuLi8uLi9UZWNobm9sb2d5TGlzdC9SZWFjdFQvUmVhY3RULnN0eWxlZCc7XHJcbmltcG9ydCB7IFN2Z1N0b3J5IH0gZnJvbSAnLi4vLi4vVGVjaG5vbG9neUxpc3QvU3Rvcnlib29rVC9TdG9yeWJvb2tULnN0eWxlZCc7XHJcbmltcG9ydCB7IFN2Z1N0eWxlZENvbXAgfSBmcm9tICcuLi8uLi9UZWNobm9sb2d5TGlzdC9TdHlsZWRDb21wb25lbnRzVC9TdHlsZWRDb21wb25lbnRzVC5zdHlsZWQnO1xyXG5pbXBvcnQgeyBTdmdTdHlsZWRTeXMgfSBmcm9tICcuLi8uLi9UZWNobm9sb2d5TGlzdC9TdHlsZWRTeXN0ZW1UL1N0eWxlZFN5c3RlbVQuc3R5bGVkJztcclxuaW1wb3J0IHsgU3ZnVHlwZSB9IGZyb20gJy4uLy4uL1RlY2hub2xvZ3lMaXN0L1R5cGVzY3JpcHRUL1R5cGVzY3JpcHRULnN0eWxlZCc7XHJcbi8vIGltcG9ydCB7IE5leHRUIH0gZnJvbSAnLi4vLi4vVGVjaG5vbG9neUxpc3QvTmV4dFQvTmV4dFQnO1xyXG4vLyBpbXBvcnQgeyBSZWFjdFQgfSBmcm9tICcuLi8uLi9UZWNobm9sb2d5TGlzdC9SZWFjdFQvUmVhY3RUJztcclxuLy8gaW1wb3J0IHsgU3Rvcnlib29rVCB9IGZyb20gJy4uLy4uL1RlY2hub2xvZ3lMaXN0L1N0b3J5Ym9va1QvU3Rvcnlib29rVCc7XHJcbi8vIGltcG9ydCB7IFN0eWxlZENvbXBvbmVudHNUIH0gZnJvbSAnLi4vLi4vVGVjaG5vbG9neUxpc3QvU3R5bGVkQ29tcG9uZW50c1QvU3R5bGVkQ29tcG9uZW50c1QnO1xyXG4vLyBpbXBvcnQgeyBTdHlsZWRTeXN0ZW1UIH0gZnJvbSAnLi4vLi4vVGVjaG5vbG9neUxpc3QvU3R5bGVkU3lzdGVtVC9TdHlsZWRTeXN0ZW1UJztcclxuLy8gaW1wb3J0IHsgVHlwZXNjcmlwdFQgfSBmcm9tICcuLi8uLi9UZWNobm9sb2d5TGlzdC9UeXBlc2NyaXB0VC9UeXBlc2NyaXB0VCc7XHJcbmltcG9ydCB7IENhcmRDb250YWluZXIsIFxyXG4gICAgICAgICBDYXJkV3JhcHBlcixcclxuICAgICAgICAgU3R5bGVkQ2FyZCxcclxuICAgICAgICAgSDFDYXJkLFxyXG4gICAgICAgICBQYXJhZ3JhcGgsXHJcbiAgICAgICAgIFNwb3J0LFxyXG4gICAgICAgICBXb3Jrb3V0LFxyXG4gICAgICAgICBNdGIsXHJcbiAgICAgICAgIEJvb2tzLFxyXG4gICAgICAgICBQb29scyxcclxuICAgICAgICAgQWN0aXZpdHlXcmFwcGVyLFxyXG4gICAgICAgICBUZWNoV3JhcHBlcixcclxuICAgICAgICAgVGVjaENvbnRhaW5lcixcclxuICAgICAgICAgUGFyYWdyYXBoRXh0ZW5kZWQsXHJcbiAgICAgICAgIFRlY2hXcmFwcGVyMixcclxuICAgICAgICAgQ2FyZEFib3V0TWUsXHJcbiAgICAgICAgIENhcmRDb250YWN0XHJcbiAgICBcclxuXHJcblxyXG59IGZyb20gJy4vQ2FyZEl0ZW0uc3R5bGVkJztcclxuXHJcblxyXG5cclxuXHJcbiAgIFxyXG4gZXhwb3J0IGNvbnN0IENhcmRJdGVtOiBSZWFjdC5GQyA9ICh7ICAgXHJcbiAgICBcclxuICAgfSkgPT4ge1xyXG4gICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICA8PiAgIFxyXG4gICAgICAgICAgICAgICAgPENhcmRDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmRXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZEFib3V0TWUgaWQ9XCJvLW1uZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveSBzeW1ib2w9XCLwn5Gm8J+PvVwiIGxhYmVsPVwiYm95XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIMUNhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTyBtbmUgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSDFDYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhcmFncmFwaD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNvbSBKdW5pb3IgRnJvbnQgRW5kIERldmVsb3BlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGt0b3LDvSBtw6EgdiBzZWJlIHZlxL5rw7ogdMO6xb5idSB0dm9yacWlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVnl0dsOhcmHFpSBkaWVsYSwgbyBrdG9yw71jaCB2aWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDFvmUgZHJ1aMO9bSBzcHJhdmlhIHJhZG9zxaUuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTbmHFvsOtbSBzYSBkZcWIIHBvIGRuaSBuYSBzZWJlIHByYWNvdmHFpVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYSBwcsOtc8WlIG5hIGthxb5kw70gcHJvYmzDqW0uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBayBtYSB6cm92bmEgbmVuw6FqZGV0ZSBrw7NkacWlLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhayBtYSB1csSNaXRlIG7DoWpkZXRlIGphemRpxaUgdiBwcsOtcm9kZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hIGJpY3lrbGkgYWxlYm8gY3ZpxI1pxaUuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY3Rpdml0eVdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwb3J0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjJm5ic3A7IMWhcG9ydFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3BvcnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdvcmtvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICMmbmJzcDsgd29ya291dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvV29ya291dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TXRiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjJm5ic3A7IG10YlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTXRiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb29rcz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIyZuYnNwOyBrbmloeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm9va3M+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBvb2xzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjJm5ic3A7IGJhesOpbnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Bvb2xzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BY3Rpdml0eVdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1BhcmFncmFwaD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQWJvdXRNZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRDb250YWN0IGlkPVwia29udGFrdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBob25lIHN5bWJvbD1cIvCfk7FcIiBsYWJlbD1cInBob25lXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIMUNhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgS29udGFrdCAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9IMUNhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGFyYWdyYXBoRXh0ZW5kZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKzQyMSA5MDUgNDk1IDY3N1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGl2b3MuZnJvbnRlbmRAZ21haWwuY29tXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1BhcmFncmFwaEV4dGVuZGVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRDb250YWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkQ2FyZCBpZD1cInRlY2hub2xvZ2llXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGVjaG5vbG9naWVzIHN5bWJvbD1cIvCflKdcIiBsYWJlbD1cInRlY2hub2xvZ2llc1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SDFDYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRlY2hub2zDs2dpZSAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0gxQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRlY2hDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGVjaFdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN2Z05leHQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pk5leHQtSlMgLSBqdW5pb3I8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3ZnUmVhY3QgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlJlYWN0LUpTIC0ganVuaW9yPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN2Z1N0b3J5IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5TdG9yeWJvb2sgLSBqdW5pb3I8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGVjaFdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGVjaFdyYXBwZXIyPiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3ZnVHlwZS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5UeXBlc2NyaXB0IC0ganVuaW9yPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN2Z1N0eWxlZFN5cyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+U3R5bGVkLXN5c3RlbSAtIGp1bmlvcjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdmdTdHlsZWRDb21wIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5TdHlsZWQtY29tcG9uZW50cyAtIGludGVybWVkaWF0ZTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZWNoV3JhcHBlcjI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGVjaENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TdHlsZWRDYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZFdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmRDb250YWluZXI+XHJcbiAgICAgICAgICAgPC8+XHJcbiAgICAgICApO1xyXG4gICB9O1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBTdHlsZWRCb3kgPSBzdHlsZWQuc3BhbmBcclxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxNXB4O1xyXG4gICAgbGVmdDogMTgwcHg7XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5sYXB0b3B9KSB7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIHRvcDogMjVweDtcclxuICAgIGxlZnQ6IDE2MHB4O1xyXG59IFxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubW9iaWxlU30pIHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogLTcwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1vYmlsZTRYU30pIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtOTBweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubW9iaWxlNVhTfSkge1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMTBweDtcclxufVxyXG5gXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFN0eWxlZEJveSB9IGZyb20gJy4vQm95LnN0eWxlZCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJveVByb3BzIHtcclxuICAgIGxhYmVsOiBzdHJpbmcsXHJcbiAgICBzeW1ib2w6IHN0cmluZ1xyXG4gICB9O1xyXG4gICBcclxuICAgXHJcbiAgIFxyXG5leHBvcnQgZnVuY3Rpb24gQm95KHByb3BzOiBCb3lQcm9wcyk6IFJlYWN0LlJlYWN0RWxlbWVudCB7IFxyXG4gICAgcmV0dXJuIChcclxuICAgIDxTdHlsZWRCb3lcclxuICAgICAgICByb2xlPVwiaW1nXCJcclxuICAgICAgICBhcmlhLWxhYmVsPXtwcm9wcy5sYWJlbCA/IHByb3BzLmxhYmVsIDogXCJcIn1cclxuICAgICAgICBhcmlhLWhpZGRlbj17cHJvcHMubGFiZWwgPyBcImZhbHNlXCIgOiBcInRydWVcIn1cclxuICAgID5cclxuICAgICAgICB7cHJvcHMuc3ltYm9sfVxyXG4gICAgPC9TdHlsZWRCb3k+XHJcbiAgICApXHJcbn07XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0eWxlZFBob25lID0gc3R5bGVkLnNwYW5gXHJcbiAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTVweDtcclxuICAgIGxlZnQ6IDE4MHB4O1xyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubGFwdG9wfSkge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICB0b3A6IDI1cHg7XHJcbiAgICBsZWZ0OiAxNjBweDtcclxufSBcclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1vYmlsZVN9KSB7XHJcbiAgICBtYXJnaW4tbGVmdDogLTcwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1vYmlsZTRYU30pIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtOTBweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubW9iaWxlNVhTfSkge1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMTBweDtcclxufVxyXG5gXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFN0eWxlZFBob25lIH0gZnJvbSAnLi9QaG9uZS5zdHlsZWQnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQaG9uZVByb3BzIHtcclxuICAgIGxhYmVsOiBzdHJpbmcsXHJcbiAgICBzeW1ib2w6IHN0cmluZ1xyXG4gICB9O1xyXG4gICBcclxuICAgXHJcbiAgIFxyXG5leHBvcnQgZnVuY3Rpb24gUGhvbmUocHJvcHM6IFBob25lUHJvcHMpOiBSZWFjdC5SZWFjdEVsZW1lbnQgeyBcclxuICAgIHJldHVybiAoXHJcbiAgICA8U3R5bGVkUGhvbmVcclxuICAgICAgICByb2xlPVwiaW1nXCJcclxuICAgICAgICBhcmlhLWxhYmVsPXtwcm9wcy5sYWJlbCA/IHByb3BzLmxhYmVsIDogXCJcIn1cclxuICAgICAgICBhcmlhLWhpZGRlbj17cHJvcHMubGFiZWwgPyBcImZhbHNlXCIgOiBcInRydWVcIn1cclxuICAgID5cclxuICAgICAgICB7cHJvcHMuc3ltYm9sfVxyXG4gICAgPC9TdHlsZWRQaG9uZT5cclxuICAgIClcclxufTtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkVGVjaG5vbG9naWVzID0gc3R5bGVkLnNwYW5gXHJcbiAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTVweDtcclxuICAgIGxlZnQ6IDE1MHB4O1xyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubGFwdG9wfSkge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICB0b3A6IDI1cHg7XHJcbiAgICBsZWZ0OiAxMjVweDtcclxufSBcclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1vYmlsZVN9KSB7XHJcbiAgICBtYXJnaW4tbGVmdDogLTcwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1vYmlsZTRYU30pIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtOTBweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubW9iaWxlNVhTfSkge1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMDVweDtcclxufVxyXG5gXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFN0eWxlZFRlY2hub2xvZ2llcyB9IGZyb20gJy4vVGVjaG5vbG9naWVzLnN0eWxlZCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRlY2hub1Byb3BzIHtcclxuICAgIGxhYmVsOiBzdHJpbmcsXHJcbiAgICBzeW1ib2w6IHN0cmluZ1xyXG4gICB9O1xyXG4gICBcclxuICAgXHJcbiAgIFxyXG5leHBvcnQgZnVuY3Rpb24gVGVjaG5vbG9naWVzKHByb3BzOiBUZWNobm9Qcm9wcyk6IFJlYWN0LlJlYWN0RWxlbWVudCB7IFxyXG4gICAgcmV0dXJuIChcclxuICAgIDxTdHlsZWRUZWNobm9sb2dpZXNcclxuICAgICAgICByb2xlPVwiaW1nXCJcclxuICAgICAgICBhcmlhLWxhYmVsPXtwcm9wcy5sYWJlbCA/IHByb3BzLmxhYmVsIDogXCJcIn1cclxuICAgICAgICBhcmlhLWhpZGRlbj17cHJvcHMubGFiZWwgPyBcImZhbHNlXCIgOiBcInRydWVcIn1cclxuICAgID5cclxuICAgICAgICB7cHJvcHMuc3ltYm9sfVxyXG4gICAgPC9TdHlsZWRUZWNobm9sb2dpZXM+XHJcbiAgICApXHJcbn07XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBCdXJnZXJQcm9wcyB9IGZyb20gJy4vQnVyZ2VyJztcclxuXHJcbmV4cG9ydCBjb25zdCBTdHlsZWRCdXJnZXIgPSBzdHlsZWQuYnV0dG9uPEJ1cmdlclByb3BzPmBcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwLjkzNzVyZW07XHJcbiAgbGVmdDogMnJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgd2lkdGg6IDJyZW07XHJcbiAgaGVpZ2h0OiAycmVtO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcGFkZGluZzogMDtcclxuICB6LWluZGV4OiAyMDA7XHJcbiAgXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuICBcclxuICBkaXYge1xyXG4gICAgd2lkdGg6IDJyZW07XHJcbiAgICBoZWlnaHQ6IDAuMjVyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnByaW1hcnlCdXJnZXJ9O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDFweDtcclxuXHJcbiAgICA6Zmlyc3QtY2hpbGQge1xyXG4gICAgICB0cmFuc2Zvcm06ICR7KHsgb3BlbiB9KSA9PiBvcGVuID8gJ3JvdGF0ZSg0NWRlZyknIDogJ3JvdGF0ZSgwKSd9O1xyXG4gICAgfVxyXG5cclxuICAgIDpudGgtY2hpbGQoMikge1xyXG4gICAgICBvcGFjaXR5OiAkeyh7IG9wZW4gfSkgPT4gb3BlbiA/ICcwJyA6ICcxJ307XHJcbiAgICAgIHRyYW5zZm9ybTogJHsoeyBvcGVuIH0pID0+IG9wZW4gPyAndHJhbnNsYXRlWCgyMHB4KScgOiAndHJhbnNsYXRlWCgwKSd9O1xyXG4gICAgfVxyXG5cclxuICAgIDpudGgtY2hpbGQoMykge1xyXG4gICAgICB0cmFuc2Zvcm06ICR7KHsgb3BlbiB9KSA9PiBvcGVuID8gJ3JvdGF0ZSgtNDVkZWcpJyA6ICdyb3RhdGUoMCknfTtcclxuICAgIH1cclxuICB9XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTYxcHgpIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbmA7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBTZXRTdGF0ZUFjdGlvbiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE1lbnUgfSBmcm9tICcuLi9NZW51L01lbnUnO1xyXG5pbXBvcnQgeyBTdHlsZWRCdXJnZXIgfSBmcm9tICcuL0J1cmdlci5zdHlsZWQnO1xyXG5cclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJ1cmdlclByb3BzIHtcclxuICAgIG9wZW4/OiBib29sZWFuLFxyXG4gICAgc2V0T3Blbj86IFJlYWN0LkRpc3BhdGNoPFNldFN0YXRlQWN0aW9uPGJvb2xlYW4+PixcclxuICAgIG9uQ2xpY2s/OiAoKSA9PiB2b2lkO1xyXG4gICAgIFxyXG4gICAgfTtcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQnVyZ2VyKHByb3BzOiBCdXJnZXJQcm9wcyk6IFJlYWN0LlJlYWN0RWxlbWVudCB7IFxyXG4gICAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpOyBcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPFN0eWxlZEJ1cmdlciBvcGVuPXtvcGVufSBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKCFvcGVuKX0gey4uLnByb3BzfT5cclxuICAgICAgICAgICAgPGRpdiAvPlxyXG4gICAgICAgICAgICA8ZGl2IC8+XHJcbiAgICAgICAgICAgIDxkaXYgLz5cclxuICAgICAgICA8L1N0eWxlZEJ1cmdlcj5cclxuICAgICAgICA8TWVudSBvcGVuPXtvcGVufS8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcblxyXG4gICAgXHJcbn07XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0eWxlZEhlYWRlciA9IHN0eWxlZC5oZWFkZXJgXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NkZDRjE7XHJcbiAgICBjb2xvcjogIzEzMUQ0RDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCAjNWU1YjViO1xyXG4gICBcclxuQG1lZGlhIChtYXgtd2lkdGg6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubW9iaWxlTH0pIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIFxyXG59ICAgXHJcbmAgIFxyXG5cclxuZXhwb3J0IGNvbnN0IFVsID0gc3R5bGVkLnVsYFxyXG4gICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICBwYWRkaW5nOiAwO1xyXG4gICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgZGlzcGxheTogZmxleDtcclxuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgIFxyXG5AbWVkaWEgKG1heC13aWR0aDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tb2JpbGVMfSkge1xyXG4gICAgICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgTGkgPSBzdHlsZWQubGlgXHJcbiAgICBtYXJnaW46IDAgMzBweDtcclxuICAgIFxyXG5gXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFN0eWxlZEFuY2hvciA9IHN0eWxlZC5hYFxyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1zaXplOiAxLjA1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDY1MDtcclxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgbGluZWFyO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgXHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICM2Yzc1N2Q7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IExvZ28gPSBzdHlsZWQuc3BhbmBcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbmBcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1zY3JvbGwnO1xyXG5pbXBvcnQgeyBTdHlsZWRIZWFkZXIsIFVsLCBMaSwgU3R5bGVkQW5jaG9yLCBMb2dvIH0gZnJvbSAnLi9IZWFkZXIuc3R5bGVkJztcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRlcjogUmVhY3QuRkMgPSAoe1xyXG4gICAgLi4ucHJvcHNcclxufSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8U3R5bGVkSGVhZGVyXHJcbiAgICAgICAgICAgIHsuLi5wcm9wc30+XHJcbiAgICAgICAgICAgICAgICAgICAgPFVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cImRvbW92XCIgc3B5PXt0cnVlfSBzbW9vdGg9e3RydWV9IGR1cmF0aW9uPXsxMDAwfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkQW5jaG9yPkRPTU9WPC9TdHlsZWRBbmNob3I+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiby1tbmVcIiBzcHk9e3RydWV9IHNtb290aD17dHJ1ZX0gZHVyYXRpb249ezEwMDB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRBbmNob3I+TyBNTkU8L1N0eWxlZEFuY2hvcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCJrb250YWt0XCIgc3B5PXt0cnVlfSBzbW9vdGg9e3RydWV9IGR1cmF0aW9uPXsxMDAwfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRBbmNob3I+S09OVEFLVDwvU3R5bGVkQW5jaG9yPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCJkb21vdlwiIHNweT17dHJ1ZX0gc21vb3RoPXt0cnVlfSBkdXJhdGlvbj17MTAwMH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMb2dvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2FtdWVsIFNsaXZvxaFcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Mb2dvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9TdHlsZWRIZWFkZXI+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgTWVudVByb3BzIH0gZnJvbSAnLi9NZW51JztcclxuXHJcbmV4cG9ydCBjb25zdCBTdHlsZWRNZW51ID0gc3R5bGVkLm5hdjxNZW51UHJvcHM+YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucHJpbWFyeURhcmt9O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgcGFkZGluZzogMnJlbTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNmb3JtOiAkeyh7IG9wZW4gfSkgPT4gb3BlbiA/ICd0cmFuc2xhdGVYKDApJyA6ICd0cmFuc2xhdGVYKC0xMDAlKScgfTtcclxuICBib3gtc2hhZG93OiAkeyh7IG9wZW4gfSkgPT4gb3BlbiA/ICc1cHggNXB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjgpJyA6ICcgJyB9O1xyXG4gIFxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5NjFweCkge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1vYmlsZVhTfSkge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICBhIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBwYWRkaW5nOiAycmVtIDA7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVyZW07XHJcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wcmltYXJ5TGlnaHR9O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBsaW5lYXI7XHJcbiAgICBcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1vYmlsZVhTfSkge1xyXG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wcmltYXJ5SG92ZXJ9O1xyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5leHBvcnQgY29uc3QgTWVudUNvbnRhaW5lciA9IHN0eWxlZC5kaXY8TWVudVByb3BzPmBcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHtvcGVufSkgPT4gb3BlbiA/ICdyZ2JhKDAsIDAsIDAsIDAuMyknIDogJyAnfTtcclxuICB6LWluZGV4OiAkeyh7b3Blbn0pID0+IG9wZW4gPyAnOTknIDogJyd9O1xyXG5gXHJcbjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgU3R5bGVkTWVudSwgTWVudUNvbnRhaW5lciB9IGZyb20gJy4vTWVudS5zdHlsZWQnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNZW51UHJvcHMge1xyXG4gICAgb3BlbjogYm9vbGVhblxyXG4gICB9O1xyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTWVudSAocHJvcHM6IE1lbnVQcm9wcyk6IFJlYWN0LlJlYWN0RWxlbWVudCB7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICBcclxuICAgICAgPE1lbnVDb250YWluZXIgb3Blbj17cHJvcHMub3Blbn0+XHJcbiAgICAgICAgPFN0eWxlZE1lbnUgb3Blbj17cHJvcHMub3Blbn0+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICBET01PVlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICBPIE1ORVxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICBLT05UQUtUXHJcbiAgICAgICAgICAgIDwvYT4gXHJcbiAgICAgICAgPC9TdHlsZWRNZW51PlxyXG4gICAgICA8L01lbnVDb250YWluZXI+XHJcbiAgICApXHJcbn07XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIFN2Z05leHRqcyhwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgIGhlaWdodD1cIjFlbVwiXHJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwLjE0NSAwLjIwNyAxNDcuNjg1IDg5LjI5MVwiXHJcbiAgICAgICAgICAgIHdpZHRoPVwiMWVtXCJcclxuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgIHsuLi5wcm9wc31cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMzQuOTkyIDIzLjQ5NWgyNy44NTV2Mi4yMTlIMzcuNTQ2djE2LjY5OWgyMy43OTJ2Mi4yMTlIMzcuNTQ2djE4LjMzNGgyNS41OTF2Mi4yMTlIMzQuOTkyem0zMC4zNSAwaDIuOTZsMTMuMTE1IDE4LjMzNCAxMy40MDUtMTguMzM0TDExMy4wNTUuMjA3IDgzLjEgNDMuNzU2bDE1LjQzNiAyMS40MjlIOTUuNDZMODEuNDE3IDQ1LjY4MyA2Ny4zMTYgNjUuMTg1aC0zLjAxOEw3OS44NSA0My43NTYgNjUuMzQzIDIzLjQ5NXptMzQuMjk3IDIuMjE5di0yLjIxOWgzMS43NDJ2Mi4yMTloLTE0LjYyM3YzOS40N2gtMi41NTR2LTM5LjQ3SDk5LjY0ek0uMTQ1IDIzLjQ5NWgzLjE5Mmw0NC4wMTEgNjYuMDAzTDI5LjE2IDY1LjE4NSAyLjgxNCAyNi42NDhsLS4xMTYgMzguNTM3SC4xNDV6bTEzMC45OCAzOC44MDFjLS41MjMgMC0uOTE0LS40MDUtLjkxNC0uOTI4IDAtLjUyNC4zOTEtLjkyOS45MTMtLjkyOS41MjggMCAuOTEzLjQwNS45MTMuOTI5IDAgLjUyMy0uMzg1LjkyOC0uOTEzLjkyOHptMi41MDgtMi40NDNIMTM1Yy4wMTkuNzQyLjU2IDEuMjQgMS4zNTQgMS4yNC44ODggMCAxLjM5MS0uNTM1IDEuMzkxLTEuNTM5di02LjM1NmgxLjM5MXY2LjM2MmMwIDEuODA4LTEuMDQzIDIuODQ5LTIuNzcgMi44NDktMS42MiAwLTIuNzMyLTEuMDEtMi43MzItMi41NTZ6bTcuMzIyLS4wOGgxLjM3OWMuMTE4Ljg1My45NSAxLjM5NSAyLjE0OSAxLjM5NSAxLjExNyAwIDEuOTM3LS41OCAxLjkzNy0xLjM3NyAwLS42ODUtLjUyMS0xLjA5Ny0xLjcwOC0xLjM3N2wtMS4xNTUtLjI4Yy0xLjYyLS4zOC0yLjM2LTEuMTY2LTIuMzYtMi40ODcgMC0xLjYwMiAxLjMwNC0yLjY2OCAzLjI2LTIuNjY4IDEuODIgMCAzLjE1IDEuMDY2IDMuMjMgMi41OGgtMS4zNTRjLS4xMy0uODI4LS44NS0xLjM0Ni0xLjg5NC0xLjM0Ni0xLjEgMC0xLjgzMi41My0xLjgzMiAxLjM0IDAgLjY0Mi40NzIgMS4wMSAxLjY0IDEuMjg0bC45ODcuMjQzYzEuODM4LjQzIDIuNTk2IDEuMTc4IDIuNTk2IDIuNTMgMCAxLjcyLTEuMzMgMi43OTktMy40NTMgMi43OTktMS45ODcgMC0zLjMyMy0xLjAyOS0zLjQyMi0yLjYzN3pcIiAvPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3ZnTmV4dGpzO1xyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5mdW5jdGlvbiBTdmdSZWFjdGpzKHByb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMWVtXCIgaGVpZ2h0PVwiMWVtXCIgdmlld0JveD1cIjAgMCAzMiAzMlwiIHsuLi5wcm9wc30+XHJcbiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSguNjQ4IDIuNDM4KSBzY2FsZSguMDU2OTYpXCIgZmlsbD1cIm5vbmVcIiBmaWxsUnVsZT1cImV2ZW5vZGRcIj5cclxuICAgICAgICAgICAgICAgIDxjaXJjbGUgcj17NTAuMTY3fSBjeT17MjM3LjYyOH0gY3g9ezI2OS41Mjl9IGZpbGw9XCIjMDBkOGZmXCIgLz5cclxuICAgICAgICAgICAgICAgIDxnIHN0cm9rZT1cIiMwMGQ4ZmZcIiBzdHJva2VXaWR0aD17MjR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjY5LjUzIDEzNS42MjhjNjcuMzU2IDAgMTI5LjkyOCA5LjY2NSAxNzcuMTA3IDI1LjkwNyA1Ni44NDQgMTkuNTcgOTEuNzk0IDQ5LjIzMyA5MS43OTQgNzYuMDkzIDAgMjcuOTktMzcuMDQgNTkuNTAzLTk4LjA4MyA3OS43MjgtNDYuMTUgMTUuMjktMTA2Ljg4IDIzLjI3Mi0xNzAuODE4IDIzLjI3Mi02NS41NTQgMC0xMjcuNjMtNy40OTItMTc0LjMtMjMuNDRDMzYuMTg0IDI5Ny4wMDYuNjIgMjY1LjA4NS42MiAyMzcuNjI4YzAtMjYuNjQyIDMzLjM3LTU2LjA3NiA4OS40MTUtNzUuNjE2IDQ3LjM1NS0xNi41MSAxMTEuNDcyLTI2LjM4NCAxNzkuNDg2LTI2LjM4NHpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTgwLjczNiAxODYuOTIyYzMzLjY1LTU4LjM0OCA3My4yOC0xMDcuNzI0IDExMC45Mi0xNDAuNDhDMzM3LjAwNiA2Ljk3NiAzODAuMTYzLTguNDggNDAzLjQzIDQuOTM3YzI0LjI0OCAxMy45ODMgMzMuMDQyIDYxLjgxNCAyMC4wNjcgMTI0Ljc5Ni05LjggNDcuNjE4LTMzLjIzNCAxMDQuMjEyLTY1LjE3NiAxNTkuNi0zMi43NSA1Ni43ODgtNzAuMjUgMTA2LjgyLTEwNy4zNzcgMTM5LjI3Mi00Ni45OCA0MS4wNjgtOTIuNCA1NS45My0xMTYuMTg1IDQyLjIxMy0yMy4wOC0xMy4zLTMxLjkwNi01Ni45Mi0yMC44MzQtMTE1LjIzMyA5LjM1NS00OS4yNyAzMi44MzItMTA5Ljc0NSA2Ni44LTE2OC42NjR6XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE4MC44MiAyODkuNDgyYy0zMy43NDUtNTguMjgyLTU2LjcyLTExNy4yODctNjYuMzEtMTY2LjI1NS0xMS41NDQtNTktMy4zODItMTA0LjExIDE5Ljg2NC0xMTcuNTY2IDI0LjIyNC0xNC4wMjQgNzAuMDU1IDIuMjQ0IDExOC4xNCA0NC45NCAzNi4zNTYgMzIuMjggNzMuNjg4IDgwLjgzNyAxMDUuNzIzIDEzNi4xNzMgMzIuODQ0IDU2LjczMyA1Ny40NiAxMTQuMjEgNjcuMDM2IDE2Mi41ODIgMTIuMTE3IDYxLjIxMyAyLjMxIDEwNy45ODQtMjEuNDUzIDEyMS43NC0yMy4wNTcgMTMuMzQ4LTY1LjI1LS43ODQtMTEwLjI0LTM5LjUtMzguMDEzLTMyLjcxLTc4LjY4Mi04My4yNTMtMTEyLjc2LTE0Mi4xMTV6XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3ZnUmVhY3RqcztcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZnVuY3Rpb24gU3ZnU3Rvcnlib29rKHByb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzdmdcclxuICAgICAgICAgICAgd2lkdGg9XCIxZW1cIlxyXG4gICAgICAgICAgICBoZWlnaHQ9XCIxZW1cIlxyXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI1NiAzMTlcIlxyXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgeG1sbnNYbGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIlxyXG4gICAgICAgICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWRcIlxyXG4gICAgICAgICAgICB7Li4ucHJvcHN9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGVmcz5cclxuICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgZD1cIk05Ljg3MiAyOTMuMzI0TC4wMTIgMzAuNTc0Qy0uMzE1IDIxLjg5NSA2LjMzOCAxNC41NCAxNS4wMDUgMTRMMjM4LjQ5NC4wMzJjOC44MjItLjU1MiAxNi40MiA2LjE1MyAxNi45NzIgMTQuOTc1LjAyLjMzMi4wMzEuNjY1LjAzMS45OTh2Mjg2LjMxNGMwIDguODM5LTcuMTY1IDE2LjAwNC0xNi4wMDQgMTYuMDA0LS4yNCAwLS40OC0uMDA1LS43MTgtLjAxNmwtMjEzLjYyNy05LjU5NWMtOC4zMi0uMzczLTE0Ljk2My03LjA2NS0xNS4yNzYtMTUuMzg4elwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJzdG9yeWJvb2tfc3ZnX19hXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGVmcz5cclxuICAgICAgICAgICAgPG1hc2sgaWQ9XCJzdG9yeWJvb2tfc3ZnX19iXCIgZmlsbD1cIiNmZmZcIj5cclxuICAgICAgICAgICAgICAgIDx1c2UgeGxpbmtIcmVmPVwiI3N0b3J5Ym9va19zdmdfX2FcIiAvPlxyXG4gICAgICAgICAgICA8L21hc2s+XHJcbiAgICAgICAgICAgIDx1c2UgZmlsbD1cIiNGRjQ3ODVcIiB4bGlua0hyZWY9XCIjc3Rvcnlib29rX3N2Z19fYVwiIC8+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBkPVwiTTE4OC42NjUgMzkuMTI3bDEuNTI3LTM2LjcxNkwyMjAuODg0IDBsMS4zMjIgMzcuODYzYTIuMzg3IDIuMzg3IDAgMDEtMy44NjQgMS45NmwtMTEuODM1LTkuMzI1LTE0LjAxMyAxMC42M2EyLjM4NyAyLjM4NyAwIDAxLTMuODI5LTIuMDAxem0tMzkuMjUxIDgwLjg1M2MwIDYuMjI3IDQxLjk0MiAzLjI0MyA0Ny41NzItMS4xMzEgMC00Mi40MDItMjIuNzUyLTY0LjY4NC02NC40MTUtNjQuNjg0LTQxLjY2MiAwLTY1LjAwNSAyMi42MjgtNjUuMDA1IDU2LjU3IDAgNTkuMTE3IDc5Ljc4IDYwLjI0OSA3OS43OCA5Mi40OTQgMCA5LjA1Mi00LjQzMyAxNC40MjYtMTQuMTg0IDE0LjQyNi0xMi43MDUgMC0xNy43MjktNi40OS0xNy4xMzgtMjguNTUyIDAtNC43ODYtNDguNDU4LTYuMjc4LTQ5LjkzNiAwLTMuNzYyIDUzLjQ2NiAyOS41NDggNjguODg3IDY3LjY2NSA2OC44ODcgMzYuOTM1IDAgNjUuODkyLTE5LjY4NyA2NS44OTItNTUuMzI2IDAtNjMuMzYtODAuOTYxLTYxLjY2My04MC45NjEtOTMuMDYgMC0xMi43MjggOS40NTUtMTQuNDI1IDE1LjA3LTE0LjQyNSA1LjkwOSAwIDE2LjU0NiAxLjA0MiAxNS42NiAyNC44MDF6XCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCIjRkZGXCJcclxuICAgICAgICAgICAgICAgIG1hc2s9XCJ1cmwoI3N0b3J5Ym9va19zdmdfX2IpXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L3N2Zz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN2Z1N0b3J5Ym9vaztcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZnVuY3Rpb24gU3ZnU3R5bGVkQ29tcG9uZW50cyhwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMzE4IDMxOFwiXHJcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICB4bWxuc1hsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiXHJcbiAgICAgICAgICAgIHdpZHRoPVwiMWVtXCJcclxuICAgICAgICAgICAgaGVpZ2h0PVwiMWVtXCJcclxuICAgICAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPGRlZnM+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBpZD1cInN0eWxlZC1jb21wb25lbnRzX3N2Z19fYVwiIGQ9XCJNMCAwaDMxOHYzMThIMHpcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1hc2sgaWQ9XCJzdHlsZWQtY29tcG9uZW50c19zdmdfX2JcIiBmaWxsPVwiI2ZmZlwiIGhlaWdodD17MzE4fSB3aWR0aD17MzE4fSB4PXswfSB5PXswfT5cclxuICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rSHJlZj1cIiNzdHlsZWQtY29tcG9uZW50c19zdmdfX2FcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9tYXNrPlxyXG4gICAgICAgICAgICA8L2RlZnM+XHJcbiAgICAgICAgICAgIDxnIGZpbGw9XCJub25lXCIgZmlsbFJ1bGU9XCJldmVub2RkXCI+XHJcbiAgICAgICAgICAgICAgICA8dXNlXHJcbiAgICAgICAgICAgICAgICAgICAgbWFzaz1cInVybCgjc3R5bGVkLWNvbXBvbmVudHNfc3ZnX19iKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezh9XHJcbiAgICAgICAgICAgICAgICAgICAgeGxpbmtIcmVmPVwiI3N0eWxlZC1jb21wb25lbnRzX3N2Z19fYVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICBkPVwiTTQ0LjI4NCAyMjkuNDE2Yy00LjQyOCAwLTcuMzQ0IDIuMzc2LTcuMzQ0IDUuNTQ0IDAgMi44MDggMS43MjggNC42OCA1LjY1MiA1Ljc2IDMuNTY0IDEuMDA4IDQuMzIgMS41MTIgNC4zMiAzLjA5NiAwIDEuNDQtMS4zMzIgMi4zMDQtMy4zODQgMi4zMDQtMS45NDQgMC0zLjcwOC0uNzU2LTUuMTg0LTEuODcybC0yLjMwNCAyLjU5MmMxLjc2NCAxLjU4NCA0LjMyIDIuNyA3LjU5NiAyLjcgNC4zNTYgMCA4LjAyOC0yLjA4OCA4LjAyOC02LjA0OCAwLTMuMzg0LTIuMTk2LTQuOTY4LTYuMDg0LTYuMDEyLTMuMjQtLjktMy45OTYtMS40NzYtMy45OTYtMi43MzYgMC0xLjE1MiAxLjA0NC0xLjkwOCAyLjg4LTEuOTA4IDEuNjkyIDAgMy4yMDQuNTQgNC43ODggMS41NDhsMS44LTIuN2MtMS44LTEuNDA0LTQuMDMyLTIuMjY4LTYuNzY4LTIuMjY4em0yMC40MTIgMTUuNzMybDEuNjIgMi45NTJjLTEuMzY4Ljk3Mi0zLjA5NiAxLjQ0LTQuNzg4IDEuNDQtMy43NDQtLjAzNi01LjcyNC0yLjE2LTUuNzI0LTYuMjI4di0xMC4wNDRoLTIuOTg4di0zLjMxMmgyLjk4OHYtNC4yMTJsNC42MDgtLjU0djQuNzUyaDQuNDI4bC0uNDY4IDMuMzEyaC0zLjk2djkuOTM2YzAgMS44NzIuNjEyIDIuNjI4IDIuMDE2IDIuNjI4LjcyIDAgMS40NC0uMjE2IDIuMjY4LS42ODR6bTE5LjYyLTE1LjE5MmwtNi4xOTIgMTkuMTE2Yy0xLjQ0IDQuNDY0LTQuMjQ4IDcuMzQ0LTkuOSA3Ljc3NmwtLjQ2OC0zLjM0OGMzLjc4LS41NzYgNS4wMDQtMS44IDYuMDg0LTQuNWgtMS41ODRsLTYuMDQ4LTE5LjA0NGg0Ljg5Nmw0LjE0IDE1Ljk4NCA0LjMyLTE1Ljk4NHptNy4zMDggMTkuNTg0YTcuNTUgNy41NSAwIDAwMy4wNi0uNjQ4bC0uOTcyLTMuMjRjLS4zMjQuMTA4LS42NDguMTgtMS4wOC4xOC0uNzU2IDAtMS4wOC0uNDMyLTEuMDgtMS4zMzJ2LTIyLjY4bC00LjYwOC41MDR2MjIuMzJjMCAzLjEzMiAxLjc2NCA0Ljg5NiA0LjY4IDQuODk2em0yMS43NDQtMTAuNTEyYzAgLjYxMi0uMDcyIDEuMzY4LS4xMDggMS44NzJoLTExLjk1MmMuMzI0IDMuODg4IDIuMTYgNS4xNDggNC42OCA1LjE0OCAxLjY5MiAwIDMuMDk2LS41NCA0Ljc1Mi0xLjY5MmwxLjkwOCAyLjYyOGMtMS44NzIgMS41MTItNC4xNzYgMi41NTYtNy4wNTYgMi41NTYtNS45MDQgMC05LjA3Mi0zLjkyNC05LjA3Mi05LjkzNiAwLTUuNzk2IDMuMDYtMTAuMTg4IDguNDYtMTAuMTg4IDUuMzI4IDAgOC4zODggMy42IDguMzg4IDkuNjEyem0tNC41NzItMS4xMTZ2LS4yMTZjMC0zLjEzMi0xLjExNi01LjAwNC0zLjcwOC01LjAwNC0yLjE2IDAtMy41MjggMS40NC0zLjc4IDUuMjJ6bTIwLjEyNC0xNi4wOTJsNC42MDguNTA0VjI0OWgtNC4wNjhsLS4zMjQtMi40MTJjLTEuMTUyIDEuNzI4LTIuOTg4IDIuOTUyLTUuNDM2IDIuOTUyLTQuNzUyIDAtNy4yMzYtMy45OTYtNy4yMzYtMTAuMDQ0IDAtNS44NjggMi45NTItMTAuMDggNy42NjgtMTAuMDggMi4wMTYgMCAzLjYuODY0IDQuNzg4IDIuMDUyem0tMy45MjQgMjQuMjI4YzEuNjkyIDAgMi44NDQtLjgyOCAzLjkyNC0yLjQ0OHYtOC43MTJjLTEuMDA4LTEuMjI0LTIuMDg4LTIuMDE2LTMuNjM2LTIuMDE2LTIuMzc2IDAtMy45NiAyLjAxNi0zLjk2IDYuNTg4IDAgNC44OTYgMS40MDQgNi41ODggMy42NzIgNi41ODh6TTQ0LjQ0IDI2NS40MTZjLTUuNDcyIDAtOC44OTIgNC4xNC04Ljg5MiAxMC4yMjRzMy40MiA5LjkgOC45MjggOS45YzIuNDQ4IDAgNC40MjgtLjc5MiA2LjE1Ni0yLjE5NmwtMi4wNTItMi45MTZjLTEuNDA0LjktMi40MTIgMS4zNjgtMy44NTIgMS4zNjgtMi41OTIgMC00LjI4NC0xLjYyLTQuMjg0LTYuMjI4IDAtNC41NzIgMS42Mi02LjUxNiA0LjI4NC02LjUxNiAxLjQ0IDAgMi41OTIuNDMyIDMuODUyIDEuMzY4bDIuMDUyLTIuNzcyYy0xLjgtMS41NDgtMy43MDgtMi4yMzItNi4xOTItMi4yMzJ6bTE3LjMxNiAwYzUuNjE2IDAgOC45MjggMy44MTYgOC45MjggMTAuMDQ0IDAgNi4wMTItMy4zNDggMTAuMDgtOC45NjQgMTAuMDhzLTguOTY0LTMuODE2LTguOTY0LTEwLjA4YzAtNS45NzYgMy4zNDgtMTAuMDQ0IDktMTAuMDQ0em0wIDMuNDkyYy0yLjcgMC00LjE0IDIuMDUyLTQuMTQgNi41NTIgMCA0LjU3MiAxLjQwNCA2LjU4OCA0LjEwNCA2LjU4OHM0LjEwNC0yLjA1MiA0LjEwNC02LjU4OC0xLjQwNC02LjU1Mi00LjA2OC02LjU1MnptMzMuNDQ0LTMuNDkyYy0yLjUyIDAtNC4yODQgMS4yMjQtNS43MjQgMy4yMDQtLjcyLTIuMDE2LTIuMzc2LTMuMjA0LTQuNjA4LTMuMjA0LTIuNDEyIDAtNC4xNCAxLjExNi01LjUwOCAzLjAyNGwtLjM2LTIuNDg0aC0zLjk5NlYyODVoNC42MDh2LTEzLjI0OGMxLjA0NC0xLjc2NCAyLjAxNi0yLjg4IDMuNjM2LTIuODggMS4xMTYgMCAyLjA4OC42ODQgMi4wODggMy4wNlYyODVoNC42MDh2LTEzLjI0OGMxLjA0NC0xLjc2NCAyLjAxNi0yLjg4IDMuNi0yLjg4IDEuMTUyIDAgMi4wODguNjg0IDIuMDg4IDMuMDZWMjg1aDQuNjA4di0xMy43ODhjMC0zLjYtMi4wMTYtNS43OTYtNS4wNC01Ljc5NnptMjAuMjY4IDBjNC45NjggMCA3LjA1NiAzLjkyNCA3LjA1NiAxMC4wMDggMCA1LjgzMi0yLjcgMTAuMTE2LTcuNTI0IDEwLjExNi0xLjk0NCAwLTMuNi0uNjg0LTQuNzg4LTIuMDg4djguODkybC00LjYwOC41MDR2LTI2Ljg5Mmg0LjAzMmwuMjUyIDIuMzRjMS41MTItMS45OCAzLjUyOC0yLjg4IDUuNTgtMi44OHptLTEuNzY0IDE2LjU5NmMyLjUyIDAgMy45OTYtMS45NDQgMy45OTYtNi41NTIgMC00LjgyNC0xLjI5Ni02LjU4OC0zLjYtNi41ODgtMS42MiAwLTIuOTg4IDEuMTE2LTMuODg4IDIuNTkydjguNTY4Yy45IDEuMzMyIDIuMDUyIDEuOTggMy40OTIgMS45OHptMjEuMTMyLTE2LjU5NmM1LjYxNiAwIDguOTI4IDMuODE2IDguOTI4IDEwLjA0NCAwIDYuMDEyLTMuMzQ4IDEwLjA4LTguOTY0IDEwLjA4cy04Ljk2NC0zLjgxNi04Ljk2NC0xMC4wOGMwLTUuOTc2IDMuMzQ4LTEwLjA0NCA5LTEwLjA0NHptMCAzLjQ5MmMtMi43IDAtNC4xNCAyLjA1Mi00LjE0IDYuNTUyIDAgNC41NzIgMS40MDQgNi41ODggNC4xMDQgNi41ODhzNC4xMDQtMi4wNTIgNC4xMDQtNi41ODgtMS40MDQtNi41NTItNC4wNjgtNi41NTJ6bTIzLjQtMy40OTJjLTIuNDEyIDAtNC4zMiAxLjExNi01Ljc5NiAzLjAyNGwtLjM2LTIuNDg0aC0zLjk5NlYyODVoNC42MDh2LTEzLjI0OGMxLjExNi0xLjc2NCAyLjM0LTIuODggMy45OTYtMi44OCAxLjQ0IDAgMi4zNC42ODQgMi4zNCAzLjA2VjI4NWg0LjYwOHYtMTMuNzg4YzAtMy42MzYtMS45OC01Ljc5Ni01LjQtNS43OTZ6bTI2LjM4OCA5LjYxMmMwIC42MTItLjA3MiAxLjM2OC0uMTA4IDEuODcyaC0xMS45NTJjLjMyNCAzLjg4OCAyLjE2IDUuMTQ4IDQuNjggNS4xNDggMS42OTIgMCAzLjA5Ni0uNTQgNC43NTItMS42OTJsMS45MDggMi42MjhjLTEuODcyIDEuNTEyLTQuMTc2IDIuNTU2LTcuMDU2IDIuNTU2LTUuOTA0IDAtOS4wNzItMy45MjQtOS4wNzItOS45MzYgMC01Ljc5NiAzLjA2LTEwLjE4OCA4LjQ2LTEwLjE4OCA1LjMyOCAwIDguMzg4IDMuNiA4LjM4OCA5LjYxMnptLTQuNTcyLTEuMTE2di0uMjE2YzAtMy4xMzItMS4xMTYtNS4wMDQtMy43MDgtNS4wMDQtMi4xNiAwLTMuNTI4IDEuNDQtMy43OCA1LjIyem0xOC44NjQtOC40OTZjLTIuNDEyIDAtNC4zMiAxLjExNi01Ljc5NiAzLjAyNGwtLjM2LTIuNDg0aC0zLjk5NlYyODVoNC42MDh2LTEzLjI0OGMxLjExNi0xLjc2NCAyLjM0LTIuODggMy45OTYtMi44OCAxLjQ0IDAgMi4zNC42ODQgMi4zNCAzLjA2VjI4NWg0LjYwOHYtMTMuNzg4YzAtMy42MzYtMS45OC01Ljc5Ni01LjQtNS43OTZ6bTIwLjA1MiAxNS43MzJjLS44MjguNDY4LTEuNTQ4LjY4NC0yLjI2OC42ODQtMS40MDQgMC0yLjAxNi0uNzU2LTIuMDE2LTIuNjI4di05LjkzNmgzLjk2bC40NjgtMy4zMTJoLTQuNDI4di00Ljc1MmwtNC42MDguNTR2NC4yMTJoLTIuOTg4djMuMzEyaDIuOTg4djEwLjA0NGMwIDQuMDY4IDEuOTggNi4xOTIgNS43MjQgNi4yMjggMS42OTIgMCAzLjQyLS40NjggNC43ODgtMS40NHptMTAuMjI0LTE1LjczMmMtNC40MjggMC03LjM0NCAyLjM3Ni03LjM0NCA1LjU0NCAwIDIuODA4IDEuNzI4IDQuNjggNS42NTIgNS43NiAzLjU2NCAxLjAwOCA0LjMyIDEuNTEyIDQuMzIgMy4wOTYgMCAxLjQ0LTEuMzMyIDIuMzA0LTMuMzg0IDIuMzA0LTEuOTQ0IDAtMy43MDgtLjc1Ni01LjE4NC0xLjg3MmwtMi4zMDQgMi41OTJjMS43NjQgMS41ODQgNC4zMiAyLjcgNy41OTYgMi43IDQuMzU2IDAgOC4wMjgtMi4wODggOC4wMjgtNi4wNDggMC0zLjM4NC0yLjE5Ni00Ljk2OC02LjA4NC02LjAxMi0zLjI0LS45LTMuOTk2LTEuNDc2LTMuOTk2LTIuNzM2IDAtMS4xNTIgMS4wNDQtMS45MDggMi44OC0xLjkwOCAxLjY5MiAwIDMuMjA0LjU0IDQuNzg4IDEuNTQ4bDEuOC0yLjdjLTEuOC0xLjQwNC00LjAzMi0yLjI2OC02Ljc2OC0yLjI2OHpNNzkuOCA4Ny4ybC0zNi4yIDIyLjUgMzYuMiAyMi45LTMuNyA0LjYtMzcuNy0yMy42di03LjlsMzguMS0yMy42bTE4OS4zIDIyLjd2Ny44bC0zNy43IDIzLjYtMy43LTQuOSAzNi4xLTIyLjZMMjI0LjQgODZsMy4yLTQuOVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cImFxdWFcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDx0ZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiMwMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk9XCJBcHBsZUNvbG9yRW1vamksIEFwcGxlIENvbG9yIEVtb2ppXCJcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZT17MTAwfVxyXG4gICAgICAgICAgICAgICAgICAgIGxldHRlclNwYWNpbmc9ezAuNX1cclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMzggNDQpXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8dHNwYW4geD17NzB9IHk9ezEwMH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsnXFx1RDgzRFxcdURDODUnfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHNwYW4+XHJcbiAgICAgICAgICAgICAgICA8L3RleHQ+XHJcbiAgICAgICAgICAgIDwvZz5cclxuICAgICAgICA8L3N2Zz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN2Z1N0eWxlZENvbXBvbmVudHM7XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIFN2Z1N0eWxlZFN5c3RlbShwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICB2aWV3Qm94PVwiLTE4IC0xOCAzNiAzNlwiXHJcbiAgICAgICAgICAgIHdpZHRoPVwiMWVtXCJcclxuICAgICAgICAgICAgaGVpZ2h0PVwiMWVtXCJcclxuICAgICAgICAgICAgZGlzcGxheT1cImJsb2NrXCJcclxuICAgICAgICAgICAgb3ZlcmZsb3c9XCJ2aXNpYmxlXCJcclxuICAgICAgICAgICAgY29sb3I9XCIjMDAwXCJcclxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICB7Li4ucHJvcHN9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8cGF0aCBkPVwiTTAtMTZsLTE0IDhWOGwxNCA4IDE0LThWLThMMC0xNnpcIiAvPlxyXG4gICAgICAgICAgICA8cGF0aCBkPVwiTTAtMTZWMG0tMTQgOEwwIDBsMTQgOFwiIHN0cm9rZVdpZHRoPXswLjI1fSAvPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3ZnU3R5bGVkU3lzdGVtO1xyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5mdW5jdGlvbiBTdmdUeXBlc2NyaXB0KHByb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNDAwIDQwMFwiIHdpZHRoPVwiMWVtXCIgaGVpZ2h0PVwiMWVtXCIgey4uLnByb3BzfT5cclxuICAgICAgICAgICAgPHBhdGggZD1cIk0wIDIwMFYwaDQwMHY0MDBIMFwiIGZpbGw9XCIjMDA3YWNjXCIgLz5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGQ9XCJNODcuNyAyMDAuN1YyMTdoNTJ2MTQ4aDM2LjlWMjE3aDUydi0xNmMwLTkgMC0xNi4zLS40LTE2LjUgMC0uMy0zMS43LS40LTcwLjItLjRsLTcwIC4zdjE2LjRsLS4zLS4xek0zMjEuNCAxODRjMTAuMiAyLjQgMTggNyAyNSAxNC4zIDMuNyA0IDkuMiAxMSA5LjYgMTIuOCAwIC42LTE3LjMgMTIuMy0yNy44IDE4LjgtLjQuMy0yLTEuNC0zLjYtNC01LjItNy40LTEwLjUtMTAuNi0xOC44LTExLjItMTItLjgtMjAgNS41LTIwIDE2IDAgMy4yLjYgNSAxLjggNy42IDIuNyA1LjUgNy43IDguOCAyMy4yIDE1LjYgMjguNiAxMi4zIDQxIDIwLjQgNDguNSAzMiA4LjUgMTMgMTAuNCAzMy40IDQuNyA0OC43LTYuNCAxNi43LTIyIDI4LTQ0LjMgMzEuNy03IDEuMi0yMyAxLTMwLjUtLjMtMTYtMy0zMS4zLTExLTQwLjctMjEuMy0zLjctNC0xMC44LTE0LjctMTAuNC0xNS40bDMuOC0yLjQgMTUtOC43IDExLjMtNi42IDIuNiAzLjVjMy4zIDUuMiAxMC43IDEyLjIgMTUgMTQuNiAxMyA2LjcgMzAuNCA1LjggMzktMiAzLjctMy40IDUuMy03IDUuMy0xMiAwLTQuNi0uNy02LjctMy0xMC4yLTMuMi00LjQtOS42LTgtMjcuNi0xNi0yMC43LTguOC0yOS41LTE0LjQtMzcuNy0yMy00LjctNS4yLTktMTMuMy0xMS0yMC0xLjUtNS44LTItMjAtLjYtMjUuNyA0LjMtMjAgMTkuNC0zNCA0MS0zOCA3LTEuNCAyMy41LS44IDMwLjQgMWwtLjIuMnpcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNmZmZcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3ZnVHlwZXNjcmlwdDtcclxuIiwiXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1haW5TZWNDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCBcclxuICAgIHJnYmEoMTksMjksNzcsMC42KSxcclxuICAgIHJnYmEoMTksMjksNzcsMC42KVxyXG4gICAgKSxcclxuICAgIHVybChcIi9pbWFnZXMvaW1nMS5qcGdcIikgY2VudGVyIGNlbnRlci9jb3ZlclxyXG4gICAgbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgU2VjdGlvbldlbGNvbWUgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG5gICAgIFxyXG5cclxuZXhwb3J0IGNvbnN0IFN0eWxlZEgxID0gc3R5bGVkLmgxYFxyXG4gICAgZm9udC1zaXplOiAxMHJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgY29sb3I6ICM2NkZDRjE7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTAwcHg7XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tb2JpbGVNfSkge1xyXG4gICAgZm9udC1zaXplOiA4LjVyZW07XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1vYmlsZVhTfSkge1xyXG4gICAgZm9udC1zaXplOiA3cmVtO1xyXG59XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBTdHlsZWRQID0gc3R5bGVkLnBgXHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBjb2xvcjogI0M1QzZDNztcclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1vYmlsZU19KSB7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubW9iaWxlWFN9KSB7XHJcbiAgICBmb250LXNpemU6IDEuMTVyZW07XHJcbn1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFNvY2lhbENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcblxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgU29jaWFsV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgICBcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFNvY2lhbExpbmsgPSBzdHlsZWQuYWBcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGxpbmVhcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMzBweDtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogIzY2RkNGMTtcclxuICAgIH1cclxuYFxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBNYWluU2VjQ29udGFpbmVyLFxyXG4gICAgICAgICBTZWN0aW9uV2VsY29tZSwgXHJcbiAgICAgICAgIFN0eWxlZEgxLCBcclxuICAgICAgICAgU3R5bGVkUCxcclxuICAgICAgICAgU29jaWFsQ29udGFpbmVyLFxyXG4gICAgICAgICBTb2NpYWxXcmFwcGVyLFxyXG4gICAgICAgICBTb2NpYWxMaW5rLFxyXG5cclxufSBmcm9tICcuL01haW5TZWN0aW9uLnN0eWxlZCc7XHJcblxyXG5pbXBvcnQgeyBBcnJvdyB9IGZyb20gJy4uL0Fycm93L0Fycm93JztcclxuXHJcbmltcG9ydCB7IEZpR2l0aHViIH0gZnJvbSAncmVhY3QtaWNvbnMvZmknO1xyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWFpblNlY3Rpb25Qcm9wcyB7XHJcbiAgICBocmVmPzogc3RyaW5nXHJcbiAgIH07XHJcbiAgIFxyXG4gICBcclxuICAgXHJcbiAgIGV4cG9ydCBjb25zdCBNYWluU2VjdGlvbjogUmVhY3QuRkM8TWFpblNlY3Rpb25Qcm9wcz4gPSAoeyAgIFxyXG4gICAgLi4ucHJvcHNcclxuICAgfSkgPT4ge1xyXG4gICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICA8TWFpblNlY0NvbnRhaW5lciBpZD1cImRvbW92XCI+XHJcbiAgICAgICAgICAgICAgIDxTZWN0aW9uV2VsY29tZSB7Li4ucHJvcHN9PlxyXG4gICAgICAgICAgICAgICAgICAgPFN0eWxlZEgxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIFZpdGFqdGVcclxuICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkSDE+XHJcbiAgICAgICAgICAgICAgICAgICA8U3R5bGVkUD5cclxuICAgICAgICAgICAgICAgICAgIFZvbMOhbSBzYSBTYW11ZWwgYSBtb2rDrW0gemFtZXJhbsOtbSBqZSBGcm9udCBFbmQgRGV2ZWxvcG1lbnQuXHJcbiAgICAgICAgICAgICAgICAgICA8YnIvPlLDoWQgc2EgcG9ub3LDrW0gZG8gc3ZvamVqIGZhbnTDoXppZSBhIGplaiB2w71zbGVkb2sgcHJlbmVzaWVtIGRvIGvDs2R1LlxyXG4gICAgICAgICAgICAgICAgICAgPGJyLz5CYXbDrSBtYSB0dm9yacWlIHphdWrDrW1hdsOpIGEgbW9kZXJuw6kgd2ViIHN0csOhbmt5LlxyXG4gICAgICAgICAgICAgICAgICAgPC9TdHlsZWRQPlxyXG5cclxuICAgICAgICAgICAgICAgICAgIDxTb2NpYWxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPFNvY2lhbFdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTb2NpYWxMaW5rIGhyZWY9XCJodHRwOi8vZ2l0aHViLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmlHaXRodWIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Tb2NpYWxMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDwvU29jaWFsV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgICAgIDwvU29jaWFsQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgPEFycm93IC8+XHJcbiAgICAgICAgICAgICAgIDwvU2VjdGlvbldlbGNvbWU+XHJcbiAgICAgICAgICAgPC9NYWluU2VjQ29udGFpbmVyPlxyXG4gICAgICAgKTtcclxuICAgfTtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBTdmdOZXh0anMgZnJvbSAnLi4vLi4vSWNvbnMvU3ZnTmV4dGpzJztcclxuXHJcbmV4cG9ydCBjb25zdCBTdHlsZWROZXh0VCA9IHN0eWxlZC5zcGFuYFxyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICNDNUM2Qzc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDQ1cHg7XHJcbiAgICBsZWZ0OiAzMzVweDtcclxuXHJcbiAgICBzdHJvbmcge1xyXG4gICAgICAgIGNvbG9yOiAjQzlEMEQzO1xyXG4gICAgfVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubGFwdG9wfSkge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgbGVmdDogMjgwcHg7XHJcbiAgICB0b3A6IDIwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1vYmlsZVN9KSB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC04MHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tb2JpbGVYWFN9KSB7XHJcbiAgICBtYXJnaW4tbGVmdDogLTkwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1vYmlsZTNYU30pIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTEwcHg7XHJcbn1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFN2Z05leHQgPSBzdHlsZWQoU3ZnTmV4dGpzKWBcclxuICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xyXG4gICAgZmlsbDogI0M5RDBEMztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG5gXHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgU3ZnUmVhY3RqcyBmcm9tICcuLi8uLi9JY29ucy9TdmdSZWFjdGpzJztcclxuXHJcbmV4cG9ydCBjb25zdCBTdHlsZWRSZWFjdFQgPSBzdHlsZWQuc3BhbmBcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjQzVDNkM3O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogODBweDtcclxuICAgIHRvcDogNXB4O1xyXG5cclxuICAgIHN0cm9uZyB7XHJcbiAgICAgICAgY29sb3I6ICMwMEQ4RkY7XHJcbiAgICB9XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5sYXB0b3B9KSB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBsZWZ0OiA3MHB4O1xyXG4gICAgdG9wOiAtMTBweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubW9iaWxlU30pIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tb2JpbGUzWFN9KSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG5gXHJcbmV4cG9ydCBjb25zdCBTdmdSZWFjdCA9IHN0eWxlZChTdmdSZWFjdGpzKWBcclxuICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcblxyXG5gXHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgU3ZnU3Rvcnlib29rIGZyb20gJy4uLy4uL0ljb25zL1N2Z1N0b3J5Ym9vayc7XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkU3Rvcnlib29rID0gc3R5bGVkLnNwYW5gXHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogI0M1QzZDNztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjQwcHg7XHJcbiAgICBsZWZ0OiAzMTVweDtcclxuICAgIFxyXG5cclxuICAgIHN0cm9uZyB7XHJcbiAgICAgICAgY29sb3I6ICNGRjQ3ODU7XHJcbiAgICB9XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5sYXB0b3B9KSB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBsZWZ0OiAyNjBweDtcclxuICAgIHRvcDogMTc1cHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1vYmlsZVN9KSB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC04MHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tb2JpbGVYWFN9KSB7XHJcbiAgICBtYXJnaW4tbGVmdDogLTkwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1vYmlsZTNYU30pIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTEwcHg7XHJcbn1cclxuYFxyXG5leHBvcnQgY29uc3QgU3ZnU3RvcnkgPSBzdHlsZWQoU3ZnU3Rvcnlib29rKWBcclxuICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBcclxuXHJcbmBcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBTdmdTdHlsZWRDb21wb25lbnRzIGZyb20gJy4uLy4uL0ljb25zL1N2Z1N0eWxlZENvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0eWxlZENvbXBUID0gc3R5bGVkLnNwYW5gXHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogI0M1QzZDNztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTUwcHg7XHJcbiAgICBsZWZ0OiAxOTBweDtcclxuXHJcbiAgICBzdHJvbmcge1xyXG4gICAgICAgIGNvbG9yOiAjRDNCODNEO1xyXG4gICAgfVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubGFwdG9wfSkge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgbGVmdDogMTUwcHg7XHJcbiAgICB0b3A6IDEwNXB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tb2JpbGVTfSkge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtODBweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubW9iaWxlWFhTfSkge1xyXG4gICAgbWFyZ2luLWxlZnQ6IC05MHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tb2JpbGUzWFN9KSB7XHJcbiAgICBtYXJnaW4tbGVmdDogLTExMHB4O1xyXG59XHJcbmBcclxuZXhwb3J0IGNvbnN0IFN2Z1N0eWxlZENvbXAgPSBzdHlsZWQoU3ZnU3R5bGVkQ29tcG9uZW50cylgXHJcbiAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogYXV0bztcclxuYFxyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IFN2Z1N0eWxlZFN5c3RlbSBmcm9tICcuLi8uLi9JY29ucy9TdmdTdHlsZWRTeXN0ZW0nO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0eWxlZFN5cyA9IHN0eWxlZC5zcGFuYFxyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICNDNUM2Qzc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDIwMHB4O1xyXG4gICAgbGVmdDogODBweDtcclxuXHJcbiAgICBzdHJvbmcge1xyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgfVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubGFwdG9wfSkge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgbGVmdDogNzBweDtcclxuICAgIHRvcDogMTQ1cHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1vYmlsZVN9KSB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm1vYmlsZTNYU30pIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcbmBcclxuZXhwb3J0IGNvbnN0IFN2Z1N0eWxlZFN5cyA9IHN0eWxlZChTdmdTdHlsZWRTeXN0ZW0pYFxyXG4gICAgZm9udC1zaXplOiAyLjJyZW07XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogYXV0bztcclxuYFxyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IFN2Z1R5cGVzY3JpcHQgZnJvbSAnLi4vLi4vSWNvbnMvU3ZnVHlwZXNjcmlwdCc7XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkVHlwZXNjcmlwdCA9IHN0eWxlZC5zcGFuYFxyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICNDNUM2Qzc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDkwcHg7XHJcbiAgICBsZWZ0OiA4MHB4O1xyXG5cclxuICAgIHN0cm9uZyB7XHJcbiAgICAgICAgY29sb3I6ICMzZDkyY2E7XHJcbiAgICB9XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5sYXB0b3B9KSB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBsZWZ0OiA3MHB4O1xyXG4gICAgdG9wOiA2MHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tb2JpbGVTfSkge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5tb2JpbGUzWFN9KSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgU3ZnVHlwZSA9IHN0eWxlZChTdmdUeXBlc2NyaXB0KWBcclxuICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbmBcclxuIiwiaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgR2xvYmFsU3R5bGUgPSBjcmVhdGVHbG9iYWxTdHlsZWBcclxuaHRtbCwgYm9keSB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgZm9udC1mYW1pbHk6ICdDYWlybycsICdTZWdvZSBVSScsIEFyaWFsLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWZcclxufVxyXG5cclxuKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAvKiBvdXRsaW5lOiAzcHggc29saWQgYmxhY2s7ICovXHJcbn1cclxuYFxyXG4iLCJleHBvcnQgY29uc3QgdGhlbWUgPSB7XHJcbiAgICBwcmltYXJ5RGFyazogJyMwRDBDMUQnLFxyXG4gICAgcHJpbWFyeUxpZ2h0OiAnIzk5OTk5OScsXHJcbiAgICBwcmltYXJ5QnVyZ2VyOiAnIzEzMUQ0RCcsXHJcbiAgICBwcmltYXJ5SG92ZXI6ICcjMmM3MTkxJyxcclxuICAgIG1vYmlsZTVYUzogJzM5MHB4JyxcclxuICAgIG1vYmlsZTRYUzogJzQ0NHB4JyxcclxuICAgIG1vYmlsZTNYUzogJzUwNXB4JyxcclxuICAgIG1vYmlsZVhYUzogJzUxOHB4JyxcclxuICAgIG1vYmlsZVhTOiAnNTc2cHgnLFxyXG4gICAgbW9iaWxlUzogJzYyMHB4JyxcclxuICAgIG1vYmlsZU06ICc3NjhweCcsXHJcbiAgICBtb2JpbGVMOiAnOTYwcHgnLFxyXG4gICAgbGFwdG9wOiAnMTM5NXB4J1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlcic7XHJcbmltcG9ydCB7IEJ1cmdlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyL0J1cmdlci9CdXJnZXInO1xyXG5cclxuXHJcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IEdsb2JhbFN0eWxlIH0gZnJvbSAnLi4vY29tcG9uZW50cy9wYXJ0aWNsZXMvR2xvYmFsU3R5bGUnO1xyXG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvcGFydGljbGVzL3RoZW1lJztcclxuaW1wb3J0IHsgTWFpblNlY3Rpb24gfSBmcm9tICcuLi9jb21wb25lbnRzL01haW5TZWN0aW9uL01haW5TZWN0aW9uJztcclxuaW1wb3J0IHsgQ2FyZEl0ZW0gfSBmcm9tICcuLi9jb21wb25lbnRzL0NhcmRzL0NhcmRJdGVtL0NhcmRJdGVtJztcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuIFxyXG4gIHJldHVybiAoIFxyXG4gICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8R2xvYmFsU3R5bGUgLz5cclxuICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgPEJ1cmdlciAvPlxyXG4gICAgICAgIDxNYWluU2VjdGlvbiAvPlxyXG4gICAgICAgIDxDYXJkSXRlbSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICApO1xyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvZmlcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXNjcm9sbFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==