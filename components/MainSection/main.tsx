"use client";
import React from "react";
import Image from "next/image";
import RA from "../../public/RA.svg";
import styled from "styled-components";
import Routes from "../../utils/routes";
import * as ReactDOM from "react-dom";
import React_logo from "../../public/React-logo.svg";
import JS_logo from "../../public/JS.png";
import { Formik, Field, Form } from "formik";
import html_logo from "../../public/html.png";
import ts_logo from "../../public/tslogo.svg";
import tailwind_logo from "../../public/tailwind.svg";
import sass_logo from "../../public/scss.svg";
import next_logo from "../../public/nextjs.png";
import strapi_logo from "../../public/strapi.png";
const Home = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 250px;
`;
const Button = styled.button`
	margin-top: 56px;
	background-color: #3f8e00;
	width: 254px;
	height: 63px;
	border-radius: 6px;
	border: 3px solid #62ba1b;
	-webkit-box-shadow: 0px 8px 30px -14px rgba(98, 186, 27, 1);
	-moz-box-shadow: 0px 8px 30px -14px rgba(98, 186, 27, 1);
	box-shadow: 0px 8px 30px -14px rgba(98, 186, 27, 0.5);
	font-size: 16px;
	font-weight: 700;
	letter-spacing: 1px;
	text-transform: Uppercase;

	&:hover {
		background-color: black;
		color: #3f8e00;
	}
`;
const Worked = styled.div`
	margin-top: 80px;
	font-size: 17px;
	width: 100%;
	display: flex;
	flex-direction: column;
	jusfitfy-content: center;
	width: 74%;
	margin-left: 350px;
`;

const Box = styled.div`
	height: 61px;
	border: 1px solid #1b1b1b;
	width: 68px;
	border-radius: 6px;
	margin-bottom: 100px;
`;

export default function MainSection() {
	return (
		<>
			<Home className='mx-auto mt-44'>
				<div className='mt-12'>
					<h1 className='text-5xl mb-2'>Rafał Arnista</h1>
					<h2 className='text-2xl mb-2'>Frontend Developer</h2>
					<p className='home__text'>
						I am a first-year Computer Science student at the University of
						<br></br>
						Gdańsk. I already have some minimal experience in creating web
						<br></br>
						applications. I always strive to approach tasks with full commitment
						<br></br>
						and passion, which, combined with my ambition and motivation,
						<br></br>
						translates into effectively achieving set goals.<br></br>
					</p>
					<Button onClick={() => (window.location.href = Routes.getintouch)}>
						Get in touch
					</Button>
				</div>
				<div>
					<Image src={RA} alt='Rafal Arnista - zdjecie'></Image>
				</div>
			</Home>
			<Worked>
				<div>
					<h3>Worked with</h3>
				</div>
				<div className='flex flex-row mt-10 gap-10'>
					<Box>
						<Image
							src={JS_logo}
							alt='JS logo'
							height={50}
							width={60}
							className='mx-auto my-0.5'></Image>
					</Box>

					<Box>
						<Image
							src={React_logo}
							alt='React logo'
							height={48}
							width={60}
							className='mx-auto my-0.5'></Image>
					</Box>
					<Box>
						<Image
							src={ts_logo}
							alt='TS logo'
							width={54}
							className='mx-auto my-0.5'></Image>
					</Box>
					<Box>
						<Image
							src={tailwind_logo}
							alt='Tailwindcss logo'
							width={54}
							className='mx-auto my-2'></Image>
					</Box>
					<Box>
						<Image
							src={sass_logo}
							alt='Sass logo'
							width={54}
							className='mx-auto my-2'></Image>
					</Box>
					<Box>
						<Image
							src={next_logo}
							alt='Next.js logo'
							width={250}
							className='mx-auto my-0.3'></Image>
					</Box>
					<Box>
						<Image
							src={strapi_logo}
							alt='Next.js logo'
							width={150}
							className='mx-auto my-1'></Image>
					</Box>
				</div>
			</Worked>
		</>
	);
}
