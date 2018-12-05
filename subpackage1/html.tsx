import * as React from 'preact';
import * as _ from "lodash";

function article(name: string) : any{
    var a1 = _.defaults({ 'a': 1 }, { 'a': 3, 'b': 2 })
    console.log("a1", a1)
    return <h1>{name} {a1['b']}</h1>
}

export default article
