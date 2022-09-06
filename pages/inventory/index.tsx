import type { NextPage } from 'next'
import { useState } from 'react'

interface invetoryData {
	name: string
	age: number
	hobby: string
}

const Login: NextPage = () => {
	const [data, setData] = useState<invetoryData[]>([
		{
			name: 'Deepak Yadu',
			age: 20,
			hobby: 'Coding',
		},
		{
			name: 'Siddhant Gour',
			age: 23,
			hobby: 'Ladki Baazi',
		},
	])

	const [formData, setFormData] = useState<invetoryData>({
		name: '',
		age: 0,
		hobby: '',
	})

	return (
		<>
			<h1>Inventory Management</h1>
			{/* eslint-disable-next-line react/no-unknown-property */}
			<table border={1}>
				<thead>
					<td>Name</td>
					<td>Age</td>
					<td>Hobby</td>
				</thead>
				<tbody>
					{data.map(({ name, age, hobby }: invetoryData) => {
						return (
							<>
								<tr>
									<td>{name}</td>
									<td>{age}</td>
									<td>{hobby}</td>
								</tr>
							</>
						)
					})}
				</tbody>
			</table>
			<br />

			<label htmlFor="nameInput">Name: </label>
			<input
				type="text"
				name="nameInput"
				onChange={(e) => {
					setFormData({
						...formData,
						name: e.target.value,
					})
				}}
				placeholder="sam"
			/>
			<label htmlFor="Age">Age: </label>
			<input
				type="number"
				onChange={(e) => {
					setFormData({
						...formData,
						age: Number(e.target.value),
					})
				}}
				name="Age"
				placeholder="sam"
			/>
			<label htmlFor="Hobby">Hobby: </label>
			<input
				type="text"
				onChange={(e) => {
					setFormData({
						...formData,
						hobby: e.target.value,
					})
				}}
				name="Hobby"
				placeholder="sam"
			/>
			<br />
			<br />
			<button
				onClick={() => {
					setData([
						...data,
						{
							...formData,
						},
					])
				}}
			>
				Submit
			</button>
		</>
	)
}
export default Login
