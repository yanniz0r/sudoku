import React, { Component } from 'react'
import './cell.less'
import { connect } from 'react-redux'
import { setSelectedCell } from '../../redux/actions/selectedCell'

class Cell extends Component {

  select = () => {
    const { x, y, selectCell } = this.props
    selectCell(x, y)
  }

  render = () => {
    const { x, y, selectedCell } = this.props
    console.log(selectedCell)
    return <div className='cell-container' onClick={this.select}>
      <div className='cell'>
        <div className='cell-content'>
          Value
        </div>
        <div className='cell-coords'>
          {`${x}/${y}`}
        </div>
      </div>
    </div>
  }

}

const mapStateToProps = (state) => {
  const { selectedCell } = state
  return {
    selectedCell
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
