import styled from "styled-components";

const Form = styled.form`
	display: flex;
	justify-content: space-between;
	width: 709px;
	height: 48px;
	@media (max-width: 375px) {
		flex-direction: column;
		width: 280px;
		height: auto;
	}
`;

export default Form;
