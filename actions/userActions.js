export const updateUsername = (username) => {
  return (dispatch) => {
      dispatch({
          type: 'updateUsername',
          payload: username
      })
  }
}

export const updatePassword = password => {
  return dispatch => {
    dispatch({
      type: 'updatePassword',
      payload: password
    })
  }
}
