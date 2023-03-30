
// let firstname = "Luky"
// let lastname = "TO"
// let fullname = firstname + " " + lastname

// console.log(fullname)

// let name = "Linda"
// let greeting = "Hi there"

// function greetingLinda() {
//     console.log(greeting + " " + name + "!")
// }

// greetingLinda()


// let myPoints = 3

// function add3Points() {
//    myPoints += 3
// }

// function remove1Points() {
//     myPoints -= 1
// }

// add3Points()
// add3Points()
// add3Points()
// remove1Points()
// remove1Points()

// console.log(myPoints)


// console.log("2" + 2) // "22"
// console.log(11 + 7) // 18
// console.log(6 + "5") // "65"
// console.log("My points: " + 5 + 9) // "My points: 59"
// console.log(2 + 2) // 4
// console.log("11" + "14") // "1114"

// let errorParagraph = document.getElementById("error")
// console.log(errorParagraph)

// function purchase(){
//     console.log("button clicked")
//     errorParagraph.textContent = "Something went wrong, please try again"
// }


let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let sumEl = document.getElementById("sum-el")

function add(){
    let result = num1 + num2
    sumEl.textContent = "Sum: " + result
}

function subtract(){
    let result = num1 - num2
    sumEl.textContent = "Sum: " + result
}

function divide(){
    let result = num1 / num2
    sumEl.textContent = "Sum: " + result
}

function multiply(){
    let result = num1 * num2
    sumEl.textContent = "Sum: " + result
}

