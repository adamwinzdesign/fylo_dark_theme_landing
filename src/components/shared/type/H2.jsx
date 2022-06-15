import styled from "styled-components";
import { white } from "../../../colors";

const H2 = styled.h2`
	font-family: "Raleway", sans-serif;
	font-size: 20px;
	font-weight: 700;
	color: ${white};
	&.features {
		margin: 16px 0 8px 0;
	}
	&.team {
		width: 506px;
		font-size: 40px;
	}
	&.testimonialName {
		font-size: 10px;
	}
	&.signIn {
		font-size: 32px;
		line-height: 48px;
	}
`;

export default H2;
