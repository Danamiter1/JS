// Задание №1 (одномерные массивы)

const test = [1,2,1,4]
function findToMin(array){
    const minInRow = Math.min(...array)
    const indexOfMin = array.indexOf(minInRow)

    let sum = 0;
    for (let i = 0; i<indexOfMin; i++){
        sum += array[i];
    }

    return sum;
}

console.log(findToMin(test))



// Задание №1 (матрицы)

const test1 = [[3, 4, 3], [2, 2, 2],[3, 4, 3]]

const test2 = [[1,2,3],[4,5,6],[7,8,9]]


function findSadlePoint(matrix){
    let temp = [];
    const len = matrix.length;


    for(let i = 0; i<len;i++){
        const minInRow = Math.min(...matrix[i])
        let indexesOfMin = [];
        for (let j = 0; j<len; j++){
            if (matrix[i][j]===minInRow){
                indexesOfMin.push(j)
            }
        }
        
        for (let indexOfMin of indexesOfMin){
            let isSaddle = true;
            for(let j = 0; j<len; j++){
                if (matrix[j][indexOfMin]>minInRow){
                    isSaddle = false;
                }
            }
            if (isSaddle){
                temp.push([i,indexOfMin])
            }
        }  
    }

    return temp;
}

console.log(findSadlePoint(test2))