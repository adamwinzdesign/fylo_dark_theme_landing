import styled from "styled-components";
import { motion } from "framer-motion";

const MotionPath = ({ d, variants, style, custom }) => {
	return <Path d={d} variants={variants} style={style} custom={custom} />;
};

export default MotionPath;

const Path = styled(motion.path)`
	stroke-width: ${(props) => (props.custom.renderStroke ? props.custom.strokeWidth : 0.5)};
`;
