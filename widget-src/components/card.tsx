import deleteCard from "../utils/delete-card"
import moveCard from "../utils/move-card"
import Button from "./button"

const { widget } = figma
const { AutoLayout, useSyncedState, Text } = widget

function Card(props: CardProps) {
	const { id, name, dueDate, description, assignee } = props
	// const [board, setBoard] = useSyncedState<ColumnProps[]>(`board`, [])
	// const columnIndex = board.findIndex(column => column.cards.some(card => card.id === id))
	// const cardIndex = board[columnIndex].cards.findIndex(card => card.id === id)

	async function handleClick() {
		await new Promise (() => {
			figma.showUI(__html__, {width: 360, height: 640})
			figma.ui.postMessage({type: "card", content: props})
		})
	}
	
	return (
		<AutoLayout
			direction="vertical"
			padding={8}
			fill="#fff"
			key={id}
			onClick={handleClick}
		>
			<Text>{name}</Text>
			<Text>{dueDate}</Text>
			<Text>{description}</Text>
			<Text>{assignee}</Text>
		</AutoLayout>
	)
}

export default Card