
$(document).ready(function() {
	var operation = 0;
	$("#resultado").click(function() {
		var resultado = (eval($("#res").val()));
		$("#res").val(resultado);
		operation = 0;
	});

	$("#borrar").click(function() {
		$("#res").val("");
	});

	 $(".number").click(function(e){
         	var pulsado = $(this).attr("id");
          	$("#res").val($("#res").val() + pulsado); 
		operation = 0;
	});
	 $(".operacion").click(function(e){
		if(operation == 0){
         		var pulsado = $(this).attr("id");
          		$("#res").val($("#res").val() + pulsado); 
			operation = 1;
		}
	});
});
