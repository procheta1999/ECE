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

export default function MediaCard2() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/talent.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Talentista
          </Typography>
          <Typography gutterBottom variant="subtitle">
            Talent Hunt
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            In the pandemic times, the department thought of innovative ways of inspiring the students to show their talent. Thus they came up with TALENTISTA,a departmental talent hunt, with a plethora of events, where the students can submit their paintings, writings, short-films and so on.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  );
}
