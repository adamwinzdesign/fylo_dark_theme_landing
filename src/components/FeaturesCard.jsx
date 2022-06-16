import styled from "styled-components";

const FeaturesCard = styled.div`
	width: 384px;
	height: 214px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	@media (max-width: 375px) {
		max-width: 320px;
		margin-bottom: 80px;
	}
`;

export default FeaturesCard;
