import styled from "styled-components";
import { white } from "../../../colors";

const H2 = styled.h2`
	font-family: "Raleway", sans-serif;
	font-size: 20px;
	font-weight: 700;
	color: ${white};
	&.features {
		margin: 18px 0 8px 0;
	}
	&.team {
		width: 506px;
		font-size: 40px;
		@media (max-width: 375px) {
			width: 293px;
			font-size: 24px;
		}
	}
	&.testimonialName {
		font-size: 10px;
	}
	&.signIn {
		font-size: 32px;
		line-height: 48px;
		@media (max-width: 375px) {
			font-size: 18px;
			line-height: 24px;
			width: 200px;
		}
	}
`;

export default H2;
