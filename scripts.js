
class Book {
    constructor(title, author, pages, read) {
        // the constructor...
        this.title = title,
        this.author = author,
        this.pages = pages,
        this.read = read
    }
    getTitle = function () { return this.title; }
    getAuthor = function () { return this.author; }
    getPages = function () { return this.pages; }
    getRead = function () { return this.read; }

    setTitle = function (sValue) { this.title = sValue; }
    setAuthor = function (sValue) { this.author = sValue; }
    setPages = function (nValue) { this.pages = nValue; }
    setRead = function (bValue) { this.read = bValue; }

    printRead = function () { return this.getRead() ? "Read" : "Not Read";
    }

    printPages = function () { return this.getPages() + " Pages"; }

    info = function () {
        return [this.getTitle(), this.getAuthor(), this.printPages(), this.printRead()].join(", ");
    }

}

class Library {
    constructor() {
        list = []
    }
    add(book) { this.list = [this.list, book]; }
    remove(prop, value) {
        // do some stuff
    }
    search(prop,value) {
        // do some stuff
    }
    createDivBoxes() {
        let boxList =  [];
        boxList = this.list.map((element) => {createBookBox(element)});
        return boxList;
    }
    appendAsChild(parentElement) {
        this.createDivBoxes(this.list).map((box) => parentElement.appendChild(box));
    }
}


/*
var htmlString="<div class='overlay'>"
    +"<div class='popup'>"
        +"<div class='close'>&#10006;</div>"
         +"<h2>Popup</h2>"
    +"</div>"
+"</div>"
+"<button class='button'>Show</button>"
$('body').append(htmlString)


$('.button').click(function () {
    $('.overlay').show();
})
$('.close').click(function () {
    $('.overlay').hide();
})
*/
let newTitle, newAuthor, newPages, newRead;

const createFormBox = function () {

    let formBox = document.getElementById("formBox");
    formBox.classList.add("form-group");

    let closeBtn = document.getElementsByClassName("popup-close")[0];
    closeBtn.addEventListener("click", () => {
        document.getElementsByClassName("modal")[0].style.display="none";
    });

    let formHeader = document.createElement("h4");
    formHeader.appendChild(document.createTextNode("Add Book to Library"));
    formBox.appendChild(formHeader);
    formBox.appendChild(document.createElement("br"));
   
    let labelTitle = document.createElement("label");
    labelTitle.appendChild(document.createTextNode("Title:"));
    labelTitle.classList.add("form-label", "popup-label");
    formBox.appendChild(labelTitle);

    let inputTitle = document.createElement("input");
    inputTitle.setAttribute("placeholder","The book title here");
    inputTitle.classList.add("popup-input", "form-control");
    //inputTitle.setAttribute("class","modal-content");
    inputTitle.addEventListener("change", (event) => {newTitle=event.target.value;});
    labelTitle.appendChild(inputTitle);

    formBox.appendChild(document.createElement("br"));

    let labelAuthor = document.createElement("label");
    labelAuthor.appendChild(document.createTextNode("Author:"));
    labelAuthor.classList.add("form-label", "popup-label");
    formBox.appendChild(labelAuthor);

    let inputAuthor = document.createElement("input");
    inputAuthor.setAttribute("placeholder","Author name(s) here");
    inputAuthor.classList.add("popup-input", "form-control");
    inputAuthor.addEventListener("input", (event) => {newAuthor=event.target.value;});
    labelAuthor.appendChild(inputAuthor);

    formBox.appendChild(document.createElement("br"));

    let labelPages = document.createElement("label");
    labelPages.appendChild(document.createTextNode("Pages:"));
    labelPages.classList.add("form-label");
    formBox.appendChild(labelPages);

    let pagesAndRead = document.createElement("div");
    
    let inputPages = document.createElement("input");
    inputPages.setAttribute("type", "number");
    inputPages.setAttribute("placeholder","Number of pages here");
    inputPages.classList.add("form-control", "popup-input");
    inputPages.addEventListener("input", (event) => {newPages=event.target.value;});
    labelPages.style.width = "50%";
    inputPages.style.width = "80%";
    labelPages.appendChild(inputPages);

    let labelCheck = document.createElement("label");
    labelCheck.appendChild(document.createTextNode("Read: "));
    labelCheck.classList.add("form-label");
    labelCheck.style.width = "40%";
    formBox.appendChild(labelCheck);

    let inputCheck = document.createElement("input");
    inputCheck.setAttribute("type", "checkbox");
    inputCheck.classList.add("form-check-input");
    inputCheck.addEventListener("input", (event) => {newRead=event.target.value;});
    labelCheck.appendChild(inputCheck);

    formBox.appendChild(document.createElement("br"));

    let inputBtn = document.createElement("button");
    inputBtn.setAttribute("class", "btn btn-outline-dark popup-label");
    inputBtn.appendChild(document.createTextNode("Add"));
    inputBtn.addEventListener("click", function(event) {
        let newBook = new Book(newTitle,newAuthor,newPages,newRead);
        document.getElementsByTagName("main")[0].appendChild(createBookBox(newBook));
    });
    formBox.appendChild(inputBtn);

    return formBox;
}

const createBookBox = function(book) {

    let box = document.createElement("div");
    box.setAttribute("class","mb-3");
    
    let title = document.createElement("div");
    title.setAttribute("class","mb-3");
    title.appendChild(document.createTextNode(book.getTitle()));
    box.appendChild(title);
    
    let author = document.createElement("div");
    author.setAttribute("class","mb-3");
    author.appendChild(document.createTextNode(book.getAuthor()));
    box.appendChild(author);
 
    let pages = document.createElement("div");
    pages.setAttribute("class","mb-3");
    pages.appendChild(document.createTextNode(book.printPages()));
    box.appendChild(pages);

    let isRead = document.createElement("div");
    isRead.setAttribute("class","mb-3 form-check");
    let readCheck = document.createElement("input");
    readCheck.setAttribute("type", "checkbox");
    readCheck.setAttribute("class","form-check-input");
    isRead.appendChild(readCheck);
    box.appendChild(isRead);
   
    let removeBtn = document.createElement("div");
    let inputButton = document.createElement("button");
    //inputButton.setAttribute("type", "submit");
    inputButton.setAttribute("class", "btn btn-primary");
    inputButton.appendChild(document.createTextNode("Remove"));
    removeBtn.appendChild(inputButton);
    box.appendChild(removeBtn);

    return box;    
}


const formBox = createFormBox();
let mainArea = document.getElementsByTagName("main")[0];
let formContainer = document.getElementsByClassName("popup-form")[0];
//formContainer.appendChild(formBox);
formContainer.style.display="block";
// document.getElementsByTagName('main')[0].appendChild(formBox);
// document.getElementById("formBox").style.display = "block";
document.getElementById("addBtn").addEventListener("click", function(e) {
    e.preventDefault();
    formContainer.style.display="block";
}); 

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == formContainer) {
      formContainer.style.display = "none";
    }
  }