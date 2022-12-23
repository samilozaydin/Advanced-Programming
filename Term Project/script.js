
var place = document.getElementById("books-place");
var books = fetch("./books.json")
    .then(x => x.json())
    .then(x => {
        console.log(x);
        return x;
    });
var modal_content = document.getElementById("modal-content");

function createBooks() {
    books.then(x => {
        x.books.forEach(element => {
            var obj = { translator: "", available: "", name: "" };
            contentAvailablity(obj, element);
            displayBook(obj, element);

        });
    });
}
function contentAvailablity(obj, element) {
    if (element.Translator == "None") {
        obj.translator = "-";
    } else {
        obj.translator = element.Translator;
    }
    if (element.Available) {
        obj.available = "Yes";
    } else {
        obj.available = "No";
    }
    if (element.Name.length > 40) {
        obj.name = ` style="font-size:14px;"`;
    } else if (element.Name.length > 30) {
        obj.name = ` style="font-size:20px;"`;
    } else if (element.Name.length > 20) {
        obj.name = ` style="font-size:26px;"`;
    } else {
        obj.name = ``;
    }
}
function displayBook(obj, element) {
    place.innerHTML = place.innerHTML +
        `<div class="block color-back">
        <div class="one-book">
            <img src="${element.Image}" alt="Image for a book" />
            <h1 class="book-name"${obj.name}>${element.Name}</h1>
            <p class="author">${element.Author}</p>
            <p style="margin-bottom: 0px">${element.Price}$</p>
            <div class="text-left">
                <table style="border-spacing: 1rem">
                    <tbody>
                        <tr>
                            <td>Type:</td>
                            <td>${element.Type}</td>
                        </tr>
                        <tr>
                            <td>Translator:</td>
                            <td>${obj.translator}</td>
                        </tr>
                        <tr>
                            <td>Released Date:</td>
                            <td>${element.Released_date}</td>
                        </tr>
                        <tr>
                            <td>Language:</td>
                            <td>${element.Language}</td>
                        </tr>
                        <tr>
                            <td>Available:</td>
                            <td>${obj.available}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <button name='${element.id}'class="buttons" onclick="book_detail(name)">Details</button>
        </div >
    </div > `
}
function search() {
    let name = document.getElementById("name");
    let author = document.getElementById("author");
    let type = document.getElementById("type");
    let low_price = document.getElementById("txt_price_low");
    let high_price = document.getElementById("txt_price_max");
    let rel_year = document.getElementById("rel_year");
    let language = document.getElementById("language");
    let availablity = document.getElementById("yes").checked ? true : false;
    if (document.getElementById("yes").checked == false && document.getElementById("no").checked == false) {
        availablity = 1;

    }

    place.innerHTML = "";
    books.then(x => {
        x.books.forEach(element => {
            var obj = { translator: "", available: "", name: "" };
            contentAvailablity(obj, element);

            var searching = {
                name: name,
                author: author,
                type: type,
                low_price: low_price,
                high_price: high_price,
                rel_year: rel_year,
                language: language,
                availablity: availablity,
                suitable: true
            }
            //console.log(element)
            searchAvailability(searching, element);
            if (searching.suitable) {
                displayBook(obj, element);
            }


        });
    });

}
function searchAvailability(searching, element) {
    if (element.Name.includes(searching.name.value) == false) {
        searching.suitable = false
    }
    if (element.Author.includes(searching.author.value) == false) {
        searching.suitable = false
    }
    if (element.Type.includes(searching.type.value) == false && searching.type.value != "none") {
        searching.suitable = false
    }
    if ((Number(element.Price) < Number(searching.low_price.value)
        || Number(element.Price) > Number(searching.high_price.value))
        && (searching.high_price.value != 0)) {
        searching.suitable = false
    }
    if (element.Released_date.includes(searching.rel_year.value) == false) {
        searching.suitable = false
    }
    if (element.Language.includes(searching.language.value) == false && searching.language.value != "none") {
        searching.suitable = false
    }
    if (element.Available != searching.availablity && searching.availablity != 1) {
        searching.suitable = false
    }

}
function clean() {
    place.innerHTML = "";
    createBooks();
}
function book_detail(id) {
    var modal = document.getElementById("Modal");
    modal.style.display = "block";
    books.then(x => {
        x.books.forEach(element => {
            if (id == element.id) {
                var obj = { translator: "", available: "", name: "" };
                contentAvailablity(obj, element);
                displayDetailedBook(obj, element);
            }
        });
    });

}
function displayDetailedBook(obj, element) {
    modal_content.innerHTML = "";
    modal_content.innerHTML = modal_content.innerHTML +
        `<div class="detail-block color-back">
                <img
                    id="detailed-image"
                    src="${element.Image}"
                    alt="Image for a book"
                    class="detailed-image"
                    
                />
            <div class="one-book detail-one-book">
                
                <h1 class="book-name" ${obj.name}>
                    ${element.Name}
                </h1>
                <p class="author">${element.Author}</p>
                <p style="margin-bottom: 0px">${element.Price}$</p>
                <div class="text-left">
                    <table style="border-spacing: 1rem">
                        <tbody>
                            <tr>
                                <td>Type:</td>
                                <td>${element.Type}</td>
                            </tr>
                            <tr>
                                <td>Publisher:</td>
                                <td>${element.Publisher}</td>
                            </tr>
                            <tr>
                                <td>Translator:</td>
                                <td>${obj.translator}</td>
                            </tr>
                            <tr>
                                <td>Released Date:</td>
                                <td>${element.Released_date}</td>
                            </tr>
                            <tr>
                                <td>Language:</td>
                                <td>${element.Language}</td>
                            </tr>
                            <tr>
                                <td>ISBN:</td>
                                <td>${element.ISBN}</td>
                            </tr>
                            <tr>
                                <td>Page Amount:</td>
                                <td>${element.Page_Amount}</td>
                            </tr>
                            <tr>
                                <td>Shape:</td>
                                <td>${element.Shape}</td>
                            </tr>
                            <tr>
                                <td>Paper Type:</td>
                                <td>${element.Paper_Type}</td>
                            </tr>
                            <tr>
                                <td>Content:</td>
                                <td>${element.Content}</td>
                            </tr>
                            <tr>
                                <td>Available:</td>
                                <td>${obj.available}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <button
                    name="${element.id}"
                    class="buttons"
                    onclick="borrow(name)"
                    style = "margin:2px"
                >
                    Borrow
                </button>
                <button
                class="buttons"
                onclick="close_modal()"
                style = "margin:2px"
            >
                Close
            </button>
                <button
                    name="${element.id}"
                    class="buttons"
                    onclick="giveBack(name)"
                    style = "margin:2px"
                >
                    Return
                </button>
            </div>
        </div>`
}
function close_modal() {
    var modal = document.getElementById("Modal");
    modal.style.display = "none";
}
function borrow(id) {
    books.then(x => {
        x.books.forEach(element => {
            if (id == element.id && element.Available == true) {
                element.Available = false;
                alert(element.Name + " is borrowed!");
                restartDetailAndMain(id)
            } else if (id == element.id && element.Available == false) {
                alert("You cannot borrow the book which you do not return");
            }

        });
    });
}
function restartDetailAndMain(id) {
    book_detail(id);
    place.innerHTML = "";
    createBooks();
}
function giveBack(id) {
    books.then(x => {
        x.books.forEach(element => {
            if (id == element.id && element.Available == false) {
                element.Available = true;
                alert(element.Name + " is returned!");
                restartDetailAndMain(id)
            } else if (id == element.id && element.Available == true) {
                alert("You cannot return the book which you do not borrow")
            }
        });
    });
}
createBooks();