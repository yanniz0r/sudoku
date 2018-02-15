import React, { Component } from 'react'
import './cell.less'
import { connect } from 'react-redux'
import { setSelectedCell } from '../../redux/actions/selectedCell'
import Sudoku from '../../util/sudoku'
class Cell extends Component {

  select = () => {
    if(this.isDefinedByBaseGrid()) return
    const { x, y, selectCell } = this.props
    selectCell(x, y)
  }

  isSelected = () => {
    const { x, y, selectedCell } = this.props
    return x == selectedCell.x && y == selectedCell.y
  }

  getBaseValue = () => {
    const { x, y, baseGrid } = this.props
    const baseGridX = baseGrid[x]
    if(baseGridX){
      return baseGridX[y]
    }
  }

  isDefinedByBaseGrid = () => {
    return !!this.getBaseValue()
  }

  getValue = () => {
    const { x, y, values } = this.props
    const baseGridValue = this.getBaseValue()
    if(baseGridValue) {
      return baseGridValue
    }
    const valuesX = values[x]
    if(valuesX) {
      return valuesX[y]
    }
    return null
  }

  render = () => {
    const { x, y, selectedCell, values, baseGrid } = this.props
    const sudoku = new Sudoku(values, baseGrid)
    return <div className='cell-container' onClick={this.select}>
      <div className={`cell selectable ${this.isSelected() ? 'selected' : ''} ${sudoku.hasConflict(x, y) ? 'conflict' : ''} ${this.isDefinedByBaseGrid() ? 'base' : ''}`}>
        <div className='cell-content'>
          { sudoku.valueFor(x, y) }
        </div>
        <div className='cell-coords'>
          {`${x}/${y}`}
        </div>
      </div>
    </div>
  }

}

const mapStateToProps = (state) => {
  const { selectedCell, values, baseGrid } = state
  return {
    selectedCell,
    values,
    baseGrid
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectCell: (x, y) => {
      dispatch(setSelectedCell(x, y))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cell)
