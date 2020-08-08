import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ReactPlayer from "react-player"

export default function HOD() {

  return (
    <div>
        <br></br>
      <div className="card-container">
	<img className="round" src="https://www.nsec.ac.in/fps/images/1596089291.jpg" alt="user" width="50%" height="50%"/>
	<h3>Chira Ranjan Datta</h3>
	<h6>Associate Professor & HOD</h6>
	<p>Research Area:
Signal Processing, Wireless Communicatin, Fault Tollerent Computing<br/> Experience: 45 years</p>
	<div className="skills">
	</div>
</div>
	  <style jsx>{`
	  @import url('https://fonts.googleapis.com/css?family=Montserrat');
      h3 {
		margin: 10px 0;
	}
	
	h6 {
		margin: 5px 0;
		text-transform: uppercase;
	}
	
	p {
		font-size: 14px;
		line-height: 21px;
	}
	
	.card-container {
		background-color: #231E39;
		border-radius: 5px;
		box-shadow: 0px 10px 20px -10px rgba(0,0,0,0.75);
		color: #B3B8CD;
		padding-top: 30px;
		position: relative;
		width: 350px;
		max-width: 100%;
		text-align: center;
	}
	
	.card-container .pro {
		color: #231E39;
		background-color: #FEBB0B;
		border-radius: 3px;
		font-size: 14px;
		font-weight: bold;
		padding: 3px 7px;
		position: absolute;
		top: 30px;
		left: 30px;
	}
	
	.card-container .round {
		border: 1px solid #03BFCB;
		border-radius: 50%;
		padding: 7px;
	}
	
	button.primary {
		background-color: #03BFCB;
		border: 1px solid #03BFCB;
		border-radius: 3px;
		color: #231E39;
		font-family: Montserrat, sans-serif;
		font-weight: 500;
		padding: 10px 25px;
	}
	
	button.primary.ghost {
		background-color: transparent;
		color: #02899C;
	}
	
	.skills {
		background-color: #1F1A36;
		text-align: left;
		padding: 15px;
		margin-top: 30px;
	}
	
	.skills ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
	}
	
	.skills ul li {
		border: 1px solid #2D2747;
		border-radius: 2px;
		display: inline-block;
		font-size: 12px;
		margin: 0 7px 7px 0;
		padding: 7px;
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
