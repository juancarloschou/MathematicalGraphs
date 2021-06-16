function AddEvent(elem, event_name, event_function) {
    if (elem.attachEvent) //Internet Explorer
        elem.attachEvent("on" + event_name, function () { event_function.call(elem); });
    else if (elem.addEventListener) //resto navegadores
        elem.addEventListener(event_name, event_function, false);
}

function RemoveEvent(elem, event_name, event_function) {
    if (elem.detachEvent) //Internet Explorer
        elem.detachEvent('on' + event_name, event_function);
    else if (elem.removeEventListener) //resto navegadores
        elem.removeEventListener(event_name, event_function, false);
}



// Menu -------------------------------------------------------------------------------------------------------------------

var vueCrear = null;
var Pantalla; //indica en que pantalla estamos (single page)
var explicacionPagina; //en que pagina vamos de la explicacion
var minExplicacionPagina = 1;
var maxExplicacionPagina = 3;

function Empieza()
{
	//se ejecuta solo una vez
	Pantalla = "Menu";
	
	IniciaEventos();
	//IniciaEventosCanvas();

	IniciaVueCanvas();
	IniciaVueCrear();

}

function IniciaEventos()
{
	//solo se ejecuta una vez
	AddEvent(window, "resize", RedimensionarCanvas);
	
	var btn = document.getElementById("MenuGraficas");
	AddEvent(btn, "click", MenuGraficas);
	btn = document.getElementById("MenuComunidad");
	AddEvent(btn, "click", MenuComunidad);	
	btn = document.getElementById("MenuCrea");
	AddEvent(btn, "click", MenuCrea);	
	btn = document.getElementById("MenuExplicacion");
	AddEvent(btn, "click", MenuExplicacion);
	
	AddEvent(document, "backbutton", PulsarBotonAtras);


	/*
	btn = document.getElementById("Numerador");
	AddEvent(btn, "click", PulsarNumerador);
	btn = document.getElementById("Denominador");
	AddEvent(btn, "click", PulsarDenominador);
	btn = document.getElementById("GuardarNumerador");
	AddEvent(btn, "click", GuardarNumerador);
	btn = document.getElementById("GuardarDenominador");
	AddEvent(btn, "click", GuardarDenominador);
	btn = document.getElementById("PonerMenuNavegacion");
	AddEvent(btn, "click", PonerMenuNavegacion);
	btn = document.getElementById("NavegaIzquierda");
	AddEvent(btn, "click", NavegaIzquierda);
	btn = document.getElementById("NavegaDerecha");
	AddEvent(btn, "click", NavegaDerecha);
	btn = document.getElementById("NavegaVolver");
	AddEvent(btn, "click", NavegaVolver);
	btn = document.getElementById("ElegirFuncion"); //cmb
	AddEvent(btn, "change", NavegaElegir);


	btn = document.getElementById("CrearNumerador");
	AddEvent(btn, "click", CrearPulsarNumerador);
	btn = document.getElementById("CrearDenominador");
	AddEvent(btn, "click", CrearPulsarDenominador);
	// btn = document.getElementById("CrearGuardarNumerador");
	// AddEvent(btn, "click", CrearGuardarNumerador);
	// btn = document.getElementById("CrearGuardarDenominador");
	// AddEvent(btn, "click", CrearGuardarDenominador);
	*/


	btn = document.getElementById("CrearVolver");
	AddEvent(btn, "click", VolverMenu);


	btn = document.getElementById("ComunidadVolver");
	AddEvent(btn, "click", VolverMenu);

	btn = null;
}


function IniciaVueCrear()
{	
	if(vueCrear == null)
	{
		vueCrear = new Vue({
				el: '#CrearMenu',
				data: {
					numerador: '1',
					denominador: '1',
				}
			})
	}
	else {
		vueCanvas.numerador = '1';
		vueCanvas.denominador = '1';
	}
}


function MenuGraficas()
{
	Pantalla = "Graficas";
	$("#divCanvas").show();
	$("#divMenu").hide();
	
	setTimeout(EmpiezaGraficas, 0);
}


function MenuComunidad()
{
	Pantalla = "Comunidad";
	$("#divComunidad").show();
	$("#divMenu").hide();

}


function MenuCrea()
{
	Pantalla = "Crea";
	$("#divCrea").show();
	$("#divMenu").hide();

	IniciaEventosCrear();
}

var IniciarEventosCrear = null;
function IniciaEventosCrear()
{
	var btn = document.getElementById("CrearNumerador");
	AddEvent(btn, "click", CrearPulsarNumerador);
	btn = document.getElementById("CrearDenominador");
	AddEvent(btn, "click", CrearPulsarDenominador);
	// btn = document.getElementById("CrearGuardarNumerador");
	// AddEvent(btn, "click", CrearGuardarNumerador);
	// btn = document.getElementById("CrearGuardarDenominador");
	// AddEvent(btn, "click", CrearGuardarDenominador);
	btn = document.getElementById("CrearGuardar");
	AddEvent(btn, "click", CrearGuardar);

	btn = null;
}

function CrearPulsarNumerador()
{
	//si esta el otro en edicion cerrarlo
	if($('#CrearEditarDenominador').css('display') != 'none')
	{
		if(vueCrear.denominador.trim() == '')
			vueCrear.denominador = '1';

		//funciones[vueCanvas.menuFuncion].den = vueCanvas.denominador;

		$('#CrearMostrarDenominador').show();
		$('#CrearEditarDenominador').hide();
	}

	//si el numerador se muestra editarlo
	if($('#CrearMostrarNumerador').css('display') != 'none')
	{
		//SalirBuclePaleta();
		$('#CrearEditarNumerador').show();
		$('#CrearMostrarNumerador').hide();
	}
}

function CrearPulsarDenominador()
{
	//si esta el otro en edicion cerrarlo
	if($('#CrearEditarNumerador').css('display') != 'none')
	{
		if(vueCrear.numerador.trim() == '')
			vueCrear.numerador = '1';

		//funciones[vueCanvas.menuFuncion].num = vueCanvas.numerador;

		$('#CrearMostrarNumerador').show();
		$('#CrearEditarNumerador').hide();
	}

	//si el denominador se muetra editarlo
	if($('#CrearMostrarDenominador').css('display') != 'none')
	{
		//SalirBuclePaleta();
		$('#CrearEditarDenominador').show();
		$('#CrearMostrarDenominador').hide();
	}
}

function CrearGuardar()
{
	if(vueCrear.numerador.trim() == '')
		vueCrear.numerador = '1';
	if(vueCrear.denominador.trim() == '')
		vueCrear.denominador = '1';

	$('#CrearMostrarNumerador').show();
	$('#CrearEditarNumerador').hide();
	$('#CrearMostrarDenominador').show();
	$('#CrearEditarDenominador').hide();

	var Funcion = {
                    Num: 1,
					Tipo: 'Prueba',
                    Numerador: vueCrear.numerador,
                    Denominador: vueCrear.denominador,
					Creador: 'Juan Carlos',
					//FechaCreacion: '2017/05/04 01:20',
					//Pais: encodeURIComponent('España')
					Pais: 'España'
                }; //encoding UTF8
	var info = JSON.stringify(Funcion);

	//var id = Funcion.Id;
    var url = 'http://localhost:49575/GEO/Funciones';
	$.ajax({
		url: url,
		cache: false,
		type: 'POST',
		contentType: 'application/json; charset=utf-8',
		data: info,
		dataType: 'json',
		success: function (data) {
			alert('La funcion se ha creado correctamente.');
			//location.reload();
			//alert(data);
			alert(data.Id);
		}
	}).fail(
		function (xhr, textStatus, err) {
			alert(err);
			//alert('error');
		}
	);

	
}

/*
function CrearGuardarNumerador()
{
	event.stopPropagation();
	//SalirBuclePaleta();

	if(vueCrear.numerador.trim() == '')
		vueCrear.numerador = '1';

	//funciones[vueCanvas.menuFuncion].num = vueCanvas.numerador;

	$('#CrearMostrarNumerador').show();
	$('#CrearEditarNumerador').hide();

	//LimpiarCanvas();

	//IniciaCanvas(false);
}

function CrearGuardarDenominador()
{
	event.stopPropagation();
	//SalirBuclePaleta();

	if(vueCrear.denominador.trim() == '')
		vueCrear.denominador = '1';

	//funciones[vueCanvas.menuFuncion].den = vueCanvas.denominador;

	$('#CrearMostrarDenominador').show();
	$('#CrearEditarDenominador').hide();

	//LimpiarCanvas();

	//IniciaCanvas(false);
}
*/


function MenuExplicacion()
{
	Pantalla = "Explicacion";
	$("#divExplicacion").show();
	$("#divMenu").hide();
	
	explicacionPagina = 1;
	ExplicacionPagina();
	
	var btn = document.getElementById("ExplicacionAtras");
	AddEvent(btn, "click", ExplicacionAtras);
	btn = document.getElementById("ExplicacionVolver");
	AddEvent(btn, "click", VolverMenu);
	btn = document.getElementById("ExplicacionAdelante");
	AddEvent(btn, "click", ExplicacionAdelante);

	btn = null;
}

function ExplicacionAtras()
{
	if(explicacionPagina > minExplicacionPagina)
	{
		explicacionPagina--;
		ExplicacionPagina();
	}
}

function ExplicacionAdelante()
{
	if(explicacionPagina < maxExplicacionPagina)
	{
		explicacionPagina++;
		ExplicacionPagina();
	}
}

function ExplicacionPagina()
{
	var pag1 = $('#ExplicacionPagina1');
	var pag2 = $('#ExplicacionPagina2');
	var pag3 = $('#ExplicacionPagina3');
			
	switch(explicacionPagina)
	{
		case 1:
			pag1.show();
			pag2.hide();
			pag3.hide();
			break;
		case 2:
			pag1.hide();
			pag2.show();
			pag3.hide();
			break;
		case 3:
			pag1.hide();
			pag2.hide();
			pag3.show();
			break;
	}
	
	window.scrollTo(0,0);
}

function VolverMenu()
{
	Pantalla = "Menu";
	$("#divMenu").show();
	$("#divCanvas").hide();
	$("#divComunidad").hide();
	$("#divCrea").hide();
	$("#divExplicacion").hide();

	if(Pantalla == "Graficas")
	{
		SalirBuclePaleta();
		RemoveEvent(window, "resize", RedimensionarCanvas);
	}
}

function PulsarBotonAtras() 
{
    if (Pantalla == "Menu") 
	{
		navigator.app.exitApp(); //salir de la app
    }
	else 
	{
		VolverMenu();

		if(Pantalla == "Graficas")
			PonerMenuInicial();
	}
}



//Ver Graficas -------------------------------------------------------------------------------------------------------------------

//var menuFuncion = 1; //la funcion inicial
//var minFuncion = 1;
//var maxFuncion = 73;
var vueCanvas = null;
var vueElegir = null;

function EmpiezaGraficas()
{
	//se ejecuta cada vez que pulsamos graficas
	InicializaCanvas();

	//IniciaVueCanvas();
	IniciaEventosCanvas();

	VerMenuInferior();

	IniciaCanvas();
	//DibujaCanvas();
	//IniciaMoverPaleta();
	//BucleMoverPaleta();
}

var IniciarEventosCanvas = null;
function IniciaEventosCanvas()
{
	//solo se ejecuta una vez

	if(IniciarEventosCanvas == null)
	{
		//AddEvent(window, "resize", RedimensionarCanvas);
		
		var btn = document.getElementById("Numerador");
		AddEvent(btn, "click", PulsarNumerador);
		btn = document.getElementById("Denominador");
		AddEvent(btn, "click", PulsarDenominador);
		btn = document.getElementById("GuardarNumerador");
		AddEvent(btn, "click", GuardarNumerador);
		btn = document.getElementById("GuardarDenominador");
		AddEvent(btn, "click", GuardarDenominador);
		btn = document.getElementById("PonerMenuNavegacion");
		AddEvent(btn, "click", PonerMenuNavegacion);
		btn = document.getElementById("NavegaIzquierda");
		AddEvent(btn, "click", NavegaIzquierda);
		btn = document.getElementById("NavegaDerecha");
		AddEvent(btn, "click", NavegaDerecha);
		btn = document.getElementById("NavegaFuncion");
		AddEvent(btn, "click", NavegaFuncion);
		btn = document.getElementById("NavegaVolver");
		AddEvent(btn, "click", NavegaVolver);
		btn = document.getElementById("ElegirFuncion"); //cmb
		AddEvent(btn, "change", NavegaElegir);

		btn = document.getElementById("txtNumerador");
		AddEvent(btn, "focus", FocoInputNumerador);
		btn = document.getElementById("txtDenominador");
		AddEvent(btn, "focus", FocoInputDenominador);
		btn = document.getElementById("txtNumerador");
		AddEvent(btn, "blur", PierdeFocoInputNumerador);
		btn = document.getElementById("txtDenominador");
		AddEvent(btn, "blur", PierdeFocoInputDenominador);
	}

	btn = null;
}


function IniciaVueCanvas()
{	
	var menuFuncion = 1; //la funcion inicial
	var minFuncion = 1;
	var maxFuncion = funciones.length; //73;

	var funcion, num, den;
	funcion = FuncionMatematica(menuFuncion);
	num = funcion[0];
	den = funcion[1];
	
	if(vueCanvas == null)
	{
		vueCanvas = new Vue({
				el: '#MenuInferior',
				data: {
					menuFuncion: menuFuncion,
					numerador: num,
					denominador: den,
					minFuncion: minFuncion,
					maxFuncion: maxFuncion
				}
			})
	}
	else {
		vueCanvas.menuFuncion = menuFuncion;
		vueCanvas.numerador = num;
		vueCanvas.denominador = den;
		vueCanvas.minFuncion = minFuncion;
		vueCanvas.maxFuncion = maxFuncion;
	}
	
	if(vueElegir == null)
	{
		var json = '[';
		for(var i=1; i<=funciones.length; i++)
		{
			json += '{"text":"' + i + '","value":"' + i + '"}';
			if(i<funciones.length)
				json += ',';
		}
		json += ']';

		var opciones = jQuery.parseJSON( json ); //[{"text":"1","value":"1"},...]

		vueElegir = new Vue({
			el: '#NavegaElegir',
			data: {
				selected: '1',
				options: opciones
			}
		});

		/*
			el: '#NavegaElegir',
			data: {
				selected: '1',
				options: [
					{ text: 'One', value: 'A' },
					{ text: 'Two', value: 'B' },
					{ text: 'Three', value: 'C' }
				]
				options: opciones
			}
		*/
	}

	menuFuncion = minFuncion = maxFuncion = funcion = num = den = null;
}

function PonerMenuInicial()
{
	NavegaFuncion();
}

//***************************
function AvanzarMenuFuncion()
{
	//event.stopPropagation();

	vueCanvas.menuFuncion++;
	if(vueCanvas.menuFuncion > vueCanvas.maxFuncion)
	{
		vueCanvas.menuFuncion = vueCanvas.minFuncion;
		
		VolverMenu(); //al menu ppal

		PonerMenuInicial();
	}
	else 
	{
		VerMenuInferior();

		//LimpiarCanvas();

		IniciaCanvas();
	}
}

function RetrocederMenuFuncion()
{
	//event.stopPropagation();

	vueCanvas.menuFuncion--;
	if(vueCanvas.menuFuncion < vueCanvas.minFuncion)
	{
		vueCanvas.menuFuncion = vueCanvas.minFuncion;

		VolverMenu(); //al menu ppal

		PonerMenuInicial();
	}
	else 
	{
		VerMenuInferior();

		//LimpiarCanvas();

		IniciaCanvas(true);
	}
}

function VerMenuInferior()
{
	var funcion, num, den;
	var menuFuncion = vueCanvas.menuFuncion;
	funcion = FuncionMatematica(menuFuncion);
	num = funcion[0];
	den = funcion[1];
	
	vueCanvas.numerador = num;
	vueCanvas.denominador = den;

	vueElegir.selected = menuFuncion;

	funcion = num = den = menuFuncion = null;
}

function PulsarNumerador()
{
	//si esta el otro en edicion cerrarlo
	if($('#EditarDenominador').css('display') != 'none')
	{
		if(vueCanvas.denominador.trim() == '')
			vueCanvas.denominador = '1';

		funciones[vueCanvas.menuFuncion-1].den = vueCanvas.denominador;

		$('#MostrarDenominador').show();
		$('#EditarDenominador').hide();
	}

	//si el numerador se muestra editarlo
	if($('#MostrarNumerador').css('display') != 'none')
	{
		//SalirBuclePaleta();
		$('#EditarNumerador').show();
		$('#MostrarNumerador').hide();
	}
}

function PulsarDenominador()
{
	//si esta el otro en edicion cerrarlo
	if($('#EditarNumerador').css('display') != 'none')
	{
		if(vueCanvas.numerador.trim() == '')
			vueCanvas.numerador = '1';

		funciones[vueCanvas.menuFuncion-1].num = vueCanvas.numerador;

		$('#MostrarNumerador').show();
		$('#EditarNumerador').hide();
	}

	//si el denominador se muetra editarlo
	if($('#MostrarDenominador').css('display') != 'none')
	{
		//SalirBuclePaleta();
		$('#EditarDenominador').show();
		$('#MostrarDenominador').hide();
	}
}

//para que el input no se quede debajo del teclado android
function FocoInputNumerador()
{
	if(window.isphone)
		$('#EditarNumerador').css({top: -300, left: 50, position:'absolute', 'background-color':'white'});
}

function PierdeFocoInputNumerador()
{
	if(window.isphone) {
		$('#EditarNumerador').css({top: 0, left: 0, position:'relative'});
		if (window.StatusBar) window.StatusBar.hide();
	}
}

function FocoInputDenominador()
{
	if(window.isphone)
		$('#EditarDenominador').css({top: -300, left: 50, position:'absolute', 'background-color':'white'});
}

function PierdeFocoInputDenominador()
{
	if(window.isphone) {
		$('#EditarDenominador').css({top: 0, left: 0, position:'relative'});
		if (window.StatusBar) window.StatusBar.hide();
	}
}

function GuardarNumerador()
{
	event.stopPropagation();
	SalirBuclePaleta();

	if(vueCanvas.numerador.trim() == '')
		vueCanvas.numerador = '1';

	funciones[vueCanvas.menuFuncion-1].num = vueCanvas.numerador;

	$('#MostrarNumerador').show();
	$('#EditarNumerador').hide();

	//LimpiarCanvas();

	IniciaCanvas();
}

function GuardarDenominador()
{
	event.stopPropagation();
	SalirBuclePaleta();

	if(vueCanvas.denominador.trim() == '')
		vueCanvas.denominador = '1';

	funciones[vueCanvas.menuFuncion-1].den = vueCanvas.denominador;

	$('#MostrarDenominador').show();
	$('#EditarDenominador').hide();

	//LimpiarCanvas();

	IniciaCanvas();
}


function PonerMenuNavegacion()
{
	$('#MenuNavegacion').show();
	$('#MenuInferior').hide();
}

function NavegaIzquierda()
{
	//if(estamos editando num o den)
	SalirBuclePaleta();
	RetrocederMenuFuncion();
}

function NavegaDerecha()
{
	//if(estamos editando num o den)
	SalirBuclePaletaYAvanzar();
	//AvanzarMenuFuncion();
}

function NavegaFuncion()
{
	$('#MenuNavegacion').hide();
	$('#MenuInferior').show();
}

function NavegaVolver()
{
	VolverMenu();

	PonerMenuInicial();
}

function NavegaElegir()
{
	var funcion = "";
	//funcion = $('#ElegirFuncion').find('option:selected').text();
	//funcion = $('#ElegirFuncion:selected').text();
	funcion = $('#ElegirFuncion').val();
	vueCanvas.menuFuncion = funcion;

	SalirBuclePaleta();

	VerMenuInferior();

	//LimpiarCanvas();

	IniciaCanvas();
}


function FuncionMatematica(funcion)
{
	//var funciones = JSON.parse(dataFunciones);

	var num = funciones[funcion-1].num;
	var den = funciones[funcion-1].den;
	
	if ((typeof num === "undefined") || (num == ""))
		num = "1";
	if ((typeof den === "undefined") || (den == ""))
		den = "1";

	return [num, den];
}
