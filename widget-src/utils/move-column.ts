import createColumn from "./create-column";
import deleteColumn from "./delete-column";

function moveColumn(board: ColumnProps[], column: ColumnProps, index: number) {
	if (typeof board[index] === 'undefined') {
		figma.notify(`Can't move column ${column.name}`)
		return board
	}
	board = deleteColumn(board, column.id)
	board = createColumn(board, column, index)
	return board
}

export default moveColumn