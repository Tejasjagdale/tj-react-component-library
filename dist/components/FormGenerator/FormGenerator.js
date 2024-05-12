import React from 'react';
var FormGenerator = function (data) {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", null, data.name),
        React.createElement("div", null, data.label)));
};
export default FormGenerator;
