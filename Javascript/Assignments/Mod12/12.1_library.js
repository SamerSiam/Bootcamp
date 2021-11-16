var library = [
    {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true
    },
    {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true
    },
    {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false
    }
    ];

    function booksRead(libraryObj)
    {
       return libraryObj.filter(lib=>lib.readingStatus===true);
    }
    
   console.log(booksRead(library)) ;
   
   function addCandy(candyStore, id, name, price){
    //your code
    }