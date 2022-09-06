import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box'
import { useState } from 'react';

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

export const ResultsData = ({ name }: { name: any }) => {
	const data:any = [
		{   
            'name':'deepak',
            'marks':{
                'maths': 10,
                'english': 10,
                'physics': 9,
                'hindi': 10
            }
		},
		{   
            'name':'aman',
            'marks':{
                'maths': 10,
                'english': 8,
                'physics': 7,
                'hindi': 9
            }
		}
    ]

    const [resData, setresData] = useState(data)

	return (
		<>
			<Grid 
			justifyContent="center"
			alignItems="center"
			margin={2}
			>
				<Box margin={0}>
					<input type="text" name="nameInp" onChange={(e)=>{
						if(!e.target.value){
							setresData(data)
						}
						setresData(data.filter((item:any)=> item.name ==e.target.value))
					}}/>
					<button onClick={()=>{setresData(data)}}>reset</button>
				</Box>
				<TableContainer component={Paper}>
					<Table sx={{ minWidth: 700}} aria-label="customized table">
						<TableHead>
						<TableRow>
							<StyledTableCell align="right">Name</StyledTableCell>
							<StyledTableCell align="right">Maths</StyledTableCell>
							<StyledTableCell align="right">English</StyledTableCell>
							<StyledTableCell align="right">Physics</StyledTableCell>
							<StyledTableCell align="right">Hindi</StyledTableCell>
						</TableRow>
						</TableHead>
						<TableBody>
						{resData.map((row:any) => (
							<StyledTableRow key={row.name}>
							<StyledTableCell align="right">{row.name}</StyledTableCell>
							<StyledTableCell align="right">{row.marks.maths}</StyledTableCell>
							<StyledTableCell align="right">{row.marks.english}</StyledTableCell>
							<StyledTableCell align="right">{row.marks.physics}</StyledTableCell>
							<StyledTableCell align="right">{row.marks.hindi}</StyledTableCell>
							</StyledTableRow>
						))}
						</TableBody>
					</Table>
				</TableContainer>
			</Grid>
		</>
	)
}

export default ResultsData
