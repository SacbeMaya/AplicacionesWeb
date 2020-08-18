
//Añadir un escuchador al documento
const elemh4=document.getElementById('contenido');
document.addEventListener('DOMContentLoaded', function(){
	//Implementar el API XMLHttpRequest
	implement_ajax();
	//Implementar el API Fetch
	//implement_fetch();
});

function implement_ajax(){
	let obj_ajax=new XMLHttpRequest();
	obj_ajax.onreadystatechange=function(){
		if (this.readyState==4 && this.status==200) {
			console.log(this.responseText);
			elemh4.innerHTML=this.responseText;
		}	
	};

	obj_ajax.open("GET","../TI/files/archivo_texto.txt"); //Ruta Relativa
	//obj_ajax.open("GET","http://localhost/app_web/TI/files/archivo_texto.txt", true); //Ruta Absoluta
	obj_ajax.send();
}

function implement_fetch(){
	fetch("http://localhost/app_web/TI/files/archivo_texto_fetch.txt")
	.then(function(respuesta){
		return respuesta.text();
	})
	.then(function(texto){
		elemh4.innerHTML=texto;
	})
}

	
	