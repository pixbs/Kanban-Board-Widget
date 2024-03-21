import Button from "./button"
import Card from "./card"

const { widget } = figma
const { AutoLayout, useSyncedState, Text } = widget

function Column(props: ColumnProps) {
	const { id, name, cards } = props

	const [board, setBoard] = useSyncedState<ColumnProps[]>(`board`, [])
	const [cardId, setCardId] = useSyncedState<number>(`cardId`, 0)
	
	function createCardId() {
		setCardId(cardId + 1)
		return cardId
	}

	function createCard() {
		const newCard = {
			id: createCardId(),
			name: `Card ${createCardId()}`,
		}
		var newBoard = board
		newBoard.find(column => column.id === id)?.cards.push(newCard)
		setBoard(newBoard)
	}

	function deleteColumn() {
		var newBoard = board
		newBoard = newBoard.filter(column => column.id !== id)
		setBoard(newBoard)
		figma.notify(`Column ${name} was deleted`)
	}

	return (
		<AutoLayout
			direction="vertical"
			key={id}
		>
			<Text>{name}</Text>
			<Button text="Add card" onClick={createCard}/>
			<Button text="Delete column" onClick={deleteColumn}/>
			{cards.map(card => <Card {...card}/>)}
		</AutoLayout>
	)
}

export default Column