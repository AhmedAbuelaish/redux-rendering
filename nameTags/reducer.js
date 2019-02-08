const initialState = [
    "Kamilah",
    "Stuart"
];

const reducer = (previousState = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type, name } = action;
    console.log(name)
    // Add a Name Tag
    if (type === "ADD_NAME") {
        return [
            ...previousState,
            name
        ]
    }

    return previousState;
}