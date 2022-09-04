export const Item = ({ name, index }: { name: string; index: number }) => {
	return (
		<p>
			{index}. This is an Item {name}{' '}
		</p>
	)
}
