import hello from './subpackage1/hello';
import pure from './subpackage1/pure';
import html from './subpackage1/html';
import * as React from 'preact';

console.log(html("felix"))
hello('Felix')
// hello(1)
pure()

React.render(html("Felix"), document.getElementById("root"))

