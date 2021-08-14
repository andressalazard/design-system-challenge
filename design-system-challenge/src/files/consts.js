export const size_constants = {
  SM_SIZE : 'sm_size',
  MD_SIZE : 'md_size',
  LG_SIZE : 'lg_size',
  XL_SIZE : 'xl_size'
}

export const color_constants = {
  DEFAULT_COLOR : 'default_color',
  PRIMARY_COLOR : 'primary_color',
  SECONDARY_COLOR : 'secondary_color',
  DANGER_COLOR : 'danger_color'
}

export const outline_constants = {
  DEFAULT_OUTLINE : 'default_outline',
  PRIMARY_OUTLINE : 'primary_outline',
  SECONDARY_OUTLINE : 'secondary_outline',
  DANGER_OUTLINE : 'danger_outline'
}

export const buttonList = {
  button01: {
    description: null,
    disableShadow: false,
    disabled: false,
    style: {
      size: size_constants.MD_SIZE,
      color: color_constants.DEFAULT_COLOR,
      outline: null,
      textOnly: false,
    },
    icon: null
  },
  button02: {
    description:'variant= "outline"',
    disableShadow: false,
    disabled: false,
    style: {
      size: size_constants.MD_SIZE,
      color: color_constants.PRIMARY_COLOR,
      outline: outline_constants.DANGER_OUTLINE,
      textOnly: false,
    },
    icon: null
  },
  button03: {
    description:'variant= "text"',
    disableShadow: false,
    disabled: false,
    style: {
      size: size_constants.MD_SIZE,
      color: color_constants.SECONDARY_COLOR,
      outline: null,
      textOnly: true,
    },
    icon: null,
  },
  button04: {
    description:'disableShadow',
    disableShadow: true,
    disabled: false,
    style: {
      size: size_constants.MD_SIZE,
      color: color_constants.DANGER_COLOR,
      outline: null,
      textOnly: false,
    },
    icon: null,
  },
  button05: {
    description: null,
    disableShadow: false,
    disabled: true,
    style: {
      size: size_constants.MD_SIZE,
      color: color_constants.PRIMARY_COLOR,
      outline: null,
      textOnly: false,
    },
    icon: null,
  },
  button06: {
    description: 'variant= "text"',
    disableShadow: true,
    disabled: true,
    style: {
      size: size_constants.MD_SIZE,
      color: color_constants.DEFAULT_COLOR,
      outline: null,
      textOnly: true,
    },
    icon: null,
  },
  button07: {
    description: 'startIcon',
    disabled: false,
    disableShadow: false,
    style: {
      size: size_constants.MD_SIZE,
      color: color_constants.PRIMARY_COLOR,
      outline: null,
      textOnly: false,
    },
    icon: {
      value: 'local_grocery_store',
      orientation: 'left'
    }
  },
  button08: {
    description: 'endIcon',
    disableShadow: false,
    disabled: false,
    style: {
      size: size_constants.MD_SIZE,
      color: color_constants.PRIMARY_COLOR,
      outline: null,
      textOnly: false,
    },
    icon: {
      value: 'local_grocery_store',
      orientation: 'right'
    },
  },
  button09: {
    description:'color= "default"',
    disableShadow: true,
    disabled: false,
    style: {
      size: size_constants.MD_SIZE,
      color: color_constants.DEFAULT_COLOR,
      outline: null,
      textOnly: false,
    },
    icon: null
  },

  button10: {
    description:'color= "primary"',
    disableShadow: true,
    disabled: false,
    style: {
      size: size_constants.MD_SIZE,
      color: color_constants.PRIMARY_COLOR,
      outline: null,
      textOnly: false,
    },
    icon: null
  },

  button11: {
    description:'color= "secondary"',
    disableShadow: true,
    disabled: false,
    style: {
      size: size_constants.MD_SIZE,
      color: color_constants.SECONDARY_COLOR,
      outline: null,
      textOnly: false,
    },
    icon: null
  },
  button12: {
    description:'color= "danger"',
    disableShadow: false,
    disabled: false,
    style: {
      size: size_constants.MD_SIZE,
      color: color_constants.DANGER_COLOR,
      outline: null,
      textOnly: false,
    },
    icon: null
  },
  button13: {
    description: 'size="sm"',
    disableShadow: false,
    disabled: false,
    style: {
      size: size_constants.SM_SIZE,
      color: color_constants.DEFAULT_COLOR,
      outline: outline_constants.DEFAULT_OUTLINE,
      textOnly: false,
    },
    icon: null,
  },
  button14: {
    description: 'size="md"',
    disableShadow: false,
    disabled: false,
    style: {
      size: size_constants.MD_SIZE,
      color: color_constants.DEFAULT_COLOR,
      outline: outline_constants.PRIMARY_OUTLINE,
      textOnly: false,
    },
    icon: null,
  },
  button15: {
    description: 'size="lg"',
    disableShadow: false,
    disabled: false,
    style: {
      size: size_constants.LG_SIZE,
      color: color_constants.DEFAULT_COLOR,
      outline: outline_constants.SECONDARY_OUTLINE,
      textOnly: false,
    },
    icon: null,
  }
}

export const inputConstants = {
  ERROR: 'error',
  DISABLED: 'disabled',
  MULTILINE: 'multiline'
}

export const iconPosition = {
  START : 'start',
  END : 'end'
}

export const sideBarIcons = {
  HOME : 'home',
  BUTTON : 'smart_button',
  INPUT : 'edit'
}

export const inputsList = {
  input01:{
    type: null,
    size: size_constants.SM_SIZE,
    helperText: null,
    icon: null,
    value: null,
    multiline: null
  },

  input02: {
    type: inputConstants.ERROR,
    size: size_constants.SM_SIZE,
    helperText: null,
    icon: null,
    value: null,
    multiline: null
  },

  input03: {
    type: inputConstants.DISABLED,
    size: size_constants.SM_SIZE,
    helperText: null,
    icon: null,
    value: null,
    multiline: null
  },

  input04: {
    type: null,
    size: size_constants.MD_SIZE,
    helperText: 'Some interesting text',
    icon: null,
    value: null,
    multiline: null
  },

  input05: {
    type: inputConstants.ERROR,
    size: size_constants.MD_SIZE,
    helperText: 'Some interesting text',
    icon: null,
    value: null,
    multiline: null
  },

  input06:{
    type: inputConstants.DISABLED,
    size: size_constants.MD_SIZE,
    helperText: 'Some interesting text',
    icon: null,
    value: null,
    multiline: null
  },

  input07:{
    type: null,
    size: size_constants.LG_SIZE,
    helperText: null,
    icon: {
      position: iconPosition.START,
      key: 'phone'
    },
    value: null,
    multiline: null
  },

  input08: {
    type: inputConstants.DISABLED,
    size: size_constants.LG_SIZE,
    helperText: null,
    icon: {
      position: 'end',
      key: 'lock'
    },
    value: 'Text',
    multiline: null
  },

  input09: {
    type: inputConstants.MULTILINE,
    size: size_constants.LG_SIZE,
    helperText: null,
    icon:null,
    value: null,
    multiline: {
      rows: 2
    }
  },

  input10: {
    type: null,
    size: size_constants.XL_SIZE,
    helperText: null,
    icon: null,
    value: 'Text',
    multiline:null
  },
}