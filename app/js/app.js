/*******************************************************************
 *
 *           Написать функцию, которая на вход принимает целое число
 *           и возвращает факториал этого числа.
 *
 *           Факториал числа — это произведение натуральных чисел
 *           от 1 до самого числа (включая данное число).
 *           Обозначается факториал восклицательным знаком «!».
 *
 *                   6! = 1 · 2 · 3 · 4 · 5 · 6 = 720
 *
 *******************************************************************/
function factorial(num) {
    if (typeof num !== 'number') return "Ошибка, вы ввели не число"
    let result = 1;

    if (isNaN(num)) {
        return "Error"
    } else {
        for (let i = 1; i <= num; i++) {
            result *= i
        }
    }
    return result
}

/*
console.log("1 задача. Факториал заданного числа" + " " + factorial(6))
// console.log(720)
*/

/*******************************************************************
 *
 *         Написать функцию, которая на вход принимает строку
 *         и возвращает длину самого длинного слова в этой строке.
 *
 *******************************************************************/

str = "dsghdfgjkhds asdf asdfsa asdfasdfasdfsdfgh asdfasdfasgd d124234313452435khdsfaASa dsghdfgjkhdSADFADSsfs"

function longestString(str) {
    str = str.split(' ')
    let longest = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i].length > longest.length) {
            longest = str[i]
        }
    }
    return "Самое длинное слово '" + longest + "', " + "имеющее кол-во символов '" + longest.length + "'"
}

/*
console.log(longestString(str))
*/

/*******************************************************************
 *
 *          Написать функцию, которая на вход принимает массив,
 *          состоящий из массивов целых чисел
 *          (например: [[1, 2, 3], [4, 5], [6, 7, 8, 9]])
 *          и возвращает массив состоящий из
 *          наибольшего числа каждого предоставленного подмассива.
 *
 *******************************************************************/

/*
primaryArr = [[1, 2, 3], [4, 5], [6, 7, 8, 9], [11,22,33,44,55]]

function newMaxArrayFromSubArrays() {
    let newArray = [];
    for (let i = 0; i < primaryArr.length; i++) {
            for(let j=0; j< primaryArr[i].length; j++) {
                newArray.push(primaryArr[i][j])
            }
    }
    console.log(newArray)
}
console.log()  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33, 44, 55]

newMaxArrayFromSubArrays()
*/

primaryArr = [[1, 2, 3], [4, 5], [6, 7, 8, 9], [11, 22, 33, 44, 55]]

function newMaxArrayFromSubArrays(arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        let biggest = 0;
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > biggest) {
                biggest = arr[i][j]
            }
        }
        newArray.push(biggest)
    }
    return newArray
}

/*
console.log(newMaxArrayFromSubArrays([[1, 2, 3], [4, 5], [6, 7, 8, 9], [11,22,33,44,55]]))
*/
/************** Функция отрезает с конца  кол-во символов, заданное в аргументе "num" *****************/

function cutString(str, num) {
    str = str.split('') // строку в массив
    let cutChar
    for (let i = 0; i < num; i++) {
        cutChar = str.pop()
    }
    let resultString = str.join('') // массив в строку

    return resultString
}

/*
console.log(cutString("Ракета", 2))
*/
/*******************************************************************
 *
 *         Написать функцию, которая на вход принимает строку
 *         и целое число и обрезает строку(первый аргумент), если
 *         она длиннее заданной максимальной длины строки (второй
 *         аргумент) и возвращает обрезанную строку с «…» в конце.
 *
 *******************************************************************/
function specificLengthofString(str, maxLength) {
    if (str.length > maxLength) {

        str = str.split('') // строку в массив
        let remainder = Math.abs(maxLength - str.length);
        let cutChar

        for (let i = 0; i < remainder; i++) {
            cutChar = str.pop()
        }
        let resultString = str.join('') // массив в строку
        return resultString + "..."
    } else {
        return "Длина строки не превышает максимальное кол-во символов"
    }
}

/*
console.log(specificLengthofString("Разделяй и властвуй", 8))
*/

/*******************************************************************
 *
 *
 *      Написать функцию, которая на вход принимает строку
 *      и возвращает эту строку в формате: каждое слово
 *      начинается с заглавной буквы, остальные в нижнем регистре.
 *
 *
 *******************************************************************/

function changeFirstCharToUppareCase(primaryString) {
    primaryString = primaryString.split(' ')
    let str = ''
    for (let i = 0; i<primaryString.length; i++)
    {
        str += primaryString[i][0].toUpperCase()  + primaryString[i] + " "

    }
    console.log(str)
    return primaryString
}

console.log(changeFirstCharToUppareCase("i mega master senior front-end and i know javascript better than anyone"))