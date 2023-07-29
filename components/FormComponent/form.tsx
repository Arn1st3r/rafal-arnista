"use client";
import React from "react";
import { Formik, Field, Form } from "formik";
import styled from "styled-components";
const FormHeadline = styled.div`
	color: 9C9C9C;
`;
const FormSection = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;
const StyledField = styled(Field)`
	width: 350px;
	color: black;
`;
const Submit = styled.button`
	margin-top: 30px;
	background-color: #3f8e00;
	height: 63px;
	border-radius: 6px;
	border: 3px solid #62ba1b;
	-webkit-box-shadow: 10px 5px 30px 0px rgba(98, 186, 27, 0.5);
	-moz-box-shadow: 10px 5px 30px 0px rgba(98, 186, 27, 0.5);
	box-shadow: 10px 5px 30px 0px rgba(98, 186, 27, 0.5);
	font-size: 16px;
	font-weight: 700;
	letter-spacing: 1px;
	text-transform: Uppercase;
	margin-bottom: 100px;

	&:hover {
		background-color: black;
		color: #3f8e00;
	}
`;
export default function FormComponent() {
	const handleSubmit = async (values: any) => {
		try {
			const response = await fetch(
				"https://formsubmit.io/send/rarnista22@gmail.com",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(values),
				}
			);

			const data = await response.json();
			console.log(data); // Odpowiedź od formsubmit.io
		} catch (error) {
			console.error("Wystąpił błąd:", error);
		}
	};
	return (
		<>
			<FormHeadline id='get-in-touch'>
				<div className='flex flex-col'>
					<h2 className='text-4xl text-center pb-8 pt-24'>Get in Touch</h2>
					<p className='text-center mb-8'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						<br></br>
						eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
					</p>
				</div>
			</FormHeadline>
			<FormSection>
				<Formik
					initialValues={{
						email: "",
						subject: "",
						message: "",
					}}
					onSubmit={handleSubmit}>
					<Form
						className='flex flex-col justify-center'
						action='https://formsubmit.io/send/rarnista22@gmail.com'
						method='POST'>
						<label htmlFor='Email'>Email</label>
						<StyledField
							className='p-2 rounded-md mb-6'
							id='email'
							type='email'
							name='email'
							placeholder='Enter your email'></StyledField>
						<label htmlFor='Subject'>Subject</label>
						<StyledField
							className='p-2 rounded-md mb-6'
							id='subject'
							name='subject'
							placeholder='Enter subject'></StyledField>
						<label htmlFor='Message'>Message</label>
						<StyledField
							className='pb-24 rounded-md'
							id='message'
							as='textarea'
							name='message'
							placeholder='Enter message'></StyledField>
						<Submit type='submit'>Submit</Submit>
					</Form>
				</Formik>
			</FormSection>
		</>
	);
}
