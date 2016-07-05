$(document).ready(function(){
  var input = ""
  var display = ""
  $(".num").click(function(evt){
   input = input + ($(evt.target).html())
   display = display + ($(evt.target).html())
   $(".display").text(display)
  }) 
  $(".operator").click(function(evt){
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
  })
  $(".equal").click(function(){
    $(".display").text(eval(input))
  })
  $(".percent").click(function(){
    input = "(" + input + ")" + "/100"
    display = eval(input)
    $(".display").text(display)
  })
  $(".ac").click(function(){
    input = ""
    display = ""
    $(".display").text(display)
  })
  $(".ce").click(function(){
    var splitArr = input.split(/[\+\-\*\/]/)
    var length = splitArr.length
    var last = splitArr[length-1]
    input = input.substring(0,input.length-last.length-1)
    display="0"
    $(".display").text(display)
  })
})

