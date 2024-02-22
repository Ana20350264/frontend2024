import { useState } from 'react'
import './App.css'

const numericButtonClasses = 'btn btn-info w-100'
const operationButtonClases = 'btn btn-warning w-100'
const specialButtonClasses = 'btn btn-danger w-100'

function App() {
  const [display, setDisplay] = useState({
    value: '0',
    hasPoint: false
  })

  const updateDisplay = (value) => {
    if (value === '.') {
    if (display.hasPoint) {
      return
    }
      setDisplay({
        ...display,
        value: display.value +value,
        hasPoint: true
      })
      return
    }
    if (display.value === '0') {
      setDisplay({
        ...display,
        value
      })
      return
    }
    setDisplay({
      ...display,
      value: display.value +value
    })
  }

  const clearDisplay = () => {
    setDisplay({
      ...display,
      value: '0',
      hasPoint: false
    })
  }
  
  return (
      <div>
        <h1>Calculator</h1>
        <hr />
        <table className='center'>
          <tbody>
            <tr>
              <td className='text-end' colSpan={4}>
                <h2>{display.value}</h2>
              </td>
            </tr>
            <tr>
              <td>
              <button
                type='button'
                className={specialButtonClasses}
                onClick={clearDisplay}
                >
                  C
                </button>                
                </td>
              <td>
              <button
                type='button'
                className={specialButtonClasses}
                >
                  {'<'}
                </button>                </td>
              <td>
              <button
                type='button'
                className={operationButtonClases}
                >
                  %
                </button>                </td>
              <td>
              <button
                type='button'
                className={operationButtonClases}
                >
                  /
                </button>                </td>
            </tr>
            <tr>
              <td>
              <button
                type='button'
                className={numericButtonClasses}
                onClick={() => updateDisplay('7')}
                >
                  7
                </button>              
                </td>
              <td>
              <button
                type='button'
                className={numericButtonClasses}
                onClick={() => updateDisplay('8')}

                >
                  8
                </button>              </td>
              <td>
              <button
                type='button'
                className={numericButtonClasses}
                onClick={() => updateDisplay('9')}

                >
                  9
                </button>              </td>
              <td>
              <button
                type='button'
                className={operationButtonClases}
                >
                  x
                </button>                </td>
            </tr>
            <tr>
              <td>
              <button
                type='button'
                className={numericButtonClasses}
                onClick={() => updateDisplay('4')}
                >
                  4
                </button>              </td>
              <td>
              <button
                type='button'
                className={numericButtonClasses}
                onClick={() => updateDisplay('5')}
                >
                  5
                </button>              </td>
              <td>
              <button
                type='button'
                className={numericButtonClasses}
                onClick={() => updateDisplay('6')}
                >
                  6
                </button>              </td>
              <td>
              <button
                type='button'
                className={operationButtonClases}
                >
                  -
                </button>                </td>
            </tr>
            <tr>
              <td>
              <button
                type='button'
                className={numericButtonClasses}
                onClick={() => updateDisplay('1')}
                >
                  1
                </button>              </td>
              <td>
              <button
                type='button'
                className={numericButtonClasses}
                onClick={() => updateDisplay('2')}
                >
                  2
                </button>              </td>
              <td>
              <button
                type='button'
                className={numericButtonClasses}
                onClick={() => updateDisplay('3')}
                >
                  3
                </button>              
                </td>
              <td>
              <button
                type='button'
                className={operationButtonClases}
                >
                  +
                </button>                
                </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <button
                type='button'
                className={numericButtonClasses}
                onClick={() => updateDisplay('0')}
                >
                  0
                </button>
              </td>
              <td>
              <button
                type='button'
                className={numericButtonClasses}
                onClick={() => updateDisplay('.')}
                >
                  .
                </button>              </td>
              <td>
              <button
                type='button'
                className={specialButtonClasses}
                >
                  =
                </button>                </td>
            </tr>
          </tbody>
        </table>
      </div>

  )
}

export default App
