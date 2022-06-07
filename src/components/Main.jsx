import styled from "styled-components";
import { dark_blue_intro } from "../colors";

const Main = styled.div`
	min-height: 100vh;
	width: 100%;
	background-color: ${dark_blue_intro};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	border: 1px solid green;
`;

export default Main;
