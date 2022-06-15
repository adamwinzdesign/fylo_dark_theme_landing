import styled from "styled-components";
import { white } from "../../../colors";

const H1 = styled.h1`
	width: 734px;
	margin-top: 33px;
	text-align: center;
	color: ${white};
	font-size: 40px;
	font-family: "Raleway", sans-serif;
	font-weight: 700;
	line-height: 60px;
	@media (max-width: 375px) {
		width: 320px;
		font-size: 24px;
		line-height: 36px;
	}
`;

export default H1;
