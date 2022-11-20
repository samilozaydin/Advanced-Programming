b = [9, 8, 2, 4, 3]
a = new Set()

for (let x of b) {
    a.add(x);
}
console.log(a)

function report(x) {

    console.log(x)
}
function result(t) {
    report(t.length + " chars")
    //find number of lines in String t
    let k = t.split('\n').length
    report(k + " lines")
}
function response(r) {
    report("response")
    return r.text()
}
function read(f) {
    fetch(f).then(response).then(result)
    report("start")
}
function sayisi(arr) {
    let a = new Map();
    for (let eleman of arr) {
        let tempt = a.get(eleman);
        if (!tempt)
            tempt = 0
        a.set(eleman, tempt + 1);
    }
    let str = "";
    for (let index of a.keys()) {
        str = str + " " + index + " = " + a.get(index)
    }
    console.log(str)
}