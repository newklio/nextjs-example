import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
	  backgroundColor: theme.palette.common.black,
	  color: theme.palette.common.white,
	},
	[`&.${tableCellClasses.body}`]: {
	  fontSize: 14,
	},
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
	'&:nth-of-type(odd)': {
	  backgroundColor: theme.palette.action.hover,
	},
	// hide last border
	'&:last-child td, &:last-child th': {
	  border: 0,
	},
  }));

export const ResultData = ({ name }: { name: any }) => {
	const data:any = {
		'dk404': {
			'maths': 10,
			'english': 10,
			'physics': 9,
			'hindi': 10
		},
		'Aman': {
			'maths': 10,
			'english': 8,
			'physics': 7,
			'hindi': 9
		}
	}
	console.log(name, 'results')
	if(!name) return <p>no user</p>
	let res:any
	for(let student in data){
		if(name==student){
			res= [data[student]]
		}
	}
	console.log(res, 'data')
	if(!res) return (
		<Alert severity="error">
		<AlertTitle>Error</AlertTitle>
		This is an error to load data — <strong>Not found data</strong>
		</Alert>
	)
	return (
		<>
			<Grid 
			justifyContent="center"
			alignItems="center"
			margin={2}
			>
				<TableContainer component={Paper}>
					<Table sx={{ minWidth: 700}} aria-label="customized table">
						<TableHead>
						<TableRow>
							<StyledTableCell align="right">Maths</StyledTableCell>
							<StyledTableCell align="right">English</StyledTableCell>
							<StyledTableCell align="right">Physics</StyledTableCell>
							<StyledTableCell align="right">Hindi</StyledTableCell>
						</TableRow>
						</TableHead>
						<TableBody>
						{res.map((row:any) => (
							<StyledTableRow key={row.name}>
							<StyledTableCell align="right">{row.maths}</StyledTableCell>
							<StyledTableCell align="right">{row.english}</StyledTableCell>
							<StyledTableCell align="right">{row.physics}</StyledTableCell>
							<StyledTableCell align="right">{row.hindi}</StyledTableCell>
							</StyledTableRow>
						))}
						</TableBody>
					</Table>
				</TableContainer>
			</Grid>
		</>
	)
}
