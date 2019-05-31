import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {removeSelectedSuggestion} from '../actions/index';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Close from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

import { connect } from "react-redux";
const styles = {
    container:{
        maxWidth:"50%",
        margin:"0 0 0 5%"
    },

    avatar:{
        alignSelf:"center",
        padding:5
    },
  icon:{
    marginLeft:"auto"
  },
  card: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width:"50%",
    backgroundSize:"contain"
  }
};

class ProfileCard extends React.Component{

  handleIconBtnClick = ()=>{
    this.props.removeSelectedSuggestion()
    this.props.goToStep(1);
  }

  render(){
      const {classes} = this.props
    return (
        <div className={classes.container}>
          <Card className={classes.card}>
            <CardMedia
            className={classes.cover}
            image="images/user.png"
            title=""
            />
          <div className={classes.details}>
              <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                {this.props.selectedSuggestion.label}
              </Typography>
                <Typography color="textSecondary">
                  {this.props.selectedSuggestion.addess}
                </Typography>
                <Typography color="textSecondary" >
                  <div style={{marginTop:"5%"}}>Current Balance : to be fetched</div>
                </Typography>
              </CardContent>
            </div>
            <div className={classes.icon}>
                <IconButton onClick={this.handleIconBtnClick}>
                    <Close />
                </IconButton>
            </div>
          </Card>
        </div>
      );
  }
}
const mapStateToProps = (state, ownProps) => {
  return { selectedSuggestion: state.selectedSuggestion };
};
const wrappedComponent = withStyles(styles)(ProfileCard);

export default connect(mapStateToProps,{removeSelectedSuggestion})(wrappedComponent);
