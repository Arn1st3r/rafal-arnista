import MainSection from "@/components/MainSection/main";
import React from "react";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";
import RecentProjects from "../components/RecentProjects/recentprojects";
import FormComponent from "../components/FormComponent/form";
export default function Home() {
	return (
		<>
			<Navbar></Navbar>
			<MainSection></MainSection>
			<RecentProjects></RecentProjects>
			<FormComponent></FormComponent>
			<Footer></Footer>
		</>
	);
}
