import React from "react";
import Footer from "../../../components/Footer/Footer.component";
import {
	UpcomingContainer,
	TitleContainer,
	BodyContainer,
} from "./UpcomingPage.styles";

const UpcomingPage = () => (
	<UpcomingContainer>
		<TitleContainer>
			<h1>Get ready for our next concert!</h1>
		</TitleContainer>
		<BodyContainer>
			<img src={"https://i.imgur.com/kuo1cqE.jpg"} />
			<h2>Pop Goes The Choir!</h2>
			<span>Sunday, April 26</span>
			<br />
			<span>2:30pm</span>
			<br />
			<span>Paul Shagoian Concert Hall</span>
		</BodyContainer>
		<Footer />
	</UpcomingContainer>
);

export default UpcomingPage;
