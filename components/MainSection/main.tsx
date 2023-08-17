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
			<div className='Home mx-auto mt-24'>
				<div className='Home__item1 mt-12 ml-24'>
					<h1 className='text-5xl mb-2'>Rafał Arnista</h1>
					<h2 className='text-2xl mb-2'>Frontend Developer</h2>
					<p className='Home__text'>
						I am a Computer Science student at the University of
						Gdańsk and I am a Frontend Developer too. I already have experience in creating web
						applications. I always strive to approach tasks with full commitment
						and passion, which, combined with my ambition and motivation,
						translates into effectively achieving set goals.<br></br>
					</p>
					<button
						className='Home__button'
						onClick={() => (window.location.href = Routes.getintouch)}>
						Get in touch
					</button>
				</div>
				<div className='Home__item2 mr-24'>
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
							layout='responsive'
							className='mx-auto my-0.5'></Image>
					</div>

					<div className='Box__item'>
						<Image
							src={React_logo}
							alt='React logo'
							className='Box__image mx-auto my-0.5'></Image>
					</div>
					<div className='Box__item'>
						<Image
							src={ts_logo}
							alt='TS logo'
							className='mx-auto my-0.5'></Image>
					</div>
					<div className='Box__item'>
						<Image
							src={tailwind_logo}
							alt='Tailwindcss logo'
							className='mx-auto my-2'></Image>
					</div>
					<div className='Box__item'>
						<Image
							src={sass_logo}
							alt='Sass logo'
							className='mx-auto my-2'></Image>
					</div>
					<div className='Box__item'>
						<Image
							src={next_logo}
							alt='Next.js logo'
							className='mx-auto my-0.3'></Image>
					</div>
					<div className='Box__item'>
						<Image
							src={strapi_logo}
							alt='Next.js logo'
							className='mx-auto my-1'></Image>
					</div>
				</div>
			</div>
		</>
	);
}
