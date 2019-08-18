webpackHotUpdate("static\\development\\pages\\client-Dashboard.js",{

/***/ "./component/CreateForm/CreateForm.js":
/*!********************************************!*\
  !*** ./component/CreateForm/CreateForm.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
var _jsxFileName = "F:\\Web Development\\Rento\\component\\CreateForm\\CreateForm.js";




var CreateForm = function CreateForm(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["UncontrolledPopover"], {
    placement: 'bottom',
    isOpen: props.open,
    target: 'openForm',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["PopoverHeader"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Create New"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["PopoverBody"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "BHK"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "text",
    name: 'bhk',
    placeholder: "How much bhk?",
    value: props.value.bhk,
    onChange: props.changed,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Square Ft."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "text",
    placeholder: "how much square ft?",
    name: 'squareFt',
    value: props.value.squareFt,
    onChange: props.changed,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Floor"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "text",
    placeholder: "Floor",
    name: 'floor',
    value: props.value.floor,
    onChange: props.changed,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Rent"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "text",
    placeholder: "Rent",
    name: "rent",
    value: props.value.rent,
    onChange: props.changed,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Location"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "text",
    placeholder: "Location",
    name: "location",
    value: props.value.location,
    onChange: props.changed,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    outline: true,
    color: "primary",
    disabled: props.submitable,
    onClick: props.submit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "Submit"), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    outline: true,
    color: "danger",
    onClick: props.discard,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Discard"))));
};

/* harmony default export */ __webpack_exports__["default"] = (CreateForm);

/***/ }),

/***/ "./pages/client-Dashboard.js":
/*!***********************************!*\
  !*** ./pages/client-Dashboard.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _component_Layout_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/Layout/Layout */ "./component/Layout/Layout.js");
/* harmony import */ var _component_Banner_Banner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../component/Banner/Banner */ "./component/Banner/Banner.js");
/* harmony import */ var _component_CreateButton_CreateButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../component/CreateButton/CreateButton */ "./component/CreateButton/CreateButton.js");
/* harmony import */ var _component_CreateForm_CreateForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../component/CreateForm/CreateForm */ "./component/CreateForm/CreateForm.js");




var _jsxFileName = "F:\\Web Development\\Rento\\pages\\client-Dashboard.js";






var cltDashboard = function cltDashboard() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState, 2),
      createState = _React$useState2[0],
      setCreateState = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState({}),
      _React$useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState3, 2),
      inputState = _React$useState4[0],
      setInputState = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(true),
      _React$useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState5, 2),
      creatable = _React$useState6[0],
      setCreatable = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState([{
    id: 1,
    name: 'gitanjali',
    bhk: '2 bhk',
    floor: 4,
    squareFeet: 500,
    rent: '2500/month',
    electricity: true
  }, {
    id: 2,
    name: 'gita',
    bhk: '2 bhk',
    floor: 4,
    squareFeet: 500,
    rent: '2500/month',
    electricity: true
  }, {
    id: 3,
    name: 'jali',
    bhk: '2 bhk',
    floor: 4,
    squareFeet: 500,
    rent: '2500/month',
    electricity: true
  }, {
    id: 4,
    name: 'gitanjali',
    bhk: '2 bhk',
    floor: 4,
    squareFeet: 500,
    rent: '2500/month',
    electricity: true
  }, {
    id: 5,
    name: 'gita',
    bhk: '2 bhk',
    floor: 4,
    squareFeet: 500,
    rent: '2500/month',
    electricity: true
  }, {
    id: 6,
    name: 'jali',
    bhk: '2 bhk',
    floor: 4,
    squareFeet: 500,
    rent: '2500/month',
    electricity: true
  }, {
    id: 7,
    name: 'jali',
    bhk: '2 bhk',
    floor: 4,
    squareFeet: 500,
    rent: '2500/month',
    electricity: true
  }, {
    id: 8,
    name: 'jali',
    bhk: '2 bhk',
    floor: 4,
    squareFeet: 500,
    rent: '2500/month',
    electricity: true
  }]),
      _React$useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState7, 2),
      buildings = _React$useState8[0],
      setBuildings = _React$useState8[1];

  react__WEBPACK_IMPORTED_MODULE_4___default.a.useEffect(function () {
    setInputState({
      bhk: localStorage.getItem('bhk') ? localStorage.getItem('bhk') : '',
      squareFt: localStorage.getItem('squareFt') ? localStorage.getItem('squareFt') : '',
      floor: localStorage.getItem('floor') ? localStorage.getItem('floor') : '',
      rent: localStorage.getItem('rent') ? localStorage.getItem('rent') : '',
      location: localStorage.getItem('location') ? localStorage.getItem('location') : ''
    });
  }, []);
  react__WEBPACK_IMPORTED_MODULE_4___default.a.useEffect(function () {
    for (var key in inputState) {
      if (inputState[key] !== '') {
        setCreatable(false);
        break;
      }
    }
  }, [inputState]);

  var toggleHandler = function toggleHandler() {
    return setCreateState(!createState);
  };

  var onChangeHandler = function onChangeHandler(event) {
    localStorage.setItem(event.target.name, event.target.value);
    setInputState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, inputState, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, event.target.name, [event.target.value])));
  };

  var discardHandler = function discardHandler(event) {
    for (var key in inputState) {
      localStorage.removeItem(key);
    }

    setInputState({});
    setCreateState(false);
    setCreatable(true);
    event.preventDefault();
  };

  var submitHandler = function submitHandler(event) {
    var id = buildings.length + 1;

    var newBuilding = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({
      id: id
    }, inputState);

    setBuildings([].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(buildings), [newBuilding]));

    for (var key in inputState) {
      localStorage.removeItem(key);
    }

    setInputState({});
    setCreateState(false);
    setCreatable(true);
    console.log(id);
    event.preventDefault();
  };

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_component_Layout_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    id: 'openForm',
    style: {
      margin: '0 auto',
      width: '1px',
      height: '1px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_component_Banner_Banner__WEBPACK_IMPORTED_MODULE_6__["default"], {
    buildings: buildings,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_component_CreateButton_CreateButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
    toggle: toggleHandler,
    creatable: creatable,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_component_CreateForm_CreateForm__WEBPACK_IMPORTED_MODULE_8__["default"], {
    open: createState || !creatable,
    changed: onChangeHandler,
    value: inputState,
    submit: submitHandler,
    discard: discardHandler,
    submitable: !creatable,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (cltDashboard);

/***/ })

})
//# sourceMappingURL=client-Dashboard.js.6b3e0d49b9ad6f712925.hot-update.js.map