import { useRouter } from 'next/router'
import { TopBar } from '../../components/topbar'
import { ResultData } from '../../components/resultData'

const Result = () => {
	const router = useRouter()
	const { name } = router.query

    if(!name) return <p>no user</p>

	return (
        <>
            <TopBar name={name}/>  
            <ResultData name={name}/>
        </>
    )
}

export default Result
