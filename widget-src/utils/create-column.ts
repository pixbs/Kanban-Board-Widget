function createColumn(board : ColumnProps[], column: ColumnProps, columnIndex = board.length): ColumnProps[] {
	board.splice(columnIndex, 0, column)
	return board
}

export default createColumn