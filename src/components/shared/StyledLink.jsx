import styled from "styled-components";
import { Link } from "react-scroll";
import { white } from "../../colors";

const StyledLink = styled(Link)`
	/* base styles from Nav */
	font-family: "Raleway", sans-serif;
	color: ${white};
	font-size: 16px;
	cursor: pointer;
	margin-left: 55px;
`;

export default StyledLink;
