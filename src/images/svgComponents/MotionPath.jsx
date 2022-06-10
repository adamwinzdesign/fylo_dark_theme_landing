import styled from "styled-components";
import { motion } from "framer-motion";

const MotionPath = ({ d, variants }) => {
	return <Path d={d} variants={variants} />;
};

export default MotionPath;

const Path = styled(motion.path)`
	position: absolute;
`;
