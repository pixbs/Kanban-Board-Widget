import Button from "./button"

const { widget } = figma
const { AutoLayout, Text } = widget

interface EmptyStateProps {
	onClick: (event: WidgetClickEvent) => void | Promise<any>
	title: string
	buttonText: string
}

function EmptyState(props : EmptyStateProps) {
	const { onClick, title, buttonText} = props

	return (
		<AutoLayout
			direction="vertical"
		>
			<Text> {title} </Text>
			<Button text={buttonText} onClick={onClick}/>
		</AutoLayout>
	)
}

export default EmptyState