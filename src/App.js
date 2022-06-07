import "./App.css";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Content from "./components/Content";

function App() {
	return (
		<div className='App'>
			<Main>
				<Nav />
				<Content />
			</Main>
		</div>
	);
}

export default App;
