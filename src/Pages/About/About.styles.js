import styled from "styled-components";

export const AboutContainer = styled.div`
	width: 100vw;
	height: 200vh;
	overflow-y: hidden;
	background: #faf7ed;
	color: #373737;
`;
export const HeaderImage = styled.div`
	height: 60vh;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;
export const BodyContainer = styled.div`
	height: 125vh;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Title = styled.div`
	background: #f1cfb6;
	padding: 1%;
	text-align: center;
	z-index: 2;
	transform: translateY(-50%);
	font-family: "Playfair Display", serif;

	h2 {
		font-size: 3rem;
	}
`;
export const BodyHeader = styled.div`
	padding: 2%;
	font-family: "Playfair Display", serif;
	h1 {
		font-size: 2.8rem;
	}
`;
export const BodyText = styled.div`
	padding: 3%;
	p {
		font-size: 1.6rem;
	}
`;
