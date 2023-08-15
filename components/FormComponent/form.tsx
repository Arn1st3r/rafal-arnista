"use client";
import React from "react";
import { Formik, Field, Form } from "formik";
import styled from "styled-components";

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
			<div className='FormHeadline' id='get-in-touch'>
				<div className='flex flex-col'>
					<h2 className='text-4xl text-center pb-8 pt-24'>Get in Touch</h2>
					<p className='text-center mb-8'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						<br></br>
						eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
					</p>
				</div>
			</div>
			<div className='FormSection'>
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
						<Field
							className='FormSection__field p-2 rounded-md mb-6'
							id='email'
							type='email'
							name='email'
							placeholder='Enter your email'></Field>
						<Field
							className='p-2 rounded-md mb-6'
							id='subject'
							name='subject'
							placeholder='Enter subject'></Field>

						<Field
							className='pb-24 rounded-md'
							id='message'
							as='textarea'
							name='message'
							placeholder='Enter message'></Field>
						<button className='FormSection__button' type='submit'>
							Submit
						</button>
					</Form>
				</Formik>
			</div>
		</>
	);
}
