import { z } from "zod";

export const CardSchema = z.object({
	name: z
		.string()
		.min(1)
		.max(64),
	dueDate: z
		.string()
		.optional(),
	description: z
		.string()
		.optional(),
	assignee: z
		.string()
		.optional(),
})