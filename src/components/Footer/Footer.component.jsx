import React from "react";

import {
	FooterContainer,
	LogoContainer,
	Logo,
	Info,
	CreatedBy,
} from "./Footer.styles";

const copyright = "\u00A9";
const ChoirLogo = require("../../assets/Logo.png");

const Footer = () => (
	<FooterContainer>
		<LogoContainer>
			<Logo src={ChoirLogo} />
		</LogoContainer>
		<Info>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, ducimus.
			</p>
		</Info>
		<CreatedBy>
			Created by Carson Cobb {copyright} {new Date().getFullYear()}
		</CreatedBy>
	</FooterContainer>
);

export default Footer;
