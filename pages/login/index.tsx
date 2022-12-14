import type { NextPage } from 'next'
import styles from '../../styles/main.module.scss'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import { BsGithub } from 'react-icons/bs'
import { Helmet } from 'react-helmet'
import {
	useLoginMutation,
	LoginMutationVariables,
} from '../../generated/graphql'
import { useState } from 'react'
import { useRouter } from 'next/router'

const LoginPage: NextPage = () => {
	const router = useRouter()
	const [login, { data, loading, error }] = useLoginMutation()

	const [FormData, setForm] = useState<LoginMutationVariables>({
		secret: '',
		username: '',
	})

	const [err, setErr] = useState({
		hidden: 'none',
		msg: ''
	})

	const handleSubmit = (e: any) => {
		e.preventDefault()
		login({ variables: FormData })
			.then(({ data }) => {
				console.log(data)
				if (data && data.login.success) {
					let token: any = data.login.accessToken
					let username: any = data.login.payload?.username
					localStorage.setItem('AUTH_TOKEN', token)
					localStorage.setItem('username', username)
					router.push('/result')
				}
				if(!(data?.login.success)){
					const msg: any = data?.login.message
					setErr({
						hidden: 'show',
						msg: msg
					})
				}
			})
			.catch((err) => {
				console.log(err)
				setErr({
					hidden: 'hidden',
					msg: err
				})
			})
	}

	return (
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
						<h1>Login</h1>
						<p className={err.hidden}>{err.msg}</p>
						<TextField
							onChange={(e) => {
								setForm({
									...FormData,
									username: e.target.value,
								})
							}}
							placeholder="Pick username"
							size="small"
						/>
						<TextField
							onChange={(e) => {
								setForm({
									...FormData,
									secret: e.target.value,
								})
							}}
							placeholder="Pick Password"
							size="small"
							type='password'
						/>
						<Button
							variant="contained"
							onClick={handleSubmit}
							color="success"
						>
							<BsGithub /> login
						</Button>
					</Box>
				</Paper>
			</Grid>
		</>
	)
}
export default LoginPage
