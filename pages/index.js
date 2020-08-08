import React from 'react';
import Head from 'next/head'
import Link from 'next/link'
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import TextField from "@material-ui/core/TextField"
import Card from '@material-ui/core/Card';
import { makeStyles, responsiveFontSizes } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Input from '@material-ui/core/Input';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import InputBase from '@material-ui/core/InputBase';
import Box from '@material-ui/core/Box';
import Button from "@material-ui/core/Button"
import { blue } from '@material-ui/core/colors';
import MediaControlCard from "./card"
import MediaControlCard2 from "./card2"
import SimplePaper from "./paper"
import List from "./list"
import ReactPlayer from "react-player"
import SimpleAccordion from "./ilika"
import SimpleAccordion1 from "./faculty"
import SimpleAccordion2 from "./alumni"
import MediaCard from "./pro"
import MediaCard1 from "./pro1"
import MediaCard2 from "./pro2"
import MediaCard3 from "./pro3"
import MediaCard4 from "./pro4"
import MediaCard5 from "./pro5"
import MediaCard6 from "./pro6"
import MediaCard7 from  "./pro7"
import MediaCard8 from "./pro8"
import MediaCard9 from "./pro9"
import MediaCard10 from "./pro10"
import MediaCard11 from './pro11'
import MediaCard12 from "./pro12"
import StickyHeadTable from './info10';
import StickyHeadTable22 from "./dept"
import Roni from "./roni"
import HOD from "./hod"
import KK from "./koushik"
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <>
    <Head>
    <meta charset="UTF-8"></meta>
    <meta name="viewport" content="width=device-width, initial-scale=0.8"></meta>
     <title>NSEC ECE</title>
     <link rel="icon" href="" />
     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"></link>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
   </Head>
   
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
    </>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
fontSize:50,
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Home🏠" {...a11yProps(0)} />
          <Tab label="Our Achievements🚀" {...a11yProps(1)} />
          <Tab label="Alumni ⭐" {...a11yProps(2)} />
          <Tab label="Activities🚩" {...a11yProps(3)} />
          <Tab label="Contacts📞" {...a11yProps(4)} />
          <Tab label="Faculties🎓" {...a11yProps(5)} />
          <Tab label="Gallery📷" {...a11yProps(6)} />
          <Tab label="ECE Cell👨‍💻" {...a11yProps(7)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} id="new"><br></br>
      <center><img src="download.jpg"></img></center>
      <center id="p"><Typography variant="h2" gutterBottom>Electronics & Communication Engineering</Typography></center>
      <br></br>
      <center ><Typography variant="h3" gutterBottom>Netaji Subhash Engineering College</Typography></center>
      <center><Typography variant="h6" display="block" gutterBottom><pre>K O L K A T A, W E S T  B E N G A L,I N D I A</pre></Typography></center>
      <br></br>
      
      <MediaControlCard/>
      <br></br>
      <MediaControlCard2/>
      <br></br>
      <SimplePaper/>
      <br></br>
      <List/>
      <br></br>
      </TabPanel>
      <TabPanel value={value} index={1}><br></br>
      <center><Typography variant="h3" gutterBottom>Achievement Section🥈</Typography></center>
      <center><Typography variant="h5" gutterBottom>The students of ECE department, NSEC are not far behind in any field , be it related to science🔬 or arts📃 or any other field. Yeah, life is a rat-race🏁; we believe that, but when comes to excelling, we prove ourselves there too.The students follow their passions too, along with their studies📚. The faculties, excelling in different research-oriented fields, inspire the students to pursue different research fields.</Typography></center>
      <br></br>
      <center><img src="group.jpg" alt="blog" id="book1" /></center>
      <br></br>
      <StickyHeadTable22/>
<br></br>

<center><Typography variant="h3" gutterBottom>Faculties' Achievements</Typography></center>
<br></br>
<SimpleAccordion1/>
<br></br>
<center><Typography variant="h3" gutterBottom>Students' Achievements</Typography></center>
<br></br>

<SimpleAccordion/></TabPanel>
      <TabPanel value={value} index={2}>
      <center><Typography variant="h3" gutterBottom>Alumni Section⭐</Typography></center>
      <center><Typography variant="h5" gutterBottom>We never forget our alumni.They are a part of our ECE family and will always be. They, with their achievements and feats, have made the department prouder and prouder , day by day. So let's introduce our alumni:</Typography></center>
      <br></br>
      <SimpleAccordion2/>
      <br></br>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <center><Typography variant="h3" gutterBottom>Activities Section🚩</Typography></center>
      <center><Typography variant="h5" gutterBottom>We, the students of ECE department of NSEC, are not only involved in studies📚🔭, but also in cultural and non-technical activities. A variety of different events are hosted throughout the year in the department, starting from reunion of previous batches and ending to small celebrations✨.</Typography></center>
      <br></br>
      <div className="row">
      <div className="col-sm-3"><MediaCard/></div>
      <div className="col-sm-3"><MediaCard1/></div>
      <div className="col-sm-3"><MediaCard2/></div>
      <div className="col-sm-3"><MediaCard3/></div>
      </div>
      <br></br>
      <div className="row">
      <div className="col-sm-3"><MediaCard4/></div>
      <div className="col-sm-3"><MediaCard5/></div>
      <div className="col-sm-3"><MediaCard6/></div>
      <div className="col-sm-3"><MediaCard7/></div>
      </div>
      <br></br>
      <div className="row">
      <div className="col-sm-3"><MediaCard8/></div>
      <div className="col-sm-3"><MediaCard9/></div>
      <div className="col-sm-3"><MediaCard10/></div>
      </div>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <center><Typography variant="h3" gutterBottom>Contacts Section📞</Typography></center>
      <br></br>
      <div className="row">
      <div className="col-sm-6"><MediaCard11/></div> 
      <div className="col-sm-6"><MediaCard12/></div> 
      </div>
      </TabPanel>
      <TabPanel value={value} index={5}>
      <center><Typography variant="h3" gutterBottom>Faculties Section🎓</Typography></center>
      <center><Typography variant="h5" gutterBottom>The department strives to have good faculties, constantly inspiring students to follow their dreams and achieve their goals. They are research-oriented and helpful.</Typography></center>
      <br></br>
      <div className="row">
      <div className="col-sm-3"><Roni/></div> 
      <div className="col-sm-3"><HOD/></div> 
      <div className="col-sm-3"><KK/></div> 
      </div>
      </TabPanel>
      <style jsx>{`
      #md{
        display:inline-block;
      }
      #vd{
        float:left;
      }
      #book1{
    height:80%;
    width:80%;
      }
      .grid {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        max-width: 1000px;
        margin-top: 3rem;
      }

      .card {
        margin: 1rem;
        flex-basis: 45%;
        padding: 1.5rem;
        text-align: left;
        color: inherit;
        text-decoration: none;
        border: 1px solid black;
        border-radius: 30px;
        transition: color 0.15s ease, border-color 0.15s ease;
        max-width:500px;
      }
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1rem;
          line-height: 1.5;
        }

      #p{
        border-right: solid 3px rgba(0,255,0,.75);
  white-space: wrap;
  overflow: hidden;    
  font-family: 'Source Code Pro', monospace;  
  font-size: 30px;
  color:black;
  margin: 0 auto;
      }
      #p{
        animation: animated-text 4s steps(29,end) 1s 1 normal both,
             animated-cursor 600ms steps(29,end) infinite;
      }
      @keyframes animated-text{
        from{width: 0;}
        to{width: 100%;}
      }
      @keyframes animated-cursor{
        from{border-right-color: black;}
        to{border-right-color: white;}
      }
      .title {
        text-align:center;
        margin: 0;
        line-height: 1.15;
        font-size: 4rem;
        padding: 3rem 3rem 3rem 3rem;
      }
      #s{
        animation: pulse 5s infinite;
      }
      @keyframes pulse {
        20% {
          color: red;
        }
        30%{
            color:blue; 
        }
        40%{
            color:green;
        }
        100% {
          color: yellow;
        }
      }
      #e{
        font-size:40px;
      }
      #pro{
        color:blue;
      }
      
      
      #b InputBase{
        font-size:100px;
      }
      textField: {
        width: 400;
        margin: 100;
      } 
      #but{
          align-items:center;
      }
        
    }
    @media screen and (max-width:370px){
      @keyframes animated-text{
        from{width: 0;}
        to{width: 420px;}
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
