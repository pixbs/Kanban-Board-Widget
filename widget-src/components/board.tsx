import EmptyState from "./empty-state"
import Button from "./button"
import Column from "./column"

const { widget } = figma
const { AutoLayout, useSyncedState, Text } = widget

function Board() {

	const [board, setBoard] = useSyncedState<ColumnProps[]>("board", [])
	const [columnId, setColumnId] = useSyncedState<number>("columnId", 0)

	const updateColumnId = () => {
		setColumnId(columnId + 1)
		return columnId
	}

	const addColumn = () => {
		setBoard([ ...board, {
			id: updateColumnId(),
			name: `Column ${updateColumnId()}`,
			cards: []
		}])
	}

	return (
		<AutoLayout>
			<Button text="Add column" onClick={addColumn} />
			{board.length > 0
				? board.map(column => <Column {...column}/>)
				: <EmptyState onClick={addColumn} title="No columns were added" buttonText="Add column"/>
			}
		</AutoLayout>
	)
}

export default Board