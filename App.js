let body = document.getElementById('body');
let container = document.getElementById('container')
let secondTitle = document.getElementById('secondTitle');
let button = document.getElementById('button');

// Funcion flecha en la que usamos el condicional if. 

// Es una funcion que muestra un mensaje dependiendo el valor del input.

let calor = () =>{

var entrada = document.getElementById('entrada');
let grados = parseInt(entrada.value);
	if(grados >= 36){
	secondTitle.innerHTML ="Está haciendo calor!";
	secondTitle.style.color ="#090A0B";
	container.style.backgroundColor="#FFDD99"
	body.style.backgroundColor ="#FFA21F";
	secondTitle.style.textAlign ="center";
	} else if(grados <= 36 && grados >= 21){
	secondTitle.innerHTML ="El clima es apropiado";
	secondTitle.style.color ="#090A0B";
	body.style.backgroundColor ="#E6AA9E";
	secondTitle.style.textAlign ="center";
	container.style.backgroundColor="#CD543C" 
	}else{
	secondTitle.innerHTML ="Está haciendo frío!";
	secondTitle.style.color ="#090A0B";
	body.style.backgroundColor ="#7E99C9";	
	secondTitle.style.textAlign ="center";
	container.style.backgroundColor="#99FFFC"  
	}
}

