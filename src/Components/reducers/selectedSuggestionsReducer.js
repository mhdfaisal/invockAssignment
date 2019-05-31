const selectedSuggestionReducer =  (state={}, action)=>{
    switch(action.type){
        case "REMOVE_SUGGESTION": return  action.payload;
        case "ADD_SUGGESTION" : return {...action.payload.suggestion};
        default : return state;
    }
}

export default selectedSuggestionReducer;