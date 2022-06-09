import styled from "styled-components";
import { dark_blue_testimonials } from "../../colors";

const Card = styled.div`
	/* base styles from Team */
	height: 200px;
	width: 360px;
	background: ${dark_blue_testimonials};
	/* display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between; */
	&.testimonialCard {
		padding: 40px 26px;
	}
`;

export default Card;
