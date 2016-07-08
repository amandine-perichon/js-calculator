var input = ''
var display = ''

$(document).ready(start)

function start () {
  $('.num').click(processNumber)
  $('.operator').click(processOperator)
  $('.equal').click(compute)
  $('.percent').click(divideByOneHundred)
  $('.ac').click(clearAll)
  $('.ce').click(clearLast)
}

function processNumber (evt) {
  var number = $(evt.target).html()
  display = display === '0' ? '' : display
  input = input + number
  display = display + number
  $('.display').text(display)
}

function processOperator (evt){
  var operator = ($(evt.target).html())
  if ((/[\+\-\*\/]/gi).test(input[input.length-1])) {
    input = input.substring(0, input.length-1)
  }
  operator = operator === 'X' ? '*' : operator
  if (input !== '') {
    input = eval(input)
    display = input
    input = input + operator
  }
  $('.display').text(display)
  display = ''
}

function compute () {
  input = eval(input)
  display = eval(input)
  $('.display').text(display)
}

function divideByOneHundred () {
  if (input !== '') {
    input = '(' + input + ')' + '/100'
    display = eval(input)
  }
  $('.display').text(display)
}

function clearAll () {
  input = ''
  display = '0'
  $('.display').text(display)
}

function clearLast () {
  var splitArr = input.split(/[\+\-\*\/]/)
  var last = splitArr[splitArr.length-1]
  input = input.substring(0, input.length-last.length-1)
  display = '0'
  $('.display').text(display)
}
