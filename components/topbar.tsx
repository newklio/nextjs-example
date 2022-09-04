import { Item } from './item'
export const TopBar: any = () => {
	const itemNames = ['T1', 'T2', 'T3', 'T4', 'T5']
	return (
		<>
			{itemNames.map((name, index) => {
				return (
					<>
						{/* <p>this is item {name}</p> */}
						<Item name={name} index={index + 1} key={name} />
					</>
				)
			})}
			<h1>This is Top Bar</h1>
		</>
	)
}
