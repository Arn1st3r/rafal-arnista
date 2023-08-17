"use client";
import React from "react";
import Image from "next/image";
import project_image from "../../public/project.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
export default function RecentProjects() {
	return (
		<>
			<div className='Container' id='recent-projects'>
				<h2 className='text-center text-3xl pb-24 pt-24 font-bold'>
					Recent projects
				</h2>
				<div className='Container__box'>
					<div className=''>
						<h2 className='text-2xl font-semibold mb-4'>Bezpieczna Przystan</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo
							eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do
							eiusmod tempor incididunt ut labore et dolore magna.
						</p>
						<button className='Container__button'>
							Know more <FontAwesomeIcon icon={faChevronRight} />
						</button>
					</div>
					<Image
						src={project_image}
						alt='project image'
						className='rounded-lg'></Image>
				</div>
				<div className='Container__box'>
					<Image
						src={project_image}
						alt='project image'
						className='rounded-lg'></Image>
					<div className=''>
						<h2 className='text-2xl'>Work name here</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo
							eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do
							eiusmod tempor incididunt ut labore et dolore magna.
						</p>
						<button className='Container__button'>
							Know more <FontAwesomeIcon icon={faChevronRight} />
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
