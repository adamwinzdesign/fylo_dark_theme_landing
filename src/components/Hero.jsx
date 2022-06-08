import Section from "./shared/Section";
import Img from "./shared/Img";
import illustrationIntro from "../images/illustration-intro.png";
import GradientLink from "./shared/GradientLink";
import H1 from "./shared/type/H1.jsx";
import P from "./shared/type/P";

const Hero = () => {
	return (
		<Section id='hero'>
			<Img src={illustrationIntro} alt='page introduction' />
			<H1>All your files in one secure location, accessible anywhere.</H1>
			<P>
				Fylo stores all your most important files in one secure location. Access them wherever you
				need, share and collaborate with friends, family, and co-workers.
			</P>
			<GradientLink to='signIn' spy={true} smooth={true}>
				Get Started
			</GradientLink>
		</Section>
	);
};

export default Hero;
