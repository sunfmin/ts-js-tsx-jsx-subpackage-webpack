import React from "preact";
import _ from "lodash";

function article(name: string): any {
	var a1 = _.defaults({ a: 1 }, { a: 3, b: 2 });
	return (
		<h1>
			f4 {name} {a1["b"]}
		</h1>
	);
}

export default article;
