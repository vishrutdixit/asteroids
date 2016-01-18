export default class Polygon {
  constructor(points) {
    this.points = points.slice()
  }

  rotate(theta) {
    const cos = Math.cos(theta)
    const sin = Math.sin(theta)

    for (let i = 0, len = this.points.length; i < len; i += 2) {
      const [x, y] = this.points.slice(i, i+2)

      this.points[i] = cos*x - sin*y
      this.points[i+1] = sin*x + cos*y
    }
  }

  scale(c) {
    for (let i = 0, len = this.points.length; i < len; i++) {
      this.points[i] *= c
    }

  }

  hasPoint(offsetX, offsetY, x, y) {

  }

}