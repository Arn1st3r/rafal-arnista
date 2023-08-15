"use client";
import React from "react";
import Image from "next/image";
import RA from "../../public/RA.svg";
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

export default function MainSection() {
	return (
		<>
			<div className='Home mx-auto mt-44'>
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
					<button
						className='Home__button'
						onClick={() => (window.location.href = Routes.getintouch)}>
						Get in touch
					</button>
				</div>
				<div>
					<Image src={RA} alt='Rafal Arnista - zdjecie'></Image>
				</div>
			</div>
			<div className='Worked'>
				<div>
					<h3>Worked with</h3>
				</div>
				<div className='Box flex flex-row mt-10 gap-10'>
					<div className='Box__item'>
						<Image
							src={JS_logo}
							alt='JS logo'
							height={50}
							width={60}
							className='mx-auto my-0.5'></Image>
					</div>

					<div className='Box__item'>
						<Image
							src={React_logo}
							alt='React logo'
							height={48}
							width={60}
							className='mx-auto my-0.5'></Image>
					</div>
					<div className='Box__item'>
						<Image
							src={ts_logo}
							alt='TS logo'
							width={54}
							className='mx-auto my-0.5'></Image>
					</div>
					<div className='Box__item'>
						<Image
							src={tailwind_logo}
							alt='Tailwindcss logo'
							width={54}
							className='mx-auto my-2'></Image>
					</div>
					<div className='Box__item'>
						<Image
							src={sass_logo}
							alt='Sass logo'
							width={54}
							className='mx-auto my-2'></Image>
					</div>
					<div className='Box__item'>
						<Image
							src={next_logo}
							alt='Next.js logo'
							width={250}
							className='mx-auto my-0.3'></Image>
					</div>
					<div className='Box__item'>
						<Image
							src={strapi_logo}
							alt='Next.js logo'
							width={150}
							className='mx-auto my-1'></Image>
					</div>
				</div>
			</div>
		</>
	);
}
