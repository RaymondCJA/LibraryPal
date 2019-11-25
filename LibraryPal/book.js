// libary project

let myLibrary = [];

function Book(title, author, pages, read) { //functions (and anything between "{}" are objects in js)
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() { //can be used by "main" function/object (Book) and also can be inherited
    const infolog = title + " by " + this.author + ", " + this.pages + " pages, " + this.read; //test if it works if u use `title` instead of `this.title` EDIT: yes
    return infolog;
  }

  this.toString = function() {
    return this.title;
  }

  this.getPages = function() {
    return this.pages;
  }

  this.getAuthor = function() {
    return this.author;
  }

  this.getRead = function() {
    return this.read;
  }

}

Book.test = function() { //can be called by Book function but not new objects of Book
  console.log("test"); 
}

Book.prototype.print = function() { //cannot be called by Book function but can be called by new objects of Book
    console.log(this.author); 
}

function addBookToLibrary(bookToBeAdded) {
  // do stuff here
  myLibrary.push(bookToBeAdded);
}

var book1 = new Book("harry potter", "jk rowling", 2348, "read");
var book2 = new Book("blues", "pal", 189, "unread");
var book3 = new Book("chico", "eli", 762, "read");
addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);


function addTable() {
  var myElement = document.getElementById("tableDiv");

  var myTable = document.createElement("table");
  myTable.id = "tableId";

  myElement.appendChild(myTable);
}

var rowCounter = 0;

function addDefaultRow(rowContent1, rowContent2, rowContent3, rowContent4) {
  var myElement = document.getElementById("tableId");

  var tr = document.createElement("tr");
  tr.id = "myDefaultTr" + rowCounter;

  var tdTitle = document.createElement("td");
  var cellTitle = document.createTextNode(rowContent1);
  tdTitle.appendChild(cellTitle);

  var tdAuthor = document.createElement("td");
  var cellAuthor = document.createTextNode(rowContent2);
  tdAuthor.appendChild(cellAuthor);

  var tdPages = document.createElement("td");
  var cellPages = document.createTextNode(rowContent3);
  tdPages.appendChild(cellPages);

  var tdRead = document.createElement("td");
  var cellRead = document.createTextNode(rowContent4);
  tdRead.appendChild(cellRead);


  tr.appendChild(tdTitle);
  tr.appendChild(tdAuthor);
  tr.appendChild(tdPages);
  tr.appendChild(tdRead);

  myElement.appendChild(tr);
  console.log(tr.id); //XXXXX idk if i need this
  rowCounter++;
}

function render() {
  addTable();
  addDefaultRow("TITLE", "PAGES", "AUTHOR", "READ");
  for (i = 0; i < myLibrary.length; i++) {
    addDefaultRow(myLibrary[i].toString(), myLibrary[i].getAuthor(), 
    myLibrary[i].getPages(), myLibrary[i].getRead());
  }
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function addBookByButton(title, author, pages, read) {
  //do stuff
  console.log("form submitted");
  addDefaultRow(title.value, author.value, pages.value, read.value);
}

function removeBookByButton() {
  //remove a book
  
}

render();