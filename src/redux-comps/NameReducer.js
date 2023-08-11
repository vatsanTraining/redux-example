const initialState = {
    firstName:'',
    lastName:''
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case 'CHANGE_FIRST_NAME':
    return { ...state, firstName:payload}
    case 'CHANGE_LAST_NAME':
        return { ...state, lastName:payload }
    
  default:
    return state
  }
}
