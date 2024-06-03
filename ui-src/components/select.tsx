import React from 'react';
import { useFormContext } from 'react-hook-form';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
	name: string;
	label?: string;
	options: string[];
}

function Select({ name, label, options, ...selectProps }: SelectProps) {
	const { register, formState: { errors } } = useFormContext();

	return (
		<>
			<label htmlFor={name}>
				{label}
				<select {...register(name)} {...selectProps}>
					<option value="">Select {label?.toLowerCase()}</option>
					{options.map(option => (
						<option key={option} value={option}>{option}</option>
					))}
				</select>
			</label>
			{errors[name] && <span style={{ color: 'red' }}>{errors[name]?.message}</span>}
		</>
	);
};

export default Select;