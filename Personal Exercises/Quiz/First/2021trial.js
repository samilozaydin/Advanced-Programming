let data = []
function mapping(){
    let benim = new Map();
    for(let icerik of data){
        benimn.set(icerik.code,icerik.students.length)
    }
}
function setting(){
    let myset = new Set();
    for(let icerik of data){
        let ogrenciler = icerik.students
        for(let icerik of ogrenciler){
            myset.add(icerik.name);
        }
    }
    return myset;
}
let twi = x => x+x
twi.