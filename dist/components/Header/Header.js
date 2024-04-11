"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Header = function (props) {
    var Component = props.component; // Rename 'component' to 'Component' to follow convention
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(Component, null),
        " "));
};
exports.default = Header;
