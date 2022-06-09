import styled from "styled-components";
import { cyan } from "../../colors";
import { white } from "../../colors";

const Container = styled.div`
	display: flex;
	&.navContain {
		width: 1280px;
		height: 52px;
		margin: 80px 73px 0 73px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	&.teamText {
		width: 563px;
		height: 282px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-start;
	}
	&.teamLinkContain {
		display: flex;
		align-items: center;
		justify-content: center;
		border-bottom: 1px solid ${cyan};
		padding-bottom: 4px;
		cursor: pointer;
		&:hover {
			border-bottom: 1px solid ${white};
		}
	}
	&.testimonialsContain {
		width: 1160px;
		display: flex;
		justify-content: space-between;
	}
	&.testimonialProfile {
		width: 120px;
		margin-top: 24px;
	}
	&.testimonialInfo {
		width: 100px;
		flex-direction: column;
		gap: 4px;
		margin-left: 8px;
	}
`;

export default Container;
