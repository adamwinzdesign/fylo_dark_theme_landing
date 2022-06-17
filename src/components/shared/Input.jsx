import styled from "styled-components";

const Input = styled.input`
	height: 48px;
	width: 480px;
	border-radius: 24px;
	@media (max-width: 375px) {
		width: 280px;
		margin-bottom: 24px;
	}
`;

export default Input;
