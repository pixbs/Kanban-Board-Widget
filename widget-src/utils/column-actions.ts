import deleteColumn from "./delete-column"
import moveColumn from "./move-column"

function columnAction(type: string, column: ColumnProps, board: ColumnProps[] | undefined) {
    if (!board) return []
    const columnIndex = board.findIndex(c => c.id === column.id)

    switch (type) {
        case 'delete':
            return deleteColumn(board, column.id)
        case 'move-left':
            return moveColumn(board, column, columnIndex - 1)
        case 'move-right':
            return moveColumn(board, column, columnIndex + 1)
    }
    return board
}

export default columnAction