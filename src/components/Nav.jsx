import Container from "./shared/Container";
import logo from "../images/logo.svg";
import StyledLink from "./shared/StyledLink";

import MotionSVGHover from "../images/svgComponents/MotionSVGHover";
import { navLogo } from "../utils/svgData";

const Nav = () => {
	return (
		<Container className='navContain'>
			{/* <img src={logo} alt='Fylo' /> */}

			<MotionSVGHover pathData={navLogo} />

			<Container>
				<StyledLink to='features' spy={true} smooth={true}>
					Features
				</StyledLink>
				<StyledLink to='team' spy={true} smooth={true}>
					Team
				</StyledLink>
				<StyledLink to='signIn' spy={true} smooth={true}>
					Sign In
				</StyledLink>
			</Container>
		</Container>
	);
};

export default Nav;
