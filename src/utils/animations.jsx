import { cyan, white } from "../colors";

export const hoverSVG = {
	hovering: {
		fill: [white, cyan],
		fillOpacity: [1, 0, 0, 1],
		stroke: [white, cyan],
		pathLength: [1.1, 0, 1.1],
		transition: {
			fill: {
				duration: 4,
			},
			fillOpacity: {
				duration: 4,
				times: [0, 0.4, 0.5, 1],
			},
			stroke: {
				duration: 4,
			},
			pathLength: {
				duration: 3.75,
				times: [0, 1],
			},
		},
	},
	notHovering: {
		fill: white,
		transition: { duration: 1 },
	},
};
