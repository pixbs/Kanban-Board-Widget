import Button from "./button"

const { widget } = figma
const { AutoLayout, useSyncedState, Text } = widget

function Card(props: CardProps) {
	const {id, name} = props
	const [board, setBoard] = useSyncedState<ColumnProps[]>(`board`, [])

	function deleteCard() {
		var newBoard = board
		newBoard.map(column => {
			column.cards = column.cards.filter(card => card.id !== id)
		})
		setBoard(newBoard)
		figma.notify(`Card ${name} was deleted`)
	}

	return (
		<AutoLayout
			direction="vertical"
			padding={8}
			fill="#fff"
			key={id}
		>
			<Button text="Delete card" onClick={deleteCard}/>
			<Text>{name}</Text>
		</AutoLayout>
	)
}

export default Card