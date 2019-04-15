function functionAfficher() {
var afficher = document.getElementById('text');
afficher.style.display = "none";
}
function functionMasquer() {
var afficher = document.getElementById('text');
afficher.style.display = "block";
}
document.getElementById('masquer').addEventListener('click',functionAfficher);
document.getElementById('afficher').addEventListener('click',functionMasquer);
