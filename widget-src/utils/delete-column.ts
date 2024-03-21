//TO:DO - Move card to another column
function deleteColumn(board: ColumnProps[], columnId: number): ColumnProps[] {
	board = board.filter(column => column.id !== columnId)
	return board
}

export default deleteColumn