import React from "react";

import { HeaderContainer, LogoContainer, Logo } from "./Header.styles";

import HeaderBurger from "./headerBurger/headerBurger.component";

function Header() {
	return (
		<HeaderContainer>
			<LogoContainer href="/">
				<Logo src={require("../../assets/Logo.png")} alt="logo" />
			</LogoContainer>
			<HeaderBurger />
		</HeaderContainer>
	);
}

export default Header;
