import { useRouter } from 'next/router'

const Cars = () => {
	const router = useRouter()
	const { name } = router.query

	return <h1>This is Car Page of {name}</h1>
}

export default Cars
