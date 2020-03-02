/* 
  <canvas> solo soporta dos primitivas formas: Rectangulos y "paths"(lista de puntos conectados por lineas). Las otras formas deben ser creadas combinando uno o mas "paths"

  Stroke and Fill

  Los dibujos con "fill" son automaticamentes cerrados.
  Los dibujos con "stroke" no son automaticamente cerrados y por eso es necesario cerrarlos (porque si no quedara incompleto) con la funcion 
  ctx.closePath()

*/

// Obtenemos el contexto
const ctx = document.querySelector('#draw').getContext('2d')

/* Shapes (Formas) 

  Por suerte canvas nos provee 3 funciones:

  - fillRect(x, y, width, height): Dibuja el rectangulo (relleno)
  - strokeReact(x, y, width, height): Dibuja rectangulo (contorno)
  - clearRect(x, y, width, height): Limpia el area del triangulo especificado, haciendolo transparente.

  Estas tres funciones toman como parametro, "x" y "y" para indicar la posicion en el canvas (relativo al original) de la esquina arriba-izquierda del rectangulo. "width" y "height" que provee el tamaño del rectangulo
*/
export function drawShapes() {
  const ctx = document.querySelector('#draw').getContext('2d')

  // strokeStyle: cambia el color del contorno
  ctx.strokeStyle = 'rgb(200, 0, 0)'

  // strokeRect
  ctx.strokeRect(10, 10, 50, 50)

  // fillStyle: Color del relleno
  ctx.fillStyle = 'rgb(0, 0, 200)'

  ctx.fillRect(30, 30, 50, 50)

  
  ctx.clearRect(20, 0, 20, 100)

}

/* Path (caminos/forma)

  Los Paths son una lista de puntos, conectados por segmentos de lineas que pueden ser de diferentes formas, curvas o no, de diferente ancho y de diferente color. Un path, o un subpath, puede ser cerrado. Para hacer el uso de los path, tenemos que realizar pasos extras:

  1. Crear el path
  2. Cuando se use los comandos de dibujo, dibujar en el path
  3. Una vez el path ha sido creado, puedes renderizar el contorno o el relleno del path

  Funciones usadas para realizar estos pasos:

  - beginPath(): Crea nuevos path, una vez creado, los futuros comandos del dibujo estaran en el path usado para construir el path 

  · Metodos del path:

    - closePath(): añade una linea recta al path, iniciandose en el actual sub-path

    - stroke(): Dibuja la forma por el contorno de la linea
    - fill(): Dibuja un figura rellenando el area del contenido
*/

export function drawPath() {

  ctx.beginPath()
  ctx.moveTo(75, 50)
  ctx.lineTo(100, 75)
  ctx.lineTo(100, 25)
  ctx.lineTo(75, 50)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(95, 75)
  ctx.lineTo(120, 95)
  ctx.lineTo(120, 45)
  ctx.fill()
}

/* somewhere else (en algun otro lugar) */

/* Moving the pen

  moveTo(x, y): Mueve el lapiz a las coordenadas especificadas por x y y.

  Cuando el canvas es inicializado o "benginPath()" es llamado, tipicamente tu quieras usar la funcion "moveTo()" para colocar el punto de partida en otro lugar

  Se podría tambien utilizar "moveTo()" para dibujar caminos sin conexion

*/

export function drawMoveToFaceSmiling() {
  ctx.beginPath() // init

  ctx.arc(75, 75, 50, 0, Math.PI * 2, true) // outer circle
  ctx.moveTo(110, 75)

  ctx.arc(75, 75, 35, 0, Math.PI, false) // Mouth (clockwise)
  ctx.moveTo(65, 65)

  ctx.arc(60, 65, 5, 0, Math.PI * 2, true) // left eye
  ctx.moveTo(95, 65)

  ctx.arc(90, 65, 5, 0, Math.PI * 2, true) // Right eye

  ctx.stroke() // finish
}

/* Lines (Lineas)

  Para dibujar lineas rectas (straight), usar te metodo lineTo()

  - lineTo(x, y): Dibujar una linea desde la actual position del dibujo especificado por "x" y "y"

  El punto de inicio puede ser cambiado por el metodo moveTo()

  El siguiente ejemplo se dibuja 2 triangulos, uno relleno y otro en contorno:
*/

export function drawLine() {
  // Filled triangle
  ctx.beginPath()
  ctx.moveTo(25, 25)
  ctx.lineTo(105, 25)
  ctx.lineTo(25, 105)
  ctx.fill()

  // Stroked triangle
  ctx.beginPath()
  ctx.moveTo(125, 125)
  ctx.lineTo(125, 45)
  ctx.lineTo(45, 125)
  ctx.closePath()
  ctx.stroke()
}