import React from 'react';
var Header = function (props) {
    var Component = props.component; // Rename 'component' to 'Component' to follow convention
    return (React.createElement("div", null,
        React.createElement(Component, null),
        " "));
};
export default Header;
