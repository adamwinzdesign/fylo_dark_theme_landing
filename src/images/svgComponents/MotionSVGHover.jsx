import { useState } from "react";
import MotionSVG from "./MotionSVG";
import MotionPath from "./MotionPath";
import { hoverSVG } from "../../utils/animations";

const MotionSVGHover = ({ pathData }) => {
	const [hovering, setHovering] = useState(false);
	const { viewBox, paths } = pathData;

	return (
		<MotionSVG
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
					custom={{ stroke: path.stroke, strokeWidth: path.strokeWidth, fill: path.fill }}
				/>
			))}
		</MotionSVG>
	);
};

export default MotionSVGHover;
