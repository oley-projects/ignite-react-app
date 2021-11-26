const initState = {
    popular: [],
    upcoming: [],
    new: [],
    searched: [],
};

const gamesReducer = (state = initState, action) => {
    switch(action.type){
        case "FETCH_GAME": 
            return {...state, popular: action.payload.popular}
        default:
            return {...state}
    }
};

export default gamesReducer;