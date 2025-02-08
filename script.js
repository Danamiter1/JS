// Задание №1
class Student {
    constructor(fname,sname, marks){
        this.fname = fname;
        this.sname = sname;
        this.marks = marks;
    }

    average() {
        let sum = 0;
        let count = 0;
        for (let element of this.marks){
            sum+=element.mark
            count+=1
        }
        return sum/count;
    }
}

function shellSort(students) {
    const n = students.length;
    let gap = Math.floor(n / 2);

    while (gap > 0) {
        for (let i = gap; i < n; i++) {
            const temp = students[i];
            let j;
            for (j = i; j >= gap && (students[j - gap].average()) > temp.average(); j -= gap) { 
                students[j] = students[j - gap];
            }
            students[j] = temp;
        }
        gap = Math.floor(gap / 2);
    }

    return students;
}

const ar = [new Student("Тест","Тестов",[{subject:"Информатика",mark:2}]),
            new Student("Вася","Васильев",[{subject:"Математика",mark:5}]),
            new Student("Иван","Иванов",[{subject:"Физика",mark:4}]),
            new Student("Сидор","Сидоров",[{subject:"Русский",mark:3}])]

console.log(shellSort(ar))


  