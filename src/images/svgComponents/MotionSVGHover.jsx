import { useState } from "react";
import MotionSVG from "./MotionSVG";
import MotionPath from "./MotionPath";
import { hoverSVG } from "../../utils/animations";

const MotionSVGHover = ({ pathData }) => {
	const [hovering, setHovering] = useState(false);

	return (
		<MotionSVG
			style={{ width: pathData[0].width, height: pathData[0].height }}
			viewBox={pathData[0].viewBox}
			initial='notHovering'
			animate={hovering ? "hovering" : "notHovering"}
			onMouseEnter={() => setHovering(true)}
			onMouseLeave={() => setHovering(false)}
		>
			{pathData.map((path) => (
				<MotionPath key={path.d} d={path.d} variants={hoverSVG} />
			))}
		</MotionSVG>
	);
};

export default MotionSVGHover;
