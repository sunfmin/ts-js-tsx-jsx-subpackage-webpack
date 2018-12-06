import f1 from "./subpackage1/f1";
import f2 from "./subpackage1/f2";
import f3 from "./subpackage1/f3";
import f4 from "./subpackage1/f4";
import React from "preact";

console.log(f1());
console.log(f2());
console.log(f3("Felix3"));
console.log(f4("felix4"));

React.render(f4("Felix"), document.getElementById("root"));
