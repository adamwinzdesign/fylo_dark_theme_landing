import { useState } from "react";
import { motion } from "framer-motion";
import { hoverSVG } from "../../utils/animations";
import { socialIconCircle } from "../../utils/svgData";

const MotionSocialSVG = ({ pathData }) => {
	const [hovering, setHovering] = useState(false);

	const { viewBox, paths } = pathData;
	const circlePath = socialIconCircle.paths[0];

	return (
		<motion.svg
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
				}}
			/>
			{paths.map((path) => (
				<motion.path
					key={path.d}
					variants={hoverSVG}
					d={path.d}
					custom={{ stroke: path.stroke, strokeWidth: path.strokeWidth, fill: path.fill }}
				/>
			))}
		</motion.svg>
	);
};

export default MotionSocialSVG;
