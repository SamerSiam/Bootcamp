const book= new Map();
book.set('title',"the stranger in a life boat" );
book.set('author',"Mitch Albom" );
book.set('category',"the stranger in a life boat" );
book.set('year',2021 );
book.set('langauge',"English" );

const printBook= (book)=>{
    console.log(`The book ${book.get('title')} was written by ${book.get('author')} in the year ${book.get('year')}`);
}

printBook(book);