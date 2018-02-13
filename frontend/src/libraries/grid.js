export const fill = () => {
  let cells = {}
  let available = {}
  const allAvailable = [1,2,3,4,5,6,7,8,9]
  for(let x = 0; x < 9; x++) {
    for(let y = 0; y < 9; y++) {
      available[x] = {
        ...available[x],
        [y]: [
          ...allAvailable
        ]
      }
    }
  }

  let cellNumber = 0
  while(cellNumber !== 81) {
    const x = cellNumber % 9
    const y = (cellNumber - x) / 9
    const availableForCell = available[x][y]
    if(availableForCell.length != 0) {
      let randomValue = random(availableForCell)
      if(!conflicts(cells, x, y, randomValue)){
        cells = {
          ...cells,
          [x]: {
            ...cells[x],
            [y]: randomValue
          }
        }
        cellNumber += 1
      }
      available[x][y] = availableForCell.filter(v => v !== randomValue)
    }else{
      available[x][y] = allAvailable
      cells = {
        ...cells,
        [x]: {
          ...cells[x],
          [y]: null
        }
      }
      cellNumber -= 1
    }
  }
  return cells
}

const conflicts = (cells, xN, yN, value) => {
  let result = false
  for(let x = 0; x < 9; x++) {
    for(let y = 0; y < 9; y++){
      if(x === xN || y === yN) {
        result |= (valueFor(cells, x, y) === value)
      }
    }
  }
  const xSection = xN - (xN % 3)
  const ySection = yN - (yN % 3)
  for(let xc = xSection; xc < xSection + 3; xc++) {
    for(let yc = ySection; yc < ySection + 3; yc++){
      result |= (valueFor(cells, xc, yc) === value)
    }
  }
  return result
}
const random = (list) => {
  return list[Math.floor(Math.random()*list.length)];
}

const valueFor = (cells, x, y) => {
  try {
    return cells[x][y]
  }catch(e){
    return null
  }
}

export const grind = (cells, probability = 0.6666) => {
  for(let x = 0; x < 9; x++) {
    for(let y = 0; y < 9; y++) {
      if(Math.random() > probability) {
        cells[x][y] = null
      }
    }
  }
  return cells
}
