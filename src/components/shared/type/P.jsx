import styled from "styled-components";
import { light_red, white } from "../../../colors";

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
	@media (max-width: 375px) {
		width: 296px;
		font-size: 14px;
		line-height: 21px;
		margin-top: 24px;
	}
	&.features {
		margin: 0;
		width: 384px;
		font-size: 14px;
		line-height: 21px;
		@media (max-width: 375px) {
			width: 320px;
		}
	}
	&.team {
		font-size: 16px;
		text-align: left;
		line-height: 24px;
		margin-top: 16px;
		@media (max-width: 375px) {
			font-size: 14px;
			line-height: 21px;
		}
	}
	&.testimonialText {
		width: 310px;
		margin-left: 24px;
		font-size: 14px;
		line-height: 21px;
		font-style: normal;
		text-align: left;
		@media (max-width: 375px) {
			margin: 30px 20px 0 20px;
			font-size: 10px;
			line-height: 18px;
			max-width: 240px;
		}
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
		margin-bottom: 40px;
	}
	&.error {
		font-size: 10px;
		font-weight: 700;
		color: ${light_red};
	}
	&.footerText {
		margin: 0;
		width: 339px;
		font-size: 16px;
		line-height: 24px;
		text-align: left;
	}
	&.contactText {
		margin: 0;
		width: 124px;
		font-size: 14px;
		line-height: 21px;
	}
`;

export default P;
