import styled from "styled-components";
import Hero from "./Hero";
import Features from "./Features";
import Team from "./Team";
import SignIn from "./SignIn";
import Footer from "./Footer";

const Content = () => {
	return (
		<ContentContainer>
			<Hero />
			<Features />
			<Team />
			<SignIn />
			<Footer />
		</ContentContainer>
	);
};

const ContentContainer = styled.div`
	width: 100%;
	margin-top: 75px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export default Content;
