const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({type: null}); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 
const widthButton = document.getElementById('width')
const heightButton = document.getElementById('height')
const redButton = document.getElementById('red')
const blueButton = document.getElementById('blue')

widthButton.addEventListener('click', e => dispatch({ type: "GROW_WIDTH", increment: 10 }))
heightButton.addEventListener('click', e => dispatch({ type: "GROW_HEIGHT", increment: 10 }))
redButton.addEventListener('click', e => dispatch({ type: "CHANGE_COLOR", newColor: "red"}))
blueButton.addEventListener('click', e => dispatch({ type: "CHANGE_COLOR", newColor: "blue"}))