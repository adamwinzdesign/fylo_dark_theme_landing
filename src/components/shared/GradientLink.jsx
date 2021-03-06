import styled from "styled-components";
import { Link } from "react-scroll";
import { white } from "../../colors";

const GradientLink = styled(Link)`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 280px;
	height: 56px;
	margin-top: 32px;
	background: linear-gradient(138.1deg, #63e19b -49.34%, #34a0cd 100%);
	box-shadow: 2px 3px 6px rgba(0, 0, 0, 0.15925);
	border-radius: 28px;
	font-family: "Raleway", sans-serif;
	font-size: 16px;
	font-weight: 700;
	color: ${white};
	&.heroLink {
		@media (max-width: 375px) {
			height: 48px;
			width: 240px;
		}
	}
	&.signIn {
		margin: 0;
		width: 200px;
		height: 48px;
		font-size: 14px;
		@media (max-width: 375px) {
			width: 280px;
		}
	}
`;

export default GradientLink;
