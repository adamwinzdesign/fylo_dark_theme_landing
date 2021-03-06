import Container from "./shared/Container";
import StyledLink from "./shared/StyledLink";

import MotionSVGHover from "../images/svgComponents/MotionSVGHover";
import { navLogo } from "../utils/svgData";

const Nav = () => {
	return (
		<Container className='navContain'>
			<Container className='navLogo'>
				<MotionSVGHover pathData={navLogo} />
			</Container>

			<Container className='navLinks'>
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
