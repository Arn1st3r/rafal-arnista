"use client";
import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import clsx from "clsx";
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
	const validationSchema = Yup.object().shape({
		email: Yup.string().required("Email is required!"),
		subject: Yup.string().required("Subject is required!"),
	});
	return (
		<>
			<div className='FormHeadline' id='get-in-touch'>
				<div className='flex flex-col'>
					<h2 className='text-4xl text-center pb-8 pt-24'>Get in Touch</h2>
					<p className='text-center mb-8'>
						Feel free to get in touch with me! I would be happy to answer your
						questions and help us find solutions together. I am waiting for your
						message!
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
					validationSchema={validationSchema}
					onSubmit={handleSubmit}>
					{({ errors }) => (
						<Form
							className='flex flex-col justify-center'
							action='https://formsubmit.io/send/rarnista22@gmail.com'
							method='POST'>
							<Field
								className={clsx(
									"FormSection__field p-2 rounded-md mb-6 text-black",
									"FormSection__field--focus",
									{
										"FormSection__field--error": errors.email,
									}
								)}
								id='email'
								type='email'
								name='email'
								placeholder='Enter your email'
							/>
							<ErrorMessage
								name='email'
								component='div'
								className='FormSection__error-message'
							/>
							<Field
								className={clsx(
									"FormSection__field p-2 rounded-md mb-6 text-black",
									{
										"FormSection__field--error": errors.subject,
									}
								)}
								id='subject'
								name='subject'
								placeholder='Enter subject'></Field>
							<ErrorMessage
								name='subject'
								component='div'
								className='FormSection__error-message'
							/>

							<Field
								className='FormSection__field p-2 rounded-md text-black'
								id='message'
								as='textarea'
								name='message'
								placeholder='Enter message'></Field>
							<button className='FormSection__button' type='submit'>
								Submit
							</button>
						</Form>
					)}
				</Formik>
			</div>
		</>
	);
}
