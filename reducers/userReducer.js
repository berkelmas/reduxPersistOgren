const initialState = {
  username: '',
}

export default (state= initialState, action) => {
  switch (action.type) {
    case 'updateUsername':
      return {...state, username: action.payload}
    default:
      return state
  }
}
