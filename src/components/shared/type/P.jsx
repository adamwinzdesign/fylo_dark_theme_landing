import styled from "styled-components";
import { white } from "../../../colors";

const P = styled.p`
	/* base styles for Hero */
	color: ${white};
	width: 589px;
	margin-top: 32px;
	text-align: center;
	font-size: 20px;
	font-family: "Open Sans", sans-serif;
	font-style: normal;
	font-weight: 400;
	line-height: 30px;
	&.features {
		width: 349px;
		margin-top: 0;
		font-size: 14px;
		line-height: 21px;
	}
	&.team {
		font-size: 16px;
		text-align: left;
		line-height: 24px;
		margin-top: 16px;
	}
	&.testimonialText {
		width: 310px;
		font-size: 14px;
		line-height: 21px;
		font-style: normal;
	}
	&.testimonialPosition {
		font-size: 8px;
		line-height: 10px;
	}
`;

export default P;
