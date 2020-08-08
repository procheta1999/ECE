import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    borderRadius:"3px",
    border: "1px solid black",
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    
  },
  content: {
    flex: '3 0 auto',
  },
  cover: {
    width: 200,
    height:200,
  },

}));

export default function List() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            List of Labs:
          </Typography>
          <Typography variant="body1" gutterBottom>
            <ul>
            <li>Basic Electronics Engineering Lab</li>
<li>Solid State Devices Lab</li>
<li>Analog Electronics Circuit Lab</li>
<li>Circuit Theory</li>
<li>Signal and System Lab</li>
<li>Digital Electronics Lab</li>
<li>EM Theory & Tx Lines Lab</li>
<li>Analog Communication Lab</li>
<li>Control System Lab</li>
<li>Digital Communication Lab</li>
<li>Digital Signal Processing Lab</li>
<li>VLSI Design Lab</li>
<li>RF and Microwave Lab</li>
<li>Project Lab</li>
<li>M.Tech Simulation Lab</li>
<li>M.Tech Advance Communication Lab</li>
<li>M.Tech Communication Systems Lab</li>
            </ul>
      </Typography>
        </CardContent>
      </div>
      
    </Card>
    
  );
}