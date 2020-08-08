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
  createData('ABDUL AZIZ ALAMAN','abdulaziz_alaman@ymail.com',9800018839),
  createData('ABHIMAN GAURAV','abhiman41@gmail.com',9163517356),
  createData('ABHINAV PRAKASH','abhiprakash.1990@gmail.com',9832221322),
  createData('AISHEE DAN','aishee1992@gmail.com',8902622087),
  createData('AKASH MUKHERJEE','akashshadeslayer@yahoo.com',9831509971),
  createData('ALHELAL HOSSAIN','rock.sike44@gmail.com',8926467309),
  createData('ALOK KUMAR','alokk3351@gmail.com',8276876203),
  createData('ALOK KUMAR','alokkmr666@gmail.com',7278730133),
  createData('AMARJYOTI ROY CHOWDHURY','amar.rchowdhury@gmail.com',9051198131),
  createData('AMARTYA CHATTOPADHYAY','a4amartya@gmail.com',9804501614),
  createData('ANASUYA KUNDU','anasuya.kundu@gmail.com',9874567822),
  createData('ANINDYA CHANDRA','anindyaa.chandra@gmail.com',9932666373),
  createData('ANINDYA DAS','jdascomingtoyou@gmail.com',9038340537),
  createData('ANKUR','ankurbharadwaj31@gmail.com',8981979368),
  createData('ANNESHA RAY','annesha.ray8@gmail.com',9851704689),
  createData('ANTARIKSH ROY','meetantariksh@gmail.com',8961452831),
  createData('ANU CHOWDHURY','rareanu@gmail.com',9831088601),
  createData('ARINDAM MANDAL','arindammandal@live.com',9593030905),
  createData('ARJUN KUMAR SAHANI','sahani.arjun26@gmail.com',8981846603),
  createData('ARK SHAHI','ark.shahi@gmail.com',8981177437),
  createData('ARNAB DEY','arnabdey36@gmail.com',9748974383),
  createData('ARNAB SARKAR','arnab.jv.ece@gmail.com',9007488142),
  createData('ARNAK GHOSH','arnakghsh531@gmail.com',9038565102),
  createData('ARPAN GANGULY','ganguly.arpan.arpan@gmail.com',9547276851),
  createData('ASHISH KUMAR KARN','ashishkrkarn@gmail.com',8293829604),
  createData('AUROBINDA MAHAPATRA','amahapatra25@gmail.com',9476475420),
  createData('AVISHEK DATTA','avishekdatta.07@gmail.com',9674980797),
  createData('BAISAKHI GUPTA','baishakhigupta23@gmail.com',9474998235),
  createData('BAPPA DAS','123bappa.2012@gmail.com',9593140505),
  createData('BEAUTY KUMARI','beautyasoul@gmail.com',9903203819),
  createData('BHAKTI NATH BERA','joy.bera.05@gmail.com',9830906979),
  createData('BISWAJIT DEB','biswa_deb89@rediffmail.com',9681910175),
  createData('BODHAYAN BHATTACHARYA','bhattabodha@gmail.com',9051803327),
  createData('CHAITALI GHOSH','chaitalichaiti91@gmail.com',9093591221),
  createData('CHANDAN KUMAR SINGH','cksindian1@gmail.com',7278544724),
  createData('CHANDRA SHEKHAR KUMAR','shekhargupta6@gmail.com',8961301434),
  createData('CHAYAN SAMANTA','samanta.chayan1991@gmail.com',9830451903),
  createData('DAVID DE','david@inquirylearning.com',9874526941),
  createData('DAYANAND GIRI','dgiri149@gmail.com',8961847631),
  createData('DEBKUMAR KUNDU','ramukbed@gmail.com',9038499565),
  createData('DEBAL DUTTA','dddebal06@gmail.com',9126798649),
  createData('DEBARATI MONDAL','mondal.debarati73@gmail.com',7501783940),
  createData('DEBOPRIYA DATTA','debopriyadatta@gmail.com',9143000400),
  createData('DEEPAK KUMAR','deepak.purnia@gmail.com',8820415547),
  createData('DIBYENDU AKHULI','dibyenduakhuli201993@gmail.com',9046144926),
  createData('DIBYENDU DUTTA','dibyendu.baba.007@gmail.com',8981392227),
  createData('DWAIPAYAN MONDAL','dwaipayanmondal@gmail.com',9614885519),
  createData('GAURAV KUMAR','gauravnewatia111@gmail.com',8961966574),
  createData('GOURAB DAS','gourab092@gmail.com',9933091687),
  createData('INDRAJIT MONDAL','mondalindrajit92@gmail.com',9038550575),
  createData('JAY SINGH','welcomejay05@gmail.com',8442911459),
  createData('JOYDEEP ROY','jroy2761@gmail.com',9038972670),
  createData('KARIMUL SANFUI','skarimul@gmail.com',8001944295),
  createData('KARN KUMAR','karn.kumar9@gmail.com',9163632743),
  createData('KAUSHIK GANESAN','kaushik.ganesan940@gmail.com',9038536245),
  createData('KAUSIK DEY','kausik1810@gmail.com',9432432728),
  createData('KAUSTAV BASU','kauzz_77@yahoo.co.in',9674785119),
  createData('KOUSHIK MAZUMDER','koushikmazumder408@yahoo.com',9002273833),
  createData('KUMARI VANDANA','pinki.sirchan@gmail.com',8100540691),
  createData('LALU YADAV','yadav.leader@gmail.com',9748228468),
  createData('MADHUMITA GHOSAL','ghosalmadhumita@gmail.com',8444910787),
  createData('MOHAMMAD ARIF HOSSAIN','mdarifhossain1@yahoo.com',9007424227),
  createData('MD ASMAUL PAIK','asmaulpaiknsec@gmail.com',8926622354),
  createData('MD RAKIBUL ISLAM','himelece276@gmail.com',8820065392),
  createData('MD SAMIM HAIDER','mdsamimhaider@gmail.com',9046998788),
  createData('MD ZIYA HASEEN','md_ziya_haseen@ymail.com',7699138267),
  createData('MD NAFIS ALAM','alamnafisalam1392@gmail.com',8013304500),
  createData('MEDHA GHOSHAL','medhaghoshal@yahoo.com',9830625957),
  createData('MILTON BASUMALLICK','miltonbasumallick@gmail.com',8981496545),
  createData('NEERAJ NAYAN','nnayan2@gmail.com',8981580043),
  createData('NILOY DEY','niloydeyanuj@gmail.com',9836795972),
  createData('NILU KUMARI','nilubarnwal1@gmail.com',9883249872),
  createData('NITESH KUMAR DUBEY','niteshdubey111@gmail.com',9431971120),
  createData('NIVEDITA DAS','nivedita.das93@gmail.com',9874191746),
  createData('PRATEEK KUMAR','kumar.prateek786@gmail.com',8961301744),
  createData('PULAK DAS','das.pulak91@gmail.com',9874269325),
  createData('PUSHKAR BHARDWAJ','pushkar.in.2009@gmail.com',8013211675),
  createData('PUSPAJIT DANDAPAT','puspajitdandapat@gmail.com',9836048582),
  createData('RAKESH CHOWDHARY','rakeshchowdhary70@gmail.com',8981647373),
  createData('RAKESH RAUSHAN','anuj2190@gmail.com',8961173965),
  createData('RAMKRISHNA SAHOO','rksahoo91@gmail.com',9674534710),
  createData('REETESH KUMAR','rnuj14@gmail.com',9038887179),
  createData('RICHA PATIL','richapatil38@gmail.com',8820655639),
  createData('RINTU NANDI','nandi.rintu@gmail.com',9734813267),
  createData('RITURAI BHATTACHARYYA','riturai.nsec@gmail.com',9874318008),
  createData('ROHIT KUMAR SINGH','singhrohit.nece@gmail.com',8820415559),
  createData('SAISAB CHAKRABORTY','saisabchakraborty586@gmail.com',8961611869),
  createData('SAMIK MALLIK','samik.nsec39@gmail.com',9434821160),
  createData('SANTANU ADHIKARI','antaras.santanu@gmail.com',9143505097),
  createData('SANTANU CHAKRABORTY','rahul.chakraborty72@gmail.com',9874244591),
  createData('SATABDI DAS GUPTA','satabdidasgupta1992@gmail.com',8373835501),
  createData('SATYAKI CHAKRABORTY','satyakikumar@gmail.com',8373835510),
  createData('SAUMYA SHANKAR SARKAR','jacob2310@gmail.com',9088407594),
  createData('SAYAN UPADHYAY','sayanupadhyay08@gmail.com',8981866263),
  createData('SAYAR SAHA','sayarsaha@gmail.com',9831333887),
  createData('SHANTANU SHRESHTH','shantanu.b67@gmail.com',8981988069),
  createData('SHREYA RUNGTA','rungtashreya26@gmail.com',9874767793),
  createData('SHUBHARITA MUKHERJEE','mukherjee.shubharita@gmail.com',8820244018),
  createData('SK.MOSIOR RAHAMAN','mosior.nsec@gmail.com',9564890654),
  createData('SNEHADEEP BANERJEE','snehadeepbanerjee@gmail.com',8981889620),
  createData('SOHAM DEY','sohamdey76@gmail.com',9874736572),
  createData('SOMSUBHRA BANERJEE','banerjeesomsubhra166@gmail.com',9674568829),
  createData('SOUMI PAL','soumipal20@gmail.com',7278640899),
  createData('SOUMIK DEY','s.dey12@hotmail.com',9851103080),
  createData('SOUMITA PATRA','soumitapatra@outlook.com',9474469400),
  createData('SOUMYA CHAKRABORTY','soumyachakraborty25@gmail.com',9051313616),
  createData('SOUPTIK CHATTERJEE','tutan.chatterjee@gmail.com',9332382880),
  createData('SOURAJ MONDAL','sourajmondal81@gmail.com',9851681646),
  createData('SOURYA DEWAN','souryadewan@gmail.com',9163090297),
  createData('SROMONA RAY','sriya1202@gmail.com',8013524238),
  createData('SUBHADEEP CHATTERJEE','chatterjeesubhadeep92@gmail.com',9477455098),
  createData('SUBHASISH BHANDARI','subhasish.biltu@gmail.com',8902671067),
  createData('SUBHRADEEP CHATTERJEE','subhradeepchatterjee28@gmail.com',9476407902),
  createData('SUBODH KUMAR SUDARSHAN','subodhkumarsudarshan@gmail.com',8820320457),
  createData('SUDIP KUMAR DAWN','sudipr15@gmail.com',9614503406),
  createData('SUMANTA BHATTACHARYYA','sumanta.taken@gmail.com',9475564187),
  createData('SUMIT KUNDU','sumit.kundu17@gmail.com',8961605151),
  createData('SUSHMITA KUMARI','sushmitkd@gmail.com',9955628343),
  createData('SYAMANTAK DUTTA','syamantakdutta@yahoo.com',9432013006),
  createData('TATHAGATA RAY','tathagata.ray100@gmail.com',9531741800),
  createData('VANDANA','vandana1251992@gmail.com',8820602764),
  createData('VIKASH KUMAR JHA','vikkyjha101@gmail.com',9007728360),
  createData('WASIF NAFIS','wasifnafis@yahoo.com',9830006407),
  createData('WASIM ANSARI','wasim.9905@gmail.com',8981874950),
  createData('WASIM REJA','w.reja@ymail.com',9609636590),
  createData('YOGESH KANOI','yogesh.kanoi@gmail.com',9836751653),
  createData('YUVRAJ KUMAR','rajs5000@gmail.com',9234616475),
  createData('MAHFOOZ ALAM SIRAJEE','sirajeeshubho@gmail.com',8820497057),
  createData('SAYAN ROY','sayan816@gmail.com',9038979816),
  
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function StickyHeadTable4() {
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
