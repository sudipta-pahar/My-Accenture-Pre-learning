//WRITE YOUR jQUERY CODE HERE
$(document).ready(function(){
    $("input[type=checkbox]").click(function(){
    var i=$("input:checked").length;
    if(i===0)
    $("div").text("0 boxes are checked");
    else if(i==1)
    $("div").text("1 box is checked");
    else if(i==2)
    $("div").text("2 boxes are checked");
    else if(i==3)
    $("div").text("3 boxes are checked");
    else if(i==4)
    $("div").text("4 boxes are checked");
    });
});
