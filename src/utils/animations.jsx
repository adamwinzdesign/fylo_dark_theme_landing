import { cyan, white } from "../colors";

export const hoverSVG = {
	hovering: {
		fill: [white, cyan],
		transition: {
			fill: {
				duration: 1,
				times: [0, 1],
			},
		},
	},
	notHovering: {
		fill: white,
		transition: { duration: 1 },
	},
};
