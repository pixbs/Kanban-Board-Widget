import React from "react"
import { CardSchema } from "./types/schemas"
import Input from "./components/input"
import Textarea from "./components/textarea"
import Select from "./components/select"
import Form from "./components/form"

function Card(card: CardProps) {
	const [currentCard, setCurrentCard] = React.useState<CardProps>(card)

	const sendMessage = (type: string) => {
		parent?.postMessage({ pluginMessage: { sender: "card", type: type, content: card } }, "*")
	}

	const onSubmit = async (data: FormData) => {
		card = { ...card, ...data }
		setCurrentCard(card)
		sendMessage("update")
	}

	const assigneeOptions = ["Alice", "Bob", "Charlie"]

	const actions = [
		["delete", "Delete card"],
		["move-left", "Move left"],
		["move-right", "Move right"],
		["move-up", "Move up"],
		["move-down", "Move down"]
	]

	return (
		<div className="App">
			<h1>{currentCard.name}</h1>
			{
				actions.map(([type, label]) => (
					<button
						key={type}
						onClick={() => {
							sendMessage(type)
						}}
					>
						{label}
					</button>
				))
			}
			<Form schema={CardSchema} onSubmit={onSubmit}>
				<Input
					name="name" 
					label="Name"
					defaultValue={currentCard.name}
				/>
				<Input
					name="dueDate" 
					label="Due date" 
					type="date"
					defaultValue={currentCard.dueDate}
				/>
				<Textarea
					name="description"
					label="Description"
					defaultValue={currentCard.description}
				/>
				<Select
					name="assignee"
					label="Assignee"
					options={assigneeOptions}
					defaultValue={currentCard.assignee}
				/>
				<button
					type="submit">
					Submit
				</button>
			</Form>
		</div>
	)
}

export default Card