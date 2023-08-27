"use client";
import React from "react";
import Image from "next/image";
import project_image from "../../public/project.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Routes from "../../utils/routes";

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
							The website was created for a psychotherapy office with the task
							of promoting their office on the local market. The website was
							built using React App.
						</p>
						<button
							className='Container__button'
							onClick={() =>
								(window.location.href = Routes.bezpieczna_przystan)
							}>
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
						<h2 className='text-2xl font-semibold mb-4'>
							County League of Legends Tournament
						</h2>
						<p>
							The website was created to promote the county League of Legends
							tournament. It&apos;s a basic page that provided information about
							the tournament, includes teams, results of games, rules and live
							stream.
						</p>
						<button
							className='Container__button'
							onClick={() => (window.location.href = Routes.tournament_lol)}>
							Know more <FontAwesomeIcon icon={faChevronRight} />
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
