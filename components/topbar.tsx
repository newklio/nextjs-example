import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const TopBar: any = ({name}:{ name:string }) => {
	return (
		<>
			<Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', backgroundColor:'#2c3e50', height:50 }}>
				<Typography sx={{ minWidth: 100, color:'#0984e3', fontSize:35 }}>Welcome {name}</Typography>
			</Box>
		</>
	)
}
