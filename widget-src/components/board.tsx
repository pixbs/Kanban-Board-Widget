import EmptyState from "./empty-state"
import Button from "./button"
import Column from "./column"
import createColumn from "../utils/create-column"
import deleteCard from "../utils/delete-card"
import moveCard from "../utils/move-card"
import cardAction from "../utils/card-actions"
import columnAction from "../utils/column-actions"

const { widget } = figma
const { AutoLayout, useSyncedState, Text, useEffect } = widget

function Board() {

	useEffect(() => {
		figma.ui.on('message', (message) => {
			const { sender, type, content } = message
			switch(sender) {
				case "card":
					setBoard(cardAction(type, content, board))
					break
				case "column":
					setBoard(columnAction(type, content, board))
					break
			}
			
		})
	})

	const [board, setBoard] = useSyncedState<ColumnProps[]>("board", [])
	const [columnId, setColumnId] = useSyncedState<number>("columnId", 0)

	const updateColumnId = () => {
		setColumnId(columnId + 1)
		return columnId
	}

	const handleCreateColumn = () => {
		const newColumn = {
			id: updateColumnId(),
			name: `Column ${updateColumnId()}`,
			cards: []
		}
		setBoard(createColumn(board, newColumn))
	}

	return (
		<AutoLayout>
			<Button text="Add column" onClick={handleCreateColumn} />
			{board.length > 0
				? board.map(column => <Column {...column}/>)
				: <EmptyState onClick={handleCreateColumn} title="No columns were added" buttonText="Add column"/>
			}
		</AutoLayout>
	)
}

export default Board