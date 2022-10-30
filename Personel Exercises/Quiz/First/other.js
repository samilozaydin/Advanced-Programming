class Author {

    constructor(name,birth){
        this.name = name;
        this.birth= birth;
        this.books =[]
    }
    addBook(book){
        this.books.push(book);
        book.author = this;
    }
    toString(){
        return `${this.name} (${this.birth}) with ${this.books.length} books`
    }
}
class Book{
    constructor(name,page,author){
        this.name = name;
        this.page = page;
        this.author = author;
    }
}

function fonksiyon(){
    let a = new Set()
    
}