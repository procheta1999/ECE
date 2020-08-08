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

export default function MediaCard3() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/mind.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Mind Fix
          </Typography>
          <Typography gutterBottom variant="subtitle">
            Tech Quiz
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            In the pandemic times, the tech-wing of the department hosted "Mind Fix", a tech-quiz event, based on different domains of technology. Students from ECE, as well as students from other departments and other colleges participated in it.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  );
}
