import React from 'react';
import Autosuggest from 'react-autosuggest';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import {connect} from 'react-redux';
import {fetchSuggestions, selectedSuggestion} from '../actions/index';

const styles = (theme => ({
  root: {
    height: 250,
    flexGrow: 1,
  },
  container: {
    position: 'relative'
  },
  suggestionsContainerOpen: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing(1),
    left: 0,
    right: 0,
    padding:"5%"
  },
  suggestion: {
    display: 'block',
    padding:"3%",
    cursor:"pointer"
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },
  divider: {
    height: theme.spacing(2),
  },
}));

class FormField extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      value: '',
      suggestions: []
    };
  }

  componentDidMount(){
    this.props.fetchSuggestions();
  }
  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

   getSuggestions = value => {
    if(this.props.suggestions){
      const inputValue = value.trim().toLowerCase();
      const inputLength = inputValue.length;
    
      return inputLength === 0 ? [] : this.props.suggestions.filter(lang =>
        lang.label.toLowerCase().slice(0, inputLength) === inputValue
      );
    }
  };

   getSuggestionValue = suggestion => suggestion.label;


  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  renderSuggestion = suggestion => (
    <div>
      <div style={{fontWeight:"bold", marginBottom:"2%"}}>{suggestion.label}</div> 
      <div style={{marginBottom:"2%"}}>({suggestion.subTitle})</div>
      <div>{suggestion.addess}</div>
    </div>
    
  );

  onSuggestionSelected = (event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method })=>{
    console.log(suggestion)
    this.props.selectedSuggestion(suggestion)
    this.props.goToStep(3);
  }

  renderInputComponent = inputProps => (
    <TextField
      fullWidth
      InputProps={{...inputProps}}
  />
  );

   renderSuggestionsContainer({ containerProps , children, query }) {
    return (
      <Paper {...containerProps} square>
            {children}
      </Paper>
    );
   }


  render() {
    const { value, suggestions } = this.state;
    const {classes} = this.props;
    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Enter Party Name',
      value,
      onChange: this.onChange
    };

    // Finally, render it!
      return this.props.suggestions.length > 0 ?(
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        inputProps={inputProps}
        onSuggestionSelected={this.onSuggestionSelected}
        renderInputComponent={this.renderInputComponent}
        renderSuggestionsContainer={this.renderSuggestionsContainer}
        theme={{
          container: classes.container,
          suggestionsContainerOpen: classes.suggestionsContainerOpen,
          suggestionsList: classes.suggestionsList,
          suggestion: classes.suggestion
        }}
      />
    ): 'Loading options...'; //may also fetch data in the app component to make transition smooth
  }
}

const mapStateToProps = (state,ownProps)=>{
  return {suggestions:state.suggestions}
}

const wrappedComponent = withStyles(styles)(FormField)
export default connect(mapStateToProps, {fetchSuggestions, selectedSuggestion})(wrappedComponent);