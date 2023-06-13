function adiciona(){
	add = document.getElementById("texttaref").value;
	
var item = document.createElement("li")
var els = document.getElementsByTagName("ul")
els[0]
els[0].appendChild(item)
item.innerHTML = add;
}

function remove(){
var result = confirm("Confirma exclusão?")
	if (result == true) {
		var remove_text = parseInt(document.getElementById("textrm").value);	
		var teste = document.getElementById("list");
		var teste_texto = teste.getElementsByTagName("li");
		teste.removeChild(teste_texto[remove_text-1])
}
}