import EmptyState from "./empty-state"
import Button from "./button"
import Column from "./column"

const { widget } = figma
const { AutoLayout, useSyncedState, Text } = widget

function Board() {

	const [columns, setColumns] = useSyncedState<ColumnProps[]>("columns", [])
	const [columnId, setColumnId] = useSyncedState<number>("columnId", 0)

	const updateColumnId = () => {
		setColumnId(columnId + 1)
		return columnId
	}

	const addColumn = () => {
		setColumns([ ...columns, {
			index: updateColumnId(),
			name: `Column ${updateColumnId()}`,
		}])
	}

	return (
		<AutoLayout>
			<Button text="Add column" onClick={addColumn} />
			{columns.length > 0
				? columns.map(column => <Column {...column}/>)
				: <EmptyState onClick={addColumn} title="No columns were added" buttonText="Add column"/>
			}
		</AutoLayout>
	)
}

export default Board