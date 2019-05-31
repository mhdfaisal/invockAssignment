import React from 'react';
import FormField from '../FormField/FormField';
import ProfileCard from '../Card/ProfileCard';

class App extends React.Component{
    state = {step:1}

    goToStep = (step)=>{
        this.setState({step})
    }

    renderComponent = ()=>{
        const {step} = this.state;
        switch(step){
            case 1: return <div><a href="/" onClick={(e)=>{
                e.preventDefault(); this.goToStep(2)
            }}>Add Record</a></div>
            case 2: return <FormField goToStep={this.goToStep}/>
            case 3: return <ProfileCard  goToStep={this.goToStep}/>
            default:return null
        }
    }

    render(){
       return(
           <>
            {this.renderComponent()}
           </>
       )
    }
}

export default App;