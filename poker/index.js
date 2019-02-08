const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({ type: null }); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 
const cardButtons = document.getElementsByClassName('cardButton')
for (let i = 0; i< cardButtons.length; i++) {
    cardButtons[i].addEventListener('click', e => dispatch({ type: "RANDOMIZE_CARD" , cardNum: parseInt(cardButtons[i].value, 10)}))
}