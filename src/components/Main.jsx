import styled from "styled-components";
import { dark_blue_intro } from "../colors";

const Main = styled.main`
	min-height: 100vh;
	width: 100%;
	background-color: ${dark_blue_intro};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
`;

export default Main;
