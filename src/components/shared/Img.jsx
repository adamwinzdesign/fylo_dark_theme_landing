import styled from "styled-components";

const Img = styled.img`
	&.hero {
		height: 534px;
		width: 720px;
		@media (max-width: 375px) {
			height: 225px;
			width: 304px;
		}
	}
	&.ctaImg {
		height: 12px;
		width: 12px;
		margin-left: 8px;
		border-radius: 50%;
		box-shadow: 0px 0px 2px rgba(98, 224, 217, 0.811141);
	}
	&.team {
		width: 615px;
		height: 464px;
	}
	&.quotation {
		position: absolute;
		bottom: 72%;
		left: 1%;
	}
	&.testimonial {
		height: 24px;
		width: 24px;
		border-radius: 50%;
	}
	&.footerLogo {
		height: 31px;
		width: 108px;
	}
	&.footerLocation {
		height: 18px;
		width: 13px;
		margin-right: 50px;
		margin-top: 3px;
	}
	&.footerPhone {
		height: 18px;
		width: 18px;
	}
	&.footerEmail {
		height: 16px;
		width: 20px;
	}
`;

export default Img;
