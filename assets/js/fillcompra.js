var carrito=JSON.parse(localStorage.carrito);

console.log(carrito);

var i=1;

carrito.forEach(function(element) {
    $(".accordion").append(
        `<div class="card" id="compra${i}">
        <div class="card-header" id="headingOne">
        <h2 class="mb-0">
        <button class="row btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapse${i}" aria-expanded="true" aria-controls="collapse${i}">
        <div class="row justify-content-around text-left">
        <p class="col-6 compra_nombre">${element.nombre}</p>
        <p class="my-auto col-3 compra_precio">$ ${element.precio}</p>
        <p class="my-auto col-3 compra_cantidad">X ${element.cantidad}</p>
        </div></button></h2></div>
        <div id="collapse${i}" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
        <div class="card-body row">
        <p class="col-8">Aqui van informacion y caracteristicas</p>
        <div class="col-4 text-right">
        <button class="compra_agregar">+</button>
        <button class="compra_quitar">-</button>
        <button class="compra_eliminar">ELIMINAR</button>
        </div></div></div></div>`)
        i++;
        Total(carrito);
    })




$(".compra_agregar").click(
    function() {
        var pos =$(this).closest(".card").attr("id").match(/\d+/)[0]-1;
        carrito[pos].cantidad++;
        $(`#compra${pos+1} .compra_cantidad`)[0].innerText=`X ${carrito[pos].cantidad}`;
        Total(carrito);
    })


$(".compra_quitar").click(
    function() {
        var pos =$(this).closest(".card").attr("id").match(/\d+/)[0]-1;
        if (carrito[pos].cantidad!=0) {
            carrito[pos].cantidad--;
            $(`#compra${pos+1} .compra_cantidad`)[0].innerText=`X ${carrito[pos].cantidad}`;
        }
        Total(carrito);
    })

$(".compra_eliminar").click(
    function() {
        var pos =$(this).closest(".card").attr("id").match(/\d+/)[0]-1;
        $(this).closest(".card").remove();
        carrito.splice(pos,1);
        Total(carrito);
    })


function Total(carrito) {
    var suma=0;
    carrito.forEach(function(element) {
        suma=element.precio*element.cantidad+suma;
    })
    $(".total p:nth-child(2)").text(`${suma} USD`)
    localStorage.carrito=JSON.stringify(carrito);
}