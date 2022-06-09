import styled from "styled-components";
import { cyan, dark_blue_footer } from "../../colors";
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
	&.signIn {
		height: 275px;
		width: 863px;
		padding: 42px 75px;
		border-radius: 9px;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	&.footer {
		flex-direction: column;
		width: 100%;
		height: 441px;
		background-color: ${dark_blue_footer};
		padding: 170px 120px 0 120px;
	}
	&.footerLogo {
		width: 100%;
	}
	&.footerContent {
		width: 100%;
		border: 1px solid red;
	}
	&.footerText {
	}
`;

export default Container;
