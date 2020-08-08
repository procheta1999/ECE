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

export default function MediaCard11() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Prof. C R Datta
          </Typography>
          <Typography gutterBottom variant="subtitle">
            Head of Electronics and Communication Engineering Department,NSEC
          </Typography>
          <Typography variant="body2" color="black" component="p">
          Netaji Subhash Engineering College
Techno City, Panchpota
Garia, Kolkata-700152, WB, India.
<br></br>
Tel:033-24361285
<br></br>
E-mail: crdatta@gmail.com
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  );
}
