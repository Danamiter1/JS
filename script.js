// Задание №1
const student = {
    fname: "Иван",
    sname: "Иванов",
    marks:[
        {
            subject:"Физика",
            mark: 5,
        },
        {
            subject:"Информатика",
            mark: 5,
        },
        {
            subject:"Математика",
            mark: 2,
        },       
    ]
}

function getInfo(student){
    console.log('Имя: ' + student.fname)
    console.log("Фамилия: " + student.sname)
    student.marks.forEach(element => {
        console.log(element.subject + " " + element.mark)
    });
}

getInfo(student)

// Задание №2

class Student {
    constructor(fname,sname, marks){
        this.fname = fname;
        this.sname = sname;
        this.marks = marks;
    }

    // Задание №3
    average() {
        let sum = 0;
        let count = 0;
        for (let element of this.marks){
            sum+=element.mark
            count+=1
        }
        return sum/count;
    }

    // Задание №4
    getMarkForSubject(subject){
        let a = []
        this.marks.forEach(element => {if(element.subject === subject) {a.push(element.mark)}})
        return a
    }

    // Задание №5
    addMarkForSubject(subject,mark){
        this.marks.push({subject,mark})
    }

    // Задание №6 (но говорят, что delete использовать - плохой тон, поэтому дальше другой способ)
    // deleteMarksForSubjects(subject){
    //     for (let i = 0; i<this.marks.length; i++){
    //         if (this.marks[i].subject === subject){
    //             delete this.marks[i]
    //         }
    //     }
    // }

    deleteMarksForSubject(subject){
        let newArrayMarks = [];
        this.marks.forEach(element => {if(element.subject !== subject){newArrayMarks.push(element)}});
        this.marks = newArrayMarks
    }
}
class Mark {
    constructor(subject,mark){
        this.subject = subject;
        this.mark = mark;
    }
}
