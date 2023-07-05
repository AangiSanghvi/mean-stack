// create a function
function viewOrders(req, res){
    res.end("View Orders")
}

function viewOrderById(req, res){
    res.end("View Order By Id")
}

//export so that they can be accessed from anywhere
//module.exports.nameYouGave = actualName (Original Function Name)
module.exports.viewOrders = viewOrders
module.exports.viewOrderById = viewOrderById