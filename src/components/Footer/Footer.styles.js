import styled from "styled-components";

export const FooterContainer = styled.div`
	height: 15vh;
	width: 100vw;
	display: flex;
	background: #2e3d36;
	align-items: center;
	overflow-y: hidden;
	font-family: "Playfair Display", serif;
`;
export const LogoContainer = styled.div`
	height: auto;
	width: 25%;
	padding: 5%;
	@media (max-width: 414px) and (max-height: 896px) {
		width: 80%;
	}
`;
export const Logo = styled.img`
	width: 70%;
`;
export const Info = styled.div`
	transform: translateX(-35%);
	color: white;
	a{
		text-decoration: none;
		color: #faf7ed;
	}
	@media (max-width: 414px) and (max-height: 896px) {
		transform: translateX(-45%);
	}
	@media (max-width: 320px) and (max-height: 568px) {
		transform: translateX(-30%);

	}
`;
export const CreatedBy = styled.div`
	color: white;
	margin-left: auto;
	margin-right: 20px;
	@media (max-width: 414px) and (max-height: 896px) {
		font-size: 0.8rem;
		margin-right: auto;
		padding-right: 5px;
		text-align: center;
	}
	@media (max-width: 414px) and (max-height: 736px) {
		font-size: 0.6rem;
	}
	@media (max-width: 320px) and (max-height: 568px) {
		font-size: 0.6rem;
	}
	@media (min-width: 1920px) and (min-height: 1080px) and (-webkit-device-pixel-ratio: 2){
		font-size: 1.5rem;
	}
`;

export const InfoText = styled.p`
	@media (max-width: 414px) and (max-height: 896px) {
		font-size: 0.8rem;
	}
	@media (max-width: 414px) and (max-height: 736px) {
		font-size: 0.6rem;
	}
	@media (max-width: 320px) and (max-height: 568px) {
		font-size: 0.6rem;
	}
	@media (min-width: 800px) and (min-height: 600px){
		transform: translateX(10%);
	}
	@media (min-width: 1920px) and (min-height: 1080px) and (-webkit-device-pixel-ratio: 2){
		font-size: 1.5rem;
	}
`;
