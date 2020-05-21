import styled from "styled-components";

export const FooterContainer = styled.div`
	height: 15vh;
	width: 100vw;
	display: flex;
	background: #2e3d36;
	align-items: center;
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
	@media (max-width: 414px) and (max-height: 896px) {
		transform: translateX(-45%);
	}
`;
export const CreatedBy = styled.div`
	color: white;
	margin-left: auto;
	margin-right: 20px;
	@media (max-width: 414px) and (max-height: 896px) {
		font-size: 0.8rem;
		margin-right: auto;
		text-align: center;
	}
`;

export const InfoText = styled.p`
	@media (max-width: 414px) and (max-height: 896px) {
		font-size: 0.8rem;
	}
`;
