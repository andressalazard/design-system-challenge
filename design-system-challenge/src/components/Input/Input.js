import React from 'react';
import { iconPosition, inputConstants, size_constants } from '../../files/consts';
import styles from './Input.module.css'


export default class Input extends React.Component {
  constructor({ props, details }){
    super(props);
    this.state = {
      type: details.type,
      size: details.size,
      helperText: details.helperText,
      icon: details.icon,
      value: (details.value!==null)? details.value : '',
      multiline: details.multiline
    }

    this.handleChange = this.handleChange.bind(this);

  }

  render(){
    return(
      <div className={styles.container}>
        {this.displayDescription()}
        <div className={styles.input_container}>
          {this.displayInput()}
          <label className = {styles.label}>Label</label>
        </div>
        {this.displayHelperText()}
      </div>
    )
  }

  displayDescription(){
    let type = this.state.type,
        size = this.state.size,
        icon = this.state.icon,
        description = '';

        if(size !== undefined && size !== null){ description+=size}

        if(type !== undefined && type !== null){ description+=' '+type}

        if(icon !== undefined && icon !== null){
          this.isIconAtStart()? description+=' startIcon' : description+=' endIcon'
        }



    return(<code className={styles.description}>{`<Input ${description}/>`}</code>)
  }

  displayInput(){
    let iconElement = null,
        inputElement = null,
        icon = this.state.icon;

    iconElement = this.displayInputIcon();
    inputElement = this.displayDisabledInput();
    
    if(icon!==undefined && icon!==null){
      return(
        <div className={styles.input_field}>
        {iconElement}
        {inputElement}
        </div>
      )
    }

    return(
      <div>
        {inputElement}
      </div>
    )


  }


  displayDisabledInput(){
    let type = this.state.type;
    if(type===inputConstants.MULTILINE){
      let row = this.state.multiline.rows;
      return (
        <textarea className={this.setStyle(styles)}
          value={this.state.value}
          onChange={this.handleChange} 
          rows= {row}
          placeholder = 'Placeholder'
          />
      )
    }

    if(type===inputConstants.DISABLED){
      return (
        <input type='text' placeholder='Placeholder' 
          className={this.setStyle(styles)}
          disabled = {'disabled'}
          />)
    }

    return (
      <input type='text' placeholder='Placeholder' 
        value = {this.state.value}
        onChange = {this.handleChange}
        className={this.setStyle(styles)}/>)
  }

  setStyle(styles){
    let classesList = [styles.standard_input];
    this.setSize(classesList);
    this.setType(classesList);
    return classesList.join(' ');
  }

  setSize(classesList){
    let size = this.state.size,
        inputSize = null;

    switch(size){
      case size_constants.SM_SIZE:
        inputSize = styles.sm_size;
        break;
      case size_constants.MD_SIZE:
        inputSize = styles.md_size;
        break;  
      case size_constants.LG_SIZE:
        inputSize = styles.lg_size;
        break;
      case size_constants.XL_SIZE:
        inputSize = styles.xl_size;
        break;
      default:
        break;
    }

    return classesList.push(inputSize);
  }

  setType(classesList){
    let type = this.state.type,
        inputType = null;

    if(type!==null){
      switch(type){
        case inputConstants.ERROR:
          inputType = styles.error_type;
          break;
        case inputConstants.DISABLED:
          inputType = styles.disabled_type;
          break;
        default: 
          break;
      }

      return classesList.push(inputType);
    }

    return classesList;
  }

  displayHelperText(){
    let helperText = this.state.helperText;
    if(helperText!==undefined && helperText!==null){
      let type = this.state.type;
      if(type === inputConstants.ERROR){
        return (<div className={[styles.helper_text,
          styles.helper_text_error].join(' ')}>
          {helperText}
        </div>)  
      }
      return (<div className={styles.helper_text}>
        {helperText}
      </div>)
    }
    return ;
  }

  displayInputIcon(){
    let icon = this.state.icon;
    let classList = ["material-icons"];
    
    if(icon!==undefined && icon!==null){

      this.isIconAtStart() ?
      classList.push(styles.icon_start) : 
      classList.push(styles.icon_end);

      return(
        <span className={classList.join(' ')}>
        {icon.key}</span>)
    }
    return ;
  }

  isIconAtStart(){
    let icon = this.state.icon;
    if (icon.position === iconPosition.START){
      return true;
    }
    return false;
  }

  handleChange(event){
    this.setState({value: event.target.value});
  }

  


}
