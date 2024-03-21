function createCard(board: ColumnProps[], card: CardProps, columnIndex : number, cardIndex = 0): ColumnProps[] {
	if (typeof board[columnIndex] === 'undefined') {
		figma.notify(`Card ${card.name} column can't be found`)
		return board
	}
	board[columnIndex].cards.splice(cardIndex, 0, card)
	return board
}

export default createCard