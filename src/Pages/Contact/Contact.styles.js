import styled from "styled-components";

export const ContactContainer = styled.div`
	width: 100vw;
	height: 145vh;
	background: #faf7ed;
	color: #373737;
	@media (max-width: 414px) and (max-height: 736px) {
	}
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
	height: 85vh;
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
	text-align: center;
	h1 {
		font-size: 2.8rem;
		@media (max-width: 414px) and (max-height: 896px) {
			font-size: 2rem;
			text-align: center;
		}
		@media (min-width: 1920px) and (min-height: 1080px) {
			font-size: 3.5rem;
		}
		@media (min-width: 1366px) and (max-height: 1024px){
			font-size: 3.5rem;

		}
	}
`;
export const BodyText = styled.div`
	padding: 3%;
	text-align: center;

	
	p {
		font-size: 2rem;
		@media (max-width: 414px) and (max-height: 896px) {
			font-size: 1.7rem;
		}
		@media (max-width: 414px) and (max-height: 896px) {
			font-size: 1.4rem;
		}
		@media (max-width: 320px) and (max-height: 568px) {
			font-size: 1rem;
		}
		@media (min-width: 1366px) and (min-height: 1024px) {
			font-size: 3rem;
		}
		@media (min-width: 1920px) and (min-height: 1080px) {
			font-size: 3.5rem;
		}
	}
`;

export const ButtonContainer = styled.div`
	.contact-button {
		font-size: 1.8rem;
		background: #f1cfb6;
		transition: 0.75s ease;

		&:hover {
			background: #b49b88;
			color: #faf7ed;
		}
	}

	@media (max-width: 414px) and (max-height: 896px) {
		padding: 15px;
	}
	@media (min-width: 1920px) and (min-height: 1080px) {
			.contact-button{
				font-size: 2.5rem;
			}
		}
		@media (min-width: 1366px) and (max-height: 1024px) {
			.contact-button{
				font-size: 2.5rem;
			}
		}
`;
