import styled from "styled-components";
import logo from "../images/logo.svg";
import { Link } from "react-scroll";
import { white } from "../colors";

const Nav = () => {
	return (
		<NavContain>
			<img src={logo} alt='Fylo' />

			<Links>
				<StyledLink to='features' spy={true} smooth={true}>
					Features
				</StyledLink>
				<StyledLink to='team' spy={true} smooth={true}>
					Team
				</StyledLink>
				<StyledLink to='signIn' spy={true} smooth={true}>
					Sign In
				</StyledLink>
			</Links>
		</NavContain>
	);
};

export default Nav;

const NavContain = styled.nav`
	width: 1280px;
	height: 52px;
	margin: 80px 73px 0 73px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Links = styled.div`
	display: flex;
`;

const StyledLink = styled(Link)`
	font-family: "Raleway", sans-serif;
	color: ${white};
	font-size: 16px;
	cursor: pointer;
	margin-left: 55px;
`;
