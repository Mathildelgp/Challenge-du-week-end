var bouton = document.getElementById('changer')
var texte  = document.querySelector('p')
/*bouton.onclick = function changer_style(){
	texte.style.color = '#ffffff';
	texte.style.backgroundColor = '#000000';
	texte.style.border = '1px dotted #000000';
	texte.style.padding = '5px 5px 5px 5px';
}*/
bouton.onclick = function changer_style() {
	texte.className = 'active';
}

var ajouter = document.getElementById('ajouter')
var sort    = document.getElementById('sort')
var gagnant = document.getElementById('gagnant')
var tab = []

ajouter.onclick = function() {
	var prenom = prompt("Ajouter un prenom :");
	tab.push(prenom)
	document.getElementById('prenom').innerHTML = tab
}

sort.onclick = function() {
	var index = Math.floor(Math.random() * tab.length)
	gagnant.innerHTML = tab[index]
}