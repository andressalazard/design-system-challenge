import { inputsList } from "../../../files/consts";
import Input from "../../Input/Input"
import styles from './InputsPage.module.css'

const InputsPage = () => {
  return(
    <div  >
      <h1>Inputs</h1>

      <form>
        {displayRows()}
      </form>
    </div>
  )
}

function displayRows(){
  let display = [], inputsArray = [];
  for (let i in inputsList){
    inputsArray.push(inputsList[i])
  };

  for(let i = 0;  i < inputsArray.length; i++ ){
    display.push(<Input details={inputsArray[i]} key={`input_${i}`}/>)
  }

  return(
    <div className = {styles.inputs_row}>
      {display}
    </div>
  )
} 

export default InputsPage;