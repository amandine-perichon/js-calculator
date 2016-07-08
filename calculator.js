var input = ""
var display = ""

$(document).ready(start)

function start () {
  $(".num").click(processNumber)
  $(".operator").click(processOperator)
  $(".equal").click(compute)
  $(".percent").click(divideByOneHundred)
  $(".ac").click(clearAll)
  $(".ce").click(clearLast)
}

function processNumber (evt) {
    if (display === "0") {
      display = ""
    }
    input = input + ($(evt.target).html())
    display = display + ($(evt.target).html())
    $(".display").text(display)
  }

function processOperator (evt){
    var operator = ($(evt.target).html()) 
    var length = input.length
    if (input[input.length-1] === "+" | 
        input[input.length-1] === "-" |
        input[input.length-1] === "/" | 
        input[input.length-1] === "X") {
      input = input.substring(0, input.length-1)
    }
    if (operator === "X"){
      operator = "*"
    } 
    if (input !== "") {
      input = eval(input)
      display = input
      input = input + operator
    }
    $(".display").text(display)
    display = ""
  }

function compute() {
    $(".display").text(eval(input))
  }

function divideByOneHundred () {
  if (input !== "") {
    input = "(" + input + ")" + "/100"
    display = eval(input)
  }
  $(".display").text(display)
}

function clearAll() {
    input = ""
    display = "0"
    $(".display").text(display)
  }

function clearLast () {
    var splitArr = input.split(/[\+\-\*\/]/)
    var length = splitArr.length
    var last = splitArr[length-1]
    input = input.substring(0,input.length-last.length-1)
    display="0"
    $(".display").text(display)
  }