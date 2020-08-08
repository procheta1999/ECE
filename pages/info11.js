import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'code', label: 'Email ID', minWidth: 100 },
  {
    id: 'population',
    label: 'Phone Number',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'size',
    label: 'Others',
    minWidth: 170,
    align: 'right',
  },
];

function createData(name, code, population, size) {
  return { name, code, population, size};
}

const rows = [
    createData('AARISH  SHAHAB','aarish.danish@gmail.com',9088050985,26653291),
    createData('ABHIJIT  SAHA','abhijit.nsec.ece@gmail.com',9804660765,9474112847),
    createData('ABHIMANYU  BASU','abhimanyu.basu15@gmail.com',9732523656,264453),
    createData('ABHISEK  KUNDU','abhisek.per@gmail.com',9932751619),
    createData('ADARSHA  CHOWRASIA','chowrasia3@gmail.com',9933742263,9933898690),
    createData('ADITYA  AGARWAL','adiagarwal12@gmail.com',9831167151,25558820),
    createData('ALOK  NASKAR','alok.knowme@gmail.com',9874756074,24329113),
    createData('AMAL KANTI BARIK','amaal07@gmail.com',9038524378,23561006),
    createData('ANIK  DEY','anik9810@yahoo.in',9903886972,65293025),
    createData('ANIMESH  DEBNATH','animesh.debnath1@gail.com',9932118654),
    createData('ANIRUDDHA  GHOSH','bubinet90@yahoo.in',9804807558),
    createData('ANKIT  BHATTACHARYA','ankitnsec@gmail.com',9832204704),
    createData('ANSHU  PRIYA','pnshu_ariya21@yahoo.co.in',9883878201),
    createData('ANWESHA  PAN','anwy.love@gmail.com',9748302214,25642978),
    createData('ANYAPURBA  DEBNATH','sweet.anyapurba@gmail.com',9874048863,24383410),
    createData('APURBA  GHOSH','apurba.dh@gmail.com',9733882692),
    createData('ARIJIT  RAY','arirocks22@gmail.com',9874806032,24119306),
    createData('ARINDAM  MONDAL','aarindam.mmondal@gmail.com',9874031909,),
    createData('ARNAB  MAJUMDER','arnab140589@gmail.com',9903333303),
    createData('ARNAB  MUKHOPADHYAY','arnabm13@gmail.com',9051809659,23217611),
    createData('ARNAB  ROYCHOWDHURY','arnab_roychowdhury@hotmail.com',9883744439),
    createData('ARNAB KUMAR BANERJEE','tutun00@gmail.com',9903990203,9903990203),
    createData('ARPAN  GANGULY','arpanganguly1989@gmail.com',9832765554),
    createData('ARPITA  NATH','natharpita99@gmail.com',9433913141,24158249),
    createData('ARPITA  SAHA','mamanisaha@gmail.com',9432386240,25658413),
    createData('ARUNAVA  GHOSH','ayanthesun@gmail.com',9614637587,9434435416),
    createData('ARUP KUMAR NAYAK','nayakarup09@gmail.com',9832298681,9832792752),
    createData('AVIK  CHAKRABORTY','avicknsec89@gmail.com',9874789440),
    createData('AVIK  DAS','aavikdas@gmail.com',9051253061,25488383),
    createData('AVIK  PAL','palaveek9@gmail.com',9874375730,24107593),
    createData('AVISEK  GUPTA','avisek9687@gmail.com',9836430338,26451116),
    createData('BIKRAM  ROY','roybikram50@gmail.com',9434999353),
    createData('BIPASHA  MUKHERJEE','bipasha_2609@yahoo.co.in',9903687330),
    createData('BIPIN BEHARI MAJUMDER','majumder.bipincommunication@gmail.com',8100224251),
    createData('CHANDAN KUMAR BHAGAT','chandan_bhagat2001@yahoo.com',9681107469),
    createData('CHANDRIMA  CHAUDHURI','chandrima.chaudhuri@gmail.com',9883664348),
    createData('CHIRANJEET  DAS','chiranjeet195@gmail.com',9874465444,9830017532),
    createData('CHIRANJIT  MANDAL','chiranjitpositive@gmail.com',9433422776),
    createData('DEBASHIS  CHAKRABORTY','debashis157@gmail.com',9477414045,9831324651),
    createData('DEBOPAM  NANDA','debopam.nanda@gmail.com',9163845414),
    createData('DEEP  BERA','deepatece@gmail.com',9903273080,9874789390),
    createData('DEEPAK KUMAR GOYAL','bluespark89@gmail.com',9804660944,9934578431),
    createData('DEEPAN  NAYAK','nayak.deepan@gmail.com',9038561305),
    createData('DHIMAN  BHATTACHARYYA','dhiman33@gmail.com',9874163161,24038493),
    createData('DHRUBAJYOTI  DEB','dhrubadj.18@gmail.com',9836486320,24127377),
    createData('DIBYA  GHOSH','dibgh.1989@gmail.com',9674124034,24289175),
    createData('DRIPTAROOP  DAS','driptaroop.das@gmail.com',9903312313,24307366),
    createData('GANESH CHANDRA KAR','ganesh.kamalpur@gmail.com',9851769731),
    createData('IPSITA  GHOSH','ipsita.indu@gmail.com',9830999438,26380170),
    createData('IPSITA  PAUL','ipsitapa@gmail.com',9748157030,25359691),
    createData('JAIDEEP  CHOWDHURY','chowdhuryjaideep08@gmail.com',9831694494,24409357),
    createData('JAYANTA  DEY','jayanta.eg@gmail.com',9903428399,9933430425),
    createData('JEET  GHOSH','jeetnsec@gmail.com',9804459551),
    createData('JOJO  ACHARYA','jojoacharya@rediffmail.com',9874379411,22612560),
    createData('JUTHIKA KARMAKAR','j.karmakar2010@gmail.com',9836615540),
    createData('KAUSHIK  SARKAR','sarkar.kaushik2@gmail.com',9432492971,24211283),
    createData('KAUSTOOV  DAS','kaustoov182007@gmail.com',9831709596),
    createData('KOUSTUV  BHATTACHARYA','worshipurwork@gmail.com',8013318878),
    createData('KUMAR  RAMAN','raman1901@gmail.com',9681541549,9304028255),
    createData('MADHUKAR  KUMAR','coolncrazymadhukar@gmail.com',9038224156),
    createData('MAINAK  BASU','mainak19.basu@gmail.com',8013468421),
    createData('MAYUKH  BASU','rishiwhite@gmail.com',9836028493,9830688592),
    createData('MD RIAZ ALAM KHAN','riaz.khan228@gmail.com',9851866099),
    createData('MD SAHIR AHAMED','sahir8888@gmail.com',9830685516),
    createData('MRINAL  DUTTA','mrinaldutta90@gmail.com',9874428582),
    createData('MRINMOY  ROY','roy.mrinmoy@rocketmail.com',9614178787),
    createData('NEELAY SUVRA KARMAKAR','neelay.suvra@gmail.com',9432165488,9433746808),
    createData('OEINDRILA  BANERJEE','banerjee.oeindrila450@gmail.com',9836374028,24635089),
    createData('PALLAVI  KARMAKAR','pall_avie@rediffmail.com',9433849666,26819020),
    createData('PARTHA PRASAD ROY CHOWDHURY','p.roychowdhury@yahoo.co.in',9163519883),
    createData('POOJA  ROYCHAUDHURY','rc_pooja@yahoo.in',9836338790,23374211),
    createData('PRADEEP KUMAR NANDY','pdp.black@gmail.com',9830613566,24409357),
    createData('PRANOY  CHATTERJEE','pranoy.pc@gmail.com',9433446778,25457932),
    createData('PREETAM  DATTA','bidadatta@gmail.com',9830743461,24109061),
    createData('PRITAM  CHOWDHURY','www.pritam.net@gmail.com',9748280640,24772664),
    createData('PRITHA  DAWN','pritha.dawn@gmail.com',9903513446),
    createData('PRIYANKAR  DAS','priy.das7777@gmail.com',9933329763),
    createData('PUJA  BHATTA','bhattapuja@gmail.com',9874681655,25483994),
    createData('RAJA  MALAKAR','rajafrnd700@gmail.com',9477473881,9046621211),
    createData('RAKESH  RANJAN','rakeshranjan.nsec@gmail.com',9051373584),
    createData('RAKTIM  CHOUDHURY','raktim010@gmail.com',9836636522),
    createData('RAVI  KRISHNAN','ravikrishnan89@yahoo.co.in',9903675214,24354172),
    createData('RICKJOY  CHATTERJEE','rickjoychatterjee@gmail.com',9830674235,24647001),
    createData('RISHAV RAJ MAROTI','rish_705@yahoo.co.in',9874230328),
    createData('SANDIPAN  KUNDU','rajasandy@gmail.com',9831288467,25584155),
    createData('SANJIB KUMAR GHOSH','sanjib.ec@gmail.com',9474301256),
    createData('SANJOY  MAHATO','sanjoy1990@gmail.com',9732375825,9883234106),
    createData('SANTANU  GHORAI','santanu.ghorai@hotmail.com',9874482456),
    createData('SANTU SOVAN MANDAL','jobs.santu89@gmail.com',9143254123,9732562014),
    createData('SARVESH KUMAR PANTHI','sarvesh2004143@yahoo.co.in',9862437253,9760204269),
    createData('SATADRU  KUNDU','satadrukunduece@gmail.com',9681283482),
    createData('SATISH  KUMAR','satishonlin@gmail.com',9903506421),
    createData('SAUMIK  BHATTACHARYA','saumik.trendz@gmail.com',9051353143,24271490),
    createData('SAYAM  GANGULY','sayamganguly@gmail.com',9830432420,8013574224),
    createData('SAYANTAN  GHOSH','sayantan.electronics@gmail.com',9038514523),
    createData('SAYANTIKA  CHAUDHURI','rosh_sandy2000@yahoo.com',9874276950),
    createData('SHAIBAAN  MUDASSIR','mudassir_0210@yahoo.com',9874230329,22845420),
    createData('SHUBHAM ROY GHATAK','srgrocks@gmail.com',9038933841),
    createData('SK GOLAM MORTAZA','chand3131@gmail.com',9836534831),
    createData('SNEHASISH  MITRA','snehasishmitra@ymail.com',9830699275),
    createData('SOHAM SINHA','soham3s@rediffmail.com',9831912376,24817848),
    createData('SOUGATA CHATTERJEE','i.control.spirits@gmail.com',9836003798,24107663),
    createData('SOUMEN  CHOWDHURY','soumen_ch1990@yahoo.in',9836580084,25910328),
    createData('SOUMENDRA KUMAR AGASTI','www.soumendraagasti@yahoo.com',9433041342,25822423),
    createData('SOUMYADIP  GHOSH','soumyadip047@gmail.com',8013390283),
    createData('SOUVIK  CHOWDHURY','souvik198802@gmail.com',9836011984,),
    createData('SOUVIK BASU THAKUR','souvik.basuthakur9@gmail.com',9836870106,24181836),
    createData('SOUVIK ROY','souvik.roy88@gmail.com',9836994419),
    createData('SRIKRISHNA  YADAV','srikrishnayadav@rediffmail.com',9903350776),
    createData('SUBHADIP  MONDAL','subho.rock2010@gamil.com',9432839340),
    createData('SUBHAJIT  MUKHERJEE','mukherjee.subhajit520@gmail.com',8981823170,65165253),
    createData('SUBHANKAR  BHATTACHARJEE','mail.subhankarbhattacharjee@gmail.com',9748818201,24128249),
    createData('SUBHANKAR  PAUL','ssuubbhhaannkkaarr@gmail.com',9433350495,25482783),
    createData('SUBHOJIT  CHAKRABORTY','subho.c03@gmail.com',9614339406,24658595),
    createData('SUBHRAMOY  MOHANTI','subhramoy@yahoo.com',9874580824,24976584),
    createData('SUJIT  BANERJEE','sujit15sept@gmail.com',9831770810,24021189),
    createData('SUKRIT GHOSH','sukrit_ghosh_11@hotmail.com',9231681694,25485848),
    createData('SULAGNA  LAHA','sulagna33@rediffmail.com',9051317880),
    createData('SUMAN MAITI','suman.nsec.maiti@gmail.com',9903305194),
    createData('SUMAN KUMAR DAS','sumankumardas347@yahoo.co.in',9804163427,9804163427),
    createData('SURAJIT  MONDAL','surajit.biplab@gmail.com',9088231671,26653291),
    createData('SURIT  KAPOOR','suritkapoor@gmail.com',8013813369,9748932964),
    createData('SUSHANT  KUMAR','skumarece83@gmail.com',9681261263,24361286),
    createData('TAMAL  NASKAR','naskar.tamal@gmail.com',9748141175,25666850),
    createData('TANMOY  PAL','tanmoy68@gmail.com',9593894554),
    createData('TAPAS  JANA','tjanansec@gmail.com',8013660088,9051424570),
    createData('TARA SANKAR PATRA','patratarasankar@gmail.com',9432829981),
    createData('TATHAGATA  CHATTERJEE','tatha_rdra@yahoo.co.in',9804116380,23986909),
    createData('TITIR  DUTTA','dutta.titir@gmail.com',9432295651,26692273),
    createData('TUHIN  ROY','tuhin_royjpg@rediffmail.com',9339771956),
    createData('UDAY KUMAR MANI','prathic.mani@gmail.com',8100387166),
    createData('UDITA  SENGUPTA','usg_wb@yahoo.co.in',9883408051,25593089),    

];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function StickyHeadTable1() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
