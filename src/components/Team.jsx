import styled from "styled-components";
import stayProductive from "../images/illustration-stay-productive.png";
import { white } from "../colors";
import { Link } from "react-scroll";
import testimonialsData from "../utils/testimonialsData";

const Team = () => {
	return (
		<TeamContain id='team'>
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
				<Link>See how Fylo works.</Link>
			</TeamTextContain>

			<TestimonialsContain>
				{testimonialsData.map((testimonial) => (
					<TestimonialCard key={testimonial.name}>
						<h1>{testimonial.name}</h1>
					</TestimonialCard>
				))}
			</TestimonialsContain>
		</TeamContain>
	);
};

export default Team;

const TeamContain = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

const Img = styled.img`
	width: 615px;
	height: 464px;
`;

const TeamTextContain = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const H1 = styled.h1`
	font-family: "Raleway", sans-serif;
	font-size: 40px;
	font-weight: 700;
	color: ${white};
`;

const P = styled.p`
	font-family: "Open Sans", sans-serif;
	font-weight: 400;
	font-size: 16px;
	color: ${white};
`;

const TestimonialsContain = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const TestimonialCard = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
