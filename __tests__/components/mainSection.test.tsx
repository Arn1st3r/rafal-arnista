import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import MainSection from "../../components/MainSection/main";
import Routes from "../../utils/routes";
describe("MainSection Component", () => {
	it("Should render headline properly", () => {
		const { getByText } = render(<MainSection></MainSection>);
		const headerElement = getByText("Rafał Arnista");
		const headerElement2 = getByText("Frontend Developer");
		expect(headerElement).toBeInTheDocument();
		expect(headerElement2).toBeInTheDocument();
	});
	it("Should render image of author properly", () => {
		const { getByAltText } = render(<MainSection />);
		const img = getByAltText("Rafal Arnista - zdjecie");
		expect(img).toBeInTheDocument();
	});
	it("renders 'Get in touch' button properly", () => {
		const { getByText } = render(<MainSection />);
		const buttonElement = getByText("Get in touch");
		expect(buttonElement).toBeInTheDocument();
	});

	it("renders 'Worked with' section properly", () => {
		const { getByText } = render(<MainSection />);
		const workedWithElement = getByText("Worked with");
		expect(workedWithElement).toBeInTheDocument();
	});

	it("renders logos", () => {
		const { getByAltText } = render(<MainSection />);
		const jsLogo = getByAltText("JS logo");
		const reactLogo = getByAltText("React logo");
		expect(jsLogo).toBeInTheDocument();
		expect(reactLogo).toBeInTheDocument();
	});
	it("clicking 'Get in touch' button should redirect to correct link", () => {
		const { getByText } = render(<MainSection></MainSection>);
		const button = getByText("Get in touch");

		fireEvent.click(button);
		expect("#get-in-touch").toBe(Routes.getintouch);
	});
});
