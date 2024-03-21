import Button from "./button"

const { widget } = figma
const { AutoLayout, useSyncedState, Text } = widget

function Card(props: CardProps) {
	const { columnId, id, name } = props

	const [columns, setColumns] = useSyncedState<ColumnProps[]>(`columns`, [])
	const [cards, setCards] = useSyncedState<CardProps[]>(`cards-${columnId}`, [])

	const moveCard = (direction: "up" | "down") => {
		const currentIndex = cards.findIndex((card) => card.id === id)
		if (direction === "up" && currentIndex === 0) {
			figma.notify("Cannot move card up")
			return
		}
		if (direction === "down" && currentIndex === cards.length - 1) {
			figma.notify("Cannot move card down")
			return
		}
		const newIndex = direction === "up" ? currentIndex - 1 : currentIndex + 1

		const newCards = [...cards]
		newCards.splice(currentIndex, 1)
		newCards.splice(newIndex, 0, cards[currentIndex])

		setCards(newCards)
	}

	 const changeColumn = (direction: "left" | "right") => {
		const currentIndex = columns.findIndex((column) => column.id === columnId)
		if (direction === "left" && currentIndex === 0) {
			figma.notify("Cannot move column left")
			return
		}
		if (direction === "right" && currentIndex === columns.length - 1) {
			figma.notify("Cannot move column right")
			return
		}
		const newIndex = direction === "left" ? currentIndex - 1 : currentIndex + 1
		
	 }

	const deleteCard = () => {
		const newCards = cards.filter((card) => card.id !== id)
		setCards(newCards)
	}

	return (
		<AutoLayout
			direction="vertical"
			padding={8}
			fill="#fff"
			key={id}
		>
			<Button text="Move Up" onClick={() => moveCard("up")} />
			<Button text="Move Down" onClick={() => moveCard("down")} />
			<Button text="Delete" onClick={deleteCard} />
			<Text>{name}</Text>
		</AutoLayout>
	)
}

export default Card