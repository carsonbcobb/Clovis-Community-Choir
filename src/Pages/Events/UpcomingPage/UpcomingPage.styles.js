import styled from "styled-components";

export const UpcomingContainer = styled.div`
	height: 100vh;
	width: 100vw;
	background: #f1cfb6;
	overflow-y: hidden;
	display: flex;
	flex-direction: column;
	align-items: center;
	font-family: "Playfair Display", serif;
`;
export const TitleContainer = styled.div`
	height: 10vh;
	display: flex;
	justify-content: flex-end;
	flex-direction: column;
	h1 {
		font-size: 2.5rem;
		font-family: "Playfair Display", serif;
	}
	@media (max-width: 414px) and (max-height: 896px) {
		transform: translateY(100%);
		h1 {
			text-align: center;
		}
	}
	@media (max-width: 375px) and (max-height: 667px) {
		transform: translateY(50%);
	}
	@media (max-width: 320px) and (max-height: 568px) {
		transform: translateY(20%);
	}
`;
export const BodyContainer = styled.div`
	height: 80vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	h2 {
		font-family: "Playfair Display", serif;
	}
	span {
		font-size: 1.4rem;
	}

	img {
		height: auto;
		width: 30%;
	}
`;
