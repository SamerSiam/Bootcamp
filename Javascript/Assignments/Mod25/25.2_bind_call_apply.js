const Person={
    name: "john",
    printName: function(){
        console.log(this.name);
        
    }
   
}
Person.printName();
 setTimeout(Person.printName.bind(Person),1000);