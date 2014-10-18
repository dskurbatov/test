// replacing numbers with a words

var fizzBuzz = function(number){
	var result = [];
	for(var i = 1; i <= number; i += 1){
		if((i % 3 === 0) && (i % 5 === 0)){
			result += " fizzBuzz ";
		} else if(i % 3 === 0){
			result += " fizz ";
		} else if(i % 5 === 0){
			result += " buzz ";
		} else {
			result += i + " ";
		};
	};
	return result;
};

$(document).ready(function(){
	$("button").click(function(event){

		event.preventDefault();

		var answer = parseInt($("input.form-control").val());

		if(isNaN(answer)){

			alert("This is not a number. Please enter a number");
			$("input.form-control").val(" ");
			$("input.form-control").focus();
		} else {

			$("div.output").append("<div class='well'>" + fizzBuzz(answer) + "</div>");

			$("div.output").find("div").click(function(){
			$(this).remove();
			$("input.form-control").val(" ");
			$("input.form-control").focus();
			});
		};
	});
});