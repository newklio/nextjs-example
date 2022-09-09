import type { NextPage } from 'next'
import { Helmet } from 'react-helmet'
import { TopBar } from '../../components/topbar';
import { ResultData } from '../../components/resultData';
const Result: NextPage = () => {

	const uname = localStorage.getItem('username')

	return (
        <>  
            <Helmet>
                <style>{'body { background-color: #dfe6e9; }'}</style>
            </Helmet>
            
            <TopBar name={uname}/>  
            <ResultData name={uname}/>
        </>
    )
}

export default Result
