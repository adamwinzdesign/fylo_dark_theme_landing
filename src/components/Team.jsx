import styled from "styled-components";
import stayProductive from "../images/illustration-stay-productive.png";
import iconArrow from "../images/icon-arrow.svg";
import { cyan, dark_blue_testimonials, white } from "../colors";
import { Link } from "react-scroll";
import testimonialsData from "../utils/testimonialsData";
import Section from "./shared/Section";
import Img from "./shared/Img";
import Container from "./shared/Container";
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
					<StyledLink to='#'>See how Fylo works</StyledLink>
					<CTAImg src={iconArrow} alt='arrow' />
				</Container>
			</Container>

			<Container className='testimonialsContain'>
				{testimonialsData.map((testimonial) => (
					<TestimonialCard key={testimonial.name}>
						<P className='testimonialText'>{testimonial.text}</P>
						<ProfileImg src={testimonial.photo} alt='profile' />
						<H2 className='testimonialName'>{testimonial.name}</H2>
						<P className='testimonialPosition'>{testimonial.position}</P>
					</TestimonialCard>
				))}
			</Container>
		</Section>
	);
};

export default Team;

const StyledLink = styled(Link)`
	font-family: "Open Sans", sans-serif;
	color: ${cyan};
	font-size: 16px;
	font-weight: 400;
	&:hover {
		color: ${white};
	}
`;

const CTAImg = styled.img`
	height: 12px;
	width: 12px;
	margin-left: 8px;
	border-radius: 50%;
	box-shadow: 0px 0px 2px rgba(98, 224, 217, 0.811141);
`;

const TestimonialCard = styled.div`
	height: 200px;
	width: 360px;
	background: ${dark_blue_testimonials};
	display: flex;
	flex-direction: column;
	/* align-items: center; */
	/* justify-content: space-between; */
`;

const ProfileImg = styled.img`
	height: 24px;
	width: 24px;
	border-radius: 50%;
`;
