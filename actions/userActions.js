export const updateUsername = (username) => {
  return (dispatch) => {
      dispatch({
          type: 'updateUsername',
          payload: username
      })
  }
}
