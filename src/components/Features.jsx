import Section from "./shared/Section";
import FeaturesCard from "./FeaturesCard";
import H2 from "./shared/type/H2";
import P from "./shared/type/P";
import featuresData from "../utils/featuresData";
import MotionSVGHover from "../images/svgComponents/MotionSVGHover";

const Features = () => {
	return (
		<Section id='features' className='features'>
			{featuresData.map((feature) => (
				<FeaturesCard key={feature.headline}>
					{feature.pathData ? (
						<MotionSVGHover pathData={feature.pathData} />
					) : (
						<img src={feature.icon} alt={feature.headline} />
					)}
					<H2>{feature.headline}</H2>
					<P className='features'>{feature.body}</P>
				</FeaturesCard>
			))}
		</Section>
	);
};

export default Features;
