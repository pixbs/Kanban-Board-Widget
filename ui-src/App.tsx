import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
	const [card, setCard] = useState<CardProps>({id: 0, name: ""});
	onmessage = (event) => {
		const message = event.data.pluginMessage;
		setCard(message);
	}


	return (
		<div className="App">
			<h1>{card.name}</h1>
			<button
				onClick={() => {
					parent?.postMessage({ pluginMessage: {type: "delete", card: card} }, "*");
				}}
			>
				Delete card
			</button>
			<button
				onClick={() => {
					parent?.postMessage({ pluginMessage: {type: "move-left", card: card} }, "*");
				}}
			>
				Move left
			</button>
			<button
				onClick={() => {
					parent?.postMessage({ pluginMessage: {type: "move-right", card: card} }, "*");
				}}
			>
				Move right
			</button>
			<button
				onClick={() => {
					parent?.postMessage({ pluginMessage: {type: "move-up", card: card} }, "*");
				}}
			>
				Move up
			</button>
			<button
				onClick={() => {
					parent?.postMessage({ pluginMessage: {type: "move-down", card: card} }, "*");
				}}
			>
				Move down
			</button>
		</div>
	);
}

export default App;
