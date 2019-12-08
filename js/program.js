this.logueado=false;

$("#entrar").click(function(){
	if ($("#Us").val()=="Admin" && $("#pass").val()=="123"){
		logueado=true;
		if (logueado==true) {
			window.location= "../pages/index2.html/"
		}
	}else{
		Swal.fire('Error');
	}
});

window.addEventListener('load', function(){
$('.container').fadeIn(1000);
});