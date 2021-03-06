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
	@media only screen and (min-width: 1366px) and (max-height: 1024px) and (-webkit-device-pixel-ratio: 2){
		h1{
			font-size: 4rem;
		}
		transform: translateY(30%);
	}
	@media only screen and (min-width: 1920px) and (min-height: 1080px){
		h1{
			font-size: 4rem;
		}
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
	.date{
		text-decoration: line-through;
	}
	.postponed{
		color: #ad3b3b;
	}

	@media only screen and (min-width: 1366px) and (max-height: 1024px) and (-webkit-device-pixel-ratio: 2){
		h2 {
		font-size: 3rem;
	}
	span {
		font-size: 2.8rem;
	}

	img {
		height: auto;
		width: 40%;
	}
	}
	@media only screen and (min-width: 1366px) and (max-height: 768px) and (-webkit-device-pixel-ratio: 2){
		h2 {
		font-size: 2rem;
	}
	span {
		font-size: 1.8rem;
	}

	img {
		height: auto;
		width: 30%;
	}
	}
	@media only screen and (min-width: 1920px) and (min-height: 1080px){
		
		h2 {
		font-size: 3rem;
		
	}
	span {
		padding: 10px;
		font-size: 2.8rem;
	}

	img {
		height: auto;
		width: 50%;
	}
	}
`;
