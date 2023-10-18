import React from "react";
import ReactDOM  from "react-dom/client";


// Using pure react
// const reactHeader = React.createElement(
//     "div",{class:"title"},
// [React.createElement(
//     "h1",{},"This is H1"),
// React.createElement(
//     "h2",{},"This is H2"),
//     React.createElement(
//         "h3",{},"This is H3")]
// );


// root.render(reactHeader)

// using JSX
// const jsxHeader = (
//     <div id="title">
//         <h1>This h1</h1>
//         <h2>This h2</h2>
//         <h3>This h3</h3>
//     </div>
// )

// using Functional Component with JSX
//first letter of component should be capital
const JsxComponentHeader = () => (
    <div id="title">
        <h1>This h1</h1>
        <h2>This h2</h2>
        <h3>This h3</h3>
    </div>
)


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<JsxComponentHeader/>);

