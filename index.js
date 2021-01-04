const numbersBetween = () => {
    const firstNumber = Number(prompt('Enter the first number'))
    const secondNumber = Number(prompt('Enter the second number'))

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        console.log('Some operands are not numbers')
        return
    }

    if (firstNumber > secondNumber) {
        console.log(count(secondNumber, firstNumber))
    } else if (firstNumber < secondNumber) {
        console.log(count(firstNumber, secondNumber))
    } else {
        console.log('Numbers are equal')
    }

    function count(startValue, endValue) {
        const result = [];
        for (i = startValue + 1; i < endValue; i++) {
            result.push(i)
        }
        return result.toString()
    }
}

const elevateArrowFunction = () => {
    const firstNumber = Number(prompt('Enter the first number'))
    const secondNumber = prompt('Enter the second number')

    if (isNaN(firstNumber)) {
        console.log('First operand is not a number')
        return
    }

    console.log(
        !isNaN(secondNumber) && secondNumber != null && secondNumber.trim() != ''
            ? firstNumber ** secondNumber 
            : firstNumber ** 2
    )
}

const elevateFunctionExpression = function() {
    const firstNumber = Number(prompt('Enter the first number'))
    const secondNumber = prompt('Enter the second number')

    if (isNaN(firstNumber)) {
        console.log('First operand is not a number')
        return
    }

    console.log(
        !isNaN(secondNumber) && secondNumber != null && secondNumber.trim() != ''
            ? firstNumber ** secondNumber 
            : firstNumber ** 2
    )
}

// Работа с Number

// Тут немного не понял условие (зачем два числа запрашивать). Сделал округление и вывод обоих по отдельности
const round = () => {
    const firstNumber = Number(prompt('Enter the first number'))
    const secondNumber = Number(prompt('Enter the second number'))

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        console.log('Some operands are not numbers')
        return
    }

    console.log(Math.round(firstNumber * 0.3), Math.round(secondNumber * 0.3))
}

const random = () => {
    const firstNumber = Number(prompt('Enter the first number'))
    const secondNumber = Number(prompt('Enter the second number'))

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        console.log('Some operands are not numbers')
        return
    }

    const min = Math.min(firstNumber, secondNumber)
    const max = Math.max(firstNumber, secondNumber)

    console.log(Math.floor(Math.random() * (max - min + 1)) + min)
}

// Работа со строками

const stringOccurrence = () => {
    const firstString = prompt('Enter the first string')
    const secondString = prompt('Enter the second string')

    let count = 0
    const occurrences = []

    const stringSearch = (pos = 0) => {
        const index = firstString.indexOf(secondString, pos)
        if (index != -1) {
            count++
            occurrences.push(index)
            stringSearch(index + 1)
        }
    }

    stringSearch()
    console.log(`String occurences: ${count}`)
    console.log(`Indexes of occurrences: ${occurrences}`)
}

const searchNumbers = () => {
    const str = 'ECMAScript 2015 (6th Edition, ECMA-262)'

    const regExp = /\d+/gm;

    console.log(str.match(regExp))
}

const searchUppercase = () => {
    const str = 'ECMAScript 2015 (6th Edition, ECMA-262)'

    const regExp = /[A-Z]/gm;

    console.log(str.match(regExp))
}


// Регулярки

// 1.     /#.{3,6}/gm

// 2.     /(\(380\))?(-|\s)?(067|068|096|097|098|050|066|095|099|063|073|093)(\d|-|\s)+/gm

// 3.
const replace = (str) => {
    const result = str.replace(/h1>/gm, 'h2>')
    console.log(result)
}

// 4.     /<script.*<\/script>/gsm

