import { useState } from "react";
import MotionSVG from "./MotionSVG";
import MotionPath from "./MotionPath";
import { hoverSVG } from "../../utils/animations";

const MotionSVGHover = ({ pathData }) => {
	const [hovering, setHovering] = useState(false);

	return (
		<MotionSVG
			style={{ width: pathData.width, height: pathData.height }}
			viewBox={pathData.viewBox}
			initial='notHovering'
			animate={hovering ? "hovering" : "notHovering"}
			onMouseEnter={() => setHovering(true)}
			onMouseLeave={() => setHovering(false)}
		>
			{pathData.paths.map((path) => (
				<MotionPath
					key={path.d}
					d={path.d}
					variants={hoverSVG}
					custom={{ renderStroke: pathData.renderStroke, strokeWidth: pathData.strokeWidth }}
				/>
			))}
		</MotionSVG>
	);
};

export default MotionSVGHover;
