import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard10() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/work.png"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
      Technical Workshops
          </Typography>
          <Typography gutterBottom variant="subtitle">
            Technical events
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           The department also hosts technical workshops on different domains of technology like PCB design,IoT,Cyber Security,etc, in which the students actively participate.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  );
}
