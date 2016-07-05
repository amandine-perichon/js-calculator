$(document).ready(function(){
  var input = "";
  $(".num").click(function(evt){
   input = input + ($(evt.target).html())
   $(".display").text(input)
  }) 
  $(".operator").click(function(evt){
    var operator 
    operator = ($(evt.target).html()) 
    if (operator === "X"){
      operator = "*"
    } 
    input = input + operator
    $(".display").text(input)
  })
  $(".equal").click(function(){
    $(".display").text(eval(input))
  })
  $(".percent").click(function(){
    input = "(" + input + ")" + "/100"
    $(".display").text(eval(input))
  })
  $(".ac").click(function(){
    input = ""
    $(".display").text(input)
  })
  $(".ce").click(function(){
    var splitArr = input.split(/[\+\-\*\/]/)
    var length = splitArr.length
    var last = splitArr[length-1]
    input = input.substring(0,input.length-last.length)
    $(".display").text(input)
  })
})

