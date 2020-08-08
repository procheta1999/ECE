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

export default function MediaCard6() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/past.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          A Flash from The Past
          </Typography>
          <Typography gutterBottom variant="subtitle">
            Farewell
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Since, in these lockdown times, offline farewell parties cannot be organized, so, the students came up with an online way of giving farewell to the 2020 batch. So the department came up with a memoir video of the memories of the students.
           </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  );
}
