"use client";
import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Input } from "../Input/index";
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
			console.log(data);
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
					<p className='text-center'>
						Feel free to get in touch with me! I would be happy to answer your
						questions and help us find solutions together. I am waiting for your
						message!
					</p>
				</div>
			</div>
			<div className='FormSection mt-12'>
				<Formik
					initialValues={{
						email: "",
						subject: "",
						message: "",
					}}
					validationSchema={validationSchema}
					onSubmit={handleSubmit}>
					{({ errors, touched, handleChange, handleBlur, handleSubmit }) => (
						<Form
							onSubmit={handleSubmit}
							className='flex flex-col justify-center'
							action='https://formsubmit.io/send/rarnista22@gmail.com'
							method='POST'>
							<Input
								id='email'
								type='text'
								name='email'
								placeholder='Enter your email'
								onInputChange={handleChange}
								onInputBlur={handleBlur}
								error={errors.email && touched.email ? errors.email : undefined}
							/>
							<Input
								id='subject'
								type='text'
								name='subject'
								placeholder='Enter your subject'
								onInputChange={handleChange}
								onInputBlur={handleBlur}
								error={
									errors.subject && touched.subject ? errors.subject : undefined
								}
							/>
							<Field
								className='FormSection__field p-2 rounded-md '
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
