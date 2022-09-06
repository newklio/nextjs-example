import type { NextPage } from 'next'
import { useState } from "react";

const Counter: NextPage = () => {
	const [number, setnumber] = useState({
		name : "Load number",
		path : "/home/siddhant/nekione-old/sample",
		entry: "/home/siddhant/nekione-old/sample/app.js"
	  });
	return (
		<>
			<h1>This is Singup Page</h1>
		</>
	)
}
export default Counter
