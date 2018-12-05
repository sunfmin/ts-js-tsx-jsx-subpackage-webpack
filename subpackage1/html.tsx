import * as React from 'preact'
import _ from 'lodash/core'

function article(name: string) : any{
    return <h1>{name} {_.defaults({ 'a': 1 }, { 'a': 3, 'b': 2 })}</h1>
}

export default article
