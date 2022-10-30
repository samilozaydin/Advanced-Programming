
let anArray = ["a","b","a","c","b","d","e","b"];
let numArray= [2,7,9]
let anObejct ={
    oArray : ["x","y","z",1,2] ,
    name : "name1",
    surname :"surname1"
}


let mapping = anArray.map((x,y,array) => {
    let newArray = []

});

console.log(numArray.map((x) => x**2))
console.log(anObejct.name.toUpperCase())
/*console.log(anObejct.map((x) =>{
    return {
    arrayim : x.oArray,
    tarzim : x.name+" "+x.surname
    }
}))
*/
for(let x of anArray.entries())
console.log(x)

for(let x of Object.entries(anObejct)){
    console.log(x[0])
}