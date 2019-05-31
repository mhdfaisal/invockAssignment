import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";

const styles = {
    container:{
        width:"50%",
        margin:"0 auto"
    },

    avatar:{
        alignSelf:"center",
        padding:5
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
    width: 151,
  }
};

class ProfileCard extends React.Component{

  render(){
      const {classes} = this.props
    return (
        <div className={classes.container}>
          <Card className={classes.card}>
            <CardMedia
            className={classes.cover}
            image="http://lorempixel.com/400/200/sports/1/"
            title="Live from space album cover"
          />
          <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                  {this.props.selectedSuggestion.label}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Mac Miller
                </Typography>
              </CardContent>
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

export default connect(mapStateToProps)(wrappedComponent);
