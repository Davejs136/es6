import Canvas from './canvas.js'
import { drawShapes, drawPath, drawMoveToFaceSmiling, drawLine } from './learn.js'

const canvas = new Canvas({
  el: '#draw',
  width: 400,
  height: 200,
  lineWidth: 50,
  strokeStyle: 'red'
})

canvas.init()

const lineWidth = document.querySelector('#line-width')

lineWidth.addEventListener('change', e => {
  const value = e.target.value
  
  canvas.lineWidth = Number(value)
})


// Assign color
const inputColor = document.querySelector('#strokeColor')

inputColor.addEventListener('change', e => {
  const value = e.target.value
  canvas.strokeColor = value
})


// Learning

// drawShapes()
// drawPath()
// drawMoveToFaceSmiling()
// drawLine()