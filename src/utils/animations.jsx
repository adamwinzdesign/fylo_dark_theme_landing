import { cyan } from "../colors";

export const hoverSVG = {
	hovering: (custom) => ({
		fill: custom.fill ? [custom.fill, cyan] : "transparent",
		fillOpacity: custom.fill ? [1, 0, 0, 1] : 0,
		stroke: custom.stroke ? [custom.stroke, cyan] : [custom.fill, cyan],
		strokeWidth: custom.strokeWidth > 0 ? custom.strokeWidth : 0.3,
		pathLength: [1.1, 0, 1.1],
		transition: {
			fill: {
				duration: 2,
			},
			fillOpacity: {
				duration: 2,
				times: [0, 0.4, 0.5, 1],
			},
			stroke: {
				duration: 1.75,
			},
			pathLength: {
				duration: 1.75,
				times: [0, 1],
			},
		},
	}),
	notHovering: (custom) => ({
		fill: custom.fill ? custom.fill : "transparent",
		fillOpacity: 1,
		stroke: custom.stroke ? custom.stroke : custom.fill,
		strokeWidth: custom.strokeWidth > 0 ? custom.strokeWidth : 0.3,
		transition: { duration: 1 },
	}),
};
