import React from "react";
import styles from './Button.module.css';


export default class Button extends React.Component {
  constructor({ props, details }) {
    super(props);
    this.state = {
      description: details.description,
      style: details.style,
      disableShadow: details.disableShadow,
      disabled: details.disabled,
      icon: details.icon,
    }
  }

  render() {
    let disabled = this.state.disabled;
    return (
      <div className={styles.button_container}>
          <code className={styles.button_description}>
            {
              this.setDisplayText()
            }
          </code>
          <button className={this.setBttnStyle(styles)} disabled={disabled}>
            {this.setIcon()}
          </button>
      </div>
    )
  }



  setDisplayText(){
    let description = this.state.description,
        disabled = this.state.disabled;
    if(description!==null && !disabled){
      return `< Button ${description}/>`
    }
    if(description!==null && disabled){
      return `<Button ${description} disabled/>`
    }
    if(description==null && disabled){
      return '<Button disabled/>'
    }
    return '<Button/>'
  }

  setIcon(){
    let icon = this.state.icon;
    if(icon!==null){
      let value = icon.value,
          orientation = icon.orientation;
      if(orientation==='left'){
        return(
          <div>
            <span className={"material-icons"}>
            {`${value}`}
            </span> Default
          </div>
        );
      }

      return(
        <div>
          Default
            <span className={"material-icons"}>
            {`${value}`}
            </span>
        </div>
      );

    }
    return 'Default';
  }

  setStandardBttn(classList){
    return classList.push(styles.standard_bttn);
  }

  setBttnSize(classList, styles){
    let size = this.state.style.size;
    if(size!==null){
      return classList.push(styles[size]);
    }
    return classList.push(styles.md_size);
  }

  setBttnColor(classList, styles){
    let color = this.state.style.color;
    if(color!==null){
      return classList.push(styles[color]);
    }
    return classList.push(styles.default_color);
  }

  setOutlineProp(classList, styles){
    let outline = this.state.style.outline;
    if(outline!==null){ return classList.push(styles[outline]) }
    return classList;
  }

  setTextOnlyProp(classList, styles){
    let textOnly = this.state.style.textOnly;
    if(textOnly){ return classList.push(styles.only_text_bttn)}
    return classList;
  }

  setDisabledProp(classList, styles){
    let disabled = this.state.disabled;
    if(disabled){
      return classList.push(styles.disabled_bttn);
    }
    return classList;
  }

  setDisableShadowProp(classList, styles){
    let disableShadow = this.state.disableShadow;
    if( disableShadow ){ return classList.push(styles.shadow_disabled) }
    return classList;
  }



  setBttnStyle(styles){
    let classNameList = [];
    this.setStandardBttn(classNameList);
    this.setBttnSize(classNameList,styles); 
    
    this.setDisabledProp(classNameList, styles);
    if(classNameList.length === 2){
      this.setOutlineProp(classNameList, styles);
      if(classNameList.length === 2){
        this.setBttnColor(classNameList, styles);
        this.setTextOnlyProp(classNameList, styles);
      }
    }

    this.setDisableShadowProp(classNameList, styles);
    


    return classNameList.join(' ');
  }




  setStyle(styles) {
    let disabled = this.state.disabled;
    if(disabled){
      return [styles.standard_bttn, styles.md_size, 
        styles.shadow_disabled, styles.disabled_bttn].join(' ');
    }

    let bttnStyle = this.state.style,
        disableShadow = this.state.disableShadow;

    if(bttnStyle!==null){
      let size = bttnStyle.size,
          textOnly = bttnStyle.textOnly;

      if(textOnly){
        return[styles.standard_bttn, styles[size], styles.only_text_bttn].join(' ');
      }

      let outline = bttnStyle.outline;
      if (outline!==null) {
        return[styles.standard_bttn, styles[size], styles[outline]].join(' ');
      }

      let color = bttnStyle.color;
      if(disableShadow){
        return [styles.standard_bttn, styles[color], styles[size], styles.shadow_disabled].join(' ');  
      }

      return [styles.standard_bttn, styles[color], styles[size]].join(' ');
    }
  }
}