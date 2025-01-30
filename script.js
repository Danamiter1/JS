const x = prompt("Введите число:")

let sumDel = 1

for(let i = 2; i<x;i++){
    if (x%i==0){
        sumDel+=i
    }
}

if (sumDel>x){
    alert("Число избыточное, сумма делителей: "+sumDel)
}
else{
    alert("Число не является избыточным")
}