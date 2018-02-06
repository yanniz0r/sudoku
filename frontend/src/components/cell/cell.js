import React, { Component } from 'react'
import './cell.less'
import { connect } from 'react-redux'
import { setSelectedCell } from '../../redux/actions/selectedCell'
import Sudoku from '../../util/sudoku'
class Cell extends Component {

  select = () => {
    const { x, y, selectCell } = this.props
    selectCell(x, y)
  }

  isSelected = () => {
    const { x, y, selectedCell } = this.props
    return x == selectedCell.x && y == selectedCell.y
  }

  getValue = () => {
    const { x, y, values } = this.props
    try {
      return values[x][y]
    } catch(e) {
      return null
    }
  }

  render = () => {
    const { x, y, selectedCell } = this.props
    return <div className='cell-container' onClick={this.select}>
      <div className={`cell selectable ${this.isSelected() ? 'selected' : ''} ${Sudoku.hasConflict(x, y) ? 'conflict' : ''}`}>
        <div className='cell-content'>
          { this.getValue() }
        </div>
        <div className='cell-coords'>
          {`${x}/${y}`}
        </div>
      </div>
    </div>
  }

}

const mapStateToProps = (state) => {
  const { selectedCell, values } = state
  return {
    selectedCell,
    values
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
