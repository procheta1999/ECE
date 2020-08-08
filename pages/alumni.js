import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ReactPlayer from "react-player"
import StickyHeadTable from "./info10"
import StickyHeadTable1 from "./info11"
import StickyHeadTable2 from "./info12"
import StickyHeadTable3 from "./info13"
import StickyHeadTable4 from "./info14"
import StickyHeadTable5 from "./info15"
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.pxToRem(25),
  },
}));

export default function SimpleAccordion2() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>ECE 2010</Typography>
        </AccordionSummary>
        <AccordionDetails>
            
        <StickyHeadTable/>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>ECE 2011</Typography>
        </AccordionSummary>
        <AccordionDetails>
            
        <StickyHeadTable1/>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>ECE 2012</Typography>
        </AccordionSummary>
        <AccordionDetails>
            
        <StickyHeadTable2/>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>ECE 2013</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <StickyHeadTable3/>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>ECE 2014</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <StickyHeadTable4/>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>ECE 2015</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <StickyHeadTable5/>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>ECE 2016</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h6">
          <ol><li>ABHIK ROY</li>
<li>ABHISHEK CHOUBEY</li>
<li>ABHISHEK DUTTA GUPTA</li>
<li>ADITRI BISWAS</li>
<li>ADRIKA MUKHERJEEE</li>
<li>AKANKSHA KUMARI</li>
<li>ALAKANANDA DE</li>
<li>AMAN KUMAR SINGH</li>
<li>AMIT KUMAR</li>
<li>ANCHAL AGARWAL</li>
<li>ANIMESH MAJI</li>
<li>ANIRBAN HALDAR</li>
<li>ANIRUDDHA RAY</li>
<li>ANKITA RAY</li>
<li>ANUSHILAN MUKHERJEE</li>
<li>ARITRA BISWAS</li>
<li>ARKA KIRAN DEY</li>
<li>ARKAPRABHA GHOSH</li>
<li>ARNAB BERA</li>
<li>ARNOB ROY</li>
<li>ARPAN CHATTOPADHYAY</li>
<li>AVIJIT SINGHA</li>
<li>AVINASH KUMAR</li>
<li>BEDANTIKA BISWAS</li>
<li>BIBEK MONDAL</li>
<li>BICKY SHAW</li>
<li>BIDISHA KARMAKAR</li>
<li>BIPLAB MAJI</li>
<li>BISHAL NAG</li>
<li>BISWADEEP GUHA ROY</li>
<li>CHANDAN KUMAR SAHA</li>
<li>DEBAPRIYA MUKHERJEE</li>
<li>DEBOJYOTI GHOSH</li>
<li>DEEP SHUKLA</li>
<li>DIBYENDU SEN</li>
<li>DIGANTA PURKAIT</li>
<li>DIPAK CHAURASIA</li>
<li>DIPAK DAS</li>
<li>DIPANJAN PAUL</li>
<li>DIPAYAN MUKHERJEE</li>
<li>DIPAYAN PRAMANIK</li>
<li>HARSH VARDHAN RAJ GARG</li>
<li>INDRANI GANGULY</li>
<li>JAYETA BISWAS</li>
<li>KOUSHIK PAL</li>
<li>KRISHNA KANT CHAUBEY</li>
<li>KRISHNA PRASAD MAHATO</li>
<li>KRISHNENDU KARMAKAR</li>
<li>MAINAK BHATTACHARYYA</li>
<li>MD SHAHBAZ SIDDIQI</li>
<li>MEGHNA SHALINI MOITRA</li>
<li>MITALI MONDAL</li>
<li>NANDAN KUMAR JHA</li>
<li>NARGIS PARVEEN SAYEDA</li> 
<li>NEHA KUMARI</li>
<li>NEHA RAJ</li>
<li>NILANGSHU SAHA</li>
<li>NILOY CHAKRABORTY</li>
<li>NIRAJ KUMAR</li>
<li>PALLAVI PRIYA</li>
<li>PARAMITA BHATTACHARYYA</li>
<li>PAULAMI MUNSHI</li>
<li>PINAK GANGULY</li>
<li>POULAMI MUKHERJEE</li>
<li>PRABIR MAHATO</li>
<li>PRAGATI PRIYA</li>
<li>PRASANN RAJ</li>
<li>PRASHANTA NANDY</li>
<li>PRIYANKAR MUHURI</li>
<li>PUSPAK PAL</li>
<li>RANA BISWAS</li>
<li>RIMPA DAS</li>
<li>RIYA DUTTA</li>
<li>ROBERT BHARTI</li>
<li>ROUNAK CHATTERJEE</li>
<li>SAGNIK GHOSH</li>
<li>SAMAPTI KUNDU</li>
<li>SANCHARI MONDAL</li>
<li>SANJANA MANDAL</li>
<li>SANJOY DAS</li>
<li>SANJOY KUMAR GHATAK</li>
<li>SANKHA SUVRA SINGHA</li>
<li>SANTANU PANJA</li>
<li>SAONI MUSTAFI</li>
<li>SARANI SEN</li>
<li>SASWATA MUKHERJEE</li>
<li>SASWATO GUPTA</li>
<li>SATYAKI SINHA</li>
<li>SAURABH SUMAN GUPTA</li>
<li>SAURAV KUMAR BANERJEE</li>
<li>SAYAN MUKHERJEE</li>
<li>SAYAN SHOW</li>
<li>SAYANTAN GUPTA</li>
<li>SHADAAB MOBIN</li>
<li>Shambhu Shankar Prasad</li>
<li>SHARANYA GUHA THAKURTA</li>
<li>SHEIKH AKASH HOSSAIN</li>
<li>SHILPA DEY SARKAR</li>
<li>SHOUBHIK  RAY</li>
<li>SHREYA CHAKRABORTY</li>
<li>SHRODDHA MAJUMDAR</li>
<li>SOMNATH BISWAS</li>
<li>SOUMIK MAJUMDER</li>
<li>SOUMIL DASGUPTA</li>
<li>SOUMITRA GOLE</li>
<li>SOUMYADEEP BOSE</li>
<li>SOUNAK PAUL</li>
<li>SOURAV CHAKRABORTY</li>
<li>SOURAV CHANDRA</li>
<li>SOURAV DAS</li>
<li>SOURAV MANNA</li>
<li>SOUVIK CHAKRABORTY</li>
<li>SOUVIK CHATTERJEE</li>
<li>SOUVIK PORIA</li>
<li>SOUVIK SAHA</li>
<li>SREEMOYEE TAGORE</li>
<li>SRIMOYEE CHAKRABORTY</li>
<li>SUBHADIP BAGCHI</li>
<li>SUBHAJIT CHAKRABORTY</li>
<li>SUBHAJIT PAUL</li>
<li>SUBHAJIT ROY</li>
<li>SUBHAM SAUMUYA</li>
<li>SUDIPTA JANA</li>
<li>SUJOY GHOSH</li>
<li>SUKANYA GHOSH</li>
<li>SUKANYA ROY</li>
<li>SUMEDHA BANERJEE</li>
<li>SUMIT KUMAR SINGH</li>
<li>SUNITA DAS</li>
<li>SURANGANA DAS</li>
<li>SUSMITA SAHA</li>
<li>SUTANU KUMAR</li>
<li>SUTIRTHA BANERJEE</li>
<li>SUVAJIT DEY</li>
<li>SUVANKAR JANA</li>
<li>SUVANKAR PAUL</li>
<li>SWASTIKA DAS</li>
<li>TANUPRIYO BISWAS</li>
<li>UDDALAK DEY</li>
<li>UMANGA RAJ RAY</li>
<li>VIKRAM SATDEV</li>
<li>VISHAL SHARMA</li>
</ol>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>ECE 2017</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h6">
<ol><li>ABHIJOY CHAUDHURI</li>
<li>ABHISHEK  KUMAR</li>
<li>ABHISHEK DAS</li>
<li>ABHISHEK ROY</li>
<li>AKASH CHOUDHURI</li>
<li>AKASH KUNDU</li>
ALIK SEN
AMIT KUMAR
ANIRBAN DAS
ANIRBAN DUTTA
ANISH PRAMANIK
ANKIT SAMANTA
ANKITA CHATTERJEE
ANURADHA DUTTA
ANURAN DAS
ANUSREE CHANDA
APURVA SHAW
ARGHA DAS
ARIJIT GHOSH
ARKADEEP BAL
ARNAB BHATTACHARYYA
ARPAN BANERJEE
ARUNIMA SEN
AYANTINI SARKHEL
DEBAJYOTI CHOWDHURY 
DEBRUP SARKAR
DEEPAK KUMAR SHARMA
DIPTESH RAY
DWAIPAYAN CHAKRAVARTTY
HIMAL GHOSH
INDRAJEET KUMAR
ISHITA DAS
JAKIR HOSSAIN MOLLA
JHILICK GHOSH
JINA GHOSH
JITADITYA SAMANTA
JYOTI PRIYA
KAJAL GHOSH
KANHAIYA KUMAR
KARTICK SAHA
KAUSTAV CHAKRABORTY
KUMAR PRASHANT
MADHUBANTI ROY
MAINAK SINGHA
MAITRAYEE PANDA
MALAY CHAKRABORTY
MANASIJ KANJILAL
MD EZAZUL HAQUE
MD JUBER AKHTAR
MONALISA DUTTA
MONIKA SINGH
NABANITA ACHARJEE
NAVONEEL JANA
NEHA DUTTA GUPTA
PALLAVI KUMARI
PARAMITA SAHA
PAULOMI DE
PIYUSH UPADHYAY
PRANAY KUMAR
PRATIM MITRA
PURBITA SEAL
RABISH KUMAR SINGH
RAHUL MISHRA
RATHIN BISWAS
RISHOV GHOSH
RITOMOY BANDYOPADHYAY
SAGAR ROY
SAGNIK DAS
SANCHARI MONDAL
SANGEETA KUMARI
SANJOY GHOSH
SAYANTAN DAS
SHILADITYA CHAKRABORTY
SHINJINI SINHA
SHIRSHA GHOSH
SHYAMALI BHOWMIK
SOUMADIP BASU
SOUMADIP ROY
SOUMYA CHAKRABORTY
SOUMYA MAJUMDER
SOUMYADEEP BHATTACHARYA
SOUPARNA DAS
SOURAV SAW
SRAMANA SAHOO
SRIJAN BHOWMICK
SRITAMA ROY CHOWDHURY
SUBHAJIT BHATTACHARYA
SUBHAM ROY
SUBHANKAR SEN
SUBHARGHYA GHOSH
SUBHASHIS DEY
SUBODH KUMAR
SUBRATA BAIRAGI
SUDHANSHU SHEKHAR SINGH
SUDIPTO GHOSH
SUJAYA DEY
SUMAN SAHA
SUMIT CHAKRABORTY
SUPRATIM MITRA
SUPROJIT DEY
SUSHANTA SHOW
SUVAM SENAPATI
SUVOJEET PAUL
SWARUPA DAS
TANMOY SINGHA ROY
USHNISH GUHA BAKSHI
V.VENKATESH
VARUN MISHRA
VIBHA

ARPAN DAS
GAURAV KUMAR
MALAY MAHATA
MANOTOSH BHUNIYA
PRIYANKA DAS
RAJESH MAITY
SANKHADEEP RAKSHIT
SOHAM DUTTA
SOUMIK TOKDER
BURHAN MULLAMITHAWALA
GAURAV PANDEY
HASNAIN ANSARI
KAUSTAV CHATTERJEE
NISHANT KUMAR
SUMIT KUMAR
GHANSHYAM MAJI
RISHI GUHA
RITTWIK GHOSH
TANAY CHAKRABORTY
</ol>          
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>ECE 2018</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h6">
          <ol><li>ABHIK  SINGHA</li>
<li>Abhishek  Das</li>
<li>ADARSH  VARDHAN</li>
<li>AINDRILA  GHOSH</li>
<li>AISHWARYA  GHOSH</li>
<li>ALISHA  FARZANA</li>
<li>ALOLIKA  PAL</li>
AMAR  KUMAR
AMITOSH  KUMAR
AMRITA  GHOSH
ANAMITRA  BANDYOPADHYAY
ANGSHITA  HAZRA
ANINDITA  BHATTACHARYYA
ANIRBAN  MUKHERJEE
ANIRUDDHA  SILSARMA
ANJAN  MANNA
ANKITA  CHOWDHURY
ANKUR  DEY
Anubhab  Bhowmick
ANURUPA  CHAKRABORTY
APU RANI SAHA
ARANI  BAG
ARGHYA PRABHA PODDAR
ARGHYADEEP  DE
ARGHYADIP  BAGCHI
ARIJIT  SAHA
ARINDAM  MUKHERJEE
ARITRA  KUNDU
ARUNAVA  KARMAKAR
Biswadeep  Dey
BISWARUP  BHATTACHARYYA
BROJESWAR  DHANG
DEBANJANA  BANERJEE
DEBAPRIYA  MAL
DEBMALYA  DUTTA
DEEPABALI  SAHA
GARGI  NANDI
HIMANSHU  RANJAN
JAYANTA  CHOWDHURY
Kaushiki  singh
Kaustav  Ghosh
KOUSUMI  DASGUPTA
KRISHANU HOM CHOWDHURY
LAKSHMI  RAMAKRISHNAN
Manish  Das
MUKUL  RAMAN
MUMPI  DUTTA
NABAMITA  ROUTH
NILOTHPAL  MITRA
PAARTH  SAARTHI
PABITRA  NASKAR
Pranoy  Ghosh
PRITAM  SAHA
PRITHA  GHOSAL
PRIYAM KUMAR SAHA
PRIYANKA KUMARI SHAW
PUNEET  SHARMA
PURUSHOTAM  KUMAR
RADHIKA  SARRAF
RAJAT  SAHA
RAJNISH  ANAND
RAKHI  ROY
RICHA KUMARI SINGH
RISHAB  MAITY
ROOPAM  DAS
SAIKAT  ADHIKARI
SAIKAT  CHATTERJEE
Saikat  Mukherjee
SAMPURNA  MAJUMDAR
SANGLAP  SARKAR
SANJANA  SINGH
SANKALITA  GUPTA
SANKET  DAS
Sanwoy  Bose
Saptaparni  Das
SARBATRIK  BRAHMA
Sarbeswar  Basak
SATABDI  RAY CHOUDHURY
SAURABH  KUMAR
SAURAV  GHOSH
SAURAV  SHEKHER
Sayan  Chakraborty
SAYAN  PRADHAN
SAYAN  SAHOO
SAYANTAN  DUTTA
SAYANTAN  GHOSH
SAYANTANI  PAUL
SHILPA  MAITY
SHREYA  DAS
SHUBHAM KHAN BHADURI
Shuvam  Basak
SMRITI  NANDA
SNEHA  CHAKRABORTY
Soham  Datta
SOHAM  GHOSH
SONALI  KUMARI
SOUMI  LAHIRI
SOURADEEP  CHAKRABORTY
SOURADIP  CHAKRABORTY
Sourav  Banerjee
SOURAV  MALLA
SOUVIK  CHOWDHURY
SPANDAN  MANNA
SREELEKHA  KUNDU
SUBHAJIT  KAR
SUBHAM  CHAKRABORTY
SUBHAM  CHOWDHURY
SUBHANKAR  DAS
SUDIPTA  SAMANTA
SUMA  HALDER
SUMAN  KARMAKAR
Sumantra  Mukherjee
SUMIT  MUKHERJEE
SUMON  LAYEK
SUPRIYA  SWAMINI
Surjendu  Pathak
SUSMITA  DEBNATH
SUTAPA  MUKHERJEE
Suvraneel  Sadhu
SUYASH  GHOSH
SWARNADEEP  SAHA
Tanmoy  Saha
TANMOY  SAHA
UDAY  KUMAR
UTTAM  KUMAR
AISHWIK ROY CHAUDHURY
A.KAMESWARI
</ol>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>ECE 2019</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h6">
          <ol><li>AAKASH SINGH</li>
<li>ABHIK SAHA</li>
<li>ABHINANDITA GHOSH</li>
<li>Abhinav Prabhakar</li>
<li>ABHISEK SHAW</li>
<li>ABHISHEK KUMAR MISHRA</li>
<li>AFREEN EKRAM</li>
AISHWARYA BARAL
AMIT KUMAR SINGH
ANAND
ANANT RANJAN
ANANYA SINHA
ANIKET BHUNIA
ANINDITA DE
ANIT KUMAR RAI
ANKITA KHAMRUI
ARJYAMA CHATTERJEE
ARKOJYOTI CHAKRABORTY
Arnab Dey
ARNAB MONDAL
ARUNAVA DATTA
ARYAN KUMAR
ASHAY JAIN
ASIT KUMAR PALAI
AVIK KUMAR DUTTA
AVINASH KUMAR
AVINOBH JANA
AVISHEK DAS
BIKRAM BHATTACHARYA
BISHWAJEET GHOSH
Biswajeet kumar singh
BISWAJIT MUKHERJEE
CHIRANTAN BHATTACHARYYA
CHITRANJAN KUMAR SINGH
DEBADITYA SEN
DEBASISH DEY
DEEPANNITA GOPE
DIKSHA
DISHA GHOSH
JIMME BURNWAL
JYOTIRMAY KARMAKAR
KRISHNENDU BOSE
MAHASHETA CHAUDHURI
MANASIJ SINHA
MANI SHANKAR SINGH
MANISH KUMAR
MD FAISAL SHAMIM
MOTI LAL
MUKESH KUMAR SINGH
NISHANT KUMAR SINGH
NITESH KUMAR MISHRA
PAWAN KUMAR TIWARY
PAYEL DEY
POULAMI BERA
POULAMI DAS
PRAMIT CHAUDHURY
PRASUN PAL
PRERONA ROY
PRITAM SHYAMCHOWDHURY
PRIYA PAUL
PROSENJIT SIKDAR
RAJ GUPTA
RAJA SUR
RAJARSHI SAHA
RANJEET KUMAR
RANOJOY BANERJEE
RAUNAK BANERJEE
RAYA GHOSH
REME SHARMA
RITABRATA BASUDHAR
ROHIT KUMAR
ROHIT SEN
ROUNAK GUPTA
RUDRA CHAKRABORTY
SACHITANAND PARIDA
SAKSHI KUMARI
SANDEEP SINGH CHOUDHARY
SARFARAJ ANSARI
SATWIK BAIDYA
SAURABH SUMAN
SAWANT KUMAR
SAYAK MAITY

SESHADRI SEKHAR MAITI
Shalini Banga
SHANKHADEEP DAS

SHASWATA MUKHOPADHYAY
SHIBADITYA DAS
SHRESHTHA SAHOO
SHREYASI KUNDU
SHUVAM PAL
SK SAHIDUR RAHAMAN
SNEHASISH GHOSH
SNIGDHAJYOTI GHOSH
SONALI PRIYA
Soumik Das
SOURAV DAS
SOURISH MUKHERJEE
SOURJODIPTA DAW
SPARSHI PARASHAR
Sreejit Chakraborty
Sreerupa Kumar
Srimita Ghosh
Srotoswini Das
Subhadeep Kar
Subhajit Chakrabortty
Subhrajeet Bose

Sudipto Deb
Sujoy Aich
Sumair Khan
Sunit Kumar Singh
Supratim Mitra
Supravo Bhattacharyya
Supriya kumari
Surajit Ghosh

Tamal Biswas
Trishita Choudhury
TUHINA MALLICK
Upasana Biswas
Vatsal Harlalka
ALKA KUMARI
ARVIND KUMAR
CHANDRIMA BANERJEE
DEBOMITA CHATTERJEE
DIVANGI DEBBARMA
Gopa Mandal
Jayasree bardhan
KANCHAN KUMARI
KAPIL MONDAL
LAXMI KUMARI MAHTO
Milon Mondal
NURISLAM MOLLA
PIYALI GHOSH


RAJDEEP GUPTA
RAMA ACHARYA
SAIKAT CHOWDHURY
SANTAM ROY
SAYAN SAHA

SAYANTANI DAS
SREYA GHOSH
Ipshita Basak
</ol>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>ECE 2020</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h6">
          
          </Typography>
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
