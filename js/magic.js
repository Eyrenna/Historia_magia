alert('funcionando');

var formElement = null;

//Respuestas de las enunciados tipo 'text'
var respQ1a = null;
var respQ1b = null;
var respQ1c = null;
var respQ1d = null;
var respQ4 = null;

//Respuestas de las enunciados tipo 'multiple'
var respQ2 = [];
var respQ9 = []];

//Respuestas de las enunciados tipo 'radio'
var respQ3 = null;
var respQ7 = null;
var respQ10 = null;

//Respuestas de las enunciados tipo 'select'
var respQ5 = null;
var respQ8 = null;

//Respuestas de las enunciados tipo 'checkbox'
var respQ6 = [];

//Nota del formulario
var nota = 0;

//****************************************************************************************************
//Después de cargar la página (onload) se definen los eventos sobre los elementos entre otras acciones.

window.onload = function() {

	//En la variable formElement guardamos todos los elementos del formulario que tiene como id formMagic
	formElement = document.getElementById('formMagic');

	//CORREGIR al pulsar el botón
	formElement.onsubmit = function() {

		inicializar(); /*Cambiar nombre en la funcion; más abajo*/

		if (comprobar()) {

			//funciones que corrigen enunciado 1
			corregirText1a();
			corregirText1b();
			corregirText1c();
			corregirText1d();

			//función que corrige enunciado 2
			corregirMultiple2();

			//función que corrige enunciado 3
			corregirRadio3();

			//función que corrige enunciado 4
			corregirText4();

			//función que corrige enunciado 5
			corregirSelect5();

			//función que corrige enunciado 6
			corregirCheckbox6();

			//función que corrige enunciado 7
			corregirRadio7();

			//función que corrige enunciado 8
			corregirSelect8()

			//función que corrige enunciado 9
			corregirMultiple9();

			//función que corrige enunciado 10
			corregirRadio10();

		}

		return false;

	}


	//Creamos XMLHttpRequest y lo guardamos en la variable xhttp

	var xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function() {

		if (this.readyState == 4 && this.status == 200) {

			gestionarXml(this);

		}

	}

	// Invocamos el método .open donde indicamos el tipo de form y la ruta xml (guardado en GitHub)

	xhttp.open("POST", 'https://raw.githack.com/Eyrenna/Historia_magia/master/xml/esquema.xml', true);

	xhttp.send();

}


/*______________________________________________FUNCIONES__________________________________________________*/

// Recuperamos los datos del fichero XML
// xmlDOC es el documento leido XML.

function gestionarXml(dadesXml) {

	var xmlDoc = dadesXml.responseXML;

	//Parse XML to xmlDoc

/***************************************PREGUNTA-OPCIONE/ES-RESPUESTA/S********************************************/

/*___________________________________________________TEXT____________________________________________________*/

//Pregunta 1
	var tituloText1a = xmlDoc.getElementById("q1A").getElementsByTagName("enunciado")[0].innerHTML;
	ponerDatosText1aHtml(tituloText1a);
	respQ1a = xmlDoc.getElementById("q1A").getElementsByTagName("respuesta")[0].innerHTML;

	var tituloText1b = xmlDoc.getElementById("q1B").getElementsByTagName("enunciado")[0].innerHTML;
	ponerDatosText1bHtml(tituloText1b);
	respQ1b = xmlDoc.getElementById("q1B").getElementsByTagName("respuesta")[0].innerHTML;

	var tituloText1c = xmlDoc.getElementById("q1C").getElementsByTagName("enunciado")[0].innerHTML;
	ponerDatosText1cHtml(tituloInput);
	respQ1c = xmlDoc.getElementById("q1C").getElementsByTagName("respuesta")[0].innerHTML;

	var tituloText1b = xmlDoc.getElementById("q1D").getElementsByTagName("enunciado")[0].innerHTML;
	ponerDatosText1dHtml(tituloInput);
	respQ1d = xmlDoc.getElementById("q1D").getElementsByTagName("respuesta")[0].innerHTML;

//Pregunta 4
	var tituloText4 = xmlDoc.getElementById("q4").getElementsByTagName("enunciado")[0].innerHTML;
	ponerDatosText4Html(tituloInput);
	respQ4 = xmlDoc.getElementById("q4").getElementsByTagName("respuesta")[0].innerHTML;

/*_________________________________________________MÚLTIPLE___________________________________________________*/

//Pregunta 2
	var tituloMultiple2 = xmlDOC.getElementById("q2").getElementsByTagName("enunciado")[0].innerHTML);
	var opcionesMultiple2 = [];
	var nOpciones2 = xmlDOC.getElementById("q2").getElementsByTagName("opcion").length;/*cuantas opciones tenemos*/
	for (var i = 0; i < nOpciones2; i++) {
		opcionesMultiple2[i] = xmlDoc.getElementById("q2").getElementsByTagName('opcion')[i].innerHTML;/*array de opciones*/
	}
	ponerDatosMultiple2Html(tituloMultiple2, opcionesMultiple2);
	var nRespuestas2 = xmlDoc.getElementById("q2").getElementsByTagName("respuesta").length;/*cuantas respuestas tenemos*/
	for (var i = 0; i < nRespuestas2; i++) {
		respQ2[i] = xmlDoc.getElementById("q2").getElementsByTagName("respuesta")[i].innerHTML;/*array de respuestas*/
	}

//Pregunta 9
	var tituloMultiple9 = xmlDOC.getElementById("q9").getElementsByTagName("enunciado")[0].innerHTML);
	var opcionesMultiple9 = [];
	var nOpciones9 = xmlDOC.getElementById("q9").getElementsByTagName("opcion").length;/*cuantas opciones tenemos*/
	for (var i = 0; i < nOpciones9; i++) {
		opcionesMultiple9[i] = xmlDoc.getElementById("q9").getElementsByTagName('opcion')[i].innerHTML;/*array de opciones*/
	}
	ponerDatosMultiple9Html(tituloMultiple9, opcionesMultiple9)
	var nRespuestas9 = xmlDoc.getElementById("q9").getElementsByTagName("respuesta").length;/*cuantas respuestas tenemos*/
	for (var i = 0; i < nRespuestas9; i++) {
		respQ9[i] = xmlDoc.getElementById("q9").getElementsByTagName("respuesta")[i].innerHTML;/*array de respuestas*/
	}

	/*_________________________________________________RADIO___________________________________________________*/

//Pregunta 3
	var tituloRadio3 = xmlDoc.getElementById("q3").getElementsByTagName("enunciado")[0].innerHTML;
	var opcionesRadio3 = [];
  var nOpciones3 = xmlDoc.getElementById("q3").getElementsByTagName("opcion").length;/*cuantas opciones tenemos*/
	for (i = 0; i < nOpciones3; i++) {
        opcionesRadio3[i] = xmlDoc.getElementById("q3").getElementsByTagName("opcion")[i].innerHTML;/*array de opciones*/
  }
  ponerDatosRadio3Html(tituloRadio3, opcionesRadio3);
  respQ3 = xmlDoc.getElementById("q3").getElementsByTagName("respuesta")[1].innerHTML;

//Pregunta 7
	var tituloRadio7 = xmlDoc.getElementById("q7")getElementsByTagName("enunciado")[0].innerHTML;
	var opcionesRadio7 = [];
	var nOpciones7 = xmlDoc.getElementById("q7").getElementsByTagName("opcion").length;/*cuantas opciones tenemos*/
	for (i = 0; i < nOpciones7; i++) {
				opcionesRadio7[i] = xmlDoc.getElementById("q7").getElementsByTagName("opcion")[i].innerHTML;/*array de opciones*/
	}
	ponerDatosRadio7Html(tituloRadio7, opcionesRadio7);
	respQ7 = xmlDoc.getElementById("q7").getElementsByTagName("respuesta")[0].innerHTML;

//Pregunta 10
	var tituloRadio10 = xmlDoc.getElementById("q10").getElementsByTagName("enunciado")[0].innerHTML;
	var opcionesRadio10 = [];
	var nOpciones10 = xmlDoc.getElementById("q10").getElementsByTagName("opcion").length;/*cuantas opciones tenemos*/
	for (i = 0; i < nOpciones10; i++) {
				opcionesRadio10[i] = xmlDoc.getElementById("q10").getElementsByTagName("opcion")[i].innerHTML;/*array de opciones*/
	}
	ponerDatosRadio10Html(tituloRadio10, opcionesRadio10);
	respQ10 = xmlDoc.getElementById("q10").getElementsByTagName("respuesta")[0].innerHTML;

/*_______________________________________________________SELECT______________________________________________________*/

//Pregunta 5
	var tituloSelect5 = xmlDoc.getElementById("q5").getElementsByTagName("enunciado")[0].innerHTML;
	var opcionesSelect5 = [];
	var nOpciones5 = xmlDoc.getElementById("q5").getElementsByTagName('opcion').length;/*cuantas opciones tenemos*/
	for (i = 0; i < nOpciones5; i++) {
		opcionesSelect5[i] = xmlDoc.getElementById("q5").getElementsByTagName('opcion')[i].innerHTML;/*aray de opciones*/
	}
	ponerDatosSelect5Html(tituloSelect5,opcionesSelect5);
	respQ5 = xmlDoc.getElementById("q5").getElementsByTagName("respuesta")[0].innerHTML);

//Pregunta 8
	var tituloSelect8 = xmlDoc.getElementById("q8").getElementsByTagName("enunciado")[0].innerHTML;
	var opcionesSelect8 = [];
	var nOpciones8 = xmlDoc.getElementById("q8").getElementsByTagName('opcion').length;/*cuantas opciones tenemos*/
	for (i = 0; i < nOpciones8; i++) {
		opcionesSelect8[i] = xmlDoc.getElementById("q8").getElementsByTagName('opcion')[i].innerHTML;/*aray de opciones*/
	}
	ponerDatosSelect8Html(tituloSelect8,opcionesSelect8);
	respQ8 = xmlDoc.getElementById("q8").getElementsByTagName("respuesta")[0].innerHTML);

	/*_________________________________________________CHECKBOX_________________________________________________________*/

//Pregunta 6
	var tituloCheckbox6 = xmlDoc.getElementById("q6").getElementsByTagName("enunciado")[0].innerHTML;
	var opcionesCheckbox6 = [];
	var nOpciones6 = xmlDoc.getElementById("q6").getElementsByTagName('opcion').length;
	for (i = 0; i < nOpciones6; i++) {
		opcionesCheckbox6[i] = xmlDoc.getElementById("q6").getElementsByTagName('opcion')[i].innerHTML;
	}
	ponerDatosCheckbox6Html(tituloCheckbox6,opcionesCheckbox6);
	var nRespuestas6 = xmlDoc.getElementById("q6").getElementsByTagName("respuesta").length;
	for (i = 0; i < nRespuestas6; i++) {
		respuestasCheckbox6[i] = xmlDoc.getElementById("q6").getElementsByTagName("respuesta")[i].innerHTML;
	}

//****************************************************************************************************

/*------------------------------------------CORRECCIÓN enunciadoS------------------------------------*/

//Corrección de las enunciados tipo 'TEXT'

//Q1a
function corregirText1a() {

	var textoQ1a=formElement.elements[0].value;

	if (textoQ1a==respQ1a) {

		darRespuestaHtml("P1a: Correcto");
		nota +=0.25;

	} else {

		darRespuestaHtml("P1: Error");

	}
}

//Q1b
function corregirText1b() {

	var textoQ1b=formElement.elements[0].value;

	if (textoQ1b==respQ1a) {

		darRespuestaHtml("P1a: Correcto");
		nota +=0.25;

	} else {

		darRespuestaHtml("P1: Error");

	}
}

//Q1c
function corregirText1c() {

	var textoQ1c=formElement.elements[0].value;

	if (textoQ1c==respQ1c) {

		darRespuestaHtml("P1a: Correcto");
		nota +=0.25;

	} else {

		darRespuestaHtml("P1: Error");

	}
}

//Q1d
function corregirText1d() {

	var textoQ1d=formElement.elements[0].value;

	if (textoQ1d==respQ1a) {

		darRespuestaHtml("P1a: Correcto");
		nota +=0.25;

	} else {

		darRespuestaHtml("P1: Error");

	}
}

//Q4
function corregirText4() {

	var textoQ4=formElement.elements[0].value;

	if (textoQ4==respQ1a) {

		darRespuestaHtml("P1a: Correcto");
		nota +=1;

	} else {

		darRespuestaHtml("P1: Error");

	}
}

//Corrección de las enunciados tipo 'MULTIPLE'

//Q2
function corregirMultiple2() {

	var multiple2=formElement.elements[0].value;
}

//Q9
function corregirMultiple9() {

	var multiple=formElement.elements[0].value;
}

//Corrección de los enunciados tipo 'RADIO'

//Q3
function corregirRadio3() {
	var form = formElement;
	if (form.radio[i].checked == respQ3) {
			darRespuestaHtml("Correcto");
			nota +=1;
		}
	else {
			darRespuestaHtml("Error");
		}
	}

//Q7
	function corregirRadio7() {
		var form = formElement;
		if (form.radio[i].checked == respQ7) {
				darRespuestaHtml("Correcto");
				nota +=1;
			}
		else {
				darRespuestaHtml("Error");
			}
		}

//Q10
	function corregirRadio10() {
		var form = formElement;
		if (form.radio[i].checked == respQ10) {
				darRespuestaHtml("Correcto");
				nota +=1;
			}
		else {
				darRespuestaHtml("Error");
			}
		}

//Corrección de los enunciados de tipo 'SELECT'

//Q5
	function corregirSelect() {
		var sel = formElement.elements[1];
		if (sel.selectedIndex== respQ5) {
			darRespuestaHtml("Correcto");
			nota +=1;
		} else darRespuestaHtml("Error");
	}

//Q8
	function corregirSelect() {
		var sel = formElement.elements[1];
		if (sel.selectedIndex== respQ5) {
			darRespuestaHtml("Correcto");
			nota +=1;
		} else darRespuestaHtml("Error");
	}

//Corrección e los enunciados de tipo 'CHECKBOX'

//Q6
	function corregirCheckbox6() {
		var f = formElement;
		var escorrecta = [];
		var correctas = 0;
		var incorrectas = 0;
		var notaenunciado = 0;
		for (i = 0; i < form.cbox.length; i++) {
			if (form.cbox[i].checked) {
				escorrecta[i]=false;
				for (j = 0; j < respuestasCheckbox.length; j++) {
					if (i == respuestasCheckbox[j]) escorrecta[i] = true;
				}
				if (escorrecta[i]) {
					nota += (1.0 / respuestasCheckbox.length);
					notaenunciado += 0.5;
					correctas += 1;
				} else {
					nota -=1.0/respuestasCheckbox.length;
					notaenunciado -=0.5;
					incorrectas +=1;
				}
			}
		}

}

/****************************************************************************************************/

// Resultados

/*-------------------FUNCIONES INPUT----------------------*/

function ponerDatosText1aHtml(titulo) {

	document.getElementById("tituloInput").innerHTML = titulo;

}

function ponerDatosText1bHtml(titulo) {

	document.getElementById("tituloInput").innerHTML = titulo;

}

function ponerDatosText1cHtml(titulo) {

	document.getElementById("tituloInput").innerHTML = titulo;

}

function ponerDatosText1dHtml(titulo) {

	document.getElementById("tituloInput").innerHTML = titulo;

}

function ponerDatosText4Html(titulo) {

	document.getElementById("tituloInput").innerHTML = titulo;

}

function ponerDatosInput2Html(titulo) {

	document.getElementById("tituloInput2").innerHTML = titulo;

}


function ponerDatosInput3Html(titulo) {

	document.getElementById("tituloInput3").innerHTML = titulo;

}



/*-------------------FUNCIONES SELECT----------------------*/

function ponerDatosSelectHtml(t,opt) {
	document.getElementById("tituloSelect").innerHTML = t;
	var select = document.getElementsByTagName("select")[0];
	for (i = 0; i < opt.length; i++) {
		var option = document.createElement("option");
		option.text = opt[i];
		option.value=i+1;
		select.options.add(option);
	}
}
function ponerDatosSelect2Html(t,opt) {
	document.getElementById("tituloSelect2").innerHTML=t;
	var select = document.getElementsByTagName("select")[1];
	for (i = 0; i < opt.length; i++) {
		var option = document.createElement("option");
		option.text = opt[i];
		option.value=i+1;
		select.options.add(option);
	}
}

/*-------------------FUNCIONES CHECKBOX----------------------*/

function ponerDatosCheckboxHtml(t, opt) {


	var checkboxContainer = document.getElementById('divenunciado_04');
	document.getElementById('enunciado_04').innerHTML = t;


	for (i = 0; i < opt.length; i++) {

		var input = document.createElement("input");
		var label = document.createElement("label");

		label.innerHTML = opt[i];
		label.setAttribute("for", "cbox_" + i);
		input.type = "checkbox";
		input.name = "cbox";
		input.id = "cbox_" + i;
		;

		checkboxContainer.appendChild(input);
		checkboxContainer.appendChild(label);
		checkboxContainer.appendChild(document.createElement("br"));

	}
}


function ponerDatosCheckbox2Html(t, opt) {


	var checkbox2Container = document.getElementById('divenunciado_05');
	document.getElementById('enunciado_05').innerHTML = t;


	for (i = 0; i < opt.length; i++) {


		var input = document.createElement("input");
		var label = document.createElement("label");
		label.innerHTML = opt[i];
		label.setAttribute("for", "cbox1_" + i);
		input.type = "checkbox";
		input.name = "cbox1";
		input.id = "cbox1_" + i;
		;

		checkbox2Container.appendChild(input);
		checkbox2Container.appendChild(label);
		checkbox2Container.appendChild(document.createElement("br"));


	}
}


function ponerDatosCheckbox3Html(t, opt) {


	var checkbox3Container=document.getElementById('divenunciado_06');
	document.getElementById('enunciado_06').innerHTML = t;

	for (i = 0; i < opt.length; i++) {


		var input = document.createElement("input");
		var label = document.createElement("label");

		label.innerHTML = opt[i];
		label.setAttribute("for", "cbox2_" + i);
		input.type = "checkbox";
		input.name = "cbox2";
		input.id = "cbox2_" + i;
		;


		checkbox3Container.appendChild(input);
		checkbox3Container.appendChild(label);
		checkbox3Container.appendChild(document.createElement("br"));


	}


}


/*-------------------FUNCIONES RADIO----------------------*/


function ponerDatosRadioButtonHtml(titulo, opciones) {


	var RadioButtonContainer = document.getElementById("divenunciado_00");


	document.getElementById("enunciado_00").innerHTML = titulo;


	for (i = 0; i < opciones.length; i++) {


		var input = document.createElement("input");

		var label = document.createElement("label");


		label.innerHTML = opciones[i];


		label.setAttribute("for", "respuesta" + i);

		input.type = "radio";

		input.name = "radio";

		input.id = "respuesta" + i;
		;


		RadioButtonContainer.appendChild(input);
		RadioButtonContainer.appendChild(label);
		RadioButtonContainer.appendChild(document.createElement("br"));


	}

}


function ponerDatosRadioButton2Html(titulo, opciones) {


	var RadioButton2Container = document.getElementById("divenunciado_02");

	document.getElementById("enunciado_02").innerHTML = titulo;

	for (i = 0; i < opciones.length; i++) {

		var input = document.createElement("input");

		var label = document.createElement("label");

		label.innerHTML = opt[i];

		label.setAttribute("for", "respuesta" + i);

		input.type = "radio";

		input.name = "radio2";

		input.id = "respuesta" + i;
		;

		RadioButton2Container.appendChild(input);
		RadioButton2Container.appendChild(label);
		RadioButton2Container.appendChild(document.createElement("br"));


	}
}


//****************************************************************************************************


//Gestionar la presentación de las respuestas

function darRespuestaHtml(r) {

	var p = document.createElement("p");
	var node = document.createTextNode(r);
	p.appendChild(node);
	document.getElementById('resultadosDiv').appendChild(p);

}


function presentarNota() {

	darRespuestaHtml("Nota: " + nota + " puntos sobre 10");

}

function inicializar() {

	document.getElementById('resultadosDiv').innerHTML = ""; /*cambiar resultadosDiv !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
	nota = 0.0;

}
