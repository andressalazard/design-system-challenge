import { buttonList } from "../../../files/consts";
import Button from "../../Button/Button";
import styles from './ButtonsPage.module.css';

const ButtonsPage  = () => {
  return (
    <div className={styles.container}>
      <div className={styles.page_heading}>
        <h1>Buttons</h1>
      </div>
      {displayButtons(buttonList)}
    </div>
  )
}

const displayButtons = (buttonJSON) => {
  let buttonArray = [];
  let display = [], row = [];
  for(let i in buttonJSON){ buttonArray.push(buttonJSON[i]) }

  for(let i = 0; i < buttonArray.length; i++){
    row.push(<Button details = {buttonArray[i]} key = {`bttn_${i}`}/>)
    if(row.length === 4 || i === buttonArray.length - 1){
      display.push(
        <div className={styles.display_row}>
          {row}
        </div>
      );
      row = [];
    }
  }
  return (
   <div className={styles.page_content}>
    {display}
   </div>
  );
}



export default ButtonsPage;