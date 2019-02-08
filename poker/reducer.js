const initialState = [
    {
        value: "K",
        suit: "C"
    },
    {
        value: "K",
        suit: "D"
    }
];

const reducer = (previouState = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type, cardNum } = action;

    // ACTION - Change either card to a random new one (Try implementing one action that both buttons dispatch)
    if (type === "RANDOMIZE_CARD") {
        let cards = ['2','3','4','5','6','7','8','9','10','J','Q','K','A']
        let cardSuit = ['C','D','S','H']
        
        let newState = previouState.map((item,index)=>{
            if(index !== cardNum-1){
                return item
            } else {
                return {
                    value: cards[Math.floor(Math.random() * cards.length)],
                    suit: cardSuit[Math.floor(Math.random() * cardSuit.length)]
                }
            }
        })
        return newState
    }

    return previouState; 
}