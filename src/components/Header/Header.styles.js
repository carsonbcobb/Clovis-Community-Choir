import styled from "styled-components";

export const HeaderContainer = styled.div`
	height: 15vh;
	width: 100%;
	display: flex;
	justify-content: space-between;
	background: #faf7ed;
	font-family: "Playfair Display", serif;
`;

export const LogoContainer = styled.a`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	width: 25%;
`;

export const Logo = styled.img`
	height: auto;
	width: 70%;
	@media (max-width: 850px) {
		width: 50%;
	}
`;
