import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ReactPlayer from "react-player"
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.pxToRem(25),
  },
}));

export default function SimpleAccordion1() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Touchless Sanitizer Dispenser</Typography>
        </AccordionSummary>
        <AccordionDetails>
         
            <ReactPlayer id="vd" url="https://www.youtube.com/watch?v=a-7YiYtN1ZA&feature=youtu.be&fbclid=IwAR3wrUYfCcfXlKlQSwIh-begUPIu-QkbfxbrSFrAcTRmxHeKS784SJL4rHs"></ReactPlayer>
            <Typography id="pr" variant="h6">
                It is a fully automatic Hand Sanitizer Dispenser in low cost, designed and make by Prof.Tapas Dawn of ECE department.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Analog Video Game</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="item">
          < img src="game1.jpg"></img>
          <span className="caption"><Typography variant="h6">
            This product has been made by Prof.Tapas Dawn of ECE department.Special features -:<ol>
<li> Single / Double Player Game.</li>
<li> It has - Squash , Table Tennis , Lone Tennis , Rifle Shoot, (single/double).</li>
<li> Dual Power supply,(battery/mains AC 230v).</li>
<li> 3 steps speed control.</li>
<li>Manual Serve / Auto Serve facility.</li>
<li>Auto Score display on screen.</li>
<li>No joystick, control by 2 variable pot .</li>
<li>Easy to connect B/W, Colour. TV.</li>
<li>Easy to connect with a short  coaxial cable .</li>
<li>RF. output facility.</li>
<li>Children can play .</li>
<li> Pocket friendly .</li>
</ol>
His words:
 "This Game circuit design and modified by me in 1996, when available digital video game was very limited and also costly. Commercially I sold in personal level ."
          </Typography></span></div>
        </AccordionDetails>
      </Accordion>
      <br></br>
      <style jsx>{`
      img{
        width:300px;
        height:300px;
        float:left;
        margin:2.5rem 2.5rem 2.5rem 2.5rem;
              }
        
              @media screen and (max-width:370px){
                div.item {
                  /* To correctly align image, regardless of content height: */
                  vertical-align: top;
                  display: inline-block;
                  /* To horizontally center images and caption */
                  text-align: center;
                  /* The width of the container also implies margin around the images. */
                  width: 120px;
              }
              img {
                  width: 25%;
                  height: 25%;
                  float:center;
                  margin:1rem 1rem 1rem 1rem;
              }
              .caption {
                  /* Make the caption a block so it occupies its own line. */
                  display: block;
              }
              
        }
        

      `}</style>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
