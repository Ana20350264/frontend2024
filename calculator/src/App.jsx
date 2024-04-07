import {useState} from 'react'
import { buttons } from './assets/buttons'
import { ButtonsRow } from './components/ButtonsRow'
import './App.css'

function App() {
  const [display, setDisplay] = useState({
      value:'0',
      hasPoint: false,
      operator: '',
      previousValue:'0'
  })



  const updateDisplay = (value) => {
    if(value === '.'){  
      if(display.hasPoint){
      return
    }
    
      setDisplay({
        ...display,
        value : limit(display.value + value),
        hasPoint : true 
      })
      return
    }

    if (display.value === '0') {
      setDisplay({
        ...display,
        value: limit(value)
      })
      return
      
    }
    setDisplay({
      ...display,
      value: limit(display.value + value)
    })
  }

  const clearDisplay = () => {
    setDisplay({
      ...display,
    value:'0',
    hasPoint: false
    })
  }

  const deleteLastCharacter = () => {
    if(display.value.length === 1) {
      setDisplay({
        ...display,
        value: "0"
      })
      return
    }
    setDisplay({
      ...display,
      value: display.value.slice(0, -1)
    })
  }
  const setOperator = (operator) => {
    setDisplay({
      ...display,
      operator: operator,
      previousValue: display.value,
      value:'0',
      hasPoint: false
    })
  }
  
   const calculate=() => {
    if (display.operator === '') {
      return
    }

    const operator = display.operator === 'x' ? '*' :
                     display.operator === '%' ? '/ 100 *' : display.operator

    let result = eval(display.previousValue + operator + display.value)
  
    result = result + ""
    setDisplay({
      ...display,
      value:limit(result ),
      operator: '',
      hasPoint: result.includes('.'),
      previousValue: '0'
    })
   }

   const limit = (string = '', length = 10) => {
    return string.slice(0, length)
   }

   const buttonsFunctions ={
    updateDisplay,
    clearDisplay,
    deleteLastCharacter,
    setOperator,
    calculate
   }

  return (
    <div>
        <h1>calculator</h1>
        <hr />
        <table className='center'>
          <tbody>
            <tr>
              <td className='text-end'colSpan={4}>
                <h2>{display.value}</h2>
              </td>
            </tr>
            {buttons.map((row,index) => 
                <ButtonsRow key={index} 
                buttons={row}
                functions={buttonsFunctions}/>
            )}
          </tbody>
        </table>
    </div>
     )
}
export default App