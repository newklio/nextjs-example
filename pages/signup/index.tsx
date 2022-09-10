import type { NextPage } from 'next'
import { useState } from "react";
import { Helmet } from 'react-helmet'
import styles from '../../styles/main.module.scss'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import { AiOutlineUserAdd } from 'react-icons/ai'
import { CreateUserMutationVariables, useCreateUserMutation, CreateUserInput } from '../../generated/graphql';
const SignUp: NextPage = () => {

	const [signup, {data, loading, error}] = useCreateUserMutation()

	const [FormData, setForm] = useState<CreateUserInput>({
			username: '',
			fullname: '',
			secret: '',
			email: '',
	})

	// err handling var
	const [err, setErr] = useState({
		hidden: 'hidden',
		msg: ''
	})

	// func to submit form to API
	const handleSubmit = (e: any) => {
		e.preventDefault()
		signup({ variables: {form : FormData} })
			.then(({ data }) => {
				console.log('Data is',data)
				if(data && data.createUser){
					const msg:any = data.createUser.message
					setErr({
						hidden: 'block',
						msg: msg
					})
				}
			})
			.catch((err) => {
				console.log("error is",err)
				setErr({
					hidden: 'block',
					msg: 'Something went wrong!!'
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
					<h1>Create a New Account</h1>
					<p className={err.hidden}>{err.msg}</p>
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
							m: 2,
							gap: 1.5,
							flexDirection: 'column',
						}}
					>

						{/* username */}
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
									m: 0,
									gap: 1.5,
									flexDirection: 'row',
									w:500
								}}
						>
							<TextField
								onChange={(e) => {
									setForm({
										...FormData,
										username: e.target.value
									})
								}}
								placeholder="Pick username"
								size="small"
							/>
							<TextField
								onChange={(e) => {
									setForm({
										...FormData,
										fullname: e.target.value,
									})
								}}
								placeholder="Full name"
								size="small"
							/>
						</Box>
						{/* password */}
						<Box
							style={{
								fontFamily: 'ubuntu',
								fontSize: '90%',
								fontWeight: '500',
								opacity: '.92',
							}}
							sx={{
								justifyContent: 'left',
								display: 'flex',
								m: 0,
								gap: 1.5,
								flexDirection: 'row',
							}}
						>

							<TextField
								style={{
									width:700
								}}
								onChange={(e) => {
									setForm({
										...FormData,
										secret: e.target.value,
									})
								}}
								placeholder="Enter your Password"
								size="small"
								type='password'
							/>
						</Box>
						{/* email */}
						<Box
							style={{
								fontFamily: 'ubuntu',
								fontSize: '90%',
								fontWeight: '500',
								opacity: '.92',
							}}
							sx={{
								justifyContent: 'left',
								display: 'flex',
								m: 0,
								gap: 1.5,
								flexDirection: 'row',
							}}
						>
							<TextField
								style={{
									width:700
								}}
								onChange={(e) => {
									setForm({
										...FormData,
										email: e.target.value,
									})
								}}
								placeholder="Enter your E-mail"
								size="small"
								type='email'
							/>
						</Box>
					</Box>
						<Button
							variant="contained"
							onClick={handleSubmit}
							color="success"
							style={{
								fontFamily: 'ubuntu',
								fontSize: '90%',
								fontWeight: '500',
								opacity: '.92',
							}}
							sx={{
								justifyContent: 'center',
								display: 'flex',
								m: 2,
								gap: 0.5,
								flexDirection: 'row',
							}}
						>
							<AiOutlineUserAdd /> SignUp
						</Button>
				</Paper>
			</Grid>
		</>
	)
}
export default SignUp
