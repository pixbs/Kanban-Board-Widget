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
		</div>
    )
}

export default Card;