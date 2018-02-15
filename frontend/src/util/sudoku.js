import _ from 'lodash'

class Sudoku {

  constructor(values, baseGrid = {}) {
    this.grid = _.merge({}, baseGrid, values)
  }

  getXValues = (y) => {
    const xValues = []
    for(let x = 0; x < 9; x++) {
      let value = this.valueFor(x, y)
      if(value) {
        xValues.push(value)
      }
    }
    return xValues
  }

  forEachCoordinate = (callback) => {
    for(let x = 0; x < 9; x++) {
      for(let y = 0; y < 9; y++) {
        callback(x, y)
      }
    }
  }

  getSectionValues = (x, y) => {
    const sectionSize = 3
    const xSection = x - (x % sectionSize)
    const ySection = y - (y % sectionSize)
    const sectionValues = []
    for(let xc = xSection; xc < xSection + sectionSize; xc++) {
      for(let yc = ySection; yc < ySection + sectionSize; yc++){
        const value = this.valueFor(xc, yc)
        if(value != undefined){
          sectionValues.push(value)
        }
      }
    }
    return sectionValues
  }

  getYValues = (x) => {
    const yValues = []
    for(let y = 0; y < 9; y++) {
      let value = this.valueFor(x, y)
      if(value) {
        yValues.push(value)
      }
    }
    return yValues
  }

  valueFor(x, y) {
    const xGrid = this.grid[x]
    return xGrid[y]
  }

  hasConflict = (x, y) => {
    const value = this.valueFor(x, y)
    if(value === undefined) {
      return false
    }
    const xm = this.getXValues(y).filter(xv => xv === value).length
    const ym = this.getYValues(x).filter(yv => yv === value).length
    const sm = this.getSectionValues(x, y).filter(yv => yv === value).length
    return xm > 1 || ym > 1 || sm > 1
  }

}

export default Sudoku
