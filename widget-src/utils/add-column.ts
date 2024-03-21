const { widget } = figma
const { useSyncedState } = widget

interface addColumnProps extends ColumnProps {
	columns: ColumnProps[]
	setColumns: (columns: ColumnProps[]) => void
}

function addColumn(props : addColumnProps) {
	const { index, name, columns, setColumns } = props
	setColumns([{
		index: index,
		name: name,
	}, ...columns])
}

export default addColumn