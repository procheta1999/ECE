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

export default function SimpleAccordion22() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Departmental Achievements:</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <p><ul>
          <li>In 2005 the ECE B.Tech. program was accredited by NBA</li>
<li>In 2009 the ECE B.Tech. program was reaccredited by NBA</li>
<li>The department actively participated and successfully implemented the TEQIP Phase-I project during 2005-09.</li></ul></p> 
        
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Major research & academic activities:</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <p><ol>
        <li>Circuits and Devices, VLSI and Microelectronics</li>
<li>EM theory, UWB Antenna, Smart Antenna, Microwave and Radar</li>
<li>Mobile communication, Satellite Communication, Optical Communication and Wireless Networks</li>
<li>Signal Processing, Image Processing and Speech Processing</li>
<li>Pattern Recognition, Artificial Intelligence, Soft computing and Neural Networks</li>
<li>Microprocessors and Embedded Systems.</li></ol></p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Special Strength:</Typography>
        </AccordionSummary>
        <AccordionDetails>
            
        <p><ol>
<li>Dedicated and qualified faculty members</li>
<li>Well equipped laboratories</li>
<li>Wide collection of books and learning resources</li>
</ol></p>
        </AccordionDetails>
      </Accordion>
      
      <br></br>
      <style jsx>{`
      #vd{
        float:left;
        padding:1rem 1rem 1rem 1rem;
      }
      #pr{
          margin:5rem 5rem 5rem 5rem;
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
