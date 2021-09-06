// 'use strict'
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
    primaryString = primaryString.split('')
    let firstChar, result

    for (let i = 0; i < primaryString.length; i++) {
        if (primaryString[i] === ' ') {
            primaryString[i + 1] = primaryString[i + 1].toUpperCase()

        }

    }
    firstChar = primaryString[0].toUpperCase()

    primaryString.shift() // удаление начального элемента массива
    primaryString.unshift(firstChar)
    result = primaryString.join('')

    return result
}

/*
console.log(changeFirstCharToUppareCase("i mega master senior front-end and i know javascript better than anyone"))
*/

/*******************************************************************
 *
 *
 *     Написать функцию, которая на вход принимает два массива
 *     и целое число n. Функция должна скопировать каждый элемент
 *     первого массива во второй по порядку начиная с индекса n
 *     второго массива и вернуть полученный массив.
 *     Входные массивы не должны изменяться. (например: при входных данных
 *     ([1, 2, 3], [4, 5], 1) должно вернуться [4, 1, 2, 3, 5].
 *
 *
 *******************************************************************/
arr1 = [1, 2, 3, 4, 5, '🐑']
arr2 = [66, 77, 88, 99, '🐺']
idx = 5

function copyArrayByIndex(arr1, arr2, idx) {
    finalArray = []
    // const index = arr1.findIndex(4);
    // console.log(index)

    for (let i = 0; i < arr2.length; i++) {
        // console.log(arr2[i])
    }

    // console.log(arr1)
    // console.log(arra)

    // const finalArray = arr2.concat(arr1)

    const cloneArr1 = arr1.slice()


    var array = [2, 5, 9];
    array.indexOf(2);     // 0

    // console.log(arr1)


    // return finalArray
}

/*
console.log(copyArrayByIndex(arr1, arr2, idx))
*/

/*******************************************************************
 *
 *     Написать функцию, которая на вход принимает массив
 *     и удаляет в нем все "ложные значения"
 *
 *     (удаление дубликатов)
 *
 *******************************************************************/

function deleteFalsy(arr) {
    arr = [false, 0, 0n, '', "", ``, null, undefined, NaN]
    const arr2 = [null, 1, 0, 'string', 2n, undefined, true, {name: "Andrew"}, false, '', ' ', NaN]

    const filteredArray = arr2.filter(i => !arr.includes(i));


    return filteredArray
}

/*
console.log(deleteFalsy([null, 1, 0, 'string', 2n, undefined, true, {name: "Andrew"}, false, '', ' ', NaN]))
*/
/*******************************************************************
 *
 *    Написать функцию, которая на вход принимает массив,
 *    состоящий из двух строк. Функция должна вернуть true,
 *    если строка в первом элементе массива содержит все
 *    буквы строки во втором элементе массива (регистр игнорируется).
 *
 *******************************************************************/

function identicalString([str1, str2]) {
    const arr = [str1, str2]

    let testString1 = str1.toLowerCase().split('');
    let testString2 = str2.toLowerCase().split('');


    let filtered;

    const unnecessaryElements = [' '] // избавимся от лишних знаков, в данном случае, пробела
    testString1 = testString1.filter(i => !unnecessaryElements.includes(i));
    testString2 = testString2.filter(i => !unnecessaryElements.includes(i));

    if (arr[0].length > arr[1].length) {
        return false + ", так как в первой строке больше элементов, чем во второй"
    }

    let reps = ''
    for (let i = 0; i < testString1.length; i++) {
        filtered = testString2.indexOf(testString1[i])
        if (filtered == -1) {
            return false + ", так как в вашей строке содержится символ, несуществующий в другой строке"
        } else

            return true
    }

}

/*
    console.log((identicalString(['aqerwa', 'bqwweaar'])))
*/

/*******************************************************************
 *
 *
 * Написать функцию, которая на вход принимает масссив и целое число.
 * Функциядолжна разбить массив (первый аргумент) на группы длиной size
 * (второй агрумент) и вернуть их в виде двумерного массива.
 *
 *
 *******************************************************************/


function cutToArrayOfSize(arr, size) {
    let newArray = arr
    let partsArray = arr.length / size;
    // console.log(partsArray)


    return newArray

}

/*
console.log(cutToArrayOfSize([1,2,3,4,5,6,7,8,9,0], 2))
*/


/*******************************************************************
 *
 *
 *        Написать свою реализацию функций: map, filter, find, some, every.
 *
 *
 *******************************************************************/

//  // ForEach
// //arr.forEach(callback(currentValue[, index[, array]]) {
// //   // execute something
// // }[, thisArg]);
//
// let arr = [10, 11, 12, 13, , , , , , , , , , 14, 15, 61, 17, 18]


let arr = [{1:1},1,2,3,4,,,,,6,,7,8,]

Array.prototype.forEachMy = function (callback, thisArg) {
    if (this ==  null) {
        throw new Error ('Cant iterate is over null or undefined')
    }
    let context = this
    let obj = Object(this)
    let objLength = obj.length;
    let i = 0;

    if(arguments>1) {
        context = thisArg
    }

    if(typeof callback !== 'function') {
        throw new Error('Callback is not a function')
    }

    while (i < objLength) {
        if(i in obj) {
            callback.call(context, this[i], i, obj)
        }
        i++;
    }
}

arr.forEachMy((item, index, array) => {
    console.log({item, index})
})


// Filter

// filter
//arr.filter(callback(currentValue[, index[, array]]) {
//   // execute something
// }[, thisArg]);

let array = [1,2,3,4,5,6,7];

function isPrime(num) {
    if (num <= 1) return false;
    else if (num === 2) return true;
    else {
        for (let i = 2; i < num; i++)
            if (num % i === 0) {
                return false
            }
        return true
    }
} // function to find prime numbers

Array.prototype.filterMy = function (callback, thisArg) {
    const result = []
    if (this === null) {
        throw new Error('Cant iterate is over undefined or null')
    }
    if (typeof callback !== 'function') {
        throw new Error('Callback is not a function')
    }
    let context = this;
    let obj = Object(this)
    let objLength = obj.length;
    if (arguments.length > 1) {
        context = thisArg
    }
    for (let i = 0; i < objLength; i++) {
        if (i in obj) {
            let current = this[i]
            if (callback.call(context, current, i, obj)) {
                result.push(current)
            }
        }
    }
    return result
}
/*
let filtered = array.filterMy(isPrime)
console.log(filtered)
*/

// map()
//
// let newArray = arr.map(callback(currentValue[, index[, array]]) {
//     // return element for newArray, after executing something
// }[, thisArg]);

Array.prototype.mapMy = function (callback, thisArg) {
    if (this == null) {
        throw new Error('Cant iterate is over undefined or null')
    }
    let context = this;
    let obj = Object(this);
    if (arguments.length > 1) {
        context = thisArg
    }
    if (typeof callback !== 'function') {
        throw new Error('Callback is not a function')
    }

    let len = obj.length;
    let newArray = [];
    let i = 0; // idx

    while (i < len) {
        if (i in obj) {
            newArray[i] = callback.call(context, this[i], i, obj)
        }
        i++
    }
    return newArray
}
/*

console.log(array.mapMy((item) => item * 7))

*/


Array.prototype.findMy = function (callback, thisArg) {
    if (this == null) {
        throw new Error('Cant iterate is over undefined or null')
    }
    if (typeof callback !== 'function') {
        throw new Error('Callback is not a function')
    }

    let obj = Object(this)
    let context = this
    let lengthObj = obj.length;
    let i = 0

    if (arguments > 1) {
        context = thisArg
    }
    let firstElement = [];
    while (i < obj.length) {
        if (i in obj) {
            if (callback.call(context, this[i], i, obj)) {
                firstElement.push(this[i])
            }
        }
        i++
    }
    return firstElement[0];
}
/*
console.log(array.findMy(isPrime))
*/

Array.prototype.someMy = function (callback, thisArg) {
    if (this == null) {
        throw new Error('Cant iterate is over undefined or null')
    }
    if (typeof callback !== 'function') {
        throw new Error('Callback is not a function')
    }
    let obj = Object(this)

    let context = this
    let i = 0
    if (arguments > 1) {
        context = thisArg
    }

    while (i < obj.length) {
            if (i in obj) {
                if (callback.call(context, this[i], i, obj)) {
                    return true
                }
            }
            i++
        }
    return false
}
function isLess10 (elem) {
    return elem < 10
}
// console.log(array.someMy(isLess10))

Array.prototype.everyMy = function (callback, thisArg) {
    if (this == null) {
        throw new Error('Cant iterate is over undefined or null')
    }
    if (typeof callback !== 'function') {
        throw new Error('Callback is not a function')
    }
    let obj = Object(this)

    let context = this
    let i = 0
    if (arguments > 1) {
        context = thisArg
    }

    let allElem = []

    while (i < obj.length) {

        if (i in obj) {
            if (callback.call(context, this[i], i, obj)) {
                allElem.push(this[i])
            } else return false
        }
        i++
    }
    return true
}
/*
console.log(array.everyMy(isLess10))
*/
