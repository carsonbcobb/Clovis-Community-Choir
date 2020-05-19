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
