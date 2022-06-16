import styled from "styled-components";
import { cyan, dark_blue_footer, dark_blue_main } from "../../colors";
import { white } from "../../colors";

const Container = styled.div`
	display: flex;
	overflow: hidden;
	&.navContain {
		min-width: 90%;
		height: 52px;
		margin: 0 auto;
		margin-top: 73px;
		align-items: center;
		justify-content: space-between;
		@media (max-width: 375px) {
			height: 24px;
			margin-top: 24px;
		}
	}
	&.navLogo {
		height: 100%;
	}
	&.navLinks {
		display: flex;
		gap: 60px;
		@media (max-width: 375px) {
			gap: 24px;
		}
	}
	&.allContent {
		width: 100%;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		@media (max-width: 375px) {
			max-width: 95%;
		}
	}
	&.featuresSVGContain {
		align-items: center;
		justify-content: center;
		/* width: 80px; */
		/* height: 80px; */
		border: 1px solid red;
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
		position: relative;
		margin-top: 120px;
		margin-bottom: 100px;
		height: 259px;
		width: 1180px;
		display: flex;
		align-items: flex-end;
		justify-content: flex-end;
		gap: 40px;
	}
	&.testimonialProfile {
		width: 120px;
		margin-top: 24px;
		margin-left: 24px;
	}
	&.testimonialInfo {
		width: 100px;
		flex-direction: column;
		gap: 4px;
		margin-left: 8px;
	}
	&.signIn {
		position: relative;
		overflow: visible;
	}
	.signInContain {
		position: relative;
		transform: translateY(40%);
		width: 863px;
		padding: 42px 75px;
		border-radius: 9px;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background: ${dark_blue_main};
		box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.254274);
	}
	&.footer {
		flex-wrap: wrap;
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
		justify-content: space-between;
	}
	&.footerContact {
		width: 171px;
		height: 64px;
		gap: 16px;
		flex-wrap: wrap;
	}
	&.footerContactRow {
		width: 100%;
		justify-content: space-between;
	}
	&.footerLinks {
		width: 230px;
	}
	&.footerLinksCol {
		flex-direction: column;
		width: 100px;
		gap: 16px;
	}
	&.footerSocial {
		height: 31px;
		gap: 12px;
	}
`;

export default Container;
