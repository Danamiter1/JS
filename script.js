// Задание №1

function findSame(firstAr, secondAr){
    let sameValue = new Set();
    let difValue = new Set();

    for (let element of firstAr){
        difValue.add(element)
    }

    for (let element of secondAr){
        if (difValue.has(element)){
            sameValue.add(element)
        }
    }

    return sameValue;
}

const ar1 = [4,6,9,4436,74,2,4]
const ar2 = [4,6,7,11,4,23,435,4]
console.log(findSame(ar1,ar2))

// Задание №2
function countValue(array){
    let dictionary = new Map();
    array.forEach(element => dictionary.get(element)!==undefined ? dictionary.set(element, dictionary.get(element)+1): dictionary.set(element,1))
    return dictionary
}

console.log(countValue(ar2))
// Задание №3

class Student{
    constructor(group){
        this.group = group
    }
}


function getMaxGroup(array){
    let groups = new Set();
    let dictionary = new Map();

    for (let element of array){
        groups.add(+(element.group))
        if (dictionary.get(element.group)!==undefined){
            dictionary.set(element.group,dictionary.get(element.group)+1)
        }
        else{
            dictionary.set(element.group,1)
        }
    }

    const maxGroup = Math.max(...groups)
    return dictionary.get(String(maxGroup))
}

const ar = [new Student("6204"),new Student("6201"),new Student("9302"),new Student("7204"),new Student("1201"),new Student("9302")]
console.log(getMaxGroup(ar))