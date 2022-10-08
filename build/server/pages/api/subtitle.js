"use strict";
(() => {
var exports = {};
exports.id = 988;
exports.ids = [988];
exports.modules = {

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 6776:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ subtitle)
});

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: external "subtitle-converter"
const external_subtitle_converter_namespaceObject = require("subtitle-converter");
;// CONCATENATED MODULE: ./src/pages/api/subtitle.ts

// @ts-ignore

const handler = async (req, res)=>{
    try {
        const url = req.query.url;
        if (!url || typeof url !== "string") return res.status(400).send("Invalid request");
        const response = await external_axios_default().get(encodeURI(url));
        if (!response.headers["content-type"].startsWith("application/x-subrip") && !response.headers["content-type"].includes("srt")) return res.status(400).send("Invalid content type");
        const { subtitle  } = (0,external_subtitle_converter_namespaceObject.convert)(response.data, ".vtt");
        if (!subtitle) return res.status(400).send("Cannot convert");
        res.setHeader("content-type", "text/vtt");
        res.send(subtitle);
    } catch (error) {
        if (!res.headersSent) res.status(500).send("Failed to convert the subtitle");
    }
};
/* harmony default export */ const subtitle = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6776));
module.exports = __webpack_exports__;

})();