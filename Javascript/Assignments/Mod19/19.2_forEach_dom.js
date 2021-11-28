const users = [
    {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
    email: "jimmya@gmail.com",
    },
    {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
    email: "gold@hotmail.com",
    },
    {
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
    email: "timmy.hotmail.com",
    },
    ];

    /** create a Ol elemnt and set no bullets, append it to body */

    const myOl= document.createElement("ol");
    myOl.style.listStyleType='none';
    document.querySelector('body').appendChild(myOl);

// loop through the objects and create the list with the data-id attribute dynamically
    users.forEach((user)=>{
        let name= user.firstName + " " + user.lastName;
        let myLi= document.createElement("li");
        let dataId= document.createAttribute("data-id") ;
        dataId.value=user.id;
        myLi.setAttributeNode(dataId);
        myLi.textContent=name;
        myOl.appendChild(myLi);

    });