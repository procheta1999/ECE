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

export default function MediaCard9() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/seminar.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
      Seminars
          </Typography>
          <Typography gutterBottom variant="subtitle">
            Technical events
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           The department also hosts seminars on different domains of technology like Web Development, Embedded Systems, ML, Deep Learning, etc, in which the students actively participate.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  );
}
