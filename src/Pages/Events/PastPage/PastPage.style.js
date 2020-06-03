import styled from "styled-components";

export const PastContainer = styled.div`
	height: 400vh;
	width: 100vw;
	overflow-y: hidden;
	display: flex;
	flex-direction: column;
	background: #f1cfb6;
	font-family: "Playfair Display", serif;
	@media (max-width: 414px) and (max-height: 896px) {
		height: 450vh;
	}
	@media (max-width: 414px) and (max-height: 896px) {
		height: 475vh;
	}
	@media (max-width: 414px) and (max-height: 736px) {
		height: 575vh;
	}
	@media (max-width: 320px) and (max-height: 568px) {
		height: 740vh;
	}
`;
export const HeaderContainer = styled.div`
	height: 25vh;
	width: 100vw;
	display: flex;
	align-items: center;
	h1 {
		font-size: 3.5rem;
		margin-left: auto;
		margin-right: auto;
		font-family: "Playfair Display", serif;
	}
	@media (max-width: 414px) and (max-height: 896px) {
		padding: 10%;
		h1 {
			font-size: 2.5rem;
		}
	}
`;
export const BodyContainer = styled.div`
	height: 365vh;
	display: grid;
	justify-content: center;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	@media (max-width: 414px) and (max-height: 896px) {
		grid-template-columns: 1fr 1fr;
		height: 415vh;
	}
	@media (max-width: 375px) and (max-height: 812px) {
		grid-template-columns: 1fr 1fr;
		height: 435vh;
	}
	@media (max-width: 414px) and (max-height: 736px) {
		grid-template-columns: 1fr 1fr;
		height: 535vh;
	}
	@media (max-width: 320px) and (max-height: 568px) {
		height: 700vh;
	}
`;
export const ItemBlock = styled.div`
	display: grid;
	padding: 20px;
	align-self: center;
	justify-items: center;
	text-align: center;
	h3 {
		font-family: "Playfair Display", serif;
		transition: 1s ease-in-out;
	}
	span {
		transition: 1s ease-in-out;
	}
	img {
		transition: 1s ease-in-out;
		height: auto;
		width: 40%;
	}
`;

export const ItemContainer = styled.div`
	padding: 5%;
	margin: 5%;
	background: #faf7ed;
	border: 2px solid #f1cfb6;
	transition: 1s ease-in-out;
	font-family: "Playfair Display", serif;

	&:hover {
		background: #2e3d36;
		border: 2px solid #faf7ed;
		transition: 1s ease-in-out;

		h3 {
			font-size: 1.8rem;
			transition: 1s ease-in-out;
			color: #faf7ed;
		}
		span {
			font-size: 1.2rem;
			transition: 1s ease-in-out;
			color: #faf7ed;
		}
		img {
			height: auto;
			transition: 1s ease-in-out;

			width: 50%;
		}
	}

	@media (max-width: 414px) and (max-height: 896px) {
		&:hover {
			img {
				width: 80%;
			}
		}
	}
`;
