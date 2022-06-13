import { useState } from "react";
import { motion } from "framer-motion";
import { hoverSVG } from "../../utils/animations";
import { socialIconCircle } from "../../utils/svgData";

const MotionSocialSVG = ({ pathData }) => {
	const [hovering, setHovering] = useState(false);

	const { width, height, viewBox, paths, renderStroke, strokeWidth } = pathData;

	return (
		<motion.svg
			style={{ width, height }}
			viewBox={viewBox}
			initial='notHovering'
			animate={hovering ? "hovering" : "notHovering"}
			onMouseEnter={() => setHovering(true)}
			onMouseLeave={() => setHovering(false)}
		>
			<motion.path d={paths[0].d} variants={hoverSVG} custom={{ renderStroke, strokeWidth }} />
			<motion.path
				d={socialIconCircle.paths[0].d}
				variants={hoverSVG}
				style={{ fill: "none" }}
				custom={{ renderStroke, strokeWidth }}
			/>
		</motion.svg>
	);
};

export default MotionSocialSVG;
