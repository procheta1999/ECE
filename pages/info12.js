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
    createData('ABHIRUP PAL','apal008@gmail.com',8961623384),
createData('ABHISEK CHATTERJEE','kutty.chatterjee4@gmail.com',9830364634,64508773),
createData('ABHISHEK  BANERJEE','hrijuforever@gmail.com',9748281644,24136622),
createData('ABHISHEK DAS','abhishekriju@gmail.com',9874692748,26538824),
createData('ALISHA VERMA','alisha.verma598@gmail.com',8697333190,25776097),
createData('AMARTYA BISWAS','amartyabiswas1@gmail.com',9432828684,24485483),
createData('ANIMA DEY','sanima190989@gmail.com',9748102452),
createData('ANIRUDDHA MAJUMDER','aniruddha.majumdar77@gmail.com',8961455727,24340046),
createData('ANSHU SINHA','anshu.sept@gmail.com',9748960323,9934972547),
createData('ANWESHA BHOWMIK','anwessha28@gmail.com',9775950371),
createData('ARIJIT CHAKRABORTY','arijitc19@gmail.com',9432205457,24298194),
createData('ARIJIT GUHA BISWAS','guhabiswasarijit1990@gmail.com',8961795506,23817154),
createData('ARITRA MAZUMDAR','aritra.m2008@gmail.com',9038246073,24907068),
createData('ARITRA SAHOO','artransec1230@gmail.com',8100947131),
createData('ARKA PRAVO MAITRA','arkapravomaitra@gmail.com',9433223050),
createData('ARUNAVA MAJUMDER','lords.eden@gmail.com',9903938707,9954014075),
createData('AYAN GUHA','ayan.guhathakurata@gmail.com',9836699094),
createData('BIBEK BHATTACHARYA','bibekbhattacharya1990@gmail.com',9830985118),
createData('BIKASH MAITI','bukashnsec@gmail.com',9681108592,9933675959),
createData('BISWAJIT CHATTOPADHYAY','bj.mb18@gmail.com',8100947388,25671879),
createData('DEBABRATA KARMAKAR','dkarmakar3391@gmail.com',9062110799),
createData('DEBAJYOTI BAG','deba12347@gmail.com',9732032719),
createData('DEBAYAN SAHA','dsdebayan@gmail.com',9474323455),
createData('DEBOJYOTI MONDAL','deborokin@gmail.com',8013166574),
createData('DEBRUPA CHAKRABORTY','debrupa.chakraborty@gmail.com',9874283213),
createData('DHRUBA CHOWDHURY','dhrubachowdhury21@gmail.com',9477442351),
createData('DURGA SANKAR KABIRAJ','dkdurga160@gmail.com',9775216352),
createData('GAURAB KUMAR MONDAL','lonely.boy678@gmail.com',9007726384),
createData('GAURI SHANKAR AWASTHI','gs.awasthi09@gmail.com',9681980496),
createData('IPSITA DEY','ipsita.proff@gmail.com',7501253963),
createData('JAGABANDHU MANNA','jagabandhu.manna09@gmail.com',9051761465,9051774652),
createData('JAYANTA DUTTA','jayantabtech@gmail.com',9674119434),
createData('JAYASHISH BANERJEE','jayashish5@gmail.com',9830776254,9830968532),
createData('JEET BHATTACHARIYA','j31589@gmail.com',9830745950,9830453128),
createData('JUKTA BASU MALLIK','juktabasumallik@gmail.com',9804831012),
createData('KISHOR KUMAR','kishorphoenix@gmail.com',9883169656,9430065080),
createData('KOUSTAV PAL','koustav.pal@gmail.com',9051141359),
createData('KUNDAN KUMAR SHARMA','kundankscrj5@gmail.com',9681722164),
createData('KUSHAL BHATTACHARYA','kbkushalbhattacharya@gmail.com',+919433624445),
createData('MAHENDRA KOLEY','mahendrakoley89@gmail.com',8100947169,26224428),
createData('MAHESH KUMAR GUPTA','maheshgpt.542@gmail.com',9007514578),
createData('MANALI PAL','palmanali30@gmail.com',9433459660),
createData('MANISHA  CHATTERJEE','manisha.proff@gmail.com',9748480977,9433039669),
createData('MANISHA CHAKRABORTY','manishac91@gmail.com',9903336584,24321940),
createData('MD SADDAM KAZMI','kazmisaddam15@gmail.com',8100382145,6112683798),
createData('MD. MANOWER  ALAM','manower4@gmail.com',9681885635),
createData('MONALISA PAL','monalisap90@gmail.com',9831107992),
createData('MOUMITA PATRA','patramoumita9@gmail.com',9733168680),
createData('NILANJANA SINHA','nilanjana1811@gmail.com',7278827527,26405611),
createData('OINDRILA BASAK','oindrilabasak@gmail.com',9831833203,23440172),
createData('PANKAJ KUMAR','pankaj.adam@gmail.com',9804628771),
createData('PARAVIN BHARTI','pbharti30@gmail.com',9330508692),
createData('PARTHA GHOSH','parthansec09@gmail.com',9143599343,9830844394),
createData('PRADIPTA GHOSH','ghosh.17pradipta@gmail.com',9635340373),
createData('PRATIK KUMAR','pratikdudes@gmail.com',9883669590),
createData('PRITAM DE','depritam30@gmail.com',9038739870,24913790),
createData('PRITAM SEN','riju.nsec@gmail.com',8961271076),
createData('PRODEEP KUMAR','pkumar2288@gmail.com',9832720939),
createData('PROSENJIT ROY CHOWDHURY','prosenjit0288@gmail.com',9831774018),
createData('RAGHABENDRA NATH DAS','raghab.das1990@gmail.com',+919051222836,24296765),
createData('RAJ KISHOR CHOWDHURY','chowdhury4rkc@gmail.com',9330028147,24926163),
createData('RAJAN KUMAR','rajannsec@gmail.com',8100387457),
createData('RAJARSHI MUKHERJEE','rajarshi.ece@gmail.com',9874286540,25947868),
createData('RAJDEEP KHAN','khan.rajdeep@gmail.com',9681659006,24820720),
createData('RAVI BHUSAN','ravibhushan721991@gmail.com',9038172876),
createData('RAYA BOSE','rayabose89@gmail.com',9836207909),
createData('RITURAJ','rajshrivastava09@gmail.com',9749543236),
createData('RONI SAHA','roni.saha04@gmail.com',9681201887),
createData('ROSY ACHARYA','acharya.rosy@gmail.com',9830787682,24116753),
createData('SABYASACHI KANGSABANIK','sabya1290@gmail.com',9088230346,9732117689),
createData('SAIBENDU KUMAR MAITI','saibendu.che@gmail.com',9609119705),
createData('SAMANWIKA MAJI','samanika666@gmail.com',9564448420),
createData('SAMIR MAITY','samirmaity01@gmail.com',+919681305770),
createData('SAMPURNO GHOSHAL','sampurno.ghoshal90@gmail.com',8013605707,9830958959),
createData('SANTANU BHAUMIK','santanubhaumik306@gmail.com',9002469122,9733824162),
createData('SAPTARSHI BASU','saptabasu@gmail.com',9038912302,24745934),
createData('SAYAN KUNDU','sayan.proff@gmail.com',9674219352,25643633),
createData('SAYAN MAJUMDAR','sayan.majumdar0@gmail.com',9874920208,25313069),
createData('SHIBASHIS KHATUA','Shibashis12khatua@gmail.com',9051140383),
createData('SHOVAN DEB','shovan.deb90@gmail.com',9038648459,25180576),
createData('SOUMYAJIT RAY','gate2soumyajit@gmail.com',9002497039),
createData('SOUMYAJYOTI HALDAR','bultai2008@gmail.com',8013587634,25421602),
createData('SOURAV BHATTACHARYA','nsec.sourav08@gmail.com',9635200963),
createData('SOURAV BODAK','bodak28@gmail.com',8961766350,23632744),
createData('SOURAV DEY','sourav3437@gmail.com',9007994283),
createData('SOURAV GHOSH','sourav.nsec.91@gmail.com',8900108588),
createData('SOURAV GHOSH','sourav90nsec@gmail.com',8293669945),
createData('SOURAV KUMAR GHOSH','skghosh90@gmail.com',9836672294,9836509652),
createData('SOURAV RAKSHIT','srakshit22@gmail.com',8972136842),
createData('SREYA ROY CHOWDHURY','sreya.roy.chowdhury@gmail.com',9051423084,24183710),
createData('SREYASI ROY CHOWDHURY','sreyasi05@gmail.com',9433116062,24625473),
createData('SRINJOY SEN GUPTA','srinjoy1990@gmail.com',8013471146),
createData('SUBHADEEP KUNDU','subhadeep.kundu41@gmail.com',9830724163,24184721),
createData('SUBHAJIT CHATTERJEE','subhajit.chatterjee90@gmail.com',9836731269,25661895),
createData('SUBHODIP KANJILAL','subhodipkanjilal65@gmail.com',9804807439),
createData('SUDIP KUMAR MONDAL','sudip.mondal2009@gmail.com',9874126522),
createData('SUDIPTA SAHA','sudiptamyname@gmail.com',9681463988,9681724856),
createData('SUSANTA GHOSH','ghoshsusanta21@gmail.com',9735801659),
createData('SUSMITA NARGIS','susmita090@gmail.com',8820909309,9800692106),
createData('SUVOJIT CHAKRABORTY','fituc2000@gmail.com',8013070323,25721218),
createData('SWARUP KUMAR ROY','swarup.1989.17@gmail.com',9749424506),
createData('TANUMOY PAUL','tanumoypl15@gmail.com',9883329666,9903939478),
createData('ABHIJIT DEY','deyabhijit89@gmail.com',9038325416),
createData('ABHISHEK ROY','roy.abhishek91@gmail.com',9874471920),
createData('ADITYA KUMAR JHA','xadjha@gmail.com',9038407927),
createData('ARGHYA GHOSH','arghya.ghosh.me@gmail.com',9674346535,26830906),
createData('ARGHYADEEP KOLEY','arghya1391@gmail.com',9681116590),
createData('AYAN PAUL','paul.ayan9@gmail.com',9051311043),
createData('CHANDRA SEKHAR DAS','chandrasonu7@gmail.com',9831054555,26522380),
createData('DEBABRATA MANDAL','debabratamandal66@gmail.com',+919681171633),
createData('DEBANJAN CHAKRABORTY','dchakraborty619@gmail.com',9804613793),
createData('DEBJIT SEN SHARMA','amidebjit.ece@gmail.com',8013429759,24319430),
createData('DEBLINA ROY','deblina.roy121@gmail.com',9851201996),
createData('DEBOJIT BATABYAL','debojit.batabyal@gmail.com',9874880826,26572542),
createData('DEVENDRA KUMAR','devmax.kumar@gmail.com',9883999683),
createData('DINESH KUMAR','dineshnsec@gmail.com',9007736382),
createData('GOURAB DEY','joynsec1990@gmail.com',9614825715),
createData('JITU PRASAD GUPTA','raj.gupta397@gmail.com',968841918,9883035346),
createData('MAHARSHI MALIK','dmaharshi@gmail.com',9051168219),
createData('MAMUN AL RASHID','rashid.mamunal003@gmail.com',9681645197,9434482471),
createData('MIZANUR RAHMAN','mizan7312@gmail.com',8926036690),
createData('MOHAMMAD IMRAN','milton8904@gmail.com',8926525941),
createData('MONOJIT JANA','monojitjana22@gmail.com',9434536700),
createData('PRASHANT KUMAR','prashantkumarnsec@gmail.com',9831602763),
createData('PRATIM BHATTACHARYA','pratimbhattacharya2011@gmail.com',9038784439,25906649),
createData('SANGEETA DAIBAJNA','sangeeta.nsec@gmail.com',9748063412),
createData('SANTANU DAS','santanu.das1986@gmail.com',+919874202755),
createData('SAPNAYAN DAS','erebus.ownage@gmail.com',+919163695015,24750379),
createData('SHAILESH KUMAR','shaileshnsec@gmail.com',9681539377),
createData('SK ALFAZUDDIN','mynameisalfaz@gmail.com',9681153908),
createData('SK ARIF MOHAMMAD','coolarif08@yahoo.com',9038055424,9038149472),
createData('SUMIT GHOSH','ghoshsumit02@gmail.com',7278743139),
createData('SUMIT PODDAR','sumitcool.nsec@gmail.com',9007666643),
createData('TAMOGHNA JANA','jana.thomasjohn007@gmail.com',9051664435,25297624),
createData('TANMOY GHORUI','tanmoyghorui@gmail.com',+919734520216),
createData('TAPAS PAUL','raj21091988@gmail.com',9836858904),
  

];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function StickyHeadTable2() {
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
