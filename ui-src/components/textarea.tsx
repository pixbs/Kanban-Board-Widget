import React from 'react';
import { useFormContext } from 'react-hook-form';

interface TextareaFormProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	name: string;
	label?: string;
}

function Textarea({ name, label, ...textareaProps }: TextareaFormProps) {
	const { register, formState: { errors } } = useFormContext();

	return (
		<>
			<label htmlFor={name}>
				{label}
				<textarea {...register(name)} {...textareaProps} />
			</label>
			{errors[name] && <span style={{ color: 'red' }}>{errors[name]?.message}</span>}
		</>
	);
};

export default Textarea;