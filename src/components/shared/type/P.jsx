import styled from "styled-components";
import { light_red, white } from "../../../colors";

const P = styled.p`
	/* base styles for Hero */
	color: ${white};
	width: 589px;
	text-align: center;
	font-size: 20px;
	font-family: "Open Sans", sans-serif;
	font-style: normal;
	font-weight: 400;
	line-height: 30px;
	&.features {
		width: 349px;
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
		text-align: left;
	}
	&.testimonialPosition {
		margin: 0;
		padding: 0;
		width: 100px;
		text-align: left;
		font-size: 8px;
		line-height: 10px;
	}
	&.signIn {
		width: 673px;
		font-size: 14px;
		line-height: 21px;
	}
	&.error {
		font-size: 10px;
		font-weight: 700;
		color: ${light_red};
	}
	&.footerText {
		width: 339px;
		font-size: 16px;
		text-align: left;
	}
	&.contactText {
		/* width: 110px; */
		font-size: 14px;
		line-height: 21px;
	}
`;

export default P;
