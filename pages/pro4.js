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

export default function MediaCard4() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/alumni.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Reminisce 
          </Typography>
          <Typography gutterBottom variant="subtitle">
            The Alumni Talk-Show
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           In this online platform, the departmental alumni get a chance to interact with the students and also share their experiences and sweet college memories.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  );
}
