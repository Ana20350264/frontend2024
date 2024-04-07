
import { Button } from "./Button"

export const ButtonsRow = ({buttons, functions}) => {
  return (
    <tr>
      {
        buttons.map(button => (
          
            <Button key={button.label} 
            {...button}
            functions={functions}/>
        ))
      }
    </tr>
  )
}

ButtonsRow.propTypes = {
buttons: Array, 
functions: Object
}

export default Button
