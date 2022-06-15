import styled from "styled-components";

const Section = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	&.hero {
		margin-top: 48px;
		max-width: 720px;
		border: 1px solid green;
		@media (max-width: 375px) {
			max-width: 304px;
		}
	}
	&.features {
		height: 507px;
		width: 880px;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: space-between;
		align-items: space-between;
	}
	&.team {
		width: 1235px;
		flex-direction: row;
		flex-wrap: wrap;
	}
`;

export default Section;
