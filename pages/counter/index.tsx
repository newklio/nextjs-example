import type { NextPage } from 'next'
import { useState } from 'react'

const Login: NextPage = () => {
	const [counter, setCounter] = useState(0)

	function onClickHandler() {
		setCounter(counter + 1)
	}

	return (
		<>
			<h1>Counter Change Demo</h1>
			<h3>Current Value {counter}</h3>
			<button onClick={onClickHandler}>Increment</button>
		</>
	)
}
export default Login
