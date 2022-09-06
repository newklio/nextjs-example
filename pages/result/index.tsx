import type { NextPage } from 'next'
import styles from '../../styles/main.module.scss';
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import {BsGithub} from 'react-icons/bs'
import { Helmet } from 'react-helmet'
import Typography from '@mui/material/Typography';
const Result: NextPage = () => {
  return  (
		<>
			<Helmet>
				<style>{'body { background-color: #222f3e; }'}</style>
			</Helmet>
			<Grid>
				<Paper className={styles.loginContainer}>
					<Box 
						style={{
							fontFamily: 'ubuntu',
							fontSize: '90%',
							fontWeight: '500',
							opacity: '.92',
						  }}
						  sx={{
							justifyContent: 'center',
							display: 'flex',
							m: 3,
							gap: 1.5,
							flexDirection: 'column',
						  }}
					>	
						<Divider component="div" role="presentation">
						{/* any elements nested inside the role="presentation" preserve their semantics. */}
							<Typography variant="h4">Login</Typography>
						</Divider>
						<TextField 
							placeholder='Pick username'
							size='small'
						/>
						<TextField 
							placeholder='Pick Password'
							size='small'
						/>
						<Button
							variant='contained'
							color='success'
						>
							<BsGithub /> {' '}
							login
						</Button>
					</Box>
				</Paper>
			</Grid>
		</>

	)
}

export default Result
