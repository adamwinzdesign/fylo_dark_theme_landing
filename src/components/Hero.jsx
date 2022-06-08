import styled from "styled-components";
import { white } from "../colors";
import illustrationIntro from "../images/illustration-intro.png";

const Hero = () => {
	return (
		<HeroContain id='hero'>
			<Img src={illustrationIntro} />
			<H1>All your files in one secure location, accessible anywhere.</H1>
			<P>
				Fylo stores all your most important files in one secure location. Access them wherever you
				need, share and collaborate with friends, family, and co-workers.
			</P>
			<Button>Get Started</Button>
		</HeroContain>
	);
};

export default Hero;

const HeroContain = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Img = styled.img`
	height: 534px;
	width: 720px;
`;

const H1 = styled.h1`
	width: 734px;
	margin-top: 36px;
	text-align: center;
	color: ${white};
	font-size: 40px;
	font-family: "Raleway", sans-serif;
	font-weight: 700;
	line-height: 60px;
`;

const P = styled.p`
	width: 589px;
	margin-top: 32px;
	text-align: center;
	color: ${white};
	font-size: 20px;
	font-family: "Open Sans", sans-serif;
	font-weight: 400;
	line-height: 30px;
`;

const Button = styled.button`
	width: 280px;
	height: 56px;
	margin-top: 32px;
	background: linear-gradient(138.1deg, #63e19b -49.34%, #34a0cd 100%);
	box-shadow: 2px 3px 6px rgba(0, 0, 0, 0.15925);
	border-radius: 28px;
	font-family: "Raleway", sans-serif;
	font-size: 16px;
	font-weight: 700;
	color: ${white};
`;
