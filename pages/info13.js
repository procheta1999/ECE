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
    createData('ABHIJEET DUTTA','abhijeetdutta2071990@gmail.com',8017501482),
createData('ABHISHEK BANERJEE','abhishek.banerjee678@gmail.com',8013658451),
createData('ABHISHEK KUMAR','avisek1942@gmail.com',91892727760),
createData('ABHISHEK SAHA','abhishek730@gmail.com',9038567621),
createData('ADITI DAS','aditi.nsec@gmail.com',9563787294),
createData('ADRITO SANYAL','adritosanyal@gmail.com',9831520507),
createData('AGNI SHEKHAR SHUKLA','agnishekharshukla@gmail.com',8820159858),
createData('AKANKSHA RAJGARIA','rluvauna@yahoo.in',8820696320,23502560),
createData('AKSHAY KUMAR','krakshay91@gmail.com',9883343892),
createData('ANAND KUMAR','anand.wwe@gmail.com',8100567686),
createData('ANIRUDDHA MONDAL','animondal712409@gmail.com',9651165110),
createData('ANISH KUMAR','ans74758@gmail.com',9804966144),
createData('ANKANA DAS','suprgalanky@gmail.com',8981612151),
createData('ANKIT BAJAJ','bajaj.ankit1991@gmail.com',9804817841),
createData('ANKUSH DAS','ankushd44@gmail.com',9830431381),
createData('ANSHIKA JAI','anshika2100@gmail.com',9883780226),
createData('ARCHNA KUMARI','archnakumarich@gmail.com',8981522748),
createData('ARIJIT GHOSH','arijit.ghosh117@gmail.com',9563350016),
createData('ARITRA GHOSH','aritra.dravid007@gmail.com',9163207601,25941008),
createData('ARKO CHATTERJEE','coolarko004@gmail.com',9038407739),
createData('ARNAB SHETH','arnabsheth@gmail.com',8961436757),
createData('ASHIM CHAKRABORTY','asimchakraborty1990@gmail.com',9733906089),
createData('ASHUTOSH KUMAR','kashu1218@gmail.com',9681089189),
createData('AVINIBESH DEY','avinibeshd@gmail.com',8961220069),
createData('AVISHEK SIL','silavishek@gmail.com',8900619529),
createData('AWANISH KUMAR','awinsec@gmail.com',8100362210),
createData('BIBEK CHINA','bibekrock@gmail.com',8348360272),
createData('BIMALENDU DOLUI','99bimal99@gmail.com',9038228306),
createData('BINAY CHANDRA DEBNATH','binay.debnath@gmail.com',9477122328),
createData('BODHISATTA PRAMANIK','bodhipramanik@gmail.com',9874915582,23774846),
createData('CHANDAN KUMAR SINGH','chandan3623@gmail.com',8820776577),
createData('CHANDRANIVA MUKHERJEE','chandranivamukherjee111@gmail.com',9474831484),
createData('DEBADRITA CHAKRABORTY','debadrita.kol.tech@gmail.com',8981618467),
createData('DEBARGHYA BHATTACHARYA','debarghyadrmr@gmail.com',9051327132),
createData('DEBASMITA ROY','debasroy7@gmail.com',9062418619),
createData('DEBOJYOTI DEBNATH','ddebnath1989@gmail.com',7890634007),
createData('DEEP BHATTACHARJEE','dbakash2@gmail.com',7278456931),
createData('DEEPAYAN BANDYOPADHYAY','deepayanbandyopadhyay@yahoo.in',9062091252,24829882),
createData('DEVLEENA DEY','itsmedevleena@gmail.com',9046205967),
createData('DIBYA RANI MISHRA','dibyamishra10@gmail.com',8013604373),
createData('DIBYENDU MITRA','dibyendu.mitra90@gmail.com',8768282869),
createData('DILIP KUMAR SINGH','dilipsinghdk@gmail.com',8981170393),
createData('GOURAB HALDER','ghalder142@gmail.com',8101387313),
createData('HUMAYUN KABIR SARKAR','kabir.sarkar143@gmail.com',8013717143),
createData('INDRANIL DEY','ideyrocks@gmail.com',9832891131),
createData('JUGRAJ SINGH','jugraj.91@gmail.com',9062545725),
createData('KAUSHIK BASAK CHOWDHURY','soumyakbc@gmail.com',8017754001,25222862),
createData('KAUSHIK GHOSH','kaushikghosh03@gmail.com',8961133074,25622719),
createData('KHANDEKAR MOHAMMAD SALEH','msnishan@gmail.com',9749478569),
createData('KOUSTUV CHAKRABORTY','koustuv.c7@gmail.com',9874671235),
createData('KUMAR ANAND','kr.anandgarg@gmail.com',9051644088),
createData('KUSAL NANDY','kusalmbfan@gmail.com',9143151519),
createData('LALTU KARMAKAR','laltuk@gmail.com',9474699301),
createData('MAHARSHI MANNA','maharshimanna@gmail.com',9038729860),
createData('MANAS SAHA','manas.saha.ece@gmail.com',9038068182),
createData('MANASIJ GHOSHAL','manasij52@gmail.com',9163181790),
createData('MASTER LAW','masterlaw7@gmail.com',8100455502),
createData('MD MAROOF NIZAMI','maroofnsec@gmail.com',8981602307),
createData('MOUBANI CHATTERJEE','moubani2011@gmail.com',9903856994,25235056),
createData('NISHAN MUKHERJEE','abhimukh1990@gmail.com',9830937102),
createData('PALLAWI','pallawinsec@gmail.com',8100799975),
createData('PANKAJ KUMAR','pk36240@gmail.com',8981514849),
createData('PARAMITA SANTRA','paramita.santra@gmail.com',9681178581),
createData('PARTHAJIT DUTTA','parthaduttajit@gmail.com',8961795234),
createData('POULOMI DAS','das15poulomi@gmail.com',9038696508),
createData('PRADEEP KUMAR SINGH','raj.ratedr001@gmail.com',9932475212),
createData('PRAKASH KUMAR SINHA','prakashsinha057@gmail.com',8100947399),
createData('PRASHANT KUMAR','prashantkumar2206@gmail.com',9681992400),
createData('PRAYASH MUKHERJEE','prayashrocz@gmail.com',9830606414,24644699),
createData('PRITI SUNDAR GIRI','priti.nsec@gmail.com',8981050242),
createData('PROSENJIT DAS','prosenjit.das96@gmail.com',9641701499),
createData('RAHUL CHAKRABORTY','rdifrahul@rediffmail.com',8100862388),
createData('RAJEEV KUMAR','rajeev.skp@gmail.com',9903494198),
createData('RAJIV KUMAR GUPTA','rajivgupta1812@gmail.com',9681977901),
createData('RANABIR ASH','ranabirash@gmail.com',9547155071),
createData('RIMAN SAHA','rimansaha@live.com',7501834389),
createData('RITWIKA SEN GUPTA','ritwika.14sengupta@gmail.com',9836022784),
createData('ROHON GHOSH','rohonghosh@yahoo.in',9836197964),
createData('ROSHNI SAHA','roshni_saha@yahoo.in',9831417383),
createData('S ARVINDH','sarvindh91@gmail.com',9163248900),
createData('SABYASACHI CHATTAPADHYAY','sabyasachichattapadhyay@gmail.com',9088646990),
createData('SAGAR SARKAR','sagar.sarkar31@gmail.com',8013839650),
createData('SAIKAT DAS','rijuadra@gmail.com',7501281318),
createData('SAMIT DAS','samitds4@gmail.com',9679045540),
createData('SAMSUR RAHAMAN','samsrahman@gmail.com',7501077010),
createData('SANDIP DUTTA','sdutta296@gmail.com',7278544734),
createData('SANKHADEEP SAHA','sankha123deep456@gmail.com',9038978901),
createData('SANTANU JANA','jan.santanu@gmail.com',7407347982),
createData('SAPTARSHI GHOSH','ghoshelec@gmail.com',9614304958),
createData('SARAN KUNDU','sarankundu@gmail.com',8961486933),
createData('SAYANTAN CHAKRABORTY','sayantanchakraborty95@yahoo.com',9903660499),
createData('SHAHEEN SHAMSHAD','shaheenshamshad@gmail.com',9681068034),
createData('SHANKHAMITA CHOUDHURY','shankhamitachoudhury@gmail.com',8582958849),
createData('SHANTA MAZUMDER','shantamazumder2@gmail.com',9836206750),
createData('SHANTANU DEY','shantanudey1990@gmail.com',9732895757),
createData('SHRUTI SANGAM','shrutisangam007@gmail.com',9681891129),
createData('SHUVAM ROY','shuvamroy007@gmail.com',9681294447),
createData('SHUVENDU NAYEK','shuvendunk.sonamukhi@gmail.com',9476319453),
createData('SINCHAN BHATTACHARJEE','sinchanbhattacharee@gmail.com',9038587906),
createData('SK ESRILE','esrile10@yahoo.com',9883839811),
createData('SK KHAIRUL ALAM','enggralam@gmail.com',8100386298),
createData('SK MASUD HOSSAIN','rocky.hossain8@gmail.com',9932442432),
createData('SOHAM MAJUMDER','sohamblaze@gmail.com',9681817947),
createData('SOHAM SAMANTA','sohamsams007@gmail.com',9475222233),
createData('SOHAN DUTTA','sohanduttarkms@gmail.com',9143016236),
createData('SOUGATA SATPATI','sougata.ece.91@gmail.com',9475414138,),
createData('SOUMENDRA NATH RAKSHIT','soumen25nsec@gmail.com',9749232866),
createData('SOUPARNA LODH','souparno123lodh456@gmail.com',8981146389,9331419103),
createData('SOURABH BAKSHI','sourabh91j@gmail.com',9163696306),
createData('SOURAV DEY','souravnsec2009@gmail.com',7278814232,25350140),
createData('SOUVIK BISWAS','souvik1991.biswas@gmail.com',9733220738),
createData('SRITAPA LAHA','bidisha011191@gmail.com',8820266736),
createData('SUBHAJIT DEBNATH','subhajit.debnath251290@gmail.com',9836712435),
createData('SUBHAJIT GHOSH','subhajit92.nsec@gmail.com',9593514936),
createData('SUBHAS MAJI','maji.subhas@gmail.com',8972315553),
createData('SUBHOJIT MOITRA','moitrasubhojit@gmail.com',9038772496),
createData('SUKANTA DEBNATH','subhadebnath85@gmail.com',9007159729),
createData('SUMAN DAS','sumands19@gmail.com',8981832291),
createData('SUMANTA KUMAR GHOSH','sumantaghosh248@gmail.com',9547649478),
createData('SURAJIT DAS','surajitdastatai@gmail.com',8116841860),
createData('SURYADEEP ROY','suryadlight.01@gmail.com',9046812902),
createData('SUSHANT KUMAR','sushant_k2@yahoo.co.in',8961121885),
createData('TAPAMAY DAS','tapamaydas@gmail.com',8013526263),
createData('TIYAS ROY','roytiyas692@gmail.com',8981112858,25825574),
createData('UDIPTO CHATTERJEE','awesomemeudipo@gmail.com',7699021897),
createData('UTSA BHATTACHARJYA','utsa604@gmail.com',9836709604,24114708),

];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function StickyHeadTable3() {
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
