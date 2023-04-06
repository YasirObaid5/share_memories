(this["webpackJsonpshareme_theme"] = this["webpackJsonpshareme_theme"] || []).push([["main"],{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ "./src/components/index.js");
/* harmony import */ var _container_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./container/Home */ "./src/container/Home.jsx");
var _jsxFileName = "C:\\wamp64\\www\\wp-content\\themes\\shareme_theme\\react-src\\src\\App.js";





const App = () => {
  const navigate = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useNavigate"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const User = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();
    if (!User) navigate('/login');
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Routes"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "login",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Login"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 36
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/*",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_container_Home__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 33
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/logo.6ac63252.png";

/***/ }),

/***/ "./src/assets/logowhite.png":
/*!**********************************!*\
  !*** ./src/assets/logowhite.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/share.mp4":
/*!******************************!*\
  !*** ./src/assets/share.mp4 ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/share.08f81823.mp4";

/***/ }),

/***/ "./src/client.js":
/*!***********************!*\
  !*** ./src/client.js ***!
  \***********************/
/*! exports provided: client, urlFor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "client", function() { return client; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlFor", function() { return urlFor; });
/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/client */ "./node_modules/@sanity/client/lib/sanityClient.js");
/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sanity/image-url */ "./node_modules/@sanity/image-url/lib/browser/image-url.umd.js");
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_1__);


const client = _sanity_client__WEBPACK_IMPORTED_MODULE_0___default()({
  projectId: "k249guuj",
  dataset: 'production',
  apiVersion: "2021-11-16",
  useCdn: true,
  token: "skFbdQGlAqtUFY0ogo5cq8LPWYyr0Jh2AxyYZzw3V3JDyLM7YLQNz34QIxnVHXCOUCiPO0Tr2AwrZ6WbP3E6gMucRSFOdCyUM4TB1xjh1TcglV5lFimoOVVqyCCJyEXUXP9uZmwks7qmmPS64HzDoDU2p1ciGSVnhWrM1r1Upj06pBvNCnYt"
});
const builder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default()(client);
const urlFor = source => builder.image(source);

/***/ }),

/***/ "./src/components/CreatePin.jsx":
/*!**************************************!*\
  !*** ./src/components/CreatePin.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/data */ "./src/utils/data.js");
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../client */ "./src/client.js");
/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Spinner */ "./src/components/Spinner.jsx");
var _jsxFileName = "C:\\wamp64\\www\\wp-content\\themes\\shareme_theme\\react-src\\src\\components\\CreatePin.jsx";








const CreatePin = _ref => {
  let {
    user
  } = _ref;
  const [title, setTitle] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [about, setAbout] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [loading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [destination, setDestination] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const [fields, setFields] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const [category, setCategory] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const [imageAsset, setImageAsset] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const [wrongImageType, setWrongImageType] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const navigate = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useNavigate"])();

  const uploadImage = e => {
    const selectedFile = e.target.files[0]; // uploading asset to sanity

    if (selectedFile.type === 'image/png' || selectedFile.type === 'image/svg' || selectedFile.type === 'image/jpeg' || selectedFile.type === 'image/gif' || selectedFile.type === 'image/tiff') {
      setWrongImageType(false);
      setLoading(true);
      _client__WEBPACK_IMPORTED_MODULE_5__["client"].assets.upload('image', selectedFile, {
        contentType: selectedFile.type,
        filename: selectedFile.name
      }).then(document => {
        setImageAsset(document);
        setLoading(false);
      }).catch(error => {
        console.log('Upload failed:', error.message);
      });
    } else {
      setLoading(false);
      setWrongImageType(true);
    }
  };

  const savePin = () => {
    if (title && about && destination && (imageAsset === null || imageAsset === void 0 ? void 0 : imageAsset._id) && category) {
      const doc = {
        _type: 'pin',
        title,
        about,
        destination,
        image: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: imageAsset === null || imageAsset === void 0 ? void 0 : imageAsset._id
          }
        },
        userId: user._id,
        postedBy: {
          _type: 'postedBy',
          _ref: user._id
        },
        category
      };
      _client__WEBPACK_IMPORTED_MODULE_5__["client"].create(doc).then(() => {
        navigate('/');
      });
    } else {
      setFields(true);
      setTimeout(() => {
        setFields(false);
      }, 2000);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-col justify-center items-center mt-5 lg:h-4/5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 5
    }
  }, fields && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-red-500 mb-5 text-xl transition-all duration-150 ease-in ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }, "Please add all fields."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: " flex lg:flex-row flex-col justify-center items-center bg-white lg:p-5 p-3 lg:w-4/5  w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bg-secondaryColor p-3 flex flex-0.7 w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: " flex justify-center items-center flex-col border-2 border-dotted border-gray-300 p-3 w-full h-420",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }, loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Spinner__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 15
    }
  }), wrongImageType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 17
    }
  }, "It's wrong file type."), !imageAsset ?
  /*#__PURE__*/
  // eslint-disable-next-line jsx-a11y/label-has-associated-control
  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-col items-center justify-center h-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-col justify-center items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "font-bold text-2xl",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_1__["AiOutlineCloudUpload"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 23
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-lg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 21
    }
  }, "Click to upload")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "mt-32 text-gray-400",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 19
    }
  }, "Recommendation: Use high-quality JPG, JPEG, SVG, PNG, GIF or TIFF less than 20MB")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "file",
    name: "upload-image",
    onChange: uploadImage,
    className: "w-0 h-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 17
    }
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "relative h-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: imageAsset === null || imageAsset === void 0 ? void 0 : imageAsset.url,
    alt: "uploaded-pic",
    className: "h-full w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "absolute bottom-3 right-3 p-3 rounded-full bg-white text-xl cursor-pointer outline-none hover:shadow-md transition-all duration-500 ease-in-out",
    onClick: () => setImageAsset(null),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_3__["MdDelete"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 19
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-1 flex-col gap-6 lg:pl-5 mt-5 w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    value: title,
    onChange: e => setTitle(e.target.value),
    placeholder: "Add your title",
    className: "outline-none text-2xl sm:text-3xl font-bold border-b-2 border-gray-200 p-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 11
    }
  }), user && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex gap-2 mt-2 mb-2 items-center bg-white rounded-lg ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: user.image,
    className: "w-10 h-10 rounded-full",
    alt: "user-profile",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 15
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "font-bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 15
    }
  }, user.userName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    value: about,
    onChange: e => setAbout(e.target.value),
    placeholder: "Tell everyone what your Pin is about",
    className: "outline-none text-base sm:text-lg border-b-2 border-gray-200 p-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "url",
    vlaue: destination,
    onChange: e => setDestination(e.target.value),
    placeholder: "Add a destination link",
    className: "outline-none text-base sm:text-lg border-b-2 border-gray-200 p-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-col",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "mb-2 font-semibold text:lg sm:text-xl",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 15
    }
  }, "Choose Pin Category"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    onChange: e => {
      setCategory(e.target.value);
    },
    className: "outline-none w-4/5 text-base border-b-2 border-gray-200 p-2 rounded-md cursor-pointer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "others",
    className: "sm:text-bg bg-white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 17
    }
  }, "Select Category"), _utils_data__WEBPACK_IMPORTED_MODULE_4__["categories"].map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    className: "text-base border-0 outline-none capitalize bg-white text-black ",
    value: item.name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 19
    }
  }, item.name)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex justify-end items-end mt-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    onClick: savePin,
    className: "bg-red-500 text-white font-bold p-2 rounded-full w-28 outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 15
    }
  }, "Save Pin"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (CreatePin);

/***/ }),

/***/ "./src/components/Feed.jsx":
/*!*********************************!*\
  !*** ./src/components/Feed.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client */ "./src/client.js");
/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/data */ "./src/utils/data.js");
/* harmony import */ var _MasonryLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MasonryLayout */ "./src/components/MasonryLayout.jsx");
/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Spinner */ "./src/components/Spinner.jsx");
var _jsxFileName = "C:\\wamp64\\www\\wp-content\\themes\\shareme_theme\\react-src\\src\\components\\Feed.jsx";







const Feed = () => {
  const [pins, setPins] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const [loading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    categoryId
  } = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useParams"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (categoryId) {
      setLoading(true);
      const query = Object(_utils_data__WEBPACK_IMPORTED_MODULE_3__["searchQuery"])(categoryId);
      _client__WEBPACK_IMPORTED_MODULE_2__["client"].fetch(query).then(data => {
        setPins(data);
        setLoading(false);
      });
    } else {
      setLoading(true);
      _client__WEBPACK_IMPORTED_MODULE_2__["client"].fetch(_utils_data__WEBPACK_IMPORTED_MODULE_3__["feedQuery"]).then(data => {
        setPins(data);
        setLoading(false);
      });
    }
  }, [categoryId]);
  const ideaName = categoryId || 'new';

  if (loading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Spinner__WEBPACK_IMPORTED_MODULE_5__["default"], {
      message: `We are adding ${ideaName} ideas to your feed!`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 7
      }
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, pins && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MasonryLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    pins: pins,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Feed);

/***/ }),

/***/ "./src/components/Login.jsx":
/*!**********************************!*\
  !*** ./src/components/Login.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-google-login */ "./node_modules/react-google-login/dist/google-login.js");
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_icons_fc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fc */ "./node_modules/react-icons/fc/index.esm.js");
/* harmony import */ var _assets_share_mp4__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/share.mp4 */ "./src/assets/share.mp4");
/* harmony import */ var _assets_share_mp4__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_share_mp4__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_logowhite_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/logowhite.png */ "./src/assets/logowhite.png");
/* harmony import */ var _assets_logowhite_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_logowhite_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../client */ "./src/client.js");
var _jsxFileName = "C:\\wamp64\\www\\wp-content\\themes\\shareme_theme\\react-src\\src\\components\\Login.jsx";








const Login = () => {
  const navigate = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useNavigate"])();

  const responseGoogle = response => {
    localStorage.setItem('user', JSON.stringify(response.profileObj));
    const {
      imageUrl
    } = response.profileObj;
    const {
      googleId
    } = response.profileObj;
    const {
      name
    } = response.profileObj;
    const doc = {
      _id: googleId,
      _type: 'user',
      userName: name,
      image: imageUrl
    };
    _client__WEBPACK_IMPORTED_MODULE_6__["client"].createIfNotExists(doc).then(() => {
      navigate('/', {
        replace: true
      });
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex justify-start items-center flex-col h-screen",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: " relative w-full h-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("video", {
    src: _assets_share_mp4__WEBPACK_IMPORTED_MODULE_4___default.a,
    type: "video/mp4",
    loop: true,
    controls: false,
    muted: true,
    autoPlay: true,
    className: "w-full h-full object-cover",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0    bg-blackOverlay",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "p-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_logowhite_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    width: "130px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "shadow-2xl",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_google_login__WEBPACK_IMPORTED_MODULE_1___default.a, {
    clientId: `${"84497603606-3lcdta5hp7v6tf1a3sag6c2cvmdii0ru.apps.googleusercontent.com"}`,
    render: renderProps => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "button",
      className: "bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none",
      onClick: renderProps.onClick,
      disabled: renderProps.disabled,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fc__WEBPACK_IMPORTED_MODULE_3__["FcGoogle"], {
      className: "mr-4",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 19
      }
    }), " Sign in with google"),
    onSuccess: responseGoogle,
    onFailure: responseGoogle,
    cookiePolicy: "single_host_origin",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "./src/components/MasonryLayout.jsx":
/*!******************************************!*\
  !*** ./src/components/MasonryLayout.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_masonry_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-masonry-css */ "./node_modules/react-masonry-css/dist/react-masonry-css.module.js");
/* harmony import */ var _Pin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Pin */ "./src/components/Pin.jsx");
var _jsxFileName = "C:\\wamp64\\www\\wp-content\\themes\\shareme_theme\\react-src\\src\\components\\MasonryLayout.jsx";



const breakpointColumnsObj = {
  default: 4,
  3000: 6,
  2000: 5,
  1200: 3,
  1000: 2,
  500: 1
};

const MasonryLayout = _ref => {
  let {
    pins
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_masonry_css__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "flex animate-slide-fwd",
    breakpointCols: breakpointColumnsObj,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 3
    }
  }, pins === null || pins === void 0 ? void 0 : pins.map(pin => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pin__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: pin._id,
    pin: pin,
    className: "w-max",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 25
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (MasonryLayout);

/***/ }),

/***/ "./src/components/Navbar.jsx":
/*!***********************************!*\
  !*** ./src/components/Navbar.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
var _jsxFileName = "C:\\wamp64\\www\\wp-content\\themes\\shareme_theme\\react-src\\src\\components\\Navbar.jsx";




const Navbar = _ref => {
  let {
    searchTerm,
    setSearchTerm,
    user
  } = _ref;
  const navigate = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useNavigate"])();

  if (user) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "flex gap-2 md:gap-5 w-full mt-5 pb-7 ",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "flex justify-start items-center w-full px-2 rounded-md bg-white border-none outline-none focus-within:shadow-sm",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_io__WEBPACK_IMPORTED_MODULE_2__["IoMdSearch"], {
      fontSize: 21,
      className: "ml-1",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      onChange: e => setSearchTerm(e.target.value),
      placeholder: "Search",
      value: searchTerm,
      onFocus: () => navigate('/search'),
      className: "p-2 w-full bg-white outline-none",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 11
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "flex gap-3 ",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: `user-profile/${user === null || user === void 0 ? void 0 : user._id}`,
      className: "hidden md:block",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: user.image,
      alt: "user-pic",
      className: "w-14 h-12 rounded-lg ",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 13
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/create-pin",
      className: "bg-black text-white rounded-lg w-12 h-12 md:w-14 md:h-12 flex justify-center items-center",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_io__WEBPACK_IMPORTED_MODULE_2__["IoMdAdd"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 13
      }
    }))));
  }

  return null;
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./src/components/Pin.jsx":
/*!********************************!*\
  !*** ./src/components/Pin.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.esm.js");
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../client */ "./src/client.js");
var _jsxFileName = "C:\\wamp64\\www\\wp-content\\themes\\shareme_theme\\react-src\\src\\components\\Pin.jsx";








const Pin = _ref => {
  var _pin$save, _alreadySaved, _image$asset, _alreadySaved3, _pin$save2, _pin$save3;

  let {
    pin
  } = _ref;
  const [postHovered, setPostHovered] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [savingPost, setSavingPost] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const navigate = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useNavigate"])();
  const {
    postedBy,
    image,
    _id,
    destination
  } = pin;
  const user = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();

  const deletePin = id => {
    _client__WEBPACK_IMPORTED_MODULE_6__["client"].delete(id).then(() => {
      window.location.reload();
    });
  };

  let alreadySaved = pin === null || pin === void 0 ? void 0 : (_pin$save = pin.save) === null || _pin$save === void 0 ? void 0 : _pin$save.filter(item => {
    var _item$postedBy;

    return (item === null || item === void 0 ? void 0 : (_item$postedBy = item.postedBy) === null || _item$postedBy === void 0 ? void 0 : _item$postedBy._id) === (user === null || user === void 0 ? void 0 : user.googleId);
  });
  alreadySaved = ((_alreadySaved = alreadySaved) === null || _alreadySaved === void 0 ? void 0 : _alreadySaved.length) > 0 ? alreadySaved : [];

  const savePin = id => {
    var _alreadySaved2;

    if (((_alreadySaved2 = alreadySaved) === null || _alreadySaved2 === void 0 ? void 0 : _alreadySaved2.length) === 0) {
      setSavingPost(true);
      _client__WEBPACK_IMPORTED_MODULE_6__["client"].patch(id).setIfMissing({
        save: []
      }).insert('after', 'save[-1]', [{
        _key: Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])(),
        userId: user === null || user === void 0 ? void 0 : user.googleId,
        postedBy: {
          _type: 'postedBy',
          _ref: user === null || user === void 0 ? void 0 : user.googleId
        }
      }]).commit().then(() => {
        window.location.reload();
        setSavingPost(false);
      });
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "m-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    onMouseEnter: () => setPostHovered(true),
    onMouseLeave: () => setPostHovered(false),
    onClick: () => navigate(`/pin-detail/${_id}`),
    className: " relative cursor-zoom-in w-auto hover:shadow-lg rounded-lg overflow-hidden transition-all duration-500 ease-in-out",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "rounded-lg w-full ",
    src: Object(_client__WEBPACK_IMPORTED_MODULE_6__["urlFor"])(image).width(250).url(),
    alt: "user-post",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }), postHovered && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "absolute top-0 w-full h-full flex flex-col justify-between p-1 pr-2 pt-2 pb-2 z-50",
    style: {
      height: '100%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex items-center justify-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex gap-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: `${image === null || image === void 0 ? void 0 : (_image$asset = image.asset) === null || _image$asset === void 0 ? void 0 : _image$asset.url}?dl=`,
    download: true,
    onClick: e => {
      e.stopPropagation();
    },
    className: "bg-white w-9 h-9 p-2 rounded-full flex items-center justify-center text-dark text-xl opacity-75 hover:opacity-100 hover:shadow-md outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_3__["MdDownloadForOffline"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 18
    }
  }))), ((_alreadySaved3 = alreadySaved) === null || _alreadySaved3 === void 0 ? void 0 : _alreadySaved3.length) !== 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "bg-red-500 opacity-70 hover:opacity-100 text-white font-bold px-5 py-1 text-base rounded-3xl hover:shadow-md outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }, pin === null || pin === void 0 ? void 0 : (_pin$save2 = pin.save) === null || _pin$save2 === void 0 ? void 0 : _pin$save2.length, "  Saved") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      savePin(_id);
    },
    type: "button",
    className: "bg-red-500 opacity-70 hover:opacity-100 text-white font-bold px-5 py-1 text-base rounded-3xl hover:shadow-md outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 17
    }
  }, pin === null || pin === void 0 ? void 0 : (_pin$save3 = pin.save) === null || _pin$save3 === void 0 ? void 0 : _pin$save3.length, "   ", savingPost ? 'Saving' : 'Save')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: " flex justify-between items-center gap-2 w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }
  }, (destination === null || destination === void 0 ? void 0 : destination.slice(8).length) > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: destination,
    target: "_blank",
    className: "bg-white flex items-center gap-2 text-black font-bold p-2 pl-4 pr-4 rounded-full opacity-70 hover:opacity-100 hover:shadow-md",
    rel: "noreferrer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 17
    }
  }, ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__["BsFillArrowUpRightCircleFill"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 19
    }
  }), destination === null || destination === void 0 ? void 0 : destination.slice(8, 17), "...") : undefined, (postedBy === null || postedBy === void 0 ? void 0 : postedBy._id) === (user === null || user === void 0 ? void 0 : user.googleId) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    onClick: e => {
      e.stopPropagation();
      deletePin(_id);
    },
    className: "bg-white p-2 rounded-full w-8 h-8 flex items-center justify-center text-dark opacity-75 hover:opacity-100 outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 12
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__["AiTwotoneDelete"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 14
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: `/user-profile/${postedBy === null || postedBy === void 0 ? void 0 : postedBy._id}`,
    className: "flex gap-2 mt-2 items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "w-8 h-8 rounded-full object-cover",
    src: postedBy === null || postedBy === void 0 ? void 0 : postedBy.image,
    alt: "user-profile",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "font-semibold capitalize",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 9
    }
  }, postedBy === null || postedBy === void 0 ? void 0 : postedBy.userName)));
};

/* harmony default export */ __webpack_exports__["default"] = (Pin);

/***/ }),

/***/ "./src/components/PinDetail.jsx":
/*!**************************************!*\
  !*** ./src/components/PinDetail.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../client */ "./src/client.js");
/* harmony import */ var _MasonryLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MasonryLayout */ "./src/components/MasonryLayout.jsx");
/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/data */ "./src/utils/data.js");
/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Spinner */ "./src/components/Spinner.jsx");
var _jsxFileName = "C:\\wamp64\\www\\wp-content\\themes\\shareme_theme\\react-src\\src\\components\\PinDetail.jsx";









const PinDetail = _ref => {
  var _pinDetail$destinatio, _pinDetail$comments;

  let {
    user
  } = _ref;
  const {
    pinId
  } = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useParams"])();
  const [pins, setPins] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const [pinDetail, setPinDetail] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const [comment, setComment] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [addingComment, setAddingComment] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const fetchPinDetails = () => {
    const query = Object(_utils_data__WEBPACK_IMPORTED_MODULE_6__["pinDetailQuery"])(pinId);

    if (query) {
      _client__WEBPACK_IMPORTED_MODULE_4__["client"].fetch(`${query}`).then(data => {
        setPinDetail(data[0]);
        console.log(data);

        if (data[0]) {
          const query1 = Object(_utils_data__WEBPACK_IMPORTED_MODULE_6__["pinDetailMorePinQuery"])(data[0]);
          _client__WEBPACK_IMPORTED_MODULE_4__["client"].fetch(query1).then(res => {
            setPins(res);
          });
        }
      });
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    fetchPinDetails();
  }, [pinId]);

  const addComment = () => {
    if (comment) {
      setAddingComment(true);
      _client__WEBPACK_IMPORTED_MODULE_4__["client"].patch(pinId).setIfMissing({
        comments: []
      }).insert('after', 'comments[-1]', [{
        comment,
        _key: Object(uuid__WEBPACK_IMPORTED_MODULE_3__["v4"])(),
        postedBy: {
          _type: 'postedBy',
          _ref: user._id
        }
      }]).commit().then(() => {
        fetchPinDetails();
        setComment('');
        setAddingComment(false);
      });
    }
  };

  if (!pinDetail) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Spinner__WEBPACK_IMPORTED_MODULE_7__["default"], {
      message: "Showing pin",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 7
      }
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, pinDetail && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex xl:flex-row flex-col m-auto bg-white",
    style: {
      maxWidth: '1500px',
      borderRadius: '32px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex justify-center items-center md:items-start flex-initial",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "rounded-t-3xl rounded-b-lg",
    src: (pinDetail === null || pinDetail === void 0 ? void 0 : pinDetail.image) && Object(_client__WEBPACK_IMPORTED_MODULE_4__["urlFor"])(pinDetail === null || pinDetail === void 0 ? void 0 : pinDetail.image).url(),
    alt: "user-post",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full p-5 flex-1 xl:min-w-620",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex items-center justify-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex gap-2 items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: `${pinDetail.image.asset.url}?dl=`,
    download: true,
    className: "bg-secondaryColor p-2 text-xl rounded-full flex items-center justify-center text-dark opacity-75 hover:opacity-100",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_1__["MdDownloadForOffline"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 19
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: pinDetail.destination,
    target: "_blank",
    rel: "noreferrer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 15
    }
  }, (_pinDetail$destinatio = pinDetail.destination) === null || _pinDetail$destinatio === void 0 ? void 0 : _pinDetail$destinatio.slice(8))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "text-4xl font-bold break-words mt-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 15
    }
  }, pinDetail.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "mt-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 15
    }
  }, pinDetail.about)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: `/user-profile/${pinDetail === null || pinDetail === void 0 ? void 0 : pinDetail.postedBy._id}`,
    className: "flex gap-2 mt-5 items-center bg-white rounded-lg ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: pinDetail === null || pinDetail === void 0 ? void 0 : pinDetail.postedBy.image,
    className: "w-10 h-10 rounded-full",
    alt: "user-profile",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 15
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "font-bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 15
    }
  }, pinDetail === null || pinDetail === void 0 ? void 0 : pinDetail.postedBy.userName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "mt-5 text-2xl",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }
  }, "Comments"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "max-h-370 overflow-y-auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }
  }, pinDetail === null || pinDetail === void 0 ? void 0 : (_pinDetail$comments = pinDetail.comments) === null || _pinDetail$comments === void 0 ? void 0 : _pinDetail$comments.map(item => {
    var _item$postedBy, _item$postedBy2;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "flex gap-2 mt-5 items-center bg-white rounded-lg",
      key: item.comment,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: (_item$postedBy = item.postedBy) === null || _item$postedBy === void 0 ? void 0 : _item$postedBy.image,
      className: "w-10 h-10 rounded-full cursor-pointer",
      alt: "user-profile",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 19
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "flex flex-col",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 19
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "font-bold",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 21
      }
    }, (_item$postedBy2 = item.postedBy) === null || _item$postedBy2 === void 0 ? void 0 : _item$postedBy2.userName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 21
      }
    }, item.comment)));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-wrap mt-6 gap-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: `/user-profile/${user._id}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: user.image,
    className: "w-10 h-10 rounded-full cursor-pointer",
    alt: "user-profile",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: " flex-1 border-gray-100 outline-none border-2 p-2 rounded-2xl focus:border-gray-300",
    type: "text",
    placeholder: "Add a comment",
    value: comment,
    onChange: e => setComment(e.target.value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 15
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "bg-red-500 text-white rounded-full px-6 py-2 font-semibold text-base outline-none",
    onClick: addComment,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 15
    }
  }, addingComment ? 'Doing...' : 'Done')))), (pins === null || pins === void 0 ? void 0 : pins.length) > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "text-center font-bold text-2xl mt-8 mb-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 9
    }
  }, "More like this"), pins ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MasonryLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    pins: pins,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 9
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Spinner__WEBPACK_IMPORTED_MODULE_7__["default"], {
    message: "Loading more pins",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 9
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (PinDetail);

/***/ }),

/***/ "./src/components/Search.jsx":
/*!***********************************!*\
  !*** ./src/components/Search.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MasonryLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MasonryLayout */ "./src/components/MasonryLayout.jsx");
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client */ "./src/client.js");
/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/data */ "./src/utils/data.js");
/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Spinner */ "./src/components/Spinner.jsx");
var _jsxFileName = "C:\\wamp64\\www\\wp-content\\themes\\shareme_theme\\react-src\\src\\components\\Search.jsx";






const Search = _ref => {
  let {
    searchTerm
  } = _ref;
  const [pins, setPins] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const [loading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (searchTerm !== '') {
      setLoading(true);
      const query = Object(_utils_data__WEBPACK_IMPORTED_MODULE_3__["searchQuery"])(searchTerm.toLowerCase());
      _client__WEBPACK_IMPORTED_MODULE_2__["client"].fetch(query).then(data => {
        setPins(data);
        setLoading(false);
      });
    } else {
      _client__WEBPACK_IMPORTED_MODULE_2__["client"].fetch(_utils_data__WEBPACK_IMPORTED_MODULE_3__["feedQuery"]).then(data => {
        setPins(data);
        setLoading(false);
      });
    }
  }, [searchTerm]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Spinner__WEBPACK_IMPORTED_MODULE_4__["default"], {
    message: "Searching pins",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 19
    }
  }), (pins === null || pins === void 0 ? void 0 : pins.length) !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MasonryLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    pins: pins,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 30
    }
  }), (pins === null || pins === void 0 ? void 0 : pins.length) === 0 && searchTerm !== '' && !loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mt-10 text-center text-xl ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, "No Pins Found!"));
};

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

/***/ "./src/components/Sidebar.jsx":
/*!************************************!*\
  !*** ./src/components/Sidebar.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/ri */ "./node_modules/react-icons/ri/index.esm.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/logo.png */ "./src/assets/logo.png");
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_logo_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/data */ "./src/utils/data.js");
var _jsxFileName = "C:\\wamp64\\www\\wp-content\\themes\\shareme_theme\\react-src\\src\\components\\Sidebar.jsx";






const isNotActiveStyle = 'flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize';
const isActiveStyle = 'flex items-center px-5 gap-3 font-extrabold border-r-2 border-black  transition-all duration-200 ease-in-out capitalize';

const Sidebar = _ref => {
  let {
    closeToggle,
    user
  } = _ref;

  const handleCloseSidebar = () => {
    if (closeToggle) closeToggle(false);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-col justify-between bg-white h-full overflow-y-scroll min-w-210 hide-scrollbar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-col",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/",
    className: "flex px-5 gap-2 my-6 pt-1 w-190 items-center",
    onClick: handleCloseSidebar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_logo_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "logo",
    className: "w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-col gap-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    to: "/",
    className: _ref2 => {
      let {
        isActive
      } = _ref2;
      return isActive ? isActiveStyle : isNotActiveStyle;
    },
    onClick: handleCloseSidebar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_ri__WEBPACK_IMPORTED_MODULE_2__["RiHomeFill"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }), "Home"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "mt-2 px-5 text-base 2xl:text-xl",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, "Discover cateogries"), _utils_data__WEBPACK_IMPORTED_MODULE_5__["categories"].slice(0, _utils_data__WEBPACK_IMPORTED_MODULE_5__["categories"].length - 1).map(category => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    to: `/category/${category.name}`,
    className: _ref3 => {
      let {
        isActive
      } = _ref3;
      return isActive ? isActiveStyle : isNotActiveStyle;
    },
    onClick: handleCloseSidebar,
    key: category.name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: category.image,
    className: "w-8 h-8 rounded-full shadow-sm",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }
  }), category.name)))), user && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: `user-profile/${user._id}`,
    className: "flex my-5 mb-3 gap-2 p-2 items-center bg-white rounded-lg shadow-lg mx-3",
    onClick: handleCloseSidebar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: user.image,
    className: "w-10 h-10 rounded-full",
    alt: "user-profile",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, user.userName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_io__WEBPACK_IMPORTED_MODULE_3__["IoIosArrowForward"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ "./src/components/Spinner.jsx":
/*!************************************!*\
  !*** ./src/components/Spinner.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-loader-spinner */ "./node_modules/react-loader-spinner/dist/index.js");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\wamp64\\www\\wp-content\\themes\\shareme_theme\\react-src\\src\\components\\Spinner.jsx";



function Spinner(_ref) {
  let {
    message
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-col justify-center items-center w-full h-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loader_spinner__WEBPACK_IMPORTED_MODULE_1___default.a, {
    type: "Circles",
    color: "#00BFFF",
    height: 50,
    width: 200,
    className: "m-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-lg text-center px-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, message));
}

/* harmony default export */ __webpack_exports__["default"] = (Spinner);

/***/ }),

/***/ "./src/components/UserProfile.jsx":
/*!****************************************!*\
  !*** ./src/components/UserProfile.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-google-login */ "./node_modules/react-google-login/dist/google-login.js");
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/data */ "./src/utils/data.js");
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../client */ "./src/client.js");
/* harmony import */ var _MasonryLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MasonryLayout */ "./src/components/MasonryLayout.jsx");
/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Spinner */ "./src/components/Spinner.jsx");
var _jsxFileName = "C:\\wamp64\\www\\wp-content\\themes\\shareme_theme\\react-src\\src\\components\\UserProfile.jsx";








const activeBtnStyles = 'bg-red-500 text-white font-bold p-2 rounded-full w-20 outline-none';
const notActiveBtnStyles = 'bg-primary mr-4 text-black font-bold p-2 rounded-full w-20 outline-none';

const UserProfile = () => {
  const [user, setUser] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const [pins, setPins] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const [text, setText] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('Created');
  const [activeBtn, setActiveBtn] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('created');
  const navigate = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useNavigate"])();
  const {
    userId
  } = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useParams"])();
  const User = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const query = Object(_utils_data__WEBPACK_IMPORTED_MODULE_4__["userQuery"])(userId);
    _client__WEBPACK_IMPORTED_MODULE_5__["client"].fetch(query).then(data => {
      setUser(data[0]);
    });
  }, [userId]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (text === 'Created') {
      const createdPinsQuery = Object(_utils_data__WEBPACK_IMPORTED_MODULE_4__["userCreatedPinsQuery"])(userId);
      _client__WEBPACK_IMPORTED_MODULE_5__["client"].fetch(createdPinsQuery).then(data => {
        setPins(data);
      });
    } else {
      const savedPinsQuery = Object(_utils_data__WEBPACK_IMPORTED_MODULE_4__["userSavedPinsQuery"])(userId);
      _client__WEBPACK_IMPORTED_MODULE_5__["client"].fetch(savedPinsQuery).then(data => {
        setPins(data);
      });
    }
  }, [text, userId]);

  const logout = () => {
    localStorage.clear();
    navigate('/login');
  };

  if (!user) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Spinner__WEBPACK_IMPORTED_MODULE_7__["default"], {
    message: "Loading profile",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 21
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "relative pb-2 h-full justify-center items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-col pb-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "relative flex flex-col mb-7",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-col justify-center items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: " w-full h-370 2xl:h-510 shadow-lg object-cover",
    src: "https://source.unsplash.com/1600x900/?nature,photography,technology",
    alt: "user-pic",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "rounded-full w-20 h-20 -mt-10 shadow-xl object-cover",
    src: user.image,
    alt: "user-pic",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "font-bold text-3xl text-center mt-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }, user.userName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "absolute top-0 z-1 right-0 p-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  }, userId === User.googleId && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_google_login__WEBPACK_IMPORTED_MODULE_3__["GoogleLogout"], {
    clientId: `${"84497603606-3lcdta5hp7v6tf1a3sag6c2cvmdii0ru.apps.googleusercontent.com"}`,
    render: renderProps => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "button",
      className: " bg-white p-2 rounded-full cursor-pointer outline-none shadow-md",
      onClick: renderProps.onClick,
      disabled: renderProps.disabled,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 19
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_1__["AiOutlineLogout"], {
      color: "red",
      fontSize: 21,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 21
      }
    })),
    onLogoutSuccess: logout,
    cookiePolicy: "single_host_origin",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 15
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-center mb-7",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    onClick: e => {
      setText(e.target.textContent);
      setActiveBtn('created');
    },
    className: `${activeBtn === 'created' ? activeBtnStyles : notActiveBtnStyles}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 11
    }
  }, "Created"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    onClick: e => {
      setText(e.target.textContent);
      setActiveBtn('saved');
    },
    className: `${activeBtn === 'saved' ? activeBtnStyles : notActiveBtnStyles}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 11
    }
  }, "Saved")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "px-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MasonryLayout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    pins: pins,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 11
    }
  })), (pins === null || pins === void 0 ? void 0 : pins.length) === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex justify-center font-bold items-center w-full text-1xl mt-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }
  }, "No Pins Found!")));
};

/* harmony default export */ __webpack_exports__["default"] = (UserProfile);

/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/*! exports provided: Navbar, Sidebar, Feed, PinDetail, UserProfile, CreatePin, Search, Login, MasonryLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navbar */ "./src/components/Navbar.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Navbar", function() { return _Navbar__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sidebar */ "./src/components/Sidebar.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Sidebar", function() { return _Sidebar__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Feed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Feed */ "./src/components/Feed.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Feed", function() { return _Feed__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _PinDetail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PinDetail */ "./src/components/PinDetail.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PinDetail", function() { return _PinDetail__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _UserProfile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UserProfile */ "./src/components/UserProfile.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserProfile", function() { return _UserProfile__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _CreatePin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CreatePin */ "./src/components/CreatePin.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreatePin", function() { return _CreatePin__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Search */ "./src/components/Search.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return _Search__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Login */ "./src/components/Login.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return _Login__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _MasonryLayout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MasonryLayout */ "./src/components/MasonryLayout.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MasonryLayout", function() { return _MasonryLayout__WEBPACK_IMPORTED_MODULE_8__["default"]; });











/***/ }),

/***/ "./src/container/Home.jsx":
/*!********************************!*\
  !*** ./src/container/Home.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/hi */ "./node_modules/react-icons/hi/index.esm.js");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components */ "./src/components/index.js");
/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/data */ "./src/utils/data.js");
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../client */ "./src/client.js");
/* harmony import */ var _Pins__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Pins */ "./src/container/Pins.jsx");
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/logo.png */ "./src/assets/logo.png");
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_logo_png__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\wamp64\\www\\wp-content\\themes\\shareme_theme\\react-src\\src\\container\\Home.jsx";










const Home = () => {
  const [toggleSidebar, setToggleSidebar] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [user, setUser] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const scrollRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const userInfo = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const query = Object(_utils_data__WEBPACK_IMPORTED_MODULE_5__["userQuery"])(userInfo === null || userInfo === void 0 ? void 0 : userInfo.googleId);
    _client__WEBPACK_IMPORTED_MODULE_6__["client"].fetch(query).then(data => {
      setUser(data[0]);
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    scrollRef.current.scrollTo(0, 0);
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex bg-gray-50 md:flex-row flex-col h-screen transition-height duration-75 ease-out",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hidden md:flex h-screen flex-initial",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["Sidebar"], {
    user: user && user,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex md:hidden flex-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "p-2 w-full flex flex-row justify-between items-center shadow-md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_hi__WEBPACK_IMPORTED_MODULE_1__["HiMenu"], {
    fontSize: 40,
    className: "cursor-pointer",
    onClick: () => setToggleSidebar(true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_logo_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    alt: "logo",
    className: "w-28",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: `user-profile/${user === null || user === void 0 ? void 0 : user._id}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: user === null || user === void 0 ? void 0 : user.image,
    alt: "user-pic",
    className: "w-9 h-9 rounded-full ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }))), toggleSidebar && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "fixed w-4/5 bg-white h-screen overflow-y-auto shadow-md z-10 animate-slide-in",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "absolute w-full flex justify-end items-center p-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__["AiFillCloseCircle"], {
    fontSize: 30,
    className: "cursor-pointer",
    onClick: () => setToggleSidebar(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["Sidebar"], {
    closeToggle: setToggleSidebar,
    user: user && user,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pb-2 flex-1 h-screen overflow-y-scroll",
    ref: scrollRef,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Routes"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    path: "/user-profile/:userId",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["UserProfile"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 56
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    path: "/*",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pins__WEBPACK_IMPORTED_MODULE_7__["default"], {
      user: user && user,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 37
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/container/Pins.jsx":
/*!********************************!*\
  !*** ./src/container/Pins.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components */ "./src/components/index.js");
var _jsxFileName = "C:\\wamp64\\www\\wp-content\\themes\\shareme_theme\\react-src\\src\\container\\Pins.jsx";




const Pins = _ref => {
  let {
    user
  } = _ref;
  const [searchTerm, setSearchTerm] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "px-2 md:px-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bg-gray-50",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Navbar"], {
    searchTerm: searchTerm,
    setSearchTerm: setSearchTerm,
    user: user && user,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "h-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Routes"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Feed"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 36
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/category/:categoryId",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Feed"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 56
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/pin-detail/:pinId",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["PinDetail"], {
      user: user && user,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 53
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/create-pin",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["CreatePin"], {
      user: user && user,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 46
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/search",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Search"], {
      searchTerm: searchTerm,
      setSearchTerm: setSearchTerm,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 42
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Pins);

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\wamp64\\www\\wp-content\\themes\\shareme_theme\\react-src\\src\\index.js";





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }
})), document.getElementById('root'));

/***/ }),

/***/ "./src/utils/data.js":
/*!***************************!*\
  !*** ./src/utils/data.js ***!
  \***************************/
/*! exports provided: categories, feedQuery, pinDetailQuery, pinDetailMorePinQuery, searchQuery, userQuery, userCreatedPinsQuery, userSavedPinsQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "categories", function() { return categories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "feedQuery", function() { return feedQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pinDetailQuery", function() { return pinDetailQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pinDetailMorePinQuery", function() { return pinDetailMorePinQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchQuery", function() { return searchQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userQuery", function() { return userQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userCreatedPinsQuery", function() { return userCreatedPinsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userSavedPinsQuery", function() { return userSavedPinsQuery; });
const categories = [{
  name: 'People',
  image: 'https://i.pinimg.com/564x/7b/95/5c/7b955c09dcd463912d1cd467f0b69c1c.jpg'
}, {
  name: 'cars',
  image: 'https://i.pinimg.com/750x/eb/47/44/eb4744eaa3b3ccd89749fa3470e2b0de.jpg'
}, {
  name: 'fitness',
  image: 'https://i.pinimg.com/236x/25/14/29/251429345940a47490cc3d47dfe0a8eb.jpg'
}, {
  name: 'wallpaper',
  image: 'https://i.pinimg.com/236x/03/48/b6/0348b65919fcbe1e4f559dc4feb0ee13.jpg'
}, {
  name: 'websites',
  image: 'https://i.pinimg.com/750x/66/b1/29/66b1296d36598122e6a4c5452b5a7149.jpg'
}, {
  name: 'photo',
  image: 'https://i.pinimg.com/236x/72/8c/b4/728cb43f48ca762a75da645c121e5c57.jpg'
}, {
  name: 'food',
  image: 'https://i.pinimg.com/236x/7d/ef/15/7def15ac734837346dac01fad598fc87.jpg'
}, {
  name: 'furniture',
  image: 'https://i.pinimg.com/564x/79/9d/08/799d08eb898de4c64822a2e26d4ef4a9.jpg'
}, {
  name: 'nature',
  image: 'https://i.pinimg.com/236x/b9/82/d4/b982d49a1edd984c4faef745fd1f8479.jpg'
}, {
  name: 'art',
  image: 'https://i.pinimg.com/736x/f4/e5/ba/f4e5ba22311039662dd253be33bf5f0e.jpg'
}, {
  name: 'travel',
  image: 'https://i.pinimg.com/236x/fa/95/98/fa95986f2c408098531ca7cc78aee3a4.jpg'
}, {
  name: 'quotes',
  image: 'https://i.pinimg.com/236x/46/7c/17/467c17277badb00b638f8ec4da89a358.jpg'
}, {
  name: 'cats',
  image: 'https://i.pinimg.com/236x/6c/3c/52/6c3c529e8dadc7cffc4fddedd4caabe1.jpg'
}, {
  name: 'dogs',
  image: 'https://i.pinimg.com/236x/1b/c8/30/1bc83077e363db1a394bf6a64b071e9f.jpg'
}, {
  name: 'others',
  image: 'https://i.pinimg.com/236x/2e/63/c8/2e63c82dfd49aca8dccf9de3f57e8588.jpg'
}];
const feedQuery = `*[_type == "pin"] | order(_createdAt desc) {
    image{
      asset->{
        url
      }
    },
        _id,
        destination,
        postedBy->{
          _id,
          userName,
          image
        },
        save[]{
          _key,
          postedBy->{
            _id,
            userName,
            image
          },
        },
      } `;
const pinDetailQuery = pinId => {
  const query = `*[_type == "pin" && _id == '${pinId}']{
      image{
        asset->{
          url
        }
      },
      _id,
      title, 
      about,
      category,
      destination,
      postedBy->{
        _id,
        userName,
        image
      },
     save[]{
        postedBy->{
          _id,
          userName,
          image
        },
      },
      comments[]{
        comment,
        _key,
        postedBy->{
          _id,
          userName,
          image
        },
      }
    }`;
  return query;
};
const pinDetailMorePinQuery = pin => {
  const query = `*[_type == "pin" && category == '${pin.category}' && _id != '${pin._id}' ]{
      image{
        asset->{
          url
        }
      },
      _id,
      destination,
      postedBy->{
        _id,
        userName,
        image
      },
      save[]{
        _key,
        postedBy->{
          _id,
          userName,
          image
        },
      },
    }`;
  return query;
};
const searchQuery = searchTerm => {
  const query = `*[_type == "pin" && title match '${searchTerm}*' || category match '${searchTerm}*' || about match '${searchTerm}*']{
          image{
            asset->{
              url
            }
          },
              _id,
              destination,
              postedBy->{
                _id,
                userName,
                image
              },
              save[]{
                _key,
                postedBy->{
                  _id,
                  userName,
                  image
                },
              },
            }`;
  return query;
};
const userQuery = userId => {
  const query = `*[_type == "user" && _id == '${userId}']`;
  return query;
};
const userCreatedPinsQuery = userId => {
  const query = `*[ _type == 'pin' && userId == '${userId}'] | order(_createdAt desc){
      image{
        asset->{
          url
        }
      },
      _id,
      destination,
      postedBy->{
        _id,
        userName,
        image
      },
      save[]{
        postedBy->{
          _id,
          userName,
          image
        },
      },
    }`;
  return query;
};
const userSavedPinsQuery = userId => {
  const query = `*[_type == 'pin' && '${userId}' in save[].userId ] | order(_createdAt desc) {
      image{
        asset->{
          url
        }
      },
      _id,
      destination,
      postedBy->{
        _id,
        userName,
        image
      },
      save[]{
        postedBy->{
          _id,
          userName,
          image
        },
      },
    }`;
  return query;
};

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\wamp64\www\wp-content\themes\shareme_theme\react-src\src\index.js */"./src/index.js");


/***/ })

},[[0,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map