function aled (){
	let mail = $("#pseudo");
	let mdp = $("#mdp");
	

	$.ajax({
		url: "http://192.168.1.112:8001/login",
		type: 'POST',
		data: {
			email: mail.val(), 
			password: mdp.val()
		},
		success: function(result){
			console.log(result);
			alert(result.message);
		},
		error: function(){
			alert("Incorrect");
		},
	});
}