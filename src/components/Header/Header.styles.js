import styled from "styled-components";

export const HeaderContainer = styled.div`
	height: 15vh;
	width: 100%;
	display: flex;
	justify-content: space-between;
	background: #f8f8ff;
	font-family: "Rouge Script", cursive;
`;

export const LogoContainer = styled.a`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	margin-left: 20px;

	width: 30%;
`;

export const Logo = styled.img`
	height: auto;
	width: 50%;
	@media (max-width: 850px) {
		width: 50%;
	}
`;
