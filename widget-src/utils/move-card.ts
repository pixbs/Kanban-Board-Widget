import createCard from "./create-card";
import deleteCard from "./delete-card";

function moveCard(board : ColumnProps[], card : CardProps, columnIndex : number, cardIndex = 0) {
	if (typeof board[columnIndex] === 'undefined') {
		figma.notify(`Can't move card ${card.name}`)
		return board
	}
	board = deleteCard(card.id, board)
	board = createCard(board, card, columnIndex, cardIndex)
	return board
}

export default moveCard