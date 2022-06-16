import Hero from "./Hero";
import Features from "./Features";
import Team from "./Team";
// import SignIn from "./SignIn";
import Footer from "./Footer";
import Container from "./shared/Container";

const Content = () => {
	return (
		<Container className='allContent'>
			<Hero />
			<Features />
			<Team />
			{/* <SignIn /> */}
			<Footer />
		</Container>
	);
};

export default Content;
