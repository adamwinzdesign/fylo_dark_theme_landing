import styled from "styled-components";
import { dark_blue_testimonials } from "../../colors";

const Card = styled.div`
	/* base styles from Team */
	height: 200px;
	width: 360px;
	background: ${dark_blue_testimonials};
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	overflow: visible;
	z-index: 2;
	@media (max-width: 375px) {
		height: 160px;
		width: 280px;
	}
`;

export default Card;
