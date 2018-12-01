
function tt() {
	 document.getElementById("text").style.display = "block";
	 document.getElementById("11").style.display = "block";
	 
}
document.getElementById("11").onclick = function() {
 var a = prompt('write something ');
 document.getElementById("text").innerHTML="<h1>"+a+"</h1>";
 document.getElementById("11").innerHTML="<xmp><h1>"+a+"</h1></xmp>";
};
function par(){
	document.getElementById("para").style.display = "block";
	 document.getElementById("22").style.display = "block";
}
document.getElementById("22").onclick = function() {
 var a = prompt('write something ');
 document.getElementById("para").innerHTML="<p>"+a+"</p>";
 document.getElementById("22").innerHTML="<xmp><p>"+a+"</p></xmp>";
};
function lio(){
	document.getElementById("l1").style.display="block";
	 document.getElementById("33").style.display = "block";
}
document.getElementById("33").onclick = function() {
 var a = prompt('write something ');
 document.getElementById("l1").innerHTML="<ul><li>"+a+"</li><li>text2</li><li>text3</li></ul>";
 document.getElementById("33").innerHTML="<xmp><ul><li>"+a+"</li><li>text2</li><li>text3</li></ul></xmp>";
};
function lino(){
	document.getElementById("l2").style.display="block";
	 document.getElementById("44").style.display = "block";
}
document.getElementById("44").onclick = function() {
 var a = prompt('write something ');
 document.getElementById("l2").innerHTML="<ol><li>"+a+"</li><li>text2</li><li>text3</li></ol>";
 document.getElementById("44").innerHTML="<xmp><ol><li>"+a+"</li><li>text2</li><li>text3</li></ol></xmp>";
};
function picture(){
	document.getElementById("tof").style.display="block";
	 document.getElementById("55").style.display = "block";
}

function vid(){
	document.getElementById("kk").style.display="block";
	 document.getElementById("66").style.display = "block";
}

function lien(){
	document.getElementById("hez").style.display="block";
	 document.getElementById("77").style.display = "block";

}
function sound(){
	document.getElementById("sou").style.display="block";
	 document.getElementById("88").style.display = "block";
}
function formule(){
	document.getElementById("fill").style.display="block";
	 document.getElementById("99").style.display = "block";
}
