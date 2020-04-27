document.addEventListener('DOMContentLoaded', () => {

// Compiled Babel to JS

"use strict";

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Tasks = /*#__PURE__*/function (_React$Component) {
  _inherits(Tasks, _React$Component);

  var _super = _createSuper(Tasks);

  function Tasks(props) {
    var _this;

    _classCallCheck(this, Tasks);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
      _this.setState({
        task: event.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (event) {
      if (event.key === 'Enter') {
        _this.save();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "save", function () {
      var no = _this.state.editNum;

      _this.setState(function () {
        if (_this.state.button === 'Add' && _this.state.task !== '') {
          return {
            tasks: [].concat(_toConsumableArray(_this.state.tasks), [_this.state.task]),
            task: ''
          };
        } else if (no >= 0) {
          var n = _this.state.editNum;
          var tasks = _this.state.tasks;
          tasks[n] = _this.state.task;
          return {
            tasks: tasks,
            task: '',
            editNum: -1
          };
        }
      }, function () {
        // passing it a param as js is asyc
        localStorage.setItem('tasks', _this.state.tasks);

        _this.setState({
          button: 'Add'
        });

        if (_this.state.button === 'Edit') {
          document.querySelector(".btn-info").setAttribute('class', 'btn btn-primary btn-lg');
          document.querySelector("#a-" + no).disabled = false;
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "remove", function (event) {
      var n = _this.getIndex(event);

      _this.setState(function () {
        var tasks = _toConsumableArray(_this.state.tasks);

        tasks.splice(n, 1);
        return {
          tasks: tasks
        };
      }, function () {
        // passing it a param as js is asyc
        localStorage.setItem('tasks', _this.state.tasks);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "edit", function (event) {
      var n = _this.getIndex(event);

      document.querySelector("#a-" + n).disabled = true;

      _this.setState({
        task: _this.state.tasks[n],
        button: 'Edit',
        editNum: n
      });

      document.querySelector(".btn-primary").setAttribute('class', 'btn btn-info btn-lg');
    });

    _defineProperty(_assertThisInitialized(_this), "getIndex", function (event) {
      var index = event.target.dataset.index;
      var pattern = new RegExp('[0-9]+');
      var n = parseInt(pattern.exec(index)[0]);
      return n;
    });

    _this.state = {
      tasks: [],
      task: "",
      button: 'Add',
      editNum: -1
    };
    return _this;
  }

  _createClass(Tasks, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var tasks = localStorage.getItem('tasks');

      if (tasks !== null) {
        tasks = tasks.split(',');
        this.setState({
          tasks: tasks
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("ul", {
        className: "list-group"
      }, this.state.tasks.map(function (element, i) {
        return /*#__PURE__*/React.createElement("li", {
          className: "list-group-item",
          key: i
        }, element, /*#__PURE__*/React.createElement("button", {
          className: "btn btn-light float-right",
          onClick: _this2.remove,
          "data-index": 'a-' + i,
          id: 'a-' + i,
          disabled: false
        }, "X"), /*#__PURE__*/React.createElement("button", {
          className: "btn btn-light float-right",
          onClick: _this2.edit,
          "data-index": 'r-' + i
        }, "-"));
      }), /*#__PURE__*/React.createElement("li", {
        className: "list-group-item"
      }, /*#__PURE__*/React.createElement("input", {
        type: "text",
        onChange: this.handleChange,
        onKeyDown: this.onKeyDown,
        className: "form-control form-control-lg",
        value: this.state.task
      }), /*#__PURE__*/React.createElement("button", {
        onClick: this.save,
        className: "btn btn-primary btn-lg"
      }, this.state.button))));
    }
  }]);

  return Tasks;
}(React.Component);

var App = /*#__PURE__*/function (_React$Component2) {
  _inherits(App, _React$Component2);

  var _super2 = _createSuper(App);

  function App() {
    _classCallCheck(this, App);

    return _super2.apply(this, arguments);
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "To Do application"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Tasks, null));
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.querySelector('.app'));

})