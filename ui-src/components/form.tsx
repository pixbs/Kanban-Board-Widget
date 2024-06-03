import React from 'react';
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
	onSubmit: (data: any) => void;
	schema: z.ZodObject<any, any>;
}

function Form({ children, onSubmit, schema, ...formProps }: FormProps) {
	type FormData = z.infer<typeof schema>;
	const methods = useForm<FormData>(
		{ resolver: zodResolver(schema) }
	);

	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(onSubmit)} {...formProps}>
				{children}
			</form>
		</FormProvider>
	);
}

export default Form;