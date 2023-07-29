/** @type {import('next').NextConfig} */

// Przekształcony moduł ES6
module.exports = {
	// Other Next.js configurations may be present here

	compiler: {
		// Enables the styled-components SWC transform
		styledComponents: true,
	},
	output: "export",
};
