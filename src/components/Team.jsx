import styled from "styled-components";
import stayProductive from "../images/illustration-stay-productive.png";
import iconArrow from "../images/icon-arrow.svg";
import { cyan, dark_blue_testimonials, white } from "../colors";
import { Link } from "react-scroll";
import testimonialsData from "../utils/testimonialsData";
import Section from "./shared/Section";

const Team = () => {
	return (
		<Section id='team' className='team'>
			<Img src={stayProductive} alt='team collaboration' />
			<TeamTextContain>
				<H1>Stay productive, wherever you are.</H1>
				<P>
					Never let location be an issue when accessing your files. Fylo has you covered for all of
					your file storage needs.
				</P>
				<P>
					Securely share files and folders with friends, family and colleagues for live
					collaboration. No email attachments required.
				</P>
				<TeamLinkContain>
					<StyledLink to='#'>See how Fylo works</StyledLink>
					<CTAImg src={iconArrow} alt='arrow' />
				</TeamLinkContain>
			</TeamTextContain>

			<TestimonialsContain>
				{testimonialsData.map((testimonial) => (
					<TestimonialCard key={testimonial.name}>
						<P className='testimonialText'>{testimonial.text}</P>
						<ProfileImg src={testimonial.photo} alt='profile' />
						<H1 className='testimonialName'>{testimonial.name}</H1>
						<P className='testimonialPosition'>{testimonial.position}</P>
					</TestimonialCard>
				))}
			</TestimonialsContain>
		</Section>
	);
};

export default Team;

const Img = styled.img`
	width: 615px;
	height: 464px;
`;

const TeamTextContain = styled.div`
	width: 563px;
	height: 282px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
`;

const H1 = styled.h1`
	font-family: "Raleway", sans-serif;
	font-size: 40px;
	font-weight: 700;
	color: ${white};
	&.testimonialName {
		font-family: "Open Sans", sans-serif;
		font-size: 10px;
		font-weight: 700;
	}
`;

const P = styled.p`
	font-family: "Open Sans", sans-serif;
	font-weight: 400;
	font-size: 16px;
	color: ${white};
	&.testimonialText {
		width: 310px;
		font-family: "Open Sans", sans-serif;
		font-size: 14px;
		line-height: 21px;
		font-style: normal;
	}
	&.testimonialPosition {
		font-size: 7px;
	}
`;

const TeamLinkContain = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	border-bottom: 1px solid ${cyan};
	padding-bottom: 4px;
	cursor: pointer;
	&:hover {
		border-bottom: 1px solid ${white};
	}
`;

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

const TestimonialsContain = styled.div`
	width: 1160px;
	display: flex;
	justify-content: space-between;
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
