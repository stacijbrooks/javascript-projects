// Define your Book class here:
class Book {
    constructor(title, author, copyright, ISBN, pages, checkouts, discarded) {
        this.author = author;
        this.copyright = copyright;
        this.ISBN = ISBN;
        this.pages = pages;
        this.checkouts = checkouts;
        this.discarded = discarded;
    }
    checkout(uses=1) {
        this.checkouts += uses;
    }
}
class Manual extends Book {
    constructor(title, author, copyright, ISBN, pages, checkouts, discarded) {
        super(title, author, copyright, ISBN, pages, checkouts, discarded);
    }
    dispose(currentYear) {
        if (currentYear-this.copyright > 5) {
            this.discarded = "Yes";
        }
    }
}
class Novel extends Book {
    constructor(title, author, copyright, ISBN, pages, checkouts, discarded) {
        super(title, author, copyright, ISBN, pages, checkouts, discarded);
    }
    dispose() {
        if (this.checkouts > 100) {
            this.discarded = "Yes";
        }
    }
}

let prideAndPrejudice = new Novel('Pride and Prejudice', 'Jane Austen', 1813, '1111111111111', 432, 32, 'No');

let makingTheShip = new Manual('Top Secret Shuttle Building Manual', 'Redacted', 2013, '0000000000000', 1147, 1, 'No');

prideAndPrejudice.dispose();

makingTheShip.checkout(5);

prideAndPrejudice.checkout(5);

makingTheShip.dispose();
console.log("Number of times 'Pride and Prejudice' has been checked out:", prideAndPrejudice.checkouts);
console.log("'Top Secret Shuttle Building Manual' has been disposed.");
console.log("Is 'Top Secret Shuttle Building Manual' discarded?", makingTheShip.discarded);
