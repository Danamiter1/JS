// Задание №1
function multiplyMax(a,b,c){
    return Math.max(a,b,c)*((a+b+c)-Math.max(a,b,c)-Math.min(a,b,c))
}
alert("Первое задание - произведение двух максимальных чисел из трёх")
const a=+prompt("Первое число")
const b=+prompt("Второе число")
const c=+prompt("Третье число")
alert(multiplyMax(a,b,c))

// Задание №2
alert("Второе задание - использование аргумента по умолчанию")
function showMessage(name, rank="рядовой"){
    return ("Имя: " + name + "\n" + "Звание: " + rank)
}

const name=prompt("Введите имя:")
alert(showMessage(name))
const rank=prompt("Введите звание:")
alert(showMessage(name,rank))

// Задание №3
alert("Третье задание - использование функционального выражения (сумма трёх переменных, введёных до этого)")
const sumElements = function(a,b,c){
    return a+b+c
}
function invokeFunc(func, ...args){
    return func(...args)
}
alert("Использование функционального выражения" + "\n" + invokeFunc(sumElements,a,b,c))

// Задание №4
alert("Четвёртое задание - стрелочная функция")
const x = +prompt("Введите число:")
const power = (x%2==0) ? () => x**2 : () => x**3
alert(power(x))

// Задание №5
alert("Пятое задание - факториал числа при помощи рекурсии")
function factorial(n){
    if (n===1){
        return 1
    }
    else{
        return n*factorial(n-1)
    }
}
alert(factorial(+prompt("Введите число, для которого нужно найти факториал")))