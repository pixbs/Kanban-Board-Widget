import React from "react"
import { ColumnSchema } from "./types/schemas"
import Input from "./components/input"
import Form from "./components/form"

function Column(column : ColumnProps) {
    const [currentColumn, setCurrentColumn] = React.useState<ColumnProps>(column)
    const sendMessage = (type: string) => {
        parent?.postMessage({ pluginMessage: {sender: "column", type, content: column} }, "*")
    }
	const onSubmit = async (data: FormData) => {
		column = { ...column, ...data }
		setCurrentColumn(column)
		sendMessage("update")
	}
    return (
        <div className="App">
            <h1>{currentColumn.name}</h1>
            <button
                onClick={() => {
                    sendMessage("delete")
                }}
            >
                Delete column
            </button>
            <button
                onClick={() => {
                    sendMessage("move-left")
                }}
            >
                Move left
            </button>
            <button
                onClick={() => {
                    sendMessage("move-right")
                }}
            >
                Move right
            </button>
			<Form schema={ColumnSchema} onSubmit={onSubmit}>
				<Input
					name="name" 
					label="Name"
					defaultValue={currentColumn.name}
				/>
				<button type="submit">Update</button>
			</Form>
        </div>
    )
}

export default Column