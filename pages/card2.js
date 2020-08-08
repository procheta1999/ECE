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
    width: 250,
    height:250,
    margin:"3px 3px 3px 3px",
  },

}));

export default function MediaControlCard2() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            Electronics & Communication Engineering (ECE) Department, NSEC
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            About Us
          </Typography>
          <Typography variant="body1" gutterBottom>
          The department of ECE started its journey during the inception of the institute in 1998 with an intake of sixty (60) 1st year B.Tech. students. Since its establishment, the primary objective of the department has been to impart quality education, training and research in various functional areas of electronics and communication engineering. The Head of the Department is Prof.Chira Ranjan Datta.The departmental students over the years ,have made quite a lot of academic and extra-curricular acheivements in different fields. The department has an excellent departmental library and also provides good lab facilities. The faculties are experienced and research-oriented. The department also actively participates in seminars involving topics like ML, AI, Web Development, Embedded Systems, Electronics, etc. 
          <p>The students also participate in cultural activities involing celebrtion of Teachers' Day, Fresher parties, Reunion of previous batches, etc. Every year, the college hosts Sports Tournament among the departments, in which many ECE students take an active part.</p>
      </Typography>
        </CardContent>
      </div>
      <div id="i">
      <CardMedia
      className={classes.cover}
      image="ece.jpg"
    />
    </div>
      
    </Card>
    
  );
}