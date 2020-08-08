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

export default function MediaCard1() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/rabi.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Rabindra Jayanti
          </Typography>
          <Typography gutterBottom variant="subtitle">
            8th May 2020
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Locked up in the pandemic but still flow of creativity maintaining its flow, the department hosted an online celebration of Rabindra Jayanti to commemorate the birthday of one of the greatest Indian poets, Rabindranath Tagore. 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  );
}
