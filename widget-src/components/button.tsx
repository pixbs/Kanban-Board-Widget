const { widget } = figma
const { AutoLayout, Text } = widget

interface ButtonProps extends AutoLayoutProps {
	text: string
}

function Button(props: ButtonProps) {
	const { text, children, ...rest } = props

	return (
		<AutoLayout
			fill='#0000FF'
			{...rest}
		>
			<Text> {text} </Text>
		</AutoLayout>
	)
}

export default Button