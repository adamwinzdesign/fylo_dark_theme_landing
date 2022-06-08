import styled from "styled-components";
import featuresData from "../utils/featuresData";

const Features = () => {
	return (
		<FeaturesContain id='features'>
			{featuresData.map((feature) => (
				<FeaturesCard key={feature.headline}>
					<h1>{feature.headline}</h1>
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
`;
