import type { NextPage } from 'next'
import { TopBar } from '../components/topbar'
import { useHelloQuery } from '../generated/graphql'

const Home: NextPage = () => {
	const { data, loading, error } = useHelloQuery()
	return (
		<>
			<TopBar></TopBar>

			<h2>Data from Server: {data?.hello}</h2>
		</>
	)
}

export default Home
