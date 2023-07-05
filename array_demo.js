// 13 May 2023    run this using node filename.js
let x = []
x.push(11)
x.push(22)
x.push(33)
x.push(44)
x.push(55)
console.log(x)
console.log(x[0])
for(let i=0; i<x.length; i++)
{
    console.log(x[i])
}

console.log("Deleting array elements")
x.pop() // last element will delete
console.log(x)

//remove 22
/*
//Method 1
let dummy = []
for(let i=0; i<x.length; i++)
{
    if(x[i] != 22)
    {
        dummy.push(x[i])
    }
}
console.log("Dummy Array : "+dummy)*/

//Method 2
//map is used to pluck data like array, json (collective data) in javascript
/*
dummy = []
x.map(data =>{
    if(data != 33){
        dummy.push(data)
    }
})
console.log("Method 2 Map : "+dummy)
*/

//Method 3
//filter - to eliminate
x = x.filter(data => data != 33)
console.log("Method 3 filter : "+x)