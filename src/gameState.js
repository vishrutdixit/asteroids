import State from './state'
import Asteroid from './asteroid'

const Points = {
  ASTEROIDS: [
    [-4,-2,-2,-4,0,-2,2,-4,4,-2,3,0,4,2,1,4,-2,4,-4,2,-4,-2],
    [-3,0,-4,-2,-2,-4,0,-3,2,-4,4,-2,2,-1,4,1,2,4,-1,3,-2,4,-4,2,-3,0],
    [-2,0,-4,-1,-1,-4,2,-4,4,-1,4,1,2,4,0,4,0,1,-2,4,-4,1,-2,0],
    [-1,-2,-2,-4,1,-4,4,-2,4,-1,1,0,4,2,2,4,1,3,-2,4,-4,1,-4,-2,-1,-2],
    [-4,-2,-2,-4,2,-4,4,-2,4,2,2,4,-2,4,-4,2,-4,-2]
  ]
}

export default class GameState extends State {
  constructor() {
    super()
    // this.poly = new Polygon([-1, -1, -1, 1, 1, 1, 1, -1, -1, -1])
    // this.poly.scale(50)
    this.asteroids = [];
    for(var i = 0; i < 10; i++) {
      const n = Math.round(Math.random() * (Points.ASTEROIDS.length - 1));
      const x = Math.round(Math.random() * 640)
      const y = Math.round(Math.random() * 480)
      var astr = new Asteroid(Points.ASTEROIDS[n], 10, x, y)

      this.asteroids.push(astr);
    }

  }

  update() {
    // this.astr.rotate(0.02)
    for(var i = 0; i < this.asteroids.length; i++) {
      this.asteroids[i].update()
    }
  }

  render(ctx) {
    ctx.clearAll()
    // ctx.drawPolygon(this.poly, 100, 100)
    for(var i = 0; i < this.asteroids.length; i++) {
      this.asteroids[i].draw(ctx)
    }
  }

}