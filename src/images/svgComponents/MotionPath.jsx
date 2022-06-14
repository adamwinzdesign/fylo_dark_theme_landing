import styled from "styled-components";
import { motion } from "framer-motion";

const MotionPath = ({ d, variants, custom }) => {
	return <Path d={d} variants={variants} custom={custom} />;
};

export default MotionPath;

const Path = styled(motion.path)``;
