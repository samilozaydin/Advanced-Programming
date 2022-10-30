class Author{
    constructor(name,birth){
        this.name = name;
        this.birth = birth
        this.books= [];
    }
    addBook(book){
        this.books.push(book.page) 
    }
    toString(){
        return ""+this.name+"("+this.birth+") with "+ this.books.length +" books" 
    }

}
class Book{
    constructor(name,pages,author){
        this.name = name;
        this.pages = pages;
        (author.birth == '1273') ? this.author = author.birth : this.author = author.books;
            
     
    }
}