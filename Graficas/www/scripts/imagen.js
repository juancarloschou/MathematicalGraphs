//canvas -----------------------------------------------------------------------------------------------------------------

var canvas; //elemento del document
var canvasWidth;
var canvasHeight;
var canvasContext;
var canvasData; //guarda 4 bytes por cada punto (r,g,b,a)
var canvasImagen; //guarda el codigo de color segun paleta de cada punto

function InicializaCanvas()
{
	//se ejecuta al pulsar en graficas
	canvas = document.getElementById("Canvas");
	canvasContext = canvas.getContext("2d");
	
	ResizeCanvas();

	LimpiarCanvas();
	
	InicializaPaleta();
	
}

function LimpiarCanvas()
{
	//canvasData = null;
	//canvasData = canvasContext.getImageData(0, 0, canvasWidth, canvasHeight);
	
	//guardo imagen en otro array con codigo de color para mover la paleta
	canvasImagen = null;
	canvasImagen = [];
}

function ResizeCanvas()
{
	canvas.width  = window.innerWidth;
	canvas.height = window.innerHeight;

	canvasWidth = canvas.width;
	canvasHeight = canvas.height - 80; //para poner menu

	var ancho = canvasWidth - 115 - 70; //menuNavegacion: ancho de formula = todo menos funcion (110 + 5 padding izq), boton (54 + 8 margen izq + 8 margin der)
	$('.anchoFormula').css('max-width', ancho + 'px');

	var ancho = ancho - 80 - 10; //menos boton guardar (70 + 5 padding izq + 5 padding der), padding div Editar (5 izq + 5 der)
	$('.anchoInputFormula').css('width', ancho + 'px');

	ancho = canvasWidth - 62 * 4 - 8 - 98; //menuInferior: ancho de td sobrante = todo menos 4 botones (54 + 8 margin izq), 8 margin der ultimo boton, combo elegir (90 + 8 margin izq)
	$('.anchoElegir').css('width', ancho + 'px');

	canvasData = null;
	canvasData = canvasContext.getImageData(0, 0, canvasWidth, canvasHeight);

	ancho = null;
}

//evento onresize window
function RedimensionarCanvas()
{
	ResizeCanvas();
	
	SalirBuclePaleta();
	
	//LimpiarCanvas();

	IniciaCanvas();
}

//realiza el proceso de dibujo y paleta
function IniciaCanvas()
{
	LimpiarCanvas();

	// if(iniciaPaleta)
	 	IniciaPaleta();
	
	//console.time('DibujaCanvas');
	
	try {
		DibujaCanvas();
	}
	catch(err) {
		var e = err.message;
		alert(e);
	}
	
	//console.timeEnd('DibujaCanvas');
	
	IniciaMoverPaleta();
}

function DrawPixel(x, y, r, g, b) //, a) 
{
    var index = (x + y * canvasWidth) * 4;

    canvasData.data[index + 0] = r;
    canvasData.data[index + 1] = g;
    canvasData.data[index + 2] = b;
    canvasData.data[index + 3] = 255;

	index = null;
}

function UpdateCanvas() 
{
    canvasContext.putImageData(canvasData, 0, 0);
}

function DibujaCanvas()
{
	var funcion, result, color, num, den, pal;
	var MedioX = Math.round(canvasWidth / 2);
	var MedioY = Math.round(canvasHeight / 2);
	var iX, iY, x, y; //(x,y) son para la funcion matematica, (iX,iY) son para poner el pixel en pantalla desde (0,0)
	var i = 0;

	var funcionNum = vueCanvas.numerador;
	var funcionDen = vueCanvas.denominador;
	
	for(y = -MedioY, iY = 0; iY < canvasHeight; y++, iY++)
		for(x = -MedioX, iX = 0; iX < canvasWidth; x++, iX++)
		{
			num = eval(funcionNum);
			den = eval(funcionDen);
			
			result = Math.abs(Math.round(num/den));
			if(isNaN(result) || !isFinite(result))
				result = 0;
			color = result % 256;
			pal = paleta[color];
			
			DrawPixel(iX, iY, pal[0], pal[1], pal[2]); //, 255);
			
			canvasImagen[i++] = color; //guarda los colores de la imagen
			//canvasImagen.push(color);
		}

	UpdateCanvas();

	funcion = result = color = num = den = pal = MedioX = MedioY = iX = iY = x = y = i = funcionNum = funcionDen = null;
}



//Paleta -------------------------------------------------------------------------------------------------------------------

var paletaInicial; //paleta inicial
var paleta; //paleta a medida que cambia
var salirBuclePaleta;
var velocidadBuclePaleta = 0;
var velocidadMoverPaleta = 4;
var sentidoMoverPaleta = 0;

function HexToRgb(hex) 
{
    var bigint = parseInt(hex, 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;

	return [r, g, b];
}

function InicializaPaleta()
{
	//se ejecuta solo una vez
	paletaInicial = palette('rainbow', 256);
}

function IniciaPaleta()
{
	var color;
	paleta = null;
	paleta = [];
	for(var i = 0; i < 256; i++)
	{
		color = HexToRgb(paletaInicial[i]);
		paleta.push(color);
	}

	color = null;
}

function CorrerPaleta(vel, sentido)
{
	var i;
	var color = [];
	
	if(sentido)
	{
		for(i = 0; i < vel; i++)
		{
			color[i] = paleta[i];
		}
		for(i = 0; i < 256-vel; i++)
		{
			paleta[i] = paleta[i+vel];
		}
		for(i = 0; i < vel; i++)
		{
			paleta[256-vel+i] = color[i];
		}
	}
	else
	{
		for(i = 0; i < vel; i++)
		{
			color[i] = paleta[256-vel+i];
		}
		for(i = 256; i >= vel; i--)
		{
			paleta[i] = paleta[i-vel];
		}
		for(i = 0; i < vel; i++)
		{
			paleta[i] = color[i];
		}
	}

	i = color = null;
}

function MoverPaleta()
{
	CorrerPaleta(velocidadMoverPaleta, sentidoMoverPaleta);
	
	var i, pal, max;
	max = canvasHeight * canvasWidth;
	for(i = 0; i < max; i++)
	{
		pal = paleta[canvasImagen[i]];
		index = i*4;
		canvasData.data[index + 0] = pal[0];
		canvasData.data[index + 1] = pal[1];
		canvasData.data[index + 2] = pal[2];
	}
	
	UpdateCanvas();

	i = pal = max = null;
}

var IntervaloBuclePaleta;

function IniciaMoverPaleta()
{
	AddEvent(canvas, "click", SalirBuclePaletaYAvanzar); //para pasar a la siguiente funcion
	salirBuclePaleta = false;
	
	//setTimeout(BucleMoverPaleta, velocidadBuclePaleta+100); //espero por si mejora rendimiento bucle
	//setTimeout(BucleMoverPaleta, velocidadBuclePaleta);

	if (typeof RequestAnimationFrame == "undefined")
        RequestAnimationFrame = new AnimationFrame();
    IntervaloBuclePaleta = RequestAnimationFrame.request(BucleMoverPaleta);
}

/*
function BucleMoverPaleta()
{
	if(!salirBuclePaleta)
	{
		//console.time('MoverPaleta');
		MoverPaleta();
		//console.timeEnd('MoverPaleta');
		
		setTimeout(BucleMoverPaleta, velocidadBuclePaleta);
	}
}
*/

function BucleMoverPaleta() {

	if(!salirBuclePaleta)
	{
		MoverPaleta();

		IntervaloBuclePaleta = RequestAnimationFrame.request(BucleMoverPaleta);
	}
}

function SalirBuclePaletaYAvanzar()
{
	SalirBuclePaleta();
	
	AvanzarMenuFuncion(); //pasar a la siguiente funcion
}

function SalirBuclePaleta()
{
	salirBuclePaleta = true;
	
	//RequestAnimationFrame = new AnimationFrame();
    RequestAnimationFrame.cancel(IntervaloBuclePaleta);

	RemoveEvent(canvas, "click", SalirBuclePaletaYAvanzar);
}
