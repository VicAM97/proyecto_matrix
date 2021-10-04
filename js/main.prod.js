"use strict";

var _this = void 0;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

var element = document.querySelector("#canvas"); //variable del contexto contendrá el canvas y el tipo de animación que será en 2d.
//también soporta 3d

var ctx = element.getContext('2d'); //Le asignamos a las variables el ancho y alto total de la pantalla

var w = document.body.clientWidth;
var h = document.body.clientHeight; //las variables previas se las asignamos all canvas

element.width = w;
element.height = h; //position será un arreglo de trescientos elementos los cuales estarán unidos
//desde la posición 0. El split es para hacer separaciones en caracteres vacíos

var position = Array(300).join(0).split(""); //Función que inicializa el el efecto de la matrix en el canvas

var iniciaMatrix = function iniciaMatrix() {
  var _this2 = this;

  _newArrowCheck(this, _this);

  //Inicializamos la variable del contexto asignandole un relleno
  ctx.fillStyle = "rgba(0, 15, 2, 0.15)"; //Rellenamos un rectangulo en el punto x e y 0. Tmbn asignando los valores del ancho
  //y alto

  ctx.fillRect(0, 0, w, h); //Color de los caracteres

  ctx.fillStyle = "#4CAF50"; //ctx.fillStyle = "rgba(0, 150, 0, 0.6)"
  //tamaño de los caracteres

  ctx.font = "14pt";
  /*Se mapearán las posiciones del array. En la arroy function le llamaremos "y" porque 
  los elementos tendrán un efecto de descenso en el eje "Y". Tmbn asignamos un indice para que
  se pueda generar en el eje "X" */

  position.map(function (y, indice) {
    _newArrowCheck(this, _this2);

    /*La variable caracter tendrá una expresion de los tipos de caracteres que queremos
    generar, en este caso usaremos el codigo 1e5 y nos generará los ya mencionados.
    
    Random generará el caracter random entre el 0 y el 30*/
    var caracter = String.fromCharCode(1e4 + Math.random() * 30);
    /*La variable x la igualamos con el indice el cual será multiplicado por 15 y le 
    sumaremos 15, esto para que los caracteres tengan entre si 15 píxeles de distancia*/

    var x = indice * 15 + 15; //Creamos un nuevo canvas (lienzo) y pintamos los caracteres, defininimos tmbn
    //el eje x e y

    canvas.getContext('2d').fillText(caracter, x, y);
    /*Aqupi ocurre la magia para que los caracteres desciendan. Al parámetro "y" cada 100 elementos
    aleatorios para que cada bloque de las letras vaya cayendo de distinto tamaño. Asignamos 
    un límite al random que este será de tipo char code 1e5.
    Si se cumple la condición la posicion en el indice lo igualará a 0.
    De lo contrario, la posicion será igual al punto de origen (que es la parte mas alta)
    mas 15 pixeles, esto para que se muestre el efecto*/

    y > 100 + Math.random() * 1e5 ? position[indice] = 0 : position[indice] = y + 15; //console.log(caracter)
  }.bind(this));
}.bind(void 0); //Dejamos que se ejecute la función iniciaMatrix cada 70 milisegundos


setInterval(iniciaMatrix, 70);