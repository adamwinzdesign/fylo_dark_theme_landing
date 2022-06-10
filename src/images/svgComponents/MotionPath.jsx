import styled from "styled-components";
import { motion } from "framer-motion";

const MotionPath = ({ d, variants, style }) => {
	return <Path d={d} variants={variants} style={style} />;
};

export default MotionPath;

const Path = styled(motion.path)`
	stroke-width: 0.3;
`;
