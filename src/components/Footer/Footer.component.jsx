import React from "react";

import {
	FooterContainer,
	LogoContainer,
	Logo,
	Info,
	CreatedBy,
	InfoText,
} from "./Footer.styles";

const copyright = "\u00A9";
const ChoirLogo = require("../../assets/Logo.png");

const Footer = () => (
	<FooterContainer>
		<LogoContainer>
			<Logo src={ChoirLogo} />
		</LogoContainer>
		<Info>
			<InfoText>
				1452 David E. Cook Way Clovis, CA 93611
				<br />
				559-327-2800
				<br />
				Ed@CCC.com
				<br />
			</InfoText>
		</Info>
		<CreatedBy>
			Created by Carson Cobb {copyright} {new Date().getFullYear()}
		</CreatedBy>
	</FooterContainer>
);

export default Footer;
