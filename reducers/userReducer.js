const initialState = {
  username: '',
  password: ''
}

export default (state= initialState, action) => {
  switch (action.type) {
    case 'updateUsername':
      return {...state, username: action.payload}
    case 'updatePassword':
      return {...state, password: action.payload}
    default:
      return state
  }
}
