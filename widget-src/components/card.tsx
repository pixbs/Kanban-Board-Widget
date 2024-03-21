import createCard from "../utils/create-card"
import deleteCard from "../utils/delete-card"
import moveCard from "../utils/move-card"
import Button from "./button"

const { widget } = figma
const { AutoLayout, useSyncedState, Text } = widget

function Card(props: CardProps) {
	const { id, name } = props
	const [board, setBoard] = useSyncedState<ColumnProps[]>(`board`, [])
	const columnIndex = board.findIndex(column => column.cards.some(card => card.id === id))
	const cardIndex = board[columnIndex].cards.findIndex(card => card.id === id)

	function handleDeleteCard() {
		setBoard(deleteCard(id, board))
		figma.notify(`Card ${name} was deleted`)
	}

	function handleHorMovement(index: number) {
		setBoard(moveCard(board, props, index, cardIndex))
	}

	function handleVerMovement(index: number) {
		setBoard(moveCard(board, props, columnIndex, index))
	}
	return (
		<AutoLayout
			direction="vertical"
			padding={8}
			fill="#fff"
			key={id}
		>
			<Text>{name}</Text>
			<Button text="Move left" onClick={() => handleHorMovement(columnIndex - 1)} />
			<Button text="Move right" onClick={() => handleHorMovement(columnIndex + 1)} />
			<Button text="Move up" onClick={() => handleVerMovement(cardIndex - 1)} />
			<Button text="Move down" onClick={() => handleVerMovement(cardIndex + 1)} />
			<Button text="Delete card" onClick={handleDeleteCard} />
		</AutoLayout>
	)
}

export default Card