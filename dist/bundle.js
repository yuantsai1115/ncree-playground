/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/formulas/9-first-floor-ultimate-shear-force.ts":
/*!************************************************************!*\
  !*** ./src/formulas/9-first-floor-ultimate-shear-force.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   firstFloorUltimateShearForceInput: () => (/* binding */ firstFloorUltimateShearForceInput),\n/* harmony export */   getVuj: () => (/* binding */ getVuj)\n/* harmony export */ });\n/**\n * Define sample inputs here\n */\nvar firstFloorUltimateShearForceInput = {\n    shortColumns: [\n        {\n            name: '短柱1',\n            Bsc: 0,\n            Hsc: 0,\n            Hsl: 0,\n            No: 0,\n            Num: 0,\n            S: 0,\n            Nsci: 0\n        }\n    ],\n    rcWalls: [\n        {\n            name: 'RC牆1',\n            Tb: 0,\n            Wb: 0,\n            Hb: 0,\n            No: 0,\n            Num: 0,\n            S: 0,\n            Nswi: 0\n        }\n    ],\n    fourSideBrickWalls: [\n        {\n            name: '四邊圍束磚牆1',\n            Tb: 0,\n            Wb: 0,\n            Hb: 0,\n            Nbw4i: 0\n        }\n    ],\n    threeSideBrickWalls: [\n        {\n            name: '三邊圍束磚牆1',\n            Tb: 0,\n            Wb: 0,\n            Hb: 0,\n            Nbw3i: 0\n        }\n    ],\n    noSideBrickWalls: [\n        {\n            name: '無邊圍束磚牆1',\n            Tb: 0,\n            Wb: 0,\n            Hb: 0,\n            Nbw2i: 0\n        }\n    ],\n    generalColumns: [\n        {\n            name: '一般柱1',\n            Bc: 0,\n            Hc: 0,\n            Lo: 0,\n            No_1: 0,\n            Num_1: 0,\n            No_2: 0,\n            Num_2: 0,\n            H1: 0,\n            No: 0,\n            Num: 0,\n            S: 0,\n            Nci: 0\n        }\n    ]\n};\n/**\n * Write actual functions here\n */\nfunction getVuj(input) {\n    var output = {\n        SumVcoli: 2\n    };\n    // Your code here\n    // e.g. output.SumVcoli = ....\n    return output;\n}\n/**\n * 公式1\n * @returns 立面修正係數\n */\n// function getphifa(input: !!!這邊要把定性表的立面對稱性讀進來!!! ): number {\n//     phifa1 = (phi_fal_TABLE.find((phifal) => phifal.No === input.(立面的良/尚可/不良))?.Area ?? 0)\n// \tstory = !!!基本資訊的樓層資料!!!\n//     phifa  = phifal - (( phifal - 1 ) * ( 7 - story ) / 5)\n//     return phifa\n// }\n/**\n * 公式2\n * @returns 平面修正係數\n */\n// function getphipl(input: !!!這邊要把定性表的平面對稱性讀進來!!! ): number {\n//     phip1 = (phi_pl_TABLE.find((phifal) => phipl.No === input.(平面的良/尚可/不良))?.Area ?? 0)\n//     return phipl\n// }\n/**\n * 公式3\n * @returns  一樓極限層剪力 Vuj\n */\n// function getSingleUltimateStrength(\n//     inputGC : GeneralColumnOutput,\n//     inputSC : ShortColumnOutput,\n//     inputRCW: RcWallOutput,\n//     inputBW4: FourSideBrickWallOutput,\n//     inputBW3: ThreeSideBrickWallOutput,\n//     inputBW2: NoSideBrickWallOutput,\n//     referenceData: ReferenceData): number {\n//     //導入 極限強度總和\n//     const sumVcoli  = inputGC.SumVcoli\n//     const sumVscoli = inputSC.SumVscoli\n//     const sumVswi   = inputRCW.SumVswi\n//     const sumVbw4i  = inputBW4.SumVbw4i\n//     const sumVbw3i  = inputBW3.SumVbw3i\n//     const sumVbw2i  = inputBW2.SumVbw2i\n//     //導入phi\n//     const phi_fa = getphifa ()  !!立面的良/尚可/不良\n//     const phi_pl = getphipl ()  !!平面的良/尚可/不良\n//     //j=1 \n//     const Cvsj_1 = 0.85\n//     const Cvbj_1 = 0.95\n//     const Cvcj_1 = 0.65\n//     Vuj_1 = (Cvcj_1 * (sumVcoli) + Cvsj_1 * ( sumVscoli + sumVswi) + Cvbj_1 *(sumVbw4i +sumVbw3i +sumVbw2i) ) * phi_fa * phi_pl\n//     //j=2 \n//     const Cvsj_2 = 0\n//     const Cvbj_2 = 0.85\n//     const Cvcj_2 = 0.95\n//     Vuj_2 = (Cvcj_2 * (sumVcoli) + Cvsj_2 * ( sumVscoli + sumVswi) + Cvbj_2 *(sumVbw4i +sumVbw3i +sumVbw2i) ) * phi_fa * phi_pl\n//     //j=3 \n//     const Cvsj_3 = 0\n//     const Cvbj_3 = 0\n//     const Cvcj_3 = 1\n//     Vuj_3 = (Cvcj_3 * (sumVcoli) + Cvsj_3 * ( sumVscoli + sumVswi) + Cvbj_3 *(sumVbw4i +sumVbw3i +sumVbw2i) ) * phi_fa * phi_pl\n//     return Vuj_1 , Vuj_2 , Vuj_3\n\n\n//# sourceURL=webpack://ncree-playground/./src/formulas/9-first-floor-ultimate-shear-force.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _formulas_9_first_floor_ultimate_shear_force__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formulas/9-first-floor-ultimate-shear-force */ \"./src/formulas/9-first-floor-ultimate-shear-force.ts\");\n\n/**\n * sample-functions.ts\n */\n// const result1 = formula.add(5, 3);\n// const result2 = formula.multiply(4, 7);\n// document.body.innerHTML = `\n//   <h2>Sample Formula:</h2>\n//   <p>5 + 3 = ${result1}</p>\n//   <p>4 * 7 = ${result2}</p>\n// `;\n/**\n * 8-general-column.ts\n */\n/**\n * 9-first-floor-ultimate-shear-force.ts\n */\nvar output = (0,_formulas_9_first_floor_ultimate_shear_force__WEBPACK_IMPORTED_MODULE_0__.getVuj)(_formulas_9_first_floor_ultimate_shear_force__WEBPACK_IMPORTED_MODULE_0__.firstFloorUltimateShearForceInput);\ndocument.body.innerHTML = \"\\n  <h2>\\u8868\\u4E5D \\u4E00\\u6A13\\u6975\\u9650\\u5C64\\u526A\\u529B Vuj:</h2>\\n  <h4>Output:</h4>\\n  <p>SumVcoli = \".concat(output.SumVcoli, \"</p>\\n\\n  <h4>Input:</h4>\\n  <pre>{\").concat(formatObject(_formulas_9_first_floor_ultimate_shear_force__WEBPACK_IMPORTED_MODULE_0__.firstFloorUltimateShearForceInput, \"  \"), \"}</pre>\\n\");\n/**\n * 10-ultimate-shear-strength-new-building.ts\n */\n/**\n * 11-yield-ground-acceleration-assessed-building.ts\n */\n/**\n * 12-equivalent-structural-ductility-rj.ts\n */\n/**\n * 13-equivalent-allowable-structural-ductility-raj.ts\n */\n/**\n * 14-seismic-force-reduction-factor-fuj.ts\n */\n/**\n * Helper functions, DO NOT MODIFY OR COMMENT OUT\n */\nfunction formatObject(obj, indent) {\n    if (indent === void 0) { indent = ''; }\n    var nextIndent = indent + '  ';\n    return Object.entries(obj)\n        .map(function (_a) {\n        var key = _a[0], value = _a[1];\n        if (Array.isArray(value)) {\n            var formattedArray = value.map(function (item) {\n                return typeof item === 'object' && item !== null\n                    ? \"\".concat(nextIndent, \"{\\n\").concat(formatObject(item, nextIndent + '  '), \"\\n\").concat(nextIndent, \"}\")\n                    : \"\".concat(nextIndent).concat(JSON.stringify(item));\n            }).join(',\\n');\n            return \"\".concat(key, \": [\\n\").concat(formattedArray, \"\\n\").concat(indent, \"]\");\n        }\n        else if (typeof value === 'object' && value !== null) {\n            return \"\".concat(key, \": {\\n\").concat(formatObject(value, nextIndent), \"\\n\").concat(indent, \"}\");\n        }\n        return \"\".concat(indent).concat(key, \": \").concat(JSON.stringify(value));\n    })\n        .join(',\\n');\n}\n\n\n//# sourceURL=webpack://ncree-playground/./src/index.ts?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;