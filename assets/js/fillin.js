

// fetch("https://ttda.000webhostapp.com/data/motherboards.json")
// .then(response=>response.json())
// .then(function(data) {
// 	var prodLista=data;
// 	Rellenar(prodLista);
// })


// Simulando el fetch

var prodLista=[
	[ // MOTHERBOARDS
		{
			"nombre":"MSI A320M-A PRO MAX",
			"precio":"8722",
			"tipo":"motherboard",
			"id":"1",
			"descripcion":"Soporta procesadores AMD® Ryzen™ 1ra, 2da Y 3ra Generación",
			"informacion":"",
			"caracteristicas":""
		},
		{
			"nombre":"GIGABYTE GA-H110M-H",
			"precio":"8550",
			"tipo":"motherboard",
			"id":"2",
			"descripcion":"Soporte para procesadores de 7ma y 6ta Generación Intel® Core™",
			"informacion":"",
			"caracteristicas":""
		},
		{
			"nombre":"ASUS H310M-E",
			"precio":"8540",
			"tipo":"motherboard",
			"id":"3",
			"descripcion":"Intel® Socket 1151 for 8th Generation Core™ i7/Core™ i5/Core™ i3/Pentium®/Celeron®",
			"informacion":"",
			"caracteristicas":""
		},
		{
			"nombre":"ASUS H310M-R",
			"precio":"9000",
			"tipo":"motherboard",
			"id":"4",
			"descripcion":"Intel® Socket 1151 para 8 º Generación Core ™ i7 / Core ™ i5 / Core ™ i3 / Pentium® / Celeron® procesadores",
			"informacion":"",
			"caracteristicas":""
		},
		{
			"nombre":"GIGABYTE H310M M.2 2.0 BOX M-ATX",
			"precio":"8400",
			"tipo":"motherboard",
			"id":"5",
			"descripcion":"Chipset: Intel® H310 Express Chipset para 8 º Generación Core ™ i7",
			"informacion":"",
			"caracteristicas":""
		},
		{
			"nombre":"MSI H310M POR-VDH PLUS",
			"precio":"7800",
			"tipo":"motherboard",
			"id":"6",
			"descripcion":"Soporta 9 º / 8 º Gen Intel ® Core ™ / Pentium ® Oro / Celeron ®",
			"informacion":"",
			"caracteristicas":""
		},
		{
			"nombre":"GIGABYTE E1 6010N",
			"precio":"6800",
			"tipo":"motherboard",
			"id":"7",
			"descripcion":"Soporte para Ryzen™ 1ra, 2da Y 3ra Generación",
			"informacion":"",
			"caracteristicas":""
		},
		{
			"nombre":"MSI A68HM-E33 FM2+",
			"precio":"6100",
			"tipo":"motherboard",
			"id":"8",
			"descripcion":"AMD A68H con soporte para Ryzen™ 1ra, 2da Y 3ra Generación ",
			"informacion":"",
			"caracteristicas":""
		},
		{
			"nombre":"ASROCK FM2A68M-DG3+",
			"precio":"5600",
			"tipo":"motherboard",
			"id":"9",
			"descripcion":"Supports Socket FM2+ 95W / FM2 100W processors",
			"informacion":"",
			"caracteristicas":""
		}
	],
	[ // MEMORIAS RAM
		{
			"nombre":"CORSAIR VENG PRO WHITE",
			"precio":"14.150",
			"tipo":"ram",
			"id":"1",
			"descripcion":"16GB DDR4 3200MHz RGB 2X8GB",
			"informacion":"",
			"caracteristicas":""
		},
		{
			"nombre":"ADATA XPG SPECTRIX D60",
			"precio":"6.400",
			"tipo":"ram",
			"id":"2",
			"descripcion":"8GB DDR4 3200MHz RGB",
			"informacion":"",
			"caracteristicas":""
		},
		{
			"nombre":"ADATA XPG SPECTRIX D50",
			"precio":"6.300",
			"tipo":"ram",
			"id":"3",
			"descripcion":"8GB DDR4 3200MHz RGB",
			"informacion":"",
			"caracteristicas":""
		},
		{
			"nombre":"CRUCIAL BALLISTIX RED",
			"precio":"5.600",
			"tipo":"ram",
			"id":"4",
			"descripcion":"8GB DDR4 3200MHz",
			"informacion":"",
			"caracteristicas":""
		},
		{
			"nombre":"CORSAIR VENG LPX RED",
			"precio":"5.300",
			"tipo":"ram",
			"id":"5",
			"descripcion":"8GB DDR4 2666MHz",
			"informacion":"",
			"caracteristicas":""
		},
		{
			"nombre":"KINGSTON FURY",
			"precio":"5.000",
			"tipo":"ram",
			"id":"6",
			"descripcion":"8GB DDR4 2666MHz",
			"informacion":"",
			"caracteristicas":""
		},
		{
			"nombre":"CORSAIR LPX VENGEANCE",
			"precio":"3.245",
			"tipo":"ram",
			"id":"7",
			"descripcion":"4GB DDR4 2400MHz",
			"informacion":"",
			"caracteristicas":""
		},
		{
			"nombre":"RAM CRUCIAL",
			"precio":"2.600",
			"tipo":"ram",
			"id":"8",
			"descripcion":"4GB DDR4 2666MHz",
			"informacion":"",
			"caracteristicas":""
		},
		{
			"nombre":"THERMALTAKE RGB TOUGHRAM Z-ONE",
			"precio":"14.800",
			"tipo":"ram",
			"id":"9",
			"descripcion":"16GB DDR4 3200MHz 2X8GB",
			"informacion":"",
			"caracteristicas":""
		}
	],
	[ // GRAFICAS
		{
		    "nombre": "GEFORCE GTX 1650",
		    "precio": "29.500",
		    "tipo": "grafica",
		    "id": "1",
		    "descripcion": "SUPER 4GB EVGA XC BLACK",
		    "informacion": "",
		    "caracteristicas": ""
		},
		{
		    "nombre": "RADEON RX 570",
		    "precio": "30.000",
		    "tipo": "grafica",
		    "id": "2",
		    "descripcion": "8GB GIGABYTE OC GAMING",
		    "informacion": "",
		    "caracteristicas": ""
		},
		{
		    "nombre": "GEFORCE GTX 1650 SUPER",
		    "precio": "32.500",
		    "tipo": "grafica",
		    "id": "3",
		    "descripcion": "4GB EVGA SC ULTRA",
		    "informacion": "",
		    "caracteristicas": ""
		},
		{
		    "nombre": "GEFORCE QUADRO P620",
		    "precio": "39.000",
		    "tipo": "grafica",
		    "id": "4",
		    "descripcion": "2GB PNY",
		    "informacion": "",
		    "caracteristicas": ""
		},
		{
		    "nombre": "RADEON RX 5500 XT",
		    "precio": "41.500",
		    "tipo": "grafica",
		    "id": "5",
		    "descripcion": "8GB SAPPHIRE NITRO+ SE",
		    "informacion": "",
		    "caracteristicas": ""
		},
		{
		    "nombre": "GEFORCE RTX 2060",
		    "precio": "60.800",
		    "tipo": "grafica",
		    "id": "6",
		    "descripcion": "6GB GIGABYTE GAMING PRO OC",
		    "informacion": "",
		    "caracteristicas": ""
		},
		{
		    "nombre": "GEFORCE RTX 2060",
		    "precio": "70.000",
		    "tipo": "grafica",
		    "id": "7",
		    "descripcion": "6GB EVGA KO GAMING",
		    "informacion": "",
		    "caracteristicas": ""
		},
		{
		    "nombre": "GEFORCE QUADRO P1000",
		    "precio": "70.500",
		    "tipo": "grafica",
		    "id": "8",
		    "descripcion": "4GB PNY",
		    "informacion": "",
		    "caracteristicas": ""
		},
		{
		    "nombre": "GEFORCE GTX 1650",
		    "precio": "28.800",
		    "tipo": "grafica",
		    "id": "9",
		    "descripcion": "4GB MSI SUPER VENTUS XS OC",
		    "informacion": "",
		    "caracteristicas": ""
		}
	],
	[ // PROCESADORES
		{
			"nombre":"INTEL CORE I5 10400",
			"precio":"26.300",
			"tipo":"procesador",
			"id":"1",
			"descripcion":"Núcleos 2,90GHz - 4,30GHz Turbo",
			"informacion":"",
			"caracteristicas":""
		},
		{
			"nombre":"AMD RYZEN 5 2600 PINNACLE RIDGE",
			"precio":"19.900",
			"tipo":"procesador",
			"id":"2",
			"descripcion":"Núcleos 3,40Hz - 3,90GHz",
			"informacion":"",
			"caracteristicas":""
		},
		{
			"nombre":"INTEL CORE I5 9400 9TH GEN",
			"precio":"22.700",
			"tipo":"procesador",
			"id":"3",
			"descripcion":"Núcleos 2,80GHz - 4,00GHz Turbo",
			"informacion":"",
			"caracteristicas":""
		},
		{
			"nombre":"AMD RYZEN 3 3300X",
			"precio":"23.000",
			"tipo":"procesador",
			"id":"4",
			"descripcion":"Núcleos 3,80GHz - 4,30GHz",
			"informacion":"",
			"caracteristicas":""
		},
		{
			"nombre":"INTEL CORE I7 10700",
			"precio":"48.400",
			"tipo":"procesador",
			"id":"5",
			"descripcion":"Núcleos 2,90GHZ - 4,90GHz Turbo",
			"informacion":"",
			"caracteristicas":""
		},
		{
			"nombre":"INTEL CORE I9 9900K",
			"precio":"60.600",
			"tipo":"procesador",
			"id":"6",
			"descripcion":"Núcleos 3,60Hz - 5,00GHz Turbo",
			"informacion":"",
			"caracteristicas":""
		},
		{
			"nombre":"INTEL CORE I7 8700K",
			"precio":"62.300",
			"tipo":"procesador",
			"id":"7",
			"descripcion":"Núcleos 3,70GHz - 4,70 GHz Turbo",
			"informacion":"",
			"caracteristicas":""
		},
		{
			"nombre":"AMD RYZEN 9 3900XT",
			"precio":"72.800",
			"tipo":"procesador",
			"id":"8",
			"descripcion":"Núcleos 3,80GGHz - 4,70GHz",
			"informacion":"",
			"caracteristicas":""
		},
		{
			"nombre":"AMD APU A10 9700 BRISTOL RIDGE",
			"precio":"12.200",
			"tipo":"procesador",
			"id":"9",
			"descripcion":"Núcleos 3,50GHz - 3,80GHz",
			"informacion":"",
			"caracteristicas":""
		}
	],
	[ // PERIFERICOS
		{
			"nombre":"SILLA GAMER",
			"precio":"46.400",
			"tipo":"periferico",
			"id":"1",
			"descripcion":"AEROCOOL AC40C AIR NEGRA/AZUL",
			"informacion":"",
			"caracteristicas":""
		},
		{
			"nombre":"MOUSE GAMER",
			"precio":"5.800",
			"tipo":"periferico",
			"id":"2",
			"descripcion":"TRUST HERON RGB GXT 170",
			"informacion":"",
			"caracteristicas":""
		},
		{
			"nombre":"TECLADO",
			"precio":"10.050",
			"tipo":"periferico",
			"id":"3",
			"descripcion":"CORSAIR K55 RGB BACKKIT MULTICOLOR LED",
			"informacion":"",
			"caracteristicas":""
		},
		{
			"nombre":"AURICULARES",
			"precio":"10.500",
			"tipo":"periferico",
			"id":"4",
			"descripcion":"PS4 GOLD WIRELESS STEREO",
			"informacion":"",
			"caracteristicas":""
		},
		{
			"nombre":"SILLA GAMER",
			"precio":"43.000",
			"tipo":"periferico",
			"id":"5",
			"descripcion":"NOGA TYPHONE RGB REMOTO AMORT RECLINABLE",
			"informacion":"",
			"caracteristicas":""
		},
		{
			"nombre":"MOUSE GAMER",
			"precio":"3.450",
			"tipo":"periferico",
			"id":"6",
			"descripcion":"TRUST GAV JUNGLE GXT101C",
			"informacion":"",
			"caracteristicas":""
		},
		{
			"nombre":"TECLADO",
			"precio":"10.200",
			"tipo":"periferico",
			"id":"7",
			"descripcion":"TRUST THURA SEMI ES GXT860",
			"informacion":"",
			"caracteristicas":""
		},
		{
			"nombre":"TECLADO Y MOUSE",
			"precio":"6.600",
			"tipo":"periferico",
			"id":"8",
			"descripcion":"GAMER TRUST AZOR ES GXT 838",
			"informacion":"",
			"caracteristicas":""
		},
		{
			"nombre":"MOUSE GAMER",
			"precio":"12.000",
			"tipo":"periferico",
			"id":"9",
			"descripcion":"RAZER VIPER AMBIDEXTROUS WIRED",
			"informacion":"",
			"caracteristicas":""
		}
	]
]


Rellenar(prodLista)
function Rellenar(prodLista) {
	var i=0;
	prodLista=prodLista[localStorage.navDir];
	// Lo ideal es hacer solo un JSON de datos con entradas segun el title
	$("head").append(`<title>DISCO.D - ${prodLista[i].tipo.charAt(0).toUpperCase() + prodLista[i].tipo.slice(1)}</title>`)
	prodLista.forEach( producto=>{
		$(".albumSection .row").append(`<div class="col-md-4 "><div class="card cardProduct albumSection_producto"><a id="mother${i}" href="producto/lamother.html" class="text-decoration-none"></a></div></div>`);

		$(`#mother${i}`).append(`<img src="img/${prodLista[i].tipo}/${prodLista[i].tipo}${i+1}.jpg" class="card-img" alt="producto">`).append(
			'<div class="card-body albumSection_producto_body"></div>');

		$(`#mother${i}>div`).append(
			`<p class="card-text albumSection_producto--name">${prodLista[i].nombre}</p>`,
			`<p class="card-text albumSection_producto--text">${prodLista[i].descripcion}</p>`,
			`<p class="card-text albumSection_producto--price">${prodLista[i].precio}</p>`);
		i++;
	});
};
