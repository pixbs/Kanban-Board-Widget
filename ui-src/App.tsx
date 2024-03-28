import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./card";
import Column from "./column";

function App() {
	const [card, setCard] = useState<CardProps>({id: 0, name: ""});
	const [column, setColumn] = useState<ColumnProps>({id: 0, name: "", cards: []});
	const [type, setType] = useState('none')
	onmessage = (event) => {
		const {type, content} = event.data.pluginMessage;
		switch (type) {
			case "card":
				setCard(content);
				setType("card");
				break
			case "column":
				setColumn(content);
				console.log(content)
				setType("column");
				break;
		}
	}

	const display: { [key: string]: JSX.Element } = {
		"card": <Card {...card} />,
		"column": <Column {...column} />,
		"none": <h1>...loading</h1>
	}

	return <>{display[type]}</>
}

export default App;
