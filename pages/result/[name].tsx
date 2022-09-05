import { useRouter } from 'next/router'
import { TopBar } from '../../components/topbar'
import { ResultData } from '../../components/resultData'
import { Helmet } from 'react-helmet'

const Result = () => {
	const router = useRouter()
	const { name } = router.query

    if(!name) return <p>no user</p>

	return (
        <>  
            <Helmet>
                <style>{'body { background-color: #dfe6e9; }'}</style>
            </Helmet>
            
            <TopBar name={name}/>  
            <ResultData name={name}/>
        </>
    )
}

export default Result
