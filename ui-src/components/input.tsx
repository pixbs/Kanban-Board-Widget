import React from 'react';
import { useFormContext } from 'react-hook-form';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	name: string;
	label?: string;
}
function Input({ name, label, ...inputProps }: InputProps) {
	const { register, formState: { errors } } = useFormContext();

	return (
		<>
			<label htmlFor={name}>
				{label}
				<input {...register(name)} {...inputProps} />
			</label>
			{errors[name] && <span style={{ color: 'red' }}>{errors[name]?.message}</span>}
		</>
	);
};

export default Input;
