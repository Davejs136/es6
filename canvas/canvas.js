const Canvas = (c => {

  const $ = new WeakMap();

  class Canvas {
    constructor(obj = {}) {

      // private attributes
      $.set(this, {
        el: obj.el,
        width: obj.width,
        height: obj.height,
        lineWidth: obj.lineWidth,
        strokeStyle: obj.strokeStyle,
      });

      // public attributes
      this.isDrawing = false;
      this.direction = true;
      this.lastX = 0;
      this.lastY = 0;
      this.hue = 0;
      // this.lineWidth = 1

      // Binding data
      this.draw = this.draw.bind(this);
    }

    // Getters and setter
    set lineWidth (width) {
      $.get(this).lineWidth = width
      this.init()
    }

    set strokeColor (color) {
      $.get(this).strokeStyle = color
      this.init()
    }

    init() {
      const canvas = document.querySelector($.get(this).el);
      const ctx = canvas.getContext('2d');

      // Assign measures
      canvas.width = $.get(this).width;
      canvas.height = $.get(this).height;

      // strokeStyle: Esta propiedad declara el color para las líneas de las figuras. Puede recibir cualquier valor CSS, incluidas funciones como rgb() y rgba() .
      ctx.strokeStyle = $.get(this).strokeStyle;

      // lineJoin: Esta propiedad determina la forma de la conexión entre líneas. Se pueden utilizar tres valores: round (la unión es redondeada), bevel (la unión es cortada) y miter (la unión es extendida hasta que ambas líneas alcanzan un punto en común).
      ctx.lineJoin = 'round';

      // lineCap - Esta propiedad determina la forma de la terminación de las líneas. Se pueden utilizar tres valores: butt (terminación normal), round (termina la línea con un semicírculo) y square (termina la línea con un cuadrado).
      ctx.lineCap = 'round';


      // lineWidth: Esta propiedad especifica el grosor de la línea. Por defecto el valor es 1.0.
      ctx.lineWidth = $.get(this).lineWidth;


      // Listeners
      canvas.addEventListener('mousedown', (e) => {
        this.isDrawing = true;
        [this.lastX, this.lastY] = [e.offsetX, e.offsetY];
        c('fn init', [this.lastX, this.lastY])
      });
    
    
      canvas.addEventListener('mousemove', this.draw);
      canvas.addEventListener('mouseup', () => this.isDrawing = false);
      canvas.addEventListener('mouseout', () => this.isDrawing = false);
    }

    draw (e) {
      if (!this.isDrawing) return; // stop the fn from running when they are not moused down

      const canvas = document.querySelector($.get(this).el);
      const ctx = canvas.getContext('2d');

      // ctx.strokeStyle = `hsl(${this.hue}, 100%, 50%)`;

      // beginPath(): Este método es requerido para comenzar un nuevo trazado.
      ctx.beginPath(); // init

      // moveTo(x, y): Este método mueve el lápiz virtual a una nueva posición para continuar el trazado desde ese punto.
      ctx.moveTo(this.lastX, this.lastY); // start from

      // lineTo(x, y): Este método agrega líneas rectas al trazado desde la posición actual del lápiz hasta el punto indicado por los atributos x e y .
      ctx.lineTo(e.offsetX, e.offsetY);

      // stroke(): Este método es usado para dibujar un trazado como una figura vacía (solo el contorno)
      ctx.stroke(); // finish

      // Asigna la ultima posicion del cursor
      [this.lastX, this.lastY] = [e.offsetX, e.offsetY];

      c('fn draw:', [this.lastX, this.lastY])

      this.hue++;

      // Reset 
      this.hue >= 360 ? this.hue = 0 : false;

      // if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
      //   this.direction = !this.direction;
      // }

      // if(direction) {
      //   ctx.lineWidth++;
      // } else {
      //   ctx.lineWidth--;
      // }
    }
  }

  
  return Canvas;

})(console.log);


export default Canvas;