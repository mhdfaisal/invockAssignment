import React from 'react';
import FormField from '../FormField/FormField';
import ProfileCard from '../Card/ProfileCard';
import Person from '@material-ui/icons/Person';
import { withStyles } from "@material-ui/core/styles";

const styles = {
    container:{
        display:"flex"
    },
    link:{
        textDecoration:"none",
        color:"blue"
    },
    linkContainer:{
        alignSelf:"center"
    },
    iconContainer:{
        alignSelf:"center",
        marginRight:"1%"
    }
}

class App extends React.Component{
    state = {step:1}

    goToStep = (step)=>{
        this.setState({step})
    }

    renderComponent = ()=>{
        const {classes} = this.props;
        const {step} = this.state;
        switch(step){
            case 1: return (
                        <div className={classes.container}>
                            <div className={classes.iconContainer}>
                                <Person />
                            </div>
                            <div className={classes.linkContainer}>
                                <a href="/" className={classes.link} onClick={(e)=>{
                                e.preventDefault(); this.goToStep(2)
                                }}>+ add party details</a>
                            </div>
            </div>)
            case 2: return (<div className={classes.container}>
                            <div className={classes.iconContainer}>
                                <Person />
                            </div>
                            <FormField goToStep={this.goToStep}/>
                            </div>
                            )

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

export default withStyles(styles)(App);