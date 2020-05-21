import styled from "styled-components";

export const PastContainer = styled.div`
	height: 400vh;
	width: 100vw;
	overflow-y: hidden;
	display: flex;
	flex-direction: column;
	background: #f1cfb6;
	font-family: "Playfair Display", serif;
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
`;
export const BodyContainer = styled.div`
	height: 365vh;
	display: grid;
	justify-content: center;
	grid-template-columns: 1fr 1fr 1fr 1fr;
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
`;
