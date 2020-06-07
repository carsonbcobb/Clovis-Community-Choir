import styled from "styled-components";

export const AboutContainer = styled.div `
	width: 100vw;
	height: 200vh;
	overflow-y: hidden;
	background: #faf7ed;
	color: #373737;
	@media (max-width: 320px) and (max-height: 568px) {
		height: 250vh;
	}
`;
export const HeaderImage = styled.div `
	height: 60vh;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;
export const BodyContainer = styled.div `
	height: 125vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	@media (max-width: 320px) and (max-height: 568px) {
		height: 175vh;
	}
`;

export const Title = styled.div `
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
export const BodyHeader = styled.div `
	padding: 2%;
	font-family: "Playfair Display", serif;
	text-align: center;
	h1 {
		font-size: 2.8rem;
	}
	@media (max-width: 414px) and (max-height: 896px) {
		text-align: center;
		padding: 1%;
		h1 {
			font-size: 1.8rem;
		}
	}
	@media (max-width: 375px) and (max-height: 667px) {
		h1 {
			font-size: 1.4rem;
		}
	}
	@media (max-width: 320px) and (max-height: 568px) {
		h1 {
			font-size: 1.2rem;
		}
	}
	@media (min-width: 800px) and (min-height: 600px) {
		h1{
			font-size: 1.7rem;
		}
	}
	@media (min-width: 1920px) and (max-height: 1080px) {
		h1{
			font-size: 3.5rem;
		}
	}
`;
export const BodyText = styled.div `
	padding: 3%;
	text-align: center;

	p {
		font-size: 1.6rem;
	}
	@media (max-width: 414px) and (max-height: 896px) {
		p {
			font-size: 1.1rem;
		}
	}
	@media (max-width: 414px) and (max-height: 736px) {
		p {
			font-size: 1rem;
		}
	}
	

	@media (max-width: 375px) and (max-height: 667px) {
		p {
			font-size: 0.9rem;
		}
	}
	@media (min-width: 1366px) and (max-height: 1024px) {
		p {
			font-size: 2rem;
		}
	}
	@media (min-width: 800px) and (min-height: 600px) {
		p {
			font-size: 1rem;
		}
	}
	@media (min-width: 1366px) and (max-height: 768px) {
		p {
			font-size: 1.7rem;
		}
	}
	@media (min-width: 1920px) and (max-height: 1080px) {
		p {
			font-size: 2rem;
		}
	}
`;