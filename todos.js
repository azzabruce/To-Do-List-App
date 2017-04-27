//cross out a todo from the list
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});
//delete the todo off the list by clicking on X
$("ul").on("click","span", function(event){
 $(this).parent().fadeOut(500, function(){
 	$(this).remove();
 });
 event.stopPropagation();
});

//Steps to adding a new todo
   
 $("input[type = 'text']").keypress(function(event){
 // grabbing a new Todo from input
   	if (event.which === 13){
   		var newTodos = $(this).val();
   		$(this).val("");
//create a new tod to the ul list 
		$("ul").append("<li><span>X</span> " +  newTodos + "</li>");
		//remove new todos from input
	}	
  });

 //add an event listener to each li when a mouse hover, then slide left
$(".fa-plus").click(function(){

$("input[type = 'text']").fadeToggle();
});
  
