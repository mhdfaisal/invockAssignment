import selectedSuggestionReducer from './selectedSuggestionsReducer';
import SuggestionsReducer from './SuggestionsReducer';
import {combineReducers} from 'redux';

export default combineReducers({
    selectedSuggestion: selectedSuggestionReducer,
    suggestions:SuggestionsReducer
})