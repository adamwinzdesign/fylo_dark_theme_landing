import { cyan, white } from "../colors";

// onHover:
// fill fades out
// pathLength reverses, which requires an existing stroke

export const hoverSVG = {
	hovering: {
		fill: [white, cyan],
		fillOpacity: [1, 0, 0, 1],
		stroke: [white, cyan],
		pathLength: [1.1, 0, 1.1],
		transition: {
			fill: {
				duration: 4,
				times: [0, 1],
			},
			fillOpacity: {
				duration: 4,
				times: [0, 0.3, 0.7, 1],
			},
			stroke: {
				duration: 4,
				times: [0, 1],
			},
			pathLength: {
				duration: 3.75,
				times: [0, 0.5, 1],
			},
		},
	},
	notHovering: {
		fill: white,
	},
};
