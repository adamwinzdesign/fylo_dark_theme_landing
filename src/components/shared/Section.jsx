import styled from "styled-components";

const Section = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	&.features {
		height: 507px;
		width: 880px;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: space-between;
		align-items: space-between;
	}
`;

export default Section;
