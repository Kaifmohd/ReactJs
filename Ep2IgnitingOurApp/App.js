import React from "react";
import ReactDOM  from "react-dom/client";

/**
 * <div id="parent">
 *        <div id="child1">
 *              <h1>I'm h1 tag</h1>
 *              <h2>I'm h1 tag</h2>  
 *        </div>
 *          <div id="child2">
 *              <h1>I'm h1 tag</h1>
 *              <h2>I'm h1 tag</h2>  
 *        </div>
 * </div>
 */

const parent = React.createElement(
    "div",
    { id: "parent" },
    [
        React.createElement("div",{id:"child1"},
        [
            React.createElement("h1",{},"I'm h1 tag"),
            React.createElement("h2",{},"I'm h2 tag")
        ]),
        React.createElement("div",{id:"child2"},
        [
            React.createElement("h1",{},"I'm h1 tag"),
            React.createElement("h2",{},"I'm h2 tag")
        ])]
    );


//createElement is coming from React which same like javascript but takes 3 arguments.
//  const heading =  React.createElement("h1",{id: "heading", xyz: "abc" },"Hello World from React!");
//  //createRoot is coming from ReactDOM
//  console.log(heading)
 const root = ReactDOM.createRoot(document.getElementById("root"));
 // After Creating root and telling where is our root present on HTML. 
 // We are just rendering the Heading that we want on that root.
// root.render(heading);

console.log(parent);
root.render(parent);