import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CardSchema } from "./types/schemas";
import Input from "./components/input";
import Textarea from "./components/textarea";
import Select from "./components/select";
import Form from "./components/form";

type FormData = z.infer<typeof CardSchema>;

function Card(card: CardProps) {
	const { id, name } = card;

	function sendMessage(type: string) {
		parent?.postMessage({ pluginMessage: { sender: "card", type: type, content: card } }, "*");
	}

	const onSubmit = async (data: FormData) => {
		console.log(data);
	}

	const assigneeOptions = ["Alice", "Bob", "Charlie"];

	const actions = [
		["delete", "Delete card"],
		["move-left", "Move left"],
		["move-right", "Move right"],
		["move-up", "Move up"],
		["move-down", "Move down"]
	]

	return (
		<div className="App">
			<h1>{name}</h1>
			{
				actions.map(([type, label]) => (
					<button
						key={type}
						onClick={() => {
							sendMessage(type);
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
					defaultValue={name}
				/>
				<Input
					name="dueDate" 
					label="Due date" 
					type="date"
				/>
				<Textarea
					name="description"
					label="Description"
				/>
				<Select
					name="assignee"
					label="Assignee"
					options={assigneeOptions}
				/>
				<button
					type="submit">
					Submit
				</button>
			</Form>
		</div>
	)
}

export default Card;