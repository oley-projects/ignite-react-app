const initState = {
    popular: [],
    upcoming: [],
    new: [],
    searched: [],
};

const gamesReducer = (state = initState, action) => {
    switch(action.type){
        case "FETCH_GAME": 
            return {...state}
        default:
            return {...state}
    }
};

export default gamesReducer;