import Polygon from './polygon'

export default class Asteroid extends Polygon {
  constructor(points, scaleFactor, x, y) {
    super(points)
    this.x = x
    this.y = y
    this.scale(scaleFactor)

    this.rotateAngle = 0.01 * (2 * Math.random() - 1)

    const radians = 2 * Math.PI * Math.random()
    const vel = Math.random() * 4 + 1
    this.velocity = {
      x: vel * Math.cos(radians),
      y: vel * Math.sin(radians)
    }

    // this.img = new Image()
    // this.img.src = 'http://vignette2.wikia.nocookie.net/pikmin/images/a/aa/Rubber-duck.jpg/revision/latest?cb=20150206003953'
    this.img = document.getElementById('testImg')
    // console.log(this.img)
  }

  update() {
    this.x += this.velocity.x
    this.y += this.velocity.y

    this.rotate(this.rotateAngle)
  }

  draw(ctx) {
    ctx.drawPolygon(this, this.x, this.y)
    // console.log(this.img)
    this.img.onload = function() {
      // console.log(this)
      ctx.drawImage(this, 0, 0)
    }
  }

}