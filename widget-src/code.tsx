import Board from "./components/board"

const { widget } = figma

function Widget() {
	return (
		<Board/>
	)
}

widget.register(Widget)
