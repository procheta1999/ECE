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

export default function MediaControlCard() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            History
          </Typography>
          <Typography variant="body1" gutterBottom>
            <ul>
              <li>Started journey in 1998 with sixty students.</li>
              <li>In the academic year 2001-2002, the 1st year B.Tech. intake of the department was increased from 60 to 90.</li>
              <li>Later, in the year 2005-2006, it was further increased to 120. </li>
              <li>In 2005-2006, the department also started its post graduate (M.Tech.) programme in Communication Engineering.</li>
            </ul>
      </Typography>
        </CardContent>
      </div>
      
    </Card>
    
  );
}