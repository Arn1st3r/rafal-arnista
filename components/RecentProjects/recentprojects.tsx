"use client";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import project_image from "../../public/project.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
	background-color: white;
	color: black;
`;
const Box = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	gap: 96px;
	padding-bottom: 90px;
`;
const Button = styled.button`
	margin-top: 56px;
	color: white;
	background-color: #3f8e00;
	width: 140px;
	height: 38px;
	border-radius: 6px;
	border: 3px solid #62ba1b;
	-webkit-box-shadow: 0px 8px 30px -14px rgba(98, 186, 27, 1);
	-moz-box-shadow: 0px 8px 30px -14px rgba(98, 186, 27, 1);
	box-shadow: 0px 8px 30px -14px rgba(98, 186, 27, 1);
	font-size: 14px;
	font-weight: 700;
	letter-spacing: 1px;
	text-transform: Uppercase;

	&:hover {
		background-color: white;
		color: #3f8e00;
	}
`;
export default function RecentProjects() {
	return (
		<>
			<Container id='recent-projects'>
				<h2 className='text-center text-3xl pb-24 pt-24 font-bold'>
					Recent projects
				</h2>
				<Box>
					<div className='w-3/12'>
						<h2 className='text-2xl font-semibold mb-4'>Bezpieczna Przystan</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo
							eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do
							eiusmod tempor incididunt ut labore et dolore magna.
						</p>
						<Button>
							Know more <FontAwesomeIcon height={40} icon={faChevronRight} />
						</Button>
					</div>
					<Image
						src={project_image}
						alt='project image'
						className='rounded-lg'></Image>
				</Box>
				<Box>
					<Image
						src={project_image}
						alt='project image'
						className='rounded-lg'></Image>
					<div className='w-3/12'>
						<h2 className='text-2xl'>Work name here</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo
							eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do
							eiusmod tempor incididunt ut labore et dolore magna.
						</p>
						<Button>
							Know more <FontAwesomeIcon icon={faChevronRight} />
						</Button>
					</div>
				</Box>
			</Container>
		</>
	);
}
