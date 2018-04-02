"use strict";

console.log('App.js is running');

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "p",
        null,
        "Changed This is JSX"
    ),
    React.createElement(
        "ul",
        null,
        React.createElement(
            "li",
            null,
            "Buy food"
        ),
        React.createElement(
            "li",
            null,
            "Buy food"
        )
    ),
    React.createElement(
        "form",
        null,
        React.createElement("input", { type: "text", name: "option" }),
        React.createElement(
            "button",
            null,
            "Add option"
        )
    )
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
