import { useState } from "react";
import { hoverSVG } from "../../utils/animations";
import { socialIconCircle } from "../../utils/svgData";
import MotionSVG from "./MotionSVG";
import MotionPath from "./MotionPath";

const MotionSocialSVG = ({ pathData }) => {
	const [hovering, setHovering] = useState(false);

	const { viewBox, paths } = pathData;
	const circlePath = socialIconCircle.paths[0];

	return (
		<MotionSVG
			viewBox={viewBox}
			initial='notHovering'
			animate={hovering ? "hovering" : "notHovering"}
			onMouseEnter={() => setHovering(true)}
			onMouseLeave={() => setHovering(false)}
		>
			<MotionPath
				d={circlePath.d}
				variants={hoverSVG}
				custom={{
					stroke: circlePath.stroke,
					strokeWidth: circlePath.strokeWidth,
				}}
			/>
			{paths.map((path) => {
				const { d, stroke, strokeWidth, fill } = path;
				return (
					<MotionPath key={d} variants={hoverSVG} d={d} custom={{ stroke, strokeWidth, fill }} />
				);
			})}
		</MotionSVG>
	);
};

export default MotionSocialSVG;
