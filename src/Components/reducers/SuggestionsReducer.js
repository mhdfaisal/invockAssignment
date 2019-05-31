const SuggestionsReducers = (state=[], action)=>{
    switch(action.type){
        case "FETCH_SUGGESTIONS": return [...action.payload]
        default : return state;
    }
}

export default SuggestionsReducers;