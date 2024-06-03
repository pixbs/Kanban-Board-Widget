import deleteCard from "./delete-card"
import moveCard from "./move-card"

function cardAction(type: string, card: CardProps, board: ColumnProps[] | undefined) {
	if (!board) return []
	const columnIndex = board.findIndex(column => column.cards.some(c => c.id === card.id))
	const cardIndex = board[columnIndex].cards.findIndex(c => c.id === card.id)

	switch (type) {
		case 'delete':
			return deleteCard(card.id, board)
		case 'move-left':
			return moveCard(board, card, columnIndex - 1)
		case 'move-right':
			return moveCard(board, card, columnIndex + 1)
		case 'move-up':
			return moveCard(board, card, columnIndex, cardIndex - 1)
		case 'move-down':
			return moveCard(board, card, columnIndex, cardIndex + 1)
		case 'update':
			return moveCard(board, card, columnIndex, cardIndex)
	}
	return board
}

export default cardAction