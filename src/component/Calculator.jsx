import React from 'react';

function sum( a,  b){
    return <h1>Sum={a+b}</h1>

}

function Sub( a,  b){
    return <h1>Diffrence={a-b}</h1>

}
function multi( a,  b){
    return <h1>Multiply={a*b}</h1>

}

function div( a,  b){
    return <h1>Division={a/b}</h1>

}

export default sum;
export {Sub,multi,div};