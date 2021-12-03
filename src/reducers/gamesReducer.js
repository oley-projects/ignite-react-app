const initState = {
    popular: [],
    upcoming: [],
    newGames: [],
    searched: [],
};

const gamesReducer = (state = initState, action) => {
    switch(action.type){
        case "FETCH_GAME": 
            return {
                ...state, 
                popular: action.payload.popular,
                upcoming: action.payload.upcoming,
                newGames: action.payload.newGames,
            }
        case "FETCH_SEARCH":
            return {
                ...state,
                searched: action.payload.searched,
            }
        case "CLEAR_SEARCH":
            return {
                ...state,
                searched: [],
            }
        default:
            return {...state}
    }
};

export default gamesReducer;