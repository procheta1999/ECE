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
  createData('ABHINABA PAUL','avinabap093@gmail.com',9830991266,3325558657),
  createData('ABHISHEK PAL','abhishek.pal29051993@gmail.com',8900172883,9475643692),
  createData('ABHISIKTA SARKAR','sarkarabhisikta3@gmail.com',9434149129,9474813490),
  createData('ABIR CHAKRABORTY','abirchakraborty98@gmail.com',7890395858,9734732081),
  createData('AJAY KUMAR GUPTA','ajanawijee@gmail.com',8450825098,8676800830),
  createData('AKASH SHARMA','akashonline55@gmail.com',9830336187,6412407877),
  createData('AMARNATH GHOSH','amarnath.amarnath.ghosh@gmail.com',8961274691,9874741229),
  createData('AMIM GALIB KHAN','AGKhan6101993@gmail.com',9002190586,8116798269),
  createData('AMIT CHANDRA','amitnsec15@yahoo.com',8961422497,9934806973),
  createData('ANAMIKA','beinganamika68@gmail.com',7278105748,9798592404),
  createData('ANKITA GUPTA','ankygupta92@gmail.com',8272911328,9434378104),
  createData('ANU KUMARI','anu.mishraanu.mishra@gmail.com',8961357924,9835398749),
  createData('ARGHA MUKHERJEE','argha.mukherjee93@gmail.com',9051869268,9874138683),
  createData('ARINDRAJIT PAL','arindrajitpal@gmail.com',9674132547,3323589536),
  createData('ARPAN MAITY','arpanmaityece@gmail.com',9038551224,9903297801),
  createData('BARISTA DUTTA','barista.dutta@gmail.com',9641497108,9735322632),
  createData('BISWAJIT NATH','swtnil_king@yahoo.co.in',9051633766,9051633766),
  createData('BISWAJYOTI DAS','das.biswajyoti.spv@gmail.com',9674569394,8017486077),
  createData('DEBANGSHU BHATTACHARYYA','debangshumoumita@yahoo.com',9830497327,3325943461),
  createData('DEBANJAN KUNDU','debanjankundu@ymail.com',9874261567,9674055643),
  createData('Debankur Saha','debankur_123@yahoo.com',8981532992),
  createData('DEBDEEP NANDA','debdeepofficial@gmail.com',9932076827,3222277120),
  createData('DEEPAK SHARMA','rsdeepaksharma@gmail.com',8981299210,9874713373),
  createData('DIPANWITA NANDI','dipanwita.nandi80@gmail.com',8276816837,24438558),
  createData('ENAKSHI KUNDU','ekundu9@gmail.com',8509670412,9732993234),
  createData('MOUMITA GHOSH','indrajeeta17@gmail.com',8820517219,8820517219),
  createData('INDRAJIT GHOSH','indra_v5@yahoo.com',9038427957,9831000968),
  createData('JYOTI AGARWAL','jyoti.agarwal82@yahoo.com',9163779166,9339802805),
  createData('KHUSBOO PRIYA','khushipriya2601@gmail.com',9874471874,9431607749),
  createData('KOUSTAV CHAKRABORTY','koustavchakraborty@ymail.com',7687065191,9433342024),
  createData('MAINAK DAS','mainakdas94@gmail.com',7501120773,9333711735),
  createData('MANISH KUMAR','coolmanish911991@gmail.com',7890058048,9835586895),
  createData('MD.NAZEEF TASLIM','nazeeftaslim@ymail.com',8981936362,8981130393),
  createData('MOUMITA SAMANTA','riya25november@gmail.com',8900017565,9474823710),
  createData('MOUNODEEP CHAKRABORTY','mounodeep9@gmail.com',8442836488,9163340372),
  createData('MOUPIA BASU','moupia2012@gmail.com',9874617529,3324332461),
  createData('MRINAL KANT','kmrinal417@gmail.com',8986216935,9431157557),
  createData('MUSHIQUE ALAM','muhfik17@gmail.com',8274986176,9062900785),
  createData('NANDADULAL JANA','jana.nandadulal5@gmail.com',9635778841,9635633526),
  createData('NAYANENDU BISWAS','biswas.nayanendu62@gmail.com',7686053830),
  createData('NEHA','nehaahen97@gmail.com',8820754497,9304143766),
  createData('NILAY HALDER','nilay.2050@gmail.com',8016572467,9434437158),
  createData('PARIJAT BHOWMIK','pbhowmik93@gmail.com',7890027399,8900435441),
  createData('PRAFUL KUMAR SINGH','praful.inbox91@gmail.com',8335,9832113294),
  createData('PRALAY MIDYA','pralay445@gmail.com',9563669166),
  createData('PRANAY MUKHOPADHYAY','riki.pranay@gmail.com',8961371277),
  createData('PRATIK DATTA','pratikdatta.15@gmail.com',9933424206),
  createData('PRATIP GHOSH','pratg22@gmail.com',8902769826,8986274590),
  createData('PRATTAY RAY','ray.prattay@gmail.com',9874012113,3325581859),
  createData('PRITAM KUMAR GHOSH','19pritamghosh93@gmail.com',8981492788),
  createData('PRIYANKA BHARTI','priya.shilpi1309@gmail.com',8961893464,9304993914),
  createData('PRIYANKAR HALDER','adebayorcharlie@gmail.com',8981871009,9433009302),
  createData('PRODIPTO DAS','prodipto29@hotmail.com',8609897315,8609897315),
  createData('RAHUL NANDI','rahul5112.2011@gmail.com',9932796262,9474050240),
  createData('RAHUL RANJAN','rahulranjan.rr333@gmail.com',8820737424,9835592211),
  createData('RAJ RANJAN VERMA','ranjanrajverma.verma84@gmail.com',8981147458,9006068395),
  createData('RAJAN KUMAR SAH','rajansah1991@gmail.com',9635122124,9733134328),
  createData('RAJDEEP BARAL','rajdeep.anish@gmail.com',9432372733,3322193993),
  createData('RAJDEEP MAITI','rajdeepmaiti@gmail.com',7501584832,9474897659),
  createData('RAJEEV KUMAR','rajeevnsec2011@gmail.com',7890805565,7890805565),
  createData('RAJU BISWAS','sarajubiswas@gmail.com',8972200520,8972200520),
  createData('RANADIP SAHA','ranadip.saha.1993@gmail.com',8927278166),
  createData('REEVU PAL','reevu.mdn@gmail.com',9046431121),
  createData('RISHIKA GHOSH','rishika1302@gmail.com',9874810330,23356225),
  createData('RUDRADEB MAHATO','mahato.rudradeb@yahoo.com',9932745283,8653212355),
  createData('SAHANA CHAKRAVARTY','chakravartysahana@yahoo.in',8981765531),
  createData('SANCHITA BASAK','basak5sanchita@gmail.com',9432367647,23648405),
  createData('SANDIPAN SINGHAMAHAPATRA','engg.sandipanece75@gmail.com',8900601057),
  createData('SANGITA CHAKRABORTY','sangitachocho@gmail.com',9475861981,9434678051),
  createData('SANTUNU ROY','santanu.royfacebook@gmail.com',9547234062,9647043686),
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function StickyHeadTable5() {
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
