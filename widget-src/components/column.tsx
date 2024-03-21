import Button from "./button"

const { widget } = figma
const { AutoLayout, useSyncedState, Text } = widget

function Column(props: ColumnProps) {
	const { index, name } = props

	const [cards, setCards] = useSyncedState<CardProps[]>(`cards-${index}`, [])
	const [cardId, setCardId] = useSyncedState<number>(`cardId`, 0)

	function updateCardId() {
		setCardId(cardId + 1)
		return cardId
	}

	const addCard = () => {
		setCards([{
			index: updateCardId(),
			name: `Card ${cardId}`,
		}, ...cards])
	}

	return (
		<AutoLayout
			direction="vertical"
			key={index}
		>
			<Text>{name}</Text>
			<Button text="Add Card" onClick={addCard} />
			{cards.map((card) => (
				<Text
					key={card.index}
				>
					{card.name}
				</Text>
			))}
		</AutoLayout>
	)
}

export default Column