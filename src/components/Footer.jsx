import Container from "./shared/Container";
import StyledLink from "./shared/StyledLink";
import logo from "../images/logo.svg";
import Img from "./shared/Img";
import location from "../images/icon-location.svg";
import phone from "../images/icon-phone.svg";
import email from "../images/icon-email.svg";
import P from "./shared/type/P";
// import facebook from "../images/facebook.svg";
// import twitter from "../images/twitter.svg";
// import instagram from "../images/instagram.svg";
import MotionSVGHover from "../images/svgComponents/MotionSVGHover";
import { socialIconCircle, instagram, twitter, facebook } from "../utils/svgData";
import MotionSocialSVG from "../images/svgComponents/MotionSocialSVG";

const Footer = () => {
	return (
		<Container className='footer'>
			<Container className='footerLogo'>
				<Img src={logo} alt='fylo' className='footerLogo' />
			</Container>
			<Container className='footerContent'>
				<Container>
					<Img src={location} alt='location' className='footerLocation' />
					<P className='footerText'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua
					</P>
				</Container>
				<Container className='footerContact'>
					<Container className='footerContactRow'>
						<Img src={phone} alt='location' className='footerPhone' />
						<P className='contactText'>+1-543-123-4567</P>
					</Container>
					<Container className='footerContactRow'>
						<Img src={email} alt='location' className='footerEmail' />
						<P className='contactText'>example@fylo.com</P>
					</Container>
				</Container>
				<Container className='footerLinks'>
					<Container className='footerLinksCol'>
						<StyledLink to='team' spy={true} smooth={true}>
							About Us
						</StyledLink>
						<StyledLink to='hero' spy={true} smooth={true}>
							Jobs
						</StyledLink>
						<StyledLink to='team' spy={true} smooth={true}>
							Press
						</StyledLink>
						<StyledLink to='features' spy={true} smooth={true}>
							Blog
						</StyledLink>
					</Container>
					<Container className='footerLinksCol'>
						<StyledLink to='team' spy={true} smooth={true}>
							Contact Us
						</StyledLink>
						<StyledLink to='hero' spy={true} smooth={true}>
							Terms
						</StyledLink>
						<StyledLink to='team' spy={true} smooth={true}>
							Privacy
						</StyledLink>
					</Container>
				</Container>
				<Container className='footerSocial'>
					{/* <Img src={facebook} alt='facebook' /> */}
					{/* <Img src={twitter} alt='twitter' /> */}
					{/* <Img src={instagram} alt='instagram' /> */}
					{/* <MotionSVGHover pathData={twitter} /> */}
					{/* <MotionSVGHover pathData={socialIconCircle} /> */}
					<MotionSocialSVG pathData={facebook} />
					<MotionSocialSVG pathData={twitter} />
					<MotionSocialSVG pathData={instagram} />
				</Container>
			</Container>
		</Container>
	);
};

export default Footer;
