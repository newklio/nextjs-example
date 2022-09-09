import type { NextPage } from 'next'
import { TopBar } from '../components/topbar'
import { useQuery, gql } from '@apollo/client'

const query = gql`
	query Hello {
		hello
	}
`

interface Ihello {
	hello: string
}

const Home: NextPage = () => {
	const { data, loading, error } = useQuery<Ihello>(query)
	console.log(data)
	return (
		<>
			<h1>{data?.hello}</h1>
			<TopBar></TopBar>
		</>
	)
}

export default Home
