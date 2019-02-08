const initialState = [
    {
        radius: 50,
        color: "#FF00FF"
    },
    {
        radius: 30,
        color: "#FF99AA"
    },
    {
        radius: 60,
        color: "#0000FF"
    },
    {
        radius: 10,
        color: "#000000"
    },
];

const reducer = (previousState = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type } = action;

    // ACTION: Add a random circle
    if (type === 'ADD_CIRCLE') {
        var newState = [
            ...previousState,
            {
                radius: Math.floor((Math.random() * 60) + 10),
                color: "#"+((1<<24)*Math.random()|00).toString(16)
            }
        ]
        return newState
    }


    return previousState;
}