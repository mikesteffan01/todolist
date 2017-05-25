//check off specific todos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed")
});

//Click on x to delete Todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        //grabbing new todo text from input
        var toDoText = $(this).val();
        $(this).val("");
        //create new LI and add to UL
        $("ul").append("<li><span><i class='fa fa-trash-o'></i></span> " + toDoText + "</li>")
    }
});

$(".fa-pencil-square-o").click(function(){
    $("input[type='text']").fadeToggle();  
});