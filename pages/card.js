import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    borderRadius:"3px",
    border: "1px solid black",
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    
  },
  content: {
    flex: '3 0 auto',
  },
  cover: {
    width: 200,
    height:200,
  },

}));

export default function MediaControlCard() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>
        <div id="i">
        <CardMedia
        className={classes.cover}
        image="nsec.jpg"
      />
      </div>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            Netaji Subhash Engineering College
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            A Brief Introduction
          </Typography>
          <Typography variant="body1" gutterBottom>
        Netaji Subhash Engineering College (NSEC), keeping in mind the ideals of Netaji Subhash Chandra Bose, was established in 1998 at Techno City, New Garia, Kolkata, in collaboration with the Techno India Group and The Institute of Computer Engineers (India). The college offers engineering courses in the departments of computer science (CSE), information tachnology (IT), electronics and communication (ECE), electrical(EE), applied electronics and instrumentation(AEIE), mechanical(ME) and civil engineeering(CE).  It is a NAAC and NBA credited college with a remarkable NIRF ranking of 251.
      </Typography>
        </CardContent>
      </div>
      
    </Card>
    
  );
}