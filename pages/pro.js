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

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/zener.jpg"
          title="Zener 2020"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Zener
          </Typography>
          <Typography gutterBottom variant="subtitle">
            The Homecoming
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Zener, the Homecoming, organized by ECE department, is a reunion of the alumni of the department. All the old students are invited and they are felicitated as well, by the HOD and other teachers. Besides these, refreshment arrangments are also organized and a cultural programme is also held.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  );
}
