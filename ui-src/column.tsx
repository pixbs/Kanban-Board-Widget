import React from "react";

function Column(column : ColumnProps) {
    const { id, name, cards } = column;
    function sendMessage(type: string) {
        parent?.postMessage({ pluginMessage: {sender: "column", type, content: column} }, "*");
    }
    return (
        <div className="App">
            <h1>{name}</h1>
            <button
                onClick={() => {
                    sendMessage("delete");
                }}
            >
                Delete column
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
        </div>
    )
}

export default Column;