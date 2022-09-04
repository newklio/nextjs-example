export const ResultData = ({ name }: { name: any }) => {
	const data:any = {
		'dk': {
			'maths': 10,
			'english': 10
		},
		'aman': {
			'maths': 10,
			'english': 8
		}
	}
	console.log(name, 'results')
	if(!name) return <p>no user</p>
	let res:any
	for(let student in data){
		if(name==student){
			res= data[student]
		}
	}
	console.log(res, 'data')
	if(!res) return <p>user not found</p>
	return (
		<>
			<p>
				result found
			</p>
			<table>
				<thead>
					<tr>
						<th>maths</th>
						<th>english</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{res['maths']}</td>
						<td>{res['english']}</td>
					</tr>
				</tbody>
			</table>

		</>
	)
}
