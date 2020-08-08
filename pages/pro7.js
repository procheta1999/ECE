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
          image="/farewell.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
      Adidos
          </Typography>
          <Typography gutterBottom variant="subtitle">
            Farewell of 4th Year
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Every year, "Adidos" is organized by the second year and third year students to bade farewell to the fourth years.  It is organized with great pomp and splendour, followed bu cutting of cake and giving graduation caps to the final years.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  );
}
