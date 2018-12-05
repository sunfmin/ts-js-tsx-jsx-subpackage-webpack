import hello from './subpackage1/hello';

import html from './subpackage1/html';
import pure from './subpackage1/pure'

hello('Felix')
pure()

// hello("Felix")

console.log("html", html("felix"))

import * as React from 'preact';

React.render(html("Felix"), document.getElementById("root"))

