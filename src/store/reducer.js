const initialState = {
  counter: 0,
  results: []
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case 'INCREMENT':
      return {
        ...state,
        counter: state.counter + 1
      }
    case 'DECREMENT':
      return {
        ...state,
        counter: state.counter - 1
      }
    case 'ADD':
      return {
        ...state,
        counter: state.counter + action.payload
      }
    case 'SUBTRACT':
      return {
        ...state,
        counter: state.counter - action.payload
      }
    case 'STORE_RESULT':
      return {
        ...state,
        //uses concat in order to update state immutably
        results: state.results.concat({id: new Date(), value: state.counter})
      }
  }
  return state;
}

export default reducer;
