function range(start, end, step = 1) {
    let arr = [];
    if (step > 0) {
        for (let i = start; i <= end; i += step) {
            arr.push(i);
        }
    } else {
        for (let i = start; i >= end; i += step) {
            arr.push(i);
        }
    }

    return arr;
}
function sum(arr) {
    let summing = 0;
    arr.forEach(element => summing = summing + element);
    return summing;
}
console.log(sum(range(2, 5)))
console.log(sum(range(7, 3, -1)))
