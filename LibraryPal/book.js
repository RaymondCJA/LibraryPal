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
var book2 = new Book("blues", "pal", 189, "not read");
var book3 = new Book("chico", "eli", 762, "read");
addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);

/*
function render() {
  var x = document.getElementById("table1");
  for (const books in myLibrary) {
    // make a table and have each book in it
    x.insertAdjacentHTML('afterend', books.toString);
  }
}
*/

/*
//apparently books is seen as an index in this for-in loop, maybe because myLibrary is an array (instead of an object)
function render1() {
  for (const books in myLibrary) {
    // make a table and have each book in it
    console.log(myLibrary[books].toString());
  }
}

function render2() {
  for (i = 0; i < myLibrary.length; i++) {
    // make a table and have each book in it
    console.log(myLibrary[i].toString());
  }
}
*/

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
  tr.id = "myDefaultTr";

  var tdTitle = document.createElement("td");
  var cellTitle = document.createTextNode(rowContent1);
  tdTitle.appendChild(cellTitle);

  var tdAuthor = document.createElement("td");
  var cellAuthor = document.createTextNode(rowContent2);
  tdAuthor .appendChild(cellAuthor);

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
}

/*
function addRow(rowContent) {
  var myElement = document.getElementById("tableId");

  var tr = document.createElement("tr");
  tr.id = "myTr";

  var td = document.createElement("td");
  var cell = document.createTextNode(rowContent);
  td.appendChild(cell);

  tr.appendChild(td);

  myElement.appendChild(tr);
}
*/

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

function addBookByButton() {
  //do stuff
}

render();