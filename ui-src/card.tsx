import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CardSchema } from "./types/schemas";
import InputForm from "./components/input";

type FormData = z.infer<typeof CardSchema>;

function Card(card: CardProps) {
	const { id, name } = card;
	function sendMessage(type: string) {
		//console.log(card)
		parent?.postMessage({ pluginMessage: { sender: "card", type: type, content: card } }, "*");
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
			<Form />
		</div>
	)
}

function Form() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
	} = useForm<FormData>({
		resolver: zodResolver(CardSchema),
	});

	const onSubmit = async (data: FormData) => {
		console.log(data);
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<label>
				Name:
				<input {...register("name")}/>
				{errors.name && <p>{errors.name.message}</p>}
			</label>
			<label>
				Due date:
				<input {...register("dueDate")} type="date" />
			</label>
			<label>
				Description:
				<textarea {...register("description")} />
			</label>
			<label>
				Assignee:
				<select {...register("assignee")}>
					<option value="">Select assignee</option>
					<option value="alice">Alice</option>
					<option value="bob">Bob</option>
					<option value="charlie">Charlie</option>
				</select>
			</label>
			<button type="submit">Submit</button>
		</form>
	)
}

export default Card;