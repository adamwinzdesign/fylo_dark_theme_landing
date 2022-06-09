import Container from "./shared/Container";
import logo from "../images/logo.svg";
import Img from "./shared/Img";
import location from "../images/icon-location.svg";
import phone from "../images/icon-phone.svg";
import email from "../images/icon-email.svg";
import P from "./shared/type/P";

const Footer = () => {
	return (
		<Container className='footer'>
			<Container className='footerLogo'>
				<Img src={logo} alt='fylo' className='footerLogo' />
			</Container>
			<Container className='footerContent'>
				<Container className='footerText'>
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
				<Container className='footerLinks'></Container>
				<Container className='footerSocial'></Container>
			</Container>
		</Container>
	);
};

export default Footer;
