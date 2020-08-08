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

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Invisiblity Cloak</Typography>
        </AccordionSummary>
        <AccordionDetails>
         
            <ReactPlayer url="https://www.youtube.com/watch?v=JfKM1XZKVno&feature=youtu.be&fbclid=IwAR20CNxSnHacuawdA-MsGOnH0H_l74HKKT7WqBwUSA2mzdd7tj1G6CsMGOc"></ReactPlayer>
            <Typography id="p" variant="h6">This innovative project has been created by Ilika Mitra, ECE undergrad. Invisiblity is no more an imagination. 
We can create an invisible cloak using opencv and image processing. 
Python and ML have done our work more simplified. Just you need is a computer and a webcam for computer vision. 
The colour of the cloak is being detected and being substituted by the background image without using any video editing application.If you are unable to view the video properly, then <a href="https://www.youtube.com/watch?v=JfKM1XZKVno&feature=youtu.be&fbclid=IwAR20CNxSnHacuawdA-MsGOnH0H_l74HKKT7WqBwUSA2mzdd7tj1G6CsMGOc" target="_blank">click here</a>.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>BIFU</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div className="item">
            < img id="vd" src="bifu.jpg"></img>
          <span className="caption"><Typography variant="h6" id="p">
            BIFU, a bio-fuel made from used cooking oil, was made by four ECE students, Procheta Bhattacharyya, Piyasi Das, Pallavi Sinha and Baishakhi Chakraborty under the guidance of Prof.Chayan Guha. BIFU is a biodiesel made from used cooking oil, collected from household and various eateries.It is currently under MSME funding. It is cheaper than petrol (Rs.55-60 per litre). It has comparative efficieny like that of petrol. 
          </Typography></span>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Robomaniac</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="item">
            < img id="vd" src="logo.png"></img>
            <span className="caption"><Typography variant="h6" id="p">
            The people behind this company are none other than two undergrad ECE students, Promugdha Bhattacharya and Baishakhi Chakraborty. They have emerged as beginners in the market and ,in this platform,are trying to nurture young "botors" and will provide them with project materials they need at their door-steps at a reasonable rate.They also provide forums for all such discussions that interest a robotic enthusiast. Their tag-line is: "come let's make mad bot!!!!!!!" 
          </Typography></span></div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Micro Electronic Mechanical Systems</Typography>
        </AccordionSummary>
        <AccordionDetails>
            < div className="item">< img id="vd" src="micro.jpg"></img>
            <span className="caption"><Typography variant="h6" id="p">
          2005 Alumnus Ayan Karmakar is designing Micro Electronic Mechanical Systems at CHANDIGARH SEMICONDUCTOR LABS, which is under ISRO
          </Typography></span></div>
        </AccordionDetails>
      </Accordion>
      <br></br>
      <center><Typography variant="h6" id="p">Did you achieve anything big in any field and want to make your department proud?Or did we miss you? Email us at bhattacharyya.procheta1999@gmail.com along with a description(2-3 lines) of your achievement,any certificate of that particular achievement, and a picture related to your project.</Typography></center>
      <style jsx>{`
      img{
width:300px;
height:300px;
float:left;
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
