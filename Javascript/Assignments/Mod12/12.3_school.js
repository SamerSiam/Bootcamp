const school = {
    teachers: [
    {
    id: 1,
    name: "Pinchas",
    subjects: ["chemistry", "biology", "physics"],
    students: [],
    capacityLeft: 3,
    },
    {
    id: 2,
    name: "Williams",
    subjects: ["history", "ethics"],
    students: [],
    capacityLeft: 2,
    },
    ],
    students: [
    {
    id: 10,
    name: "Jennifer",
    age: 20,
    },
    {
    id: 11,
    name: "Howard",
    age: 23,
    },
    {
    id: 12,
    name: "Old-Timmy",
    age: 86,
    },
    {
    id:13,
    name: "Houston",
    age: 21,
    },
    ],
    assignStudent: function (){
        const teach= this.teachers.subjects.find((sub)=>(sub==="chemistry"));
        
   
    },
};
// find a person based on type (student/teacher)
    function findPerson(personType, personID)
    {
       return personType.find((person)=>(person.id===personID))
    }
    // console.log(findPerson(school['teachers'],1));

    // assign students

    
    console.log (school.assignStudent());