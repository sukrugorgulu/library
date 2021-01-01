
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

    let formBox = document.createElement("div");
    formBox.setAttribute("class","mb-3 popup popup-text");
    formBox.setAttribute("id","myModal");
    formBox.style.width = "70%";
    formBox.style.margin = "0 auto";
       
    let formHeader = document.createElement("h2");
    formHeader.appendChild(document.createTextNode("Add Book to Library"));
    formBox.appendChild(formHeader);
    
    let group1 = document.createElement("div");
    group1.setAttribute("class","mb-3 modal-content");
    formBox.appendChild(group1);

    let labelTitle = document.createElement("label");
    labelTitle.setAttribute("text","Title: ");
    labelTitle.setAttribute("class","form-label");
    group1.appendChild(labelTitle);

    let inputTitle = document.createElement("input");
    inputTitle.setAttribute("placeholder","The book title here");
    inputTitle.setAttribute("class","form-control");
    inputTitle.addEventListener("change", (event) => {newTitle=event.target.value;});
    group1.appendChild(inputTitle);

    let group2 = document.createElement("div");
    group2.setAttribute("class","mb-3 modal-content");
    formBox.appendChild(group2);

    let labelAuthor = document.createElement("label");
    labelAuthor.setAttribute("text","Author: ");
    labelAuthor.setAttribute("class","form-label");
    group2.appendChild(labelAuthor);

    let inputAuthor = document.createElement("input");
    inputAuthor.setAttribute("placeholder","Author name(s) here");
    inputAuthor.setAttribute("class","form-control");
    inputAuthor.addEventListener("input", (event) => {newAuthor=event.target.value;});
    group2.appendChild(inputAuthor);

    let group3 = document.createElement("div");
    group3.setAttribute("class","mb-3 modal-content");
    formBox.appendChild(group3);

    let labelPages = document.createElement("label");
    labelPages.setAttribute("text","Pages: ");
    labelPages.setAttribute("class","form-label");
    group3.appendChild(labelPages);

    let inputPages = document.createElement("input");
    inputPages.setAttribute("type", "number");
    inputPages.setAttribute("placeholder","Number of pages here");
    inputPages.setAttribute("class","form-control");
    inputPages.addEventListener("input", (event) => {newPages=event.target.value;});
    group3.appendChild(inputPages);

    let group4 = document.createElement("div");
    group4.setAttribute("class","mb-3 modal-content");
    formBox.appendChild(group4);

    let inputCheck = document.createElement("input");
    inputCheck.setAttribute("type", "checkbox");
    inputCheck.setAttribute("class","form-check-input");
    inputCheck.addEventListener("input", (event) => {newRead=event.target.value;});
    group4.appendChild(inputCheck);

    let labelCheck = document.createElement("label");
    labelCheck.setAttribute("text","Read: ");
    labelCheck.setAttribute("class","form-label");
    
    let inputBtn = document.createElement("button");
    // inputBtn.setAttribute("type", "submit");
    inputBtn.setAttribute("class", "btn btn-primary modal-content");
    inputBtn.appendChild(document.createTextNode("Add"));
    inputBtn.addEventListener("click", function(event) {
        let newBook = new Book(newTitle,newAuthor,newPages,newRead);
        document.getElementsByTagName("main")[0].appendChild(createBookBox(newBook));
    });
    formBox.appendChild(inputBtn);
    
    let closeBtn = document.createElement("button");
    closeBtn.setAttribute("class","close btn btn-secondary modal-content");
    closeBtn.appendChild(document.createTextNode("Close"));
    closeBtn.addEventListener("click", () => {
            document.getElementById("myModal").classList.remove("show");
        });
    formBox.appendChild(closeBtn);
    
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
    inputButton.setAttribute("type", "submit");
    inputButton.setAttribute("class", "btn btn-primary");
    inputButton.appendChild(document.createTextNode("Remove"));
    removeBtn.appendChild(inputButton);
    box.appendChild(removeBtn);

    return box;    
}


let formBox = createFormBox();
document.getElementsByTagName('main')[0].appendChild(formBox);
// document.getElementById("formBox").style.display = "block";

const btnShowForm = document.getElementById("btnShowForm");
btnShowForm.addEventListener("click", () => {
    document.getElementById("myModal").classList.add("show");
    });

// Get the button that opens the modal
//var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var closeBtn = document.getElementsByClassName("close")[0];


// When the user clicks anywhere outside of the modal, close it

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 
