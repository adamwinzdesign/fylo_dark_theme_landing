import styled from "styled-components";
import Hero from "./Hero";
import Features from "./Features";
import Team from "./Team";
import SignIn from "./SignIn";

const Content = () => {
	return (
		<ContentContainer>
			<Hero />
			<Features />
			<Team />
			<SignIn />
		</ContentContainer>
	);
};

const ContentContainer = styled.div`
	min-height: 80vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border: 1px solid green;
`;

export default Content;
