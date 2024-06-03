import createCard from "../utils/create-card"
import deleteColumn from "../utils/delete-column"
import moveColumn from "../utils/move-column"
import Button from "./button"
import Card from "./card"

const { widget } = figma
const { AutoLayout, useSyncedState, Text } = widget

function Column(props: ColumnProps) {
	const { id, name, cards } = props

	const [board, setBoard] = useSyncedState<ColumnProps[]>(`board`, [])
	const columnIndex = board.findIndex(column => column.id === id)
	const [cardId, setCardId] = useSyncedState<number>(`cardId`, 0)

	function createCardId() {
		setCardId(cardId + 1)
		return cardId
	}

	function handleMoveColumn(index: number) {
		setBoard(moveColumn(board, {...props}, index))
	}

	function handleCreateCard() {
		const newCard = {
			id: createCardId(),
			name: `Card ${createCardId()}`,
		}
		setBoard(createCard(board, newCard, columnIndex))
	}

	function handleDeleteColumn() {
		setBoard(deleteColumn(board, id))
	}

	async function handleClick() {
		await new Promise (() => {
			figma.showUI(__html__, {width: 360, height: 640})
			figma.ui.postMessage({type: "column", content: props})
		})
	}

	return (
		<AutoLayout
			direction="vertical"
			key={id}
		>
			<Text
			onClick={handleClick}
			>
				{name}
			</Text>

			<Button text="Add card" onClick={handleCreateCard} />
			<Button text="Move left" onClick={() => handleMoveColumn(columnIndex - 1)} />
			<Button text="Move right" onClick={() => handleMoveColumn(columnIndex + 1)} />
			<Button text="Delete column" onClick={handleDeleteColumn} />
			{cards.map(card => <Card {...card} />)}
		</AutoLayout>
	)
}

export default Column