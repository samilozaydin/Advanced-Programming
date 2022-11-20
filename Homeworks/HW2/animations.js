class Person {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.sprite = []
        this.currentIndex = 0;
    }
}
class Draw {
    constructor(context) {
        this.ctx = context;
    }
    draw(person) {
        this.ctx.drawImage(person.sprite[person.currentIndex], person.x, person.y, person.width, person.height);
    }
    clear(person) {
        this.ctx.clearRect(person.x, person.y, person.width, person.height);
    }
}
class ImageLoader {
    constructor(URLpath, fileName, format) {
        this.URLpath = URLpath;
        this.fileName = fileName
        this.format = format
    }
    async loadSpriteToPerson(person, length) {
        for (let index = 0; index < length; index++) {
            let image = new Image();
            image.src = await this.getImage(index);
            person.sprite.push(image);
        }
    }
    getImage(index) {

        return fetch(this.URLpath + this.fileName + index.toString() + this.format)
            .then(response => response.blob())
            .then(imgBlog =>
                URL.createObjectURL(imgBlog)
            )

    }
}

class Animate {
    constructor() {

    }
    updateSpriteIndex(person) {
        person.currentIndex = ++person.currentIndex % person.sprite.length;
    }
    updateSpriteIndexBack(person) {
        person.currentIndex = (person.currentIndex > 0) ? --person.currentIndex % person.sprite.length : person.sprite.length - 1;
        console.log(person.currentIndex)
    }
    move(person) {
        this.updateSpriteIndex(person);

        person.x = (600 - person.width < person.x + 5) ? 0 : person.x + 5;
    }
    moveBack(person) {
        this.updateSpriteIndexBack(person);

        person.x = (0 > person.x - 5) ? 600 - person.width : person.x - 5;
    }
}
class Validate {
    constructor() {
        this.is_start_clicked = false;
        this.is_pause_clicked = false;
        this.is_stop_clicked = false;

    }
}

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
const person = new Person(0, 100, 45, 80);
const drawer = new Draw(context);
const animate = new Animate();
const validator = new Validate();

async function init() {

    let urlBase = "https://samilozaydin.github.io/Advanced-Programming/Homeworks/HW2/images/";
    let filename = "move_";
    let formatname = ".png"
    let imgLoad = new ImageLoader(urlBase, filename, formatname);
    await imgLoad.loadSpriteToPerson(person, 5);
    drawer.draw(person);

}

function render() {
    drawer.clear(person)
    animate.move(person);
    drawer.draw(person);
}

function start() {
    validator.is_start_clicked = true;
    validator.is_pause_clicked = false;
    validator.is_stop_clicked = false;

    disableButton(true);

}

function pause() {
    validator.is_start_clicked = false;
    validator.is_stop_clicked = false;

    if (!validator.is_pause_clicked) {
        validator.is_pause_clicked = true;
        disableButton(false);

    } else {
        validator.is_pause_clicked = false;
        validator.is_start_clicked = true;
        disableButton(true);
    }

}

function stop() {
    validator.is_start_clicked = false;
    validator.is_pause_clicked = true;
    validator.is_stop_clicked = true;
    disableButton(false);
}
function next() {
    render();
}
function previous() {
    drawer.clear(person)
    animate.moveBack(person);
    drawer.draw(person);
}
function disableButton(input) {
    document.getElementById("next").disabled = input;
    document.getElementById("previous").disabled = input;
}
init();

setInterval(function () {
    if (validator.is_start_clicked) {
        render();
        validator.is_pause_clicked = false;
        validator.is_stop_clicked = false;

    }
    if (validator.is_pause_clicked) {
        validator.is_start_clicked = false;
        validator.is_stop_clicked = false;

    }
    if (validator.is_stop_clicked) {
        validator.is_start_clicked = false;
        validator.is_pause_clicked = false;
    }
}, 100);