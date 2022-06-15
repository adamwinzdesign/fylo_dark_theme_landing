import stayProductive from "../images/illustration-stay-productive.png";
import StyledLink from "./shared/StyledLink";
import quotes from "../images/bg-quotes.png";
import iconArrow from "../images/icon-arrow.svg";
import testimonialsData from "../utils/testimonialsData";
import Section from "./shared/Section";
import Img from "./shared/Img";
import Container from "./shared/Container";
import Card from "./shared/Card";
import H2 from "./shared/type/H2";
import P from "./shared/type/P";

const Team = () => {
	return (
		<Section id='team' className='team'>
			<Img src={stayProductive} alt='team collaboration' className='team' />
			<Container className='teamText'>
				<H2 className='team'>Stay productive, wherever you are</H2>
				<P className='team'>
					Never let location be an issue when accessing your files. Fylo has you covered for all of
					your file storage needs.
				</P>
				<P className='team'>
					Securely share files and folders with friends, family and colleagues for live
					collaboration. No email attachments required.
				</P>
				<Container className='teamLinkContain'>
					<StyledLink to='signIn' className='teamLink'>
						See how Fylo works
						<Img src={iconArrow} alt='arrow' className='ctaImg' />
					</StyledLink>
				</Container>
			</Container>

			<Container className='testimonialsContain'>
				<Img src={quotes} alt='quote' className='quotation' />
				{testimonialsData.map((testimonial) => (
					<Card key={testimonial.name}>
						<P className='testimonialText'>{testimonial.text}</P>
						<Container className='testimonialProfile'>
							<Img src={testimonial.photo} alt='profile' className='testimonial' />
							<Container className='testimonialInfo'>
								<H2 className='testimonialName'>{testimonial.name}</H2>
								<P className='testimonialPosition'>{testimonial.position}</P>
							</Container>
						</Container>
					</Card>
				))}
			</Container>
		</Section>
	);
};

export default Team;
