interface addColumnProps extends ColumnProps {
	columns: ColumnProps[]
	setColumns: (columns: ColumnProps[]) => void
}

function addColumn(props : addColumnProps) {
	const { id, name, columns, setColumns } = props
	setColumns([{
		id: id,
		name: name,
	}, ...columns])
}

export default addColumn