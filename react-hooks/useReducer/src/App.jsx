import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment": return { ...state, count: state.count + 1 }
    case "decrement": return { ...state, count: state.count - 1 }
    case "newUserInput": return { ...state, userInput: action.payload }
    case "toggleColor": return { ...state, color: !state.color }
    default: throw new Error()
  }
}

const ACTION = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  NEW_USER_INPUT: 'newUserInput',
  TOGGLE_COLOR: 'toggleColor'

}

function App() {

  const [state, dispatch] = useReducer(reducer, { count: 0, userInput: "", color: false })

  return (
    <main className="App" style={{ color: state.color ? '#FFF' : '#FFF952' }} >
      <input type="text" value={state.userInpt} onChange={(e) => dispatch({ type: "newUserInput", payload: e.target.value })} />
      <br /><br />
      <p className="count">{state.count}</p>
      <section>
        <button type="button" onClick={() => dispatch({ type: ACTION.DECREMENT })}>-</button>
        <button type="button" onClick={() => dispatch({ type: ACTION.INCREMENT })}>+</button>
        <button onClick={() => dispatch({ type: ACTION.TOGGLE_COLOR })}>Color</button>
      </section>
      <p>{state.userInput}</p>
    </ main>
  )
}

export default App;
