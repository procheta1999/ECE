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

export default function MediaCard8() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/teacher.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
      Teachers' Day Celebration
          </Typography>
          <Typography gutterBottom variant="subtitle">
            5th September
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Every year, on 5th September, the department celebrates Teachers' Day, to pay respect to the contributions of the departmental faculties. A cultural programme is also organized on that day, where the students perform different forms of art.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  );
}
