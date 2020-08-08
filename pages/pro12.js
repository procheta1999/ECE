import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard12() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Contact us:
          </Typography>
          <Typography gutterBottom variant="subtitle">
            Social Media
          </Typography>
          <Typography variant="body2" color="black" component="p">
          <a href="https://www.facebook.com/nsecececell" target="_blank"><Icon className="fa fa-facebook-f" /></a>
          <a href="https://www.instagram.com/ecestudent_scell?r=nametag" target="_blank"><Icon className="fa fa-instagram" /></a>
        <a href="https://www.youtube.com/channel/UC-FC57cc4BZkU9sz3SvmxZQ" target="_blank"><Icon className="fa fa-youtube" /></a>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  );
}
