// library project

let myLibrary = [];
var rowCounter = 0;

function Book(title, author, pages, read) { 
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() { 
    const infolog = title + " by " + author + ", " + pages + " pages, " + read; 
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

function addBookToLibrary(bookToBeAdded) {
  myLibrary.push(bookToBeAdded);
}

// default books in Library
var book1 = new Book("Harry Potter and the Philosopher's Stone", "J. K. Rowling", 246, "read");
var book2 = new Book("Moby Dick or The Whale", "Herman Melville", 585, "unread");
var book3 = new Book("Animal Farm", "George Orwell", 100, "read");
addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);


function addTable() {
  var myElement = document.getElementById("tableDiv");

  var myTable = document.createElement("table");
  myTable.id = "tableId";

  myElement.appendChild(myTable);
}

function addDefaultRow(rowContent1, rowContent2, rowContent3, rowContent4, rowContent5) {
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

  if (rowContent5 == "false") {
    var tdRead = document.createElement("button");
    var cellRead = document.createTextNode(rowContent4);
    tdRead.appendChild(cellRead);
  } 
  else {
    var tdRead = document.createElement("td");
    var cellRead = document.createTextNode(rowContent4 + "STATUS");
    tdRead.appendChild(cellRead);
  }

  tr.appendChild(tdTitle);
  tr.appendChild(tdAuthor);
  tr.appendChild(tdPages);
  tr.appendChild(tdRead);

  if (rowContent5 == "false") {
    tdRead.onclick = function() {
      if (document.getElementById(tr.id).childNodes[3].textContent == "read") {
        document.getElementById(tr.id).childNodes[3].textContent = "unread"; 
      } 
      else {
        document.getElementById(tr.id).childNodes[3].textContent = "read";
      }
    }

    var tdremoveBook = document.createElement("button");
    var tridClone = tr.id.toString();
    tdremoveBook.onclick = function() {
      removeBookByButton(tridClone.split("myDefaultTr").pop());
    }
    var cellremoveBook = document.createTextNode("Remove Book");
    tdremoveBook.appendChild(cellremoveBook);
    tr.appendChild(tdremoveBook);
  }

  myElement.appendChild(tr);
  rowCounter++;
}

function render() {
  addTable();
  addDefaultRow("TITLE", "PAGES", "AUTHOR", "READ");
  for (i = 0; i < myLibrary.length; i++) {
    addDefaultRow(myLibrary[i].toString(), myLibrary[i].getAuthor(), 
    myLibrary[i].getPages(), myLibrary[i].getRead(), "false");
  }
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function addBookByButton(title, author, pages, read) {
  addDefaultRow(title.value, author.value, pages.value, read.value, "false");
}

function removeBookByButton(indexNumber) { 
  const indexOfBookToBeRemoved = document.getElementById("myDefaultTr" + indexNumber).rowIndex;
  if (indexOfBookToBeRemoved == 0) {
    return;
  }
  else {
    document.getElementById("tableId").deleteRow(indexOfBookToBeRemoved);
  }
}


render();
