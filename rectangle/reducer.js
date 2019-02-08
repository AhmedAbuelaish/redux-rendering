const initialState = {
    width: 100,
    height: 200,
    color: "#FF00FF"
};

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type, increment, newColor } = action
    // ACTION 1 - Increment height by 10
    if (type === "GROW_HEIGHT") {
        return {
            width: state.width,
            height: state.height + increment,
            color: state.color
        }
    } else if (type === "GROW_WIDTH") {
        // ACTION 2 - Increment width by 10
        return {
            width: state.width + increment,
            height: state.height,
            color: state.color
        }
    } else if (type === "CHANGE_COLOR") {
        // ACTION 3 - Change the color
        return {
            width: state.width,
            height: state.height,
            color: newColor
        }
    }

    return state;
}
