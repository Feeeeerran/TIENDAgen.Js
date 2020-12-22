fetch("https://ttda.000webhostapp.com/data/all.json")
.then(response=>response.json())
.then(function(data) {
	var prodLista=data;
	FillCarrito(prodLista);
})

// Simulando el fetch

// var prodLista=[
// 	[ 
// 		{
// 			"nombre":"MSI A320M-A PRO MAX",
// 			"precio":"8722",
// 			"cantidad":1,
// 			"stock":"",
// 			"tipo":"motherboard",
// 			"id":"0",
// 			"descripcion":"Soporta procesadores AMD® Ryzen™ 1ra, 2da Y 3ra Generación",
// 			"informacion":"",
// 			"caracteristicas":""
// 		},
// 		{
// 			"nombre":"GIGABYTE GA-H110M-H",
// 			"precio":"8550",
// 			"cantidad":1,
// 			"stock":"",
// 			"tipo":"motherboard",
// 			"id":"1",
// 			"descripcion":"Soporte para procesadores de 7ma y 6ta Generación Intel® Core™",
// 			"informacion":"",
// 			"caracteristicas":""
// 		},
// 		{
// 			"nombre":"ASUS H310M-E",
// 			"precio":"8540",
// 			"cantidad":1,
// 			"stock":"",
// 			"tipo":"motherboard",
// 			"id":"2",
// 			"descripcion":"Intel® Socket 1151 for 8th Generation Core™ i7/Core™ i5/Core™ i3/Pentium®/Celeron®",
// 			"informacion":"",
// 			"caracteristicas":""
// 		},
// 		{
// 			"nombre":"ASUS H310M-R",
// 			"precio":"9000",
// 			"cantidad":1,
// 			"stock":"",
// 			"tipo":"motherboard",
// 			"id":"3",
// 			"descripcion":"Intel® Socket 1151 para 8 º Generación Core ™ i7 / Core ™ i5 / Core ™ i3 / Pentium® / Celeron® procesadores",
// 			"informacion":"",
// 			"caracteristicas":""
// 		},
// 		{
// 			"nombre":"GIGABYTE H310M M.2 2.0 BOX M-ATX",
// 			"precio":"8400",
// 			"cantidad":1,
// 			"stock":"",
// 			"tipo":"motherboard",
// 			"id":"4",
// 			"descripcion":"Chipset: Intel® H310 Express Chipset para 8 º Generación Core ™ i7",
// 			"informacion":"",
// 			"caracteristicas":""
// 		},
// 		{
// 			"nombre":"MSI H310M POR-VDH PLUS",
// 			"precio":"7800",
// 			"cantidad":1,
// 			"stock":"",
// 			"tipo":"motherboard",
// 			"id":"5",
// 			"descripcion":"Soporta 9 º / 8 º Gen Intel ® Core ™ / Pentium ® Oro / Celeron ®",
// 			"informacion":"",
// 			"caracteristicas":""
// 		},
// 		{
// 			"nombre":"GIGABYTE E1 6010N",
// 			"precio":"6800",
// 			"cantidad":1,
// 			"stock":"",
// 			"tipo":"motherboard",
// 			"id":"6",
// 			"descripcion":"Soporte para Ryzen™ 1ra, 2da Y 3ra Generación",
// 			"informacion":"",
// 			"caracteristicas":""
// 		},
// 		{
// 			"nombre":"MSI A68HM-E33 FM2+",
// 			"precio":"6100",
// 			"cantidad":1,
// 			"stock":"",
// 			"tipo":"motherboard",
// 			"id":"7",
// 			"descripcion":"AMD A68H con soporte para Ryzen™ 1ra, 2da Y 3ra Generación ",
// 			"informacion":"",
// 			"caracteristicas":""
// 		},
// 		{
// 			"nombre":"ASROCK FM2A68M-DG3+",
// 			"precio":"5600",
// 			"cantidad":1,
// 			"stock":"",
// 			"tipo":"motherboard",
// 			"id":"8",
// 			"descripcion":"Supports Socket FM2+ 95W / FM2 100W processors",
// 			"informacion":"",
// 			"caracteristicas":""
// 		}
// 	],
// 	[  
// 		{
// 			"nombre":"CORSAIR VENG PRO WHITE",
// 			"precio":"14150",
// 			"cantidad":1,
// 			"stock":"",
// 			"tipo":"ram",
// 			"id":"0",
// 			"descripcion":"16GB DDR4 3200MHz RGB 2X8GB",
// 			"informacion":"",
// 			"caracteristicas":""
// 		},
// 		{
// 			"nombre":"ADATA XPG SPECTRIX D60",
// 			"precio":"6400",
// 			"cantidad":1,
// 			"stock":"",
// 			"tipo":"ram",
// 			"id":"1",
// 			"descripcion":"8GB DDR4 3200MHz RGB",
// 			"informacion":"",
// 			"caracteristicas":""
// 		},
// 		{
// 			"nombre":"ADATA XPG SPECTRIX D50",
// 			"precio":"6300",
// 			"cantidad":1,
// 			"stock":"",
// 			"tipo":"ram",
// 			"id":"2",
// 			"descripcion":"8GB DDR4 3200MHz RGB",
// 			"informacion":"",
// 			"caracteristicas":""
// 		},
// 		{
// 			"nombre":"CRUCIAL BALLISTIX RED",
// 			"precio":"5600",
// 			"cantidad":1,
// 			"stock":"",
// 			"tipo":"ram",
// 			"id":"3",
// 			"descripcion":"8GB DDR4 3200MHz",
// 			"informacion":"",
// 			"caracteristicas":""
// 		},
// 		{
// 			"nombre":"CORSAIR VENG LPX RED",
// 			"precio":"5300",
// 			"cantidad":1,
// 			"stock":"",
// 			"tipo":"ram",
// 			"id":"4",
// 			"descripcion":"8GB DDR4 2666MHz",
// 			"informacion":"",
// 			"caracteristicas":""
// 		},
// 		{
// 			"nombre":"KINGSTON FURY",
// 			"precio":"5000",
// 			"cantidad":1,
// 			"stock":"",
// 			"tipo":"ram",
// 			"id":"5",
// 			"descripcion":"8GB DDR4 2666MHz",
// 			"informacion":"",
// 			"caracteristicas":""
// 		},
// 		{
// 			"nombre":"CORSAIR LPX VENGEANCE",
// 			"precio":"3245",
// 			"cantidad":1,
// 			"stock":"",
// 			"tipo":"ram",
// 			"id":"6",
// 			"descripcion":"4GB DDR4 2400MHz",
// 			"informacion":"",
// 			"caracteristicas":""
// 		},
// 		{
// 			"nombre":"RAM CRUCIAL",
// 			"precio":"2600",
// 			"cantidad":1,
// 			"stock":"",
// 			"tipo":"ram",
// 			"id":"7",
// 			"descripcion":"4GB DDR4 2666MHz",
// 			"informacion":"",
// 			"caracteristicas":""
// 		},
// 		{
// 			"nombre":"THERMALTAKE RGB TOUGHRAM Z-ONE",
// 			"precio":"14800",
// 			"cantidad":1,
// 			"stock":"",
// 			"tipo":"ram",
// 			"id":"8",
// 			"descripcion":"16GB DDR4 3200MHz 2X8GB",
// 			"informacion":"",
// 			"caracteristicas":""
// 		}
// 	],
// 	[ 
// 		{
// 		    "nombre": "GEFORCE GTX 1650",
// 		    "precio": "29500",
// 		    "cantidad":1,
// 		    "stock":"",
// 		    "tipo": "grafica",
// 		    "id": "1",
// 		    "descripcion": "SUPER 4GB EVGA XC BLACK",
// 		    "informacion": "",
// 		    "caracteristicas": ""
// 		},
// 		{
// 		    "nombre": "RADEON RX 570",
// 		    "precio": "30000",
// 		    "cantidad":1,
// 		    "stock":"",
// 		    "tipo": "grafica",
// 		    "id": "2",
// 		    "descripcion": "8GB GIGABYTE OC GAMING",
// 		    "informacion": "",
// 		    "caracteristicas": ""
// 		},
// 		{
// 		    "nombre": "GEFORCE GTX 1650 SUPER",
// 		    "precio": "32500",
// 		    "cantidad":1,
// 		    "stock":"",
// 		    "tipo": "grafica",
// 		    "id": "3",
// 		    "descripcion": "4GB EVGA SC ULTRA",
// 		    "informacion": "",
// 		    "caracteristicas": ""
// 		},
// 		{
// 		    "nombre": "GEFORCE QUADRO P620",
// 		    "precio": "39000",
// 		    "cantidad":1,
// 		    "stock":"",
// 		    "tipo": "grafica",
// 		    "id": "4",
// 		    "descripcion": "2GB PNY",
// 		    "informacion": "",
// 		    "caracteristicas": ""
// 		},
// 		{
// 		    "nombre": "RADEON RX 5500 XT",
// 		    "precio": "41500",
// 		    "cantidad":1,
// 		    "stock":"",
// 		    "tipo": "grafica",
// 		    "id": "5",
// 		    "descripcion": "8GB SAPPHIRE NITRO+ SE",
// 		    "informacion": "",
// 		    "caracteristicas": ""
// 		},
// 		{
// 		    "nombre": "GEFORCE RTX 2060",
// 		    "precio": "60800",
// 		    "cantidad":1,
// 		    "stock":"",
// 		    "tipo": "grafica",
// 		    "id": "6",
// 		    "descripcion": "6GB GIGABYTE GAMING PRO OC",
// 		    "informacion": "",
// 		    "caracteristicas": ""
// 		},
// 		{
// 		    "nombre": "GEFORCE RTX 2060",
// 		    "precio": "70000",
// 		    "cantidad":1,
// 		    "stock":"",
// 		    "tipo": "grafica",
// 		    "id": "7",
// 		    "descripcion": "6GB EVGA KO GAMING",
// 		    "informacion": "",
// 		    "caracteristicas": ""
// 		},
// 		{
// 		    "nombre": "GEFORCE QUADRO P1000",
// 		    "precio": "70500",
// 		    "cantidad":1,
// 		    "stock":"",
// 		    "tipo": "grafica",
// 		    "id": "8",
// 		    "descripcion": "4GB PNY",
// 		    "informacion": "",
// 		    "caracteristicas": ""
// 		},
// 		{
// 		    "nombre": "GEFORCE GTX 1650",
// 		    "precio": "28800",
// 		    "cantidad":1,
// 		    "stock":"",
// 		    "tipo": "grafica",
// 		    "id": "9",
// 		    "descripcion": "4GB MSI SUPER VENTUS XS OC",
// 		    "informacion": "",
// 		    "caracteristicas": ""
// 		}
// 	],
// 	[ 
// 		{
// 			"nombre":"INTEL CORE I5 10400",
// 			"precio":"26300",
// 			"cantidad":1,
// 			"stock":"",
// 			"tipo":"procesador",
// 			"id":"0",
// 			"descripcion":"Núcleos 2,90GHz - 4,30GHz Turbo",
// 			"informacion":"",
// 			"caracteristicas":""
// 		},
// 		{
// 			"nombre":"AMD RYZEN 5 2600 PINNACLE RIDGE",
// 			"precio":"19900",
// 			"cantidad":1,
// 			"stock":"",
// 			"tipo":"procesador",
// 			"id":"1",
// 			"descripcion":"Núcleos 3,40Hz - 3,90GHz",
// 			"informacion":"",
// 			"caracteristicas":""
// 		},
// 		{
// 			"nombre":"INTEL CORE I5 9400 9TH GEN",
// 			"precio":"22700",
// 			"cantidad":1,
// 			"stock":"",
// 			"tipo":"procesador",
// 			"id":"2",
// 			"descripcion":"Núcleos 2,80GHz - 4,00GHz Turbo",
// 			"informacion":"",
// 			"caracteristicas":""
// 		},
// 		{
// 			"nombre":"AMD RYZEN 3 3300X",
// 			"precio":"23000",
// 			"cantidad":1,
// 			"stock":"",
// 			"tipo":"procesador",
// 			"id":"3",
// 			"descripcion":"Núcleos 3,80GHz - 4,30GHz",
// 			"informacion":"",
// 			"caracteristicas":""
// 		},
// 		{
// 			"nombre":"INTEL CORE I7 10700",
// 			"precio":"48400",
// 			"cantidad":1,
// 			"stock":"",
// 			"tipo":"procesador",
// 			"id":"4",
// 			"descripcion":"Núcleos 2,90GHZ - 4,90GHz Turbo",
// 			"informacion":"",
// 			"caracteristicas":""
// 		},
// 		{
// 			"nombre":"INTEL CORE I9 9900K",
// 			"precio":"60600",
// 			"cantidad":1,
// 			"stock":"",
// 			"tipo":"procesador",
// 			"id":"5",
// 			"descripcion":"Núcleos 3,60Hz - 5,00GHz Turbo",
// 			"informacion":"",
// 			"caracteristicas":""
// 		},
// 		{
// 			"nombre":"INTEL CORE I7 8700K",
// 			"precio":"62300",
// 			"cantidad":1,
// 			"stock":"",
// 			"tipo":"procesador",
// 			"id":"6",
// 			"descripcion":"Núcleos 3,70GHz - 4,70 GHz Turbo",
// 			"informacion":"",
// 			"caracteristicas":""
// 		},
// 		{
// 			"nombre":"AMD RYZEN 9 3900XT",
// 			"precio":"72800",
// 			"cantidad":1,
// 			"stock":"",
// 			"tipo":"procesador",
// 			"id":"7",
// 			"descripcion":"Núcleos 3,80GGHz - 4,70GHz",
// 			"informacion":"",
// 			"caracteristicas":""
// 		},
// 		{
// 			"nombre":"AMD APU A10 9700 BRISTOL RIDGE",
// 			"precio":"12200",
// 			"cantidad":1,
// 			"stock":"",
// 			"tipo":"procesador",
// 			"id":"8",
// 			"descripcion":"Núcleos 3,50GHz - 3,80GHz",
// 			"informacion":"",
// 			"caracteristicas":""
// 		}
// 	],
// 	[ 
// 		{
// 			"nombre":"SILLA GAMER",
// 			"precio":"46400",
// 			"cantidad":1,
// 			"stock":"",
// 			"tipo":"periferico",
// 			"id":"0",
// 			"descripcion":"AEROCOOL AC40C AIR NEGRA/AZUL",
// 			"informacion":"",
// 			"caracteristicas":""
// 		},
// 		{
// 			"nombre":"MOUSE GAMER",
// 			"precio":"5800",
// 			"cantidad":1,
// 			"stock":"",
// 			"tipo":"periferico",
// 			"id":"1",
// 			"descripcion":"TRUST HERON RGB GXT 170",
// 			"informacion":"",
// 			"caracteristicas":""
// 		},
// 		{
// 			"nombre":"TECLADO",
// 			"precio":"10050",
// 			"cantidad":1,
// 			"stock":"",
// 			"tipo":"periferico",
// 			"id":"2",
// 			"descripcion":"CORSAIR K55 RGB BACKKIT MULTICOLOR LED",
// 			"informacion":"",
// 			"caracteristicas":""
// 		},
// 		{
// 			"nombre":"AURICULARES",
// 			"precio":"10500",
// 			"cantidad":1,
// 			"stock":"",
// 			"tipo":"periferico",
// 			"id":"3",
// 			"descripcion":"PS4 GOLD WIRELESS STEREO",
// 			"informacion":"",
// 			"caracteristicas":""
// 		},
// 		{
// 			"nombre":"SILLA GAMER",
// 			"precio":"43000",
// 			"cantidad":1,
// 			"stock":"",
// 			"tipo":"periferico",
// 			"id":"4",
// 			"descripcion":"NOGA TYPHONE RGB REMOTO AMORT RECLINABLE",
// 			"informacion":"",
// 			"caracteristicas":""
// 		},
// 		{
// 			"nombre":"MOUSE GAMER",
// 			"precio":"3450",
// 			"cantidad":1,
// 			"stock":"",
// 			"tipo":"periferico",
// 			"id":"5",
// 			"descripcion":"TRUST GAV JUNGLE GXT101C",
// 			"informacion":"",
// 			"caracteristicas":""
// 		},
// 		{
// 			"nombre":"TECLADO",
// 			"precio":"10200",
// 			"cantidad":1,
// 			"stock":"",
// 			"tipo":"periferico",
// 			"id":"6",
// 			"descripcion":"TRUST THURA SEMI ES GXT860",
// 			"informacion":"",
// 			"caracteristicas":""
// 		},
// 		{
// 			"nombre":"TECLADO Y MOUSE",
// 			"precio":"6600",
// 			"cantidad":1,
// 			"stock":"",
// 			"tipo":"periferico",
// 			"id":"7",
// 			"descripcion":"GAMER TRUST AZOR ES GXT 838",
// 			"informacion":"",
// 			"caracteristicas":""
// 		},
// 		{
// 			"nombre":"MOUSE GAMER",
// 			"precio":"12000",
// 			"cantidad":1,
// 			"stock":"",
// 			"tipo":"periferico",
// 			"id":"8",
// 			"descripcion":"RAZER VIPER AMBIDEXTROUS WIRED",
// 			"informacion":"",
// 			"caracteristicas":""
// 		}
// 	]
// ]



	function FillCarrito(prodLista) {
	var carrito=[];
	if (localStorage.hist=1) {
		carrito=JSON.parse(localStorage.carrito);
	}

	let prodCantidad=carrito.length;
	$(".carrito p:nth-child(1)").text(`${prodCantidad} productos en el carrito`)


	$(".albumSection_producto--button").click(
		function() {
			localStorage.hist=1;
			var prodSelect = Number($(this).attr("id"));
			var flag=1;
			carrito.forEach(function(element) {
				if(element.id==prodSelect) {
					element.cantidad++
					prodCantidad++;
					$(".carrito p:nth-child(1)").text(`${prodCantidad} productos en el carrito`)
					flag=0;
					localStorage.carrito=JSON.stringify(carrito);
				}
				else if(carrito.length==0) {
					prodCantidad++;
					$(".carrito p:nth-child(1)").text(`${prodCantidad} productos en el carrito`)
					carrito.push(prodLista[Number(localStorage.navDir)][Number(prodSelect)]);
					localStorage.carrito=JSON.stringify(carrito);
				}
			})
			
			if (flag==1) {
				prodCantidad++;
				$(".carrito p:nth-child(1)").text(`${prodCantidad} productos en el carrito`)
				carrito.push(prodLista[Number(localStorage.navDir)][Number(prodSelect)]);
				localStorage.carrito=JSON.stringify(carrito);
			}

			$(".carrito svg").toggleClass("carritoAnim");
			setTimeout(()=>$(".carrito svg").toggleClass("carritoAnim"),500)
		})

	$(".vaciarCarrito").click(
		function() {
			carrito.forEach(function(element) {
				element.cantidad=1;
			})
			carrito=[];
			prodCantidad=0;
			$(".carrito p:nth-child(1)").text(`${prodCantidad} productos en el carrito`)
		});

		$(".compra a").click(function() {
			if (carrito.length!=0) {
				localStorage.carrito=JSON.stringify(carrito);
				$(".compra a").attr("href","compra.html");
			} else (alert("No hay ningún elemento en tu carrito! Asi que ponte a comprar"))
			});
}