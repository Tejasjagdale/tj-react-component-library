"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useFullScreen = function () {
    var fullScreenRef = (0, react_1.useRef)(null);
    var toggleFullScreen = function () {
        var element = fullScreenRef.current;
        if (element) {
            if (document.fullscreenElement) {
                document.exitFullscreen();
            }
            else {
                element.requestFullscreen().catch(function (err) {
                    console.log("Error attempting to enable full-screen mode: ".concat(err.message, " (").concat(err.name, ")"));
                });
            }
        }
    };
    return { fullScreenRef: fullScreenRef, toggleFullScreen: toggleFullScreen };
};
exports.default = useFullScreen;
