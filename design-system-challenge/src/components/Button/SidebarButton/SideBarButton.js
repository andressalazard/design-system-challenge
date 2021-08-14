import React from "react";
import styles from './SidebarButton.module.css';


const SidebarButton = (props) => {
  
  return(
    <button className={styles.content}>
      <span className={["material-icons",styles.icon].join(' ')}>{props.icon}</span>
      {props.value}
    </button>
  )
}

export default SidebarButton;