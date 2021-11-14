const Book={
    title: "the stranger in a life boat",
    author:"Mitch Albom",
    category:"novel",
    langauge:"English",
    year:"2021"

};

const printBook= (book)=>{
    console.log(`The book ${book.title} was written by ${book.author} in the year ${book.year}`);
}

printBook(Book);