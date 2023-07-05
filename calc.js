// to export functions
//module.exports.exportFunctionName = actualFunctionName
module.exports.addition = add
module.exports.sub = sub


// function in javascript
function add(a,b)
{
    c=a+b
    console.log("add="+c)
}

function sub(a,b)
{
    c=a-b
    console.log("sub="+c)
}

add(10,20)
sub(10,5)