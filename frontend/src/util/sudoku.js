import store from '../redux/store'
import { setValue } from '../redux/actions/values'

class Sudoku {

  static getXValues = (y) => {
    const xValues = []
    for(let x = 0; x < 9; x++) {
      let value = Sudoku.valueFor(x, y)
      if(value) {
        xValues.push(value)
      }
    }
    return xValues
  }

  static forEachCoordinate = (callback) => {
    for(let x = 0; x < 9; x++) {
      for(let y = 0; y < 9; y++) {
        callback(x, y)
      }
    }
  }

  static fill = () => {
    Sudoku.forEachCoordinate((x, y) => {
      const shouldFillField = Math.random() > 0.5
      if(shouldFillField) {
        const allowedValues = Sudoku.availableValuesForField(x, y)
        const randomValue = allowedValues[Math.floor(Math.random()*allowedValues.length)]
        store.dispatch(setValue(x, y, randomValue))
      }
    })
  }

  static availableValuesForField = (x, y) => {
    const possibleValues = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const { values } = store.getState()
    const usedValues = [
      ...Sudoku.getXValues(y),
      ...Sudoku.getYValues(x),
      ...Sudoku.getSectionValues(x, y)
    ]
    const allowedValues = possibleValues.filter(value => usedValues.indexOf(value) === -1)
    return allowedValues
  }

  static getSectionValues = (x, y) => {
    const sectionSize = 3
    const xSection = x - (x % sectionSize)
    const ySection = y - (y % sectionSize)
    const sectionValues = []
    for(let xc = xSection; xc < xSection + sectionSize; xc++) {
      for(let yc = ySection; yc < ySection + sectionSize; yc++){
        const value = Sudoku.valueFor(xc, yc)
        if(value != undefined){
          sectionValues.push(value)
        }
      }
    }
    return sectionValues
  }

  static getYValues = (x) => {
    const yValues = []
    for(let y = 0; y < 9; y++) {
      let value = Sudoku.valueFor(x, y)
      if(value) {
        yValues.push(value)
      }
    }
    return yValues
  }

  static valueFor(x, y) {
    try {
      const { values } = store.getState()
      return values[x][y]
    }catch(e){
      return undefined
    }
  }

  static hasConflict = (x, y) => {
    const values = store.getState()
    const value = Sudoku.valueFor(x, y)
    if(value === undefined) {
      return false
    }
    const xm = Sudoku.getXValues(y).filter(xv => xv === value).length
    const ym = Sudoku.getYValues(x).filter(yv => yv === value).length
    const sm = Sudoku.getSectionValues(x, y).filter(yv => yv === value).length
    return xm > 1 || ym > 1 || sm > 1
  }

}

export default Sudoku
