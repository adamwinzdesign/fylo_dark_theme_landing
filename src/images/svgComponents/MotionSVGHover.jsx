import { useState } from "react";
import MotionSVG from "./MotionSVG";
import MotionPath from "./MotionPath";
import { hoverSVG } from "../../utils/animations";

const MotionSVGHover = ({ pathData }) => {
	const [hovering, setHovering] = useState(false);
	const { width, height, viewBox, paths, renderStroke, strokeWidth } = pathData;

	return (
		<MotionSVG
			style={{ width, height }}
			viewBox={viewBox}
			initial='notHovering'
			animate={hovering ? "hovering" : "notHovering"}
			onMouseEnter={() => setHovering(true)}
			onMouseLeave={() => setHovering(false)}
		>
			{paths.map((path) => (
				<MotionPath
					key={path.d}
					d={path.d}
					variants={hoverSVG}
					custom={{ renderStroke, strokeWidth }}
				/>
			))}
		</MotionSVG>
	);
};

export default MotionSVGHover;
