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
        assignStudent: function (studId, subject){
            const availableTeacher={};
            const myStudent= findPerson(this.students,studId);
            console.log(myStudent);
        
        for (let i=0; i< this.teachers.length; i++)
        {
                if (this.teachers[i].subjects.some (s => s ===subject))
                {
                    if (this.teachers[i].capacityLeft>0)
                    {
                        this.teachers[i].students.push(myStudent);
                        this.teachers[i].capacityLeft --;
                        console.log(this.teachers[i]);
                    }
                    else{
                            console.log("Sorry no place");
                    }
                }
            
        }
    },
           
            
 // Assign teachers subject function
    assignTeachersSubject:function (teacherId, subject)
    {
        const myTeacher= findPerson(this.teachers,teacherId);
        console.log(myTeacher);
        if (myTeacher.subjects.indexOf(subject) <0)
        {
            myTeacher.subjects.push(subject);
            console.log(myTeacher);
        }
        else console.log("subject already exists");
    }    
        
   
};   

// find a person based on type (student/teacher)
    function findPerson(personType, personID)
    {
       return personType.find((person)=>(person.id===personID))
    }
// update student age
function updateStudentAge(studentID, newAge)
{
    myStudent= findPerson(school.students,studentID )
    if (myStudent!= null){
        myStudent.age=newAge;
        console.log(myStudent);
    }
}
    
    school.assignStudent(10,"biology");
    school.assignTeachersSubject(1,"arabic");
    updateStudentAge(11, 30);