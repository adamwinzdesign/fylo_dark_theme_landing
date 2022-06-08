import styled from "styled-components";
import { white } from "../colors";
import featuresData from "../utils/featuresData";

const Features = () => {
	return (
		<FeaturesContain id='features'>
			{featuresData.map((feature) => (
				<FeaturesCard key={feature.headline}>
					<img src={feature.icon} alt={feature.title} />
					<H1>{feature.headline}</H1>
					<P>{feature.body}</P>
				</FeaturesCard>
			))}
		</FeaturesContain>
	);
};

export default Features;

const FeaturesContain = styled.div`
	height: 507px;
	width: 880px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: space-between;
`;

const FeaturesCard = styled.div`
	width: 349px;
	height: 214px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
`;

const H1 = styled.h1`
	font-family: "Raleway", sans-serif;
	font-size: 20px;
	font-weight: 700;
	color: ${white};
`;

const P = styled.p`
	font-family: "Open Sans", sans-serif;
	font-size: 14px;
	font-weight: 400;
	color: ${white};
`;
