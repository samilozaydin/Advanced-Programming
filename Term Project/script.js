
var place = document.getElementById("books-place");
var books = fetch("./books.json")
    .then(x => x.json())
    .then(x => {
        console.log(x);
        return x;
    });

function createBooks() {
    books.then(x => {
        x.books.forEach(element => {
            var obj = { translator: "", available: "", name: "" };
            contentAvailablity(obj, element);

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
                        <button class="buttons">Details</button>
                    </div>
                </div>`
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

createBooks();