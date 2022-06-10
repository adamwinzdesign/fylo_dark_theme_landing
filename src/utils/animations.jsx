import { cyan, white } from "../colors";

export const hoverSVG = {
	hovering: {
		fill: [white, cyan],
		fillOpacity: [1, 0, 0, 1],
		stroke: [white, cyan],
		pathLength: [1.1, 0, 1.1],
		transition: {
			fill: {
				duration: 2,
			},
			fillOpacity: {
				duration: 2,
				times: [0, 0.4, 0.6, 1],
			},
			stroke: {
				duration: 2,
			},
			pathLength: {
				duration: 2,
			},
		},
	},
	notHovering: {
		fill: white,
		transition: { duration: 1 },
	},
};
