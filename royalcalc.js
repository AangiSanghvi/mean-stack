function add(req, res){
    let no1 = parseInt(req.body.no1)
    let no2 = parseInt(req.body.no2)
    console.log("no1=>"+no1)
    console.log("no2=>"+no2)
    let ans = no1 + no2
    res.end("Addition => "+ans)
}

function sub(req, res){
    let n1 = parseInt(req.body.n1)
    let n2 = parseInt(req.body.n2)
    console.log("n1=>"+n1)
    console.log("n2=>"+n2)
    let ans = n1 - n2
    res.end("Substraction => "+ans)
}

function mul(req, res){
    let n1 = parseInt(req.body.n1)
    let n2 = parseInt(req.body.n2)
    console.log("n1 => "+n1)
    console.log("n2 => "+n2)
    let ans = n1 * n2
    res.end("Multiplication => "+ans)
}

//export
module.exports.add = add
module.exports.sub = sub
module.exports.mul = mul