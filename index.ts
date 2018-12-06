import hello from "./subpackage1/hello";
import pure from "./subpackage1/pure";
import html from "./subpackage1/html";
import * as React from "preact";

import h1 from "./subpackage1/h1";

console.log(html("felix"));
hello("Felix");
// hello(1)
pure();
console.log(h1());

React.render(html("Felix"), document.getElementById("root"));
