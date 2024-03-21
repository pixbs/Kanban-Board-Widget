import Button from "./button"
import Card from "./card"

const { widget } = figma
const { AutoLayout, useSyncedState, Text } = widget

function Column(props: ColumnProps) {
	const { id, name } = props

	const [columns, setColumns] = useSyncedState<ColumnProps[]>(`columns`, [])
	const [cards, setCards] = useSyncedState<CardProps[]>(`cards-${id}`, [])
	const [cardId, setCardId] = useSyncedState<number>(`cardId`, 0)

	function updateCardId() {
		setCardId(cardId + 1)
		return cardId
	}

	const moveColumn = (direction: "left" | "right") => {
		const currentIndex = columns.findIndex((column) => column.id === id)
		if (direction === "left" && currentIndex === 0) {
			figma.notify("Cannot move column left")
			return
		}
		if (direction === "right" && currentIndex === columns.length - 1) {
			figma.notify("Cannot move column right")
			return
		}
		const newIndex = direction === "left" ? currentIndex - 1 : currentIndex + 1

		const newColumns = [...columns]
		newColumns.splice(currentIndex, 1)
		newColumns.splice(newIndex, 0, columns[currentIndex])

		setColumns(newColumns)
	}

	const addCard = () => {
		setCards([{
			columnId: id,
			id: updateCardId(),
			name: `Card ${cardId}`,
		}, ...cards])
	}

	return (
		<AutoLayout
			direction="vertical"
			key={id}
		>
			<Text>{name}</Text>
			<Button text="Move Left" onClick={() => moveColumn("left")} />
			<Button text="Move Right" onClick={() => moveColumn("right")} />
			<Button text="Add Card" onClick={addCard} />
			{cards.map(card => <Card {...card}/>)}
		</AutoLayout>
	)
}

export default Column