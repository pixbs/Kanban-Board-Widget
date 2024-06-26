interface ColumnProps {
	id : number,
	name : string,
	cards : CardProps[],
}

interface CardProps {
	id : number,
	name : string,
	dueDate? : string,
	description? : string,
	assignee? : string,
}