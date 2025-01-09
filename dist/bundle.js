/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/template/Article.ts":
/*!*********************************!*\
  !*** ./src/template/Article.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Article = /** @class */ (function () {
    function Article(title, content, footer) {
        this.title = title;
        this.content = content;
        this.footer = footer;
    }
    Article.prototype.getTitle = function () {
        return this.title;
    };
    Article.prototype.getContent = function () {
        return this.content;
    };
    Article.prototype.getFooter = function () {
        return this.footer;
    };
    return Article;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Article);


/***/ }),

/***/ "./src/template/DisplayArticleTemplate.ts":
/*!************************************************!*\
  !*** ./src/template/DisplayArticleTemplate.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var DisplayArticleTemplate = /** @class */ (function () {
    function DisplayArticleTemplate(article) {
        var _this = this;
        this.article = article;
        // readonly로 파생 클래스에서 오버라이드할 수 없도록 함
        this.displayHtml = function () {
            // 호출 순서를 정의하는 템플릿 메서드
            return "\n      ".concat(_this.title(), "\n      ").concat(_this.content(), "\n      ").concat(_this.footer(), "\n    ");
        };
    }
    return DisplayArticleTemplate;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DisplayArticleTemplate);


/***/ }),

/***/ "./src/template/EditableDisplayArticle.ts":
/*!************************************************!*\
  !*** ./src/template/EditableDisplayArticle.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DisplayArticleTemplate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DisplayArticleTemplate */ "./src/template/DisplayArticleTemplate.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var EditableDisplayArticle = /** @class */ (function (_super) {
    __extends(EditableDisplayArticle, _super);
    function EditableDisplayArticle(article) {
        return _super.call(this, article) || this;
    }
    EditableDisplayArticle.prototype.title = function () {
        return "<div><span>\uC81C\uBAA9</span><input value='".concat(this.article.getTitle(), "'/></div>");
    };
    EditableDisplayArticle.prototype.content = function () {
        return "<span>\uB0B4\uC6A9</span><br/><textarea cols='50' rows='5'>".concat(this.article.getContent(), "</textarea>");
    };
    EditableDisplayArticle.prototype.footer = function () {
        return "<div><span>\uAE00\uC4F4\uC774</span><input value='".concat(this.article.getFooter(), "'/></div>");
    };
    return EditableDisplayArticle;
}(_DisplayArticleTemplate__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditableDisplayArticle);


/***/ }),

/***/ "./src/template/SimpleDisplayArticle.ts":
/*!**********************************************!*\
  !*** ./src/template/SimpleDisplayArticle.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DisplayArticleTemplate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DisplayArticleTemplate */ "./src/template/DisplayArticleTemplate.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var SimpleDisplayArticle = /** @class */ (function (_super) {
    __extends(SimpleDisplayArticle, _super);
    function SimpleDisplayArticle(article) {
        return _super.call(this, article) || this;
    }
    SimpleDisplayArticle.prototype.title = function () {
        return "<h1>".concat(this.article.getTitle(), "</h1>");
    };
    SimpleDisplayArticle.prototype.content = function () {
        var items = this.article.getContent().map(function (item) { return "<li>".concat(item, "</li>"); });
        return "<ul>".concat(items.join(""), "</ul>");
    };
    SimpleDisplayArticle.prototype.footer = function () {
        return "<h3>".concat(this.article.getFooter(), "</h3>");
    };
    return SimpleDisplayArticle;
}(_DisplayArticleTemplate__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SimpleDisplayArticle);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*******************************!*\
  !*** ./src/template/index.ts ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Article__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Article */ "./src/template/Article.ts");
/* harmony import */ var _EditableDisplayArticle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditableDisplayArticle */ "./src/template/EditableDisplayArticle.ts");
/* harmony import */ var _SimpleDisplayArticle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SimpleDisplayArticle */ "./src/template/SimpleDisplayArticle.ts");



var article = new _Article__WEBPACK_IMPORTED_MODULE_0__["default"]("GoF 디자인 패턴", [
    "GoF 디자인 패턴은 23가지 디자인 패턴을 정리한 책입니다.",
    "디자인 패턴은 소프트웨어 설계에서 자주 발생하는 문제를 해결하기 위한 해결책을 제시합니다.",
    "GoF 디자인 패턴은 생성 패턴, 구조 패턴, 행동 패턴으로 나뉩니다.",
], "신재현");
var display = new _SimpleDisplayArticle__WEBPACK_IMPORTED_MODULE_2__["default"](article);
document.querySelector(".content").innerHTML = display.displayHtml();
document.querySelector(".edit-mode").addEventListener("change", function (e) {
    var display;
    if (e.target.checked) {
        display = new _EditableDisplayArticle__WEBPACK_IMPORTED_MODULE_1__["default"](article);
    }
    else {
        display = new _SimpleDisplayArticle__WEBPACK_IMPORTED_MODULE_2__["default"](article);
    }
    document.querySelector(".content").innerHTML = display.displayHtml();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOZ0M7QUFDOEI7QUFDSjtBQUUxRCxJQUFNLE9BQU8sR0FBRyxJQUFJLGdEQUFPLENBQ3pCLFlBQVksRUFDWjtJQUNFLG9DQUFvQztJQUNwQyxvREFBb0Q7SUFDcEQseUNBQXlDO0NBQzFDLEVBQ0QsS0FBSyxDQUNOLENBQUM7QUFFRixJQUFNLE9BQU8sR0FBRyxJQUFJLDZEQUFvQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ2xELFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUVyRSxRQUFRLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxVQUFDLENBQUM7SUFDaEUsSUFBSSxPQUFPLENBQUM7SUFFWixJQUF1QixDQUFDLENBQUMsTUFBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3pDLE9BQU8sR0FBRyxJQUFJLCtEQUFzQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hELENBQUM7U0FBTSxDQUFDO1FBQ04sT0FBTyxHQUFHLElBQUksNkRBQW9CLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUN2RSxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Rlc2lnbnBhdHRlcm5zLy4vc3JjL3RlbXBsYXRlL0FydGljbGUudHMiLCJ3ZWJwYWNrOi8vZGVzaWducGF0dGVybnMvLi9zcmMvdGVtcGxhdGUvRGlzcGxheUFydGljbGVUZW1wbGF0ZS50cyIsIndlYnBhY2s6Ly9kZXNpZ25wYXR0ZXJucy8uL3NyYy90ZW1wbGF0ZS9FZGl0YWJsZURpc3BsYXlBcnRpY2xlLnRzIiwid2VicGFjazovL2Rlc2lnbnBhdHRlcm5zLy4vc3JjL3RlbXBsYXRlL1NpbXBsZURpc3BsYXlBcnRpY2xlLnRzIiwid2VicGFjazovL2Rlc2lnbnBhdHRlcm5zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Rlc2lnbnBhdHRlcm5zL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9kZXNpZ25wYXR0ZXJucy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Rlc2lnbnBhdHRlcm5zL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZGVzaWducGF0dGVybnMvLi9zcmMvdGVtcGxhdGUvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXJ0aWNsZSB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHRpdGxlOiBzdHJpbmcsXHJcbiAgICBwcml2YXRlIGNvbnRlbnQ6IHN0cmluZ1tdLFxyXG4gICAgcHJpdmF0ZSBmb290ZXI6IHN0cmluZ1xyXG4gICkge31cclxuXHJcbiAgcHVibGljIGdldFRpdGxlKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy50aXRsZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRDb250ZW50KCk6IHN0cmluZ1tdIHtcclxuICAgIHJldHVybiB0aGlzLmNvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0Rm9vdGVyKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5mb290ZXI7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBBcnRpY2xlIGZyb20gXCIuL0FydGljbGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIERpc3BsYXlBcnRpY2xlVGVtcGxhdGUge1xyXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBhcnRpY2xlOiBBcnRpY2xlKSB7fVxyXG5cclxuICAvLyByZWFkb25seeuhnCDtjIzsg50g7YG0656Y7Iqk7JeQ7IScIOyYpOuyhOudvOydtOuTnO2VoCDsiJgg7JeG64+E66GdIO2VqFxyXG4gIHB1YmxpYyByZWFkb25seSBkaXNwbGF5SHRtbCA9ICgpID0+IHtcclxuICAgIC8vIO2YuOy2nCDsiJzshJzrpbwg7KCV7J2Y7ZWY64qUIO2FnO2UjOumvyDrqZTshJzrk5xcclxuICAgIHJldHVybiBgXHJcbiAgICAgICR7dGhpcy50aXRsZSgpfVxyXG4gICAgICAke3RoaXMuY29udGVudCgpfVxyXG4gICAgICAke3RoaXMuZm9vdGVyKCl9XHJcbiAgICBgO1xyXG4gIH07XHJcblxyXG4gIHByb3RlY3RlZCBhYnN0cmFjdCB0aXRsZSgpOiBzdHJpbmc7XHJcbiAgcHJvdGVjdGVkIGFic3RyYWN0IGNvbnRlbnQoKTogc3RyaW5nO1xyXG4gIHByb3RlY3RlZCBhYnN0cmFjdCBmb290ZXIoKTogc3RyaW5nO1xyXG59XHJcbiIsImltcG9ydCBBcnRpY2xlIGZyb20gXCIuL0FydGljbGVcIjtcclxuaW1wb3J0IERpc3BsYXlBcnRpY2xlVGVtcGxhdGUgZnJvbSBcIi4vRGlzcGxheUFydGljbGVUZW1wbGF0ZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWRpdGFibGVEaXNwbGF5QXJ0aWNsZSBleHRlbmRzIERpc3BsYXlBcnRpY2xlVGVtcGxhdGUge1xyXG4gIHByb3RlY3RlZCB0aXRsZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGA8ZGl2PjxzcGFuPuygnOuqqTwvc3Bhbj48aW5wdXQgdmFsdWU9JyR7dGhpcy5hcnRpY2xlLmdldFRpdGxlKCl9Jy8+PC9kaXY+YDtcclxuICB9XHJcbiAgcHJvdGVjdGVkIGNvbnRlbnQoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgPHNwYW4+64K07JqpPC9zcGFuPjxici8+PHRleHRhcmVhIGNvbHM9JzUwJyByb3dzPSc1Jz4ke3RoaXMuYXJ0aWNsZS5nZXRDb250ZW50KCl9PC90ZXh0YXJlYT5gO1xyXG4gIH1cclxuICBwcm90ZWN0ZWQgZm9vdGVyKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gYDxkaXY+PHNwYW4+6riA7JO07J20PC9zcGFuPjxpbnB1dCB2YWx1ZT0nJHt0aGlzLmFydGljbGUuZ2V0Rm9vdGVyKCl9Jy8+PC9kaXY+YDtcclxuICB9XHJcbiAgY29uc3RydWN0b3IoYXJ0aWNsZTogQXJ0aWNsZSkge1xyXG4gICAgc3VwZXIoYXJ0aWNsZSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBBcnRpY2xlIGZyb20gXCIuL0FydGljbGVcIjtcclxuaW1wb3J0IERpc3BsYXlBcnRpY2xlVGVtcGxhdGUgZnJvbSBcIi4vRGlzcGxheUFydGljbGVUZW1wbGF0ZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2ltcGxlRGlzcGxheUFydGljbGUgZXh0ZW5kcyBEaXNwbGF5QXJ0aWNsZVRlbXBsYXRlIHtcclxuICBwcm90ZWN0ZWQgdGl0bGUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgPGgxPiR7dGhpcy5hcnRpY2xlLmdldFRpdGxlKCl9PC9oMT5gO1xyXG4gIH1cclxuICBwcm90ZWN0ZWQgY29udGVudCgpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLmFydGljbGUuZ2V0Q29udGVudCgpLm1hcCgoaXRlbSkgPT4gYDxsaT4ke2l0ZW19PC9saT5gKTtcclxuICAgIHJldHVybiBgPHVsPiR7aXRlbXMuam9pbihcIlwiKX08L3VsPmA7XHJcbiAgfVxyXG4gIHByb3RlY3RlZCBmb290ZXIoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgPGgzPiR7dGhpcy5hcnRpY2xlLmdldEZvb3RlcigpfTwvaDM+YDtcclxuICB9XHJcbiAgY29uc3RydWN0b3IoYXJ0aWNsZTogQXJ0aWNsZSkge1xyXG4gICAgc3VwZXIoYXJ0aWNsZSk7XHJcbiAgfVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEFydGljbGUgZnJvbSBcIi4vQXJ0aWNsZVwiO1xyXG5pbXBvcnQgRWRpdGFibGVEaXNwbGF5QXJ0aWNsZSBmcm9tIFwiLi9FZGl0YWJsZURpc3BsYXlBcnRpY2xlXCI7XHJcbmltcG9ydCBTaW1wbGVEaXNwbGF5QXJ0aWNsZSBmcm9tIFwiLi9TaW1wbGVEaXNwbGF5QXJ0aWNsZVwiO1xyXG5cclxuY29uc3QgYXJ0aWNsZSA9IG5ldyBBcnRpY2xlKFxyXG4gIFwiR29GIOuUlOyekOyduCDtjKjthLRcIixcclxuICBbXHJcbiAgICBcIkdvRiDrlJTsnpDsnbgg7Yyo7YS07J2AIDIz6rCA7KeAIOuUlOyekOyduCDtjKjthLTsnYQg7KCV66as7ZWcIOyxheyeheuLiOuLpC5cIixcclxuICAgIFwi65SU7J6Q7J24IO2MqO2EtOydgCDshoztlITtirjsm6jslrQg7ISk6rOE7JeQ7IScIOyekOyjvCDrsJzsg53tlZjripQg66y47KCc66W8IO2VtOqysO2VmOq4sCDsnITtlZwg7ZW06rKw7LGF7J2EIOygnOyLnO2VqeuLiOuLpC5cIixcclxuICAgIFwiR29GIOuUlOyekOyduCDtjKjthLTsnYAg7IOd7ISxIO2MqO2EtCwg6rWs7KGwIO2MqO2EtCwg7ZaJ64+ZIO2MqO2EtOycvOuhnCDrgpjrianri4jri6QuXCIsXHJcbiAgXSxcclxuICBcIuyLoOyerO2YhFwiXHJcbik7XHJcblxyXG5jb25zdCBkaXNwbGF5ID0gbmV3IFNpbXBsZURpc3BsYXlBcnRpY2xlKGFydGljbGUpO1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIikuaW5uZXJIVE1MID0gZGlzcGxheS5kaXNwbGF5SHRtbCgpO1xyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0LW1vZGVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4ge1xyXG4gIGxldCBkaXNwbGF5O1xyXG5cclxuICBpZiAoKDxIVE1MSW5wdXRFbGVtZW50PmUudGFyZ2V0KS5jaGVja2VkKSB7XHJcbiAgICBkaXNwbGF5ID0gbmV3IEVkaXRhYmxlRGlzcGxheUFydGljbGUoYXJ0aWNsZSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRpc3BsYXkgPSBuZXcgU2ltcGxlRGlzcGxheUFydGljbGUoYXJ0aWNsZSk7XHJcbiAgfVxyXG5cclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIikuaW5uZXJIVE1MID0gZGlzcGxheS5kaXNwbGF5SHRtbCgpO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9