import React, { RefObject, useState } from "react";
import clsx from "clsx";

interface InputProps {
	id?: string;
	name?: string;
	type?: string;
	placeholder?: string;
	error?: string;
	value?: string;
	className?: string;
	inputRef?: RefObject<HTMLInputElement>;
	onInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onInputFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
	onInputBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export const Input = ({
	id,
	name,
	type,
	placeholder,
	error,
	value,
	className,
	inputRef,
	onInputChange,
	onInputFocus,
	onInputBlur,
}: InputProps) => {
	const inputId = id || name;
	const [isFocused, setIsFocused] = useState<boolean>(false);

	const inputClasses = clsx([
		"FormSection__field p-2 rounded-md",
		error && "FormSection__field--error",
		isFocused && "FormSection__field--focus",
		className,
	]);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.persist();
		onInputChange && onInputChange(e);
	};

	const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
		e.persist();
		onInputFocus && onInputFocus(e);
		setIsFocused(!isFocused);
	};

	const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
		e.persist();
		onInputBlur && onInputBlur(e);
		setIsFocused(!isFocused);
	};

	return (
		<>
			<input
				className={inputClasses}
				type={type}
				name={name}
				id={inputId}
				placeholder={placeholder}
				value={value}
				onChange={handleInputChange}
				onFocus={handleInputFocus}
				onBlur={handleInputBlur}
				autoComplete='off'
				ref={inputRef}
			/>
			{error && <span className='FormSection__error-message'>{error}</span>}
		</>
	);
};
