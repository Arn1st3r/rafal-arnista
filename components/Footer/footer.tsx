"use client";
import React from "react";
import styled from "styled-components";
import Heart from "../../public/heart.svg";
import Image from "next/image";
export default function Footer() {
	return (
		<>
			<footer>
				<p className='flex flex-row'>
					Created with
					<Image src={Heart} alt='Heart' className='mx-2'></Image> by Rafał
					Arnista
				</p>
			</footer>
		</>
	);
}
