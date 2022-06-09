import styled from "styled-components";
import { Link } from "react-scroll";
import { white } from "../../colors";
import { cyan } from "../../colors";

const StyledLink = styled(Link)`
	/* base styles from Nav */
	font-family: "Raleway", sans-serif;
	color: ${white};
	font-size: 16px;
	cursor: pointer;
	margin-left: 55px;
	&.teamLink {
		font-family: "Open Sans", sans-serif;
		color: ${cyan};
		font-size: 16px;
		font-weight: 400;
		margin-left: 0;
		&:hover {
			color: ${white};
		}
	}
`;

export default StyledLink;
