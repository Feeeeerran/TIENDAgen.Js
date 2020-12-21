// Por si algún pillo quiere entrar a producto.html de primeras
// defino un navDir por defecto 
localStorage.navDir=0; 

// motherboards
$("ul.navbar-nav>li:nth-child(2)").click(function() {
	localStorage.navDir=0;
});
// ram
$("ul.navbar-nav>li:nth-child(3)").click(function() {
	localStorage.navDir=1;
});
// grafica
$("ul.navbar-nav>li:nth-child(4)").click(function() {
	localStorage.navDir=2;
});
// procesador
$("ul.navbar-nav>li:nth-child(5)").click(function() {
	localStorage.navDir=3;
});
// perifericos
$("ul.navbar-nav>li:nth-child(6)").click(function() {
	localStorage.navDir=4;
})



$(".carrito").hover(
	function() {$(".albumSection").addClass("blurIn").removeClass("blurOut")},
	function() {$(".albumSection").toggleClass("blurIn blurOut")});