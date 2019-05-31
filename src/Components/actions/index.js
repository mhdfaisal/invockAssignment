import axios from "axios";

const selectedSuggestion = (suggestion)=>{
    return{
        type:"ADD_SUGGESTION",
        payload:{suggestion}
    }
}

const removeSelectedSuggestion = ()=>{
    return{
        type:"REMOVE_SUGGESTION",
        payload:{}
    }
}

const fetchSuggestions = ()=>{
    return async (dispatch, getState)=>{
        const suggestions = await axios.get("https://api.myjson.com/bins/rsob3");
        dispatch({type:"FETCH_SUGGESTIONS", payload:[...suggestions.data.suggestions]})
    }
}

export {selectedSuggestion, removeSelectedSuggestion,fetchSuggestions}