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
  $(".func").click(function(){
    console.log("wassup")
  })
  $(".equal").click(function(){
    $(".display").text(eval(input))
  })
})

