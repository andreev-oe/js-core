function Book(name, author, year) {
    this.name = name;
    this.author = author;
    this.year = year;
    this.reader = null;
}

Book.prototype = {
    isAvailable() {
        return !this.reader;
    },
    takeBook(readerName) {
        if (this.isAvailable()) {
            this.reader = readerName
            return true
        }
        return false
    },
    returnBook() {
        if (!this.isAvailable()) {
            this.reader = null
            return true
        }
        return false
    },
    changeBookName(newBookName) {
        if (this.name !== newBookName) {
            this.name = newBookName
            return true
        }
        return false
    },
    changeAuthorName(newAuthorName) {
        if (this.author !== newAuthorName) {
            this.author = newAuthorName
            return true
        }
        return false
    },
    getCurrentReader() {
        return this.reader
    }
}
