import { useState } from "react";
import { motion } from "framer-motion";
import { hoverSVG } from "../../utils/animations";
import { socialIconCircle } from "../../utils/svgData";

const MotionSocialSVG = ({ pathData }) => {
	const [hovering, setHovering] = useState(false);

	const { width, height, viewBox, paths, strokeWidth } = pathData;
	const circlePath = socialIconCircle.paths[0];

	return (
		<motion.svg
			style={{ width, height }}
			viewBox={viewBox}
			initial='notHovering'
			animate={hovering ? "hovering" : "notHovering"}
			onMouseEnter={() => setHovering(true)}
			onMouseLeave={() => setHovering(false)}
		>
			<motion.path
				d={circlePath.d}
				variants={hoverSVG}
				custom={{
					stroke: circlePath.stroke,
					strokeWidth: circlePath.strokeWidth,
					fill: circlePath.fill,
				}}
			/>
		</motion.svg>
	);
};

export default MotionSocialSVG;
