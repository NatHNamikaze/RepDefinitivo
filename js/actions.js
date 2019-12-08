function Login() {
	//body...
	var Us = document.getElementById('Us').value;
	var pass = document.getElementById('pass').value;

	if(Us == "Admin" && pass == "123"){
		alert("Bienvenidos");
	}else{
		alert("Error");
	}
}

function Inicio(){
	window.location = "./pages/Inicio.html";
}