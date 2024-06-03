import React from "react";

function Card(card : CardProps) {
    const { id, name } = card;
	function sendMessage(type: string) {
		//console.log(card)
		parent?.postMessage({ pluginMessage: {sender: "card", type: type, content: card} }, "*");
	}
    return (
        <div className="App">
			<h1>{name}</h1>
			<button
				onClick={() => {
					sendMessage("delete");
				}}
			>
				Delete card
			</button>
			<button
				onClick={() => {
					sendMessage("move-left");
				}}
			>
				Move left
			</button>
			<button
				onClick={() => {
					sendMessage("move-right");
				}}
			>
				Move right
			</button>
			<button
				onClick={() => {
					sendMessage("move-up");
				}}
			>
				Move up
			</button>
			<button
				onClick={() => {
					sendMessage("move-down");
				}}
			>
				Move down
			</button>
			<Form/>
		</div>
    )
}

function Form() {
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		console.log(JSON.stringify(Object.fromEntries(data.entries())));
	}

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Name:
				<input type="text" name="name" />
			</label>
			<label>
				Due date:
				<input type="date" name="due-date" />
			</label>
			<label>
				Description:
				<textarea name="description" />
			</label>
			<label>
				Assignee:
				<select name="assignee">
					<option value="">Select assignee</option>
					<option value="alice">Alice</option>
					<option value="bob">Bob</option>
					<option value="charlie">Charlie</option>
				</select>
			</label>
			<input type="submit" value="Submit" />
		</form>
	)
}

export default Card;