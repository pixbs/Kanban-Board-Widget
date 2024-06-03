import React from 'react';

interface InputFormProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const InputForm: React.FC<InputFormProps> = ({ label, error, ...inputProps }) => {
  return (
	<div>
	  <label>
		{label}
		<input {...inputProps} />
	  </label>
	  {error && <span style={{ color: 'red' }}>{error}</span>}
	</div>
  );
};

export default InputForm;