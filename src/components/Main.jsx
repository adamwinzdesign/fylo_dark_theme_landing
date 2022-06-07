import styled from "styled-components";
import { dark_blue_main } from "../colors";

const Main = styled.div`
	min-height: 100vh;
	width: 100%;
	background-color: ${dark_blue_main};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export default Main;
