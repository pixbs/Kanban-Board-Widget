function deleteCard(cardId : number, board : ColumnProps[]) : ColumnProps[] {
	board = board.map(column => ({
		...column,
		cards: column.cards.filter(c => c.id !== cardId)
	}))
	return board
}

export default deleteCard