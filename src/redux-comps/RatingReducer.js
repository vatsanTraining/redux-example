const initialState = {
    "tour":"",
    "reviwer":"",
    "rating":0

}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case 'CHANGE_RATING':
    return { ...state, rating:payload }

  default:
    return state
  }
}
