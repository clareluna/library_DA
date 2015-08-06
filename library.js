//Author: Clare Monahan 20150723
//Saved as library.js
var fs = require('fs'); // use node to access other 'modules'

eval(fs.readFileSync('shelf.js')+ ''); //import shelves to library

var Library = {
    shelves: [],
    addShelf: function(shelfName) { //to add shelf to library
        this.shelves.push(shelfName);
        console.log(this.shelves);
    },  
    removeShelf: function(shelfName) { //to remove shelf from library
        for(var i = this.shelves.length - 1; i > 0; i--) { 
            if (this.shelves[i] === shelfName) { 
                	this.shelves.splice(i, 1);  //start at i and remove this many items
                	console.log(this.shelves);
                	break; 
        	} else if (i === 0) { // console log that the shelf is not in the lib if you reach the end of array
            console.log('that shelf is not in our library'); 
        	};
   		}    
	}
}


//Author: Clare Monahan 20150723
//Saved as: shelf.js

var fs2= require('fs'); // make accessable to other 'modules'

eval(fs2.readFileSync('book.js')+ ''); //import book.js function


var Shelves = {
	books: [],
 	addBook: function (title, author) { //adds a book to books array and new instance of Book
		var book = new Book(title, author); //new instance
		this.books.push(book); // push to array
		console.log(this.books);
	},
	removeBook: function(title) {
		for(var i = this.books.length -1; i>0; i--) {
			if (this.books[i].title === title) { // this works, however a .toUpperCase could prevent bugs in capitalization
				this.books.splice(i, 1);
				console.log(this.books);
				break;
			} else if (i === 0) {
				console.log('Im terribly sorry, that book is not on our shelf');
			}
		}	
	}
}

//Author: Clare Monahan 20150723
//Saved as: book.js

function Book(title, author) {
	this.title = title;
	this.author = author;
} 



//Practice

Library.addShelf('Nonfiction');
Library.addShelf('Fiction');
Library.addShelf('Preteen');
Library.addShelf('SciFi');
Library.removeShelf('Preteen');
Library.removeShelf('Boring Old Stuff');
Library.removeShelf('Nonfiction');
Shelves.addBook('The Great Gatsby', 'F. Scott Fitzgerald');
Shelves.addBook('East Of Eden', 'John Steinbeck');
Shelves.addBook('Ubroken', 'Laura Hillenbrand');
Shelves.addBook('The Martian', 'Andy Weir');
Shelves.removeBook('East Of Eden');
Shelves.removeBook('The Wizard of Oz');
Shelves.removeBook('The Martian');
