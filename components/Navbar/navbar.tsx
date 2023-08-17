"use client";
import Link from "next/link";
import Routes from "../../utils/routes";
import Image from "next/image";
import linkedIn from "../../public/Linkedin.svg";
import Github from "../../public/github.svg";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
export default function Navbar() {
	const [activeClass, setActiveClass] = useState("menu collapsible");

	const handleButtonClick = () => {
		setActiveClass(
			activeClass === "menu collapsible"
				? "menu collapsible--expanded"
				: "menu collapsible"
		);
	};
	return (
		<>
			<nav className={activeClass}>
				<FontAwesomeIcon
					className='menu__bar'
					icon={faBars}
					onClick={handleButtonClick}
				/>
				<ul className='menu__items collapsible_content mx-24 pt-5'>
					<li>
						<Link href={Routes.home}>Home</Link>
					</li>
					<li>
						<Link href={Routes.recent_projects}>Projects</Link>
					</li>
					<li>
						<Link href={Routes.getintouch}>Get in touch</Link>
					</li>
					<li>
						<Link href={Routes.linkedIn} target='_blank'>
							<Image
								src={linkedIn}
								width={18}
								height={17}
								alt='Logo LinkedIn'></Image>
						</Link>
					</li>
					<li>
						<Link className='menu__link' href={Routes.github} target='_blank'>
							<Image
								src={Github}
								width={20}
								height={20}
								alt='Logo GitHub'></Image>
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);
}
