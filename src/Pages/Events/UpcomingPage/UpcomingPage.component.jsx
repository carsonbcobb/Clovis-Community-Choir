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
			<img src={"https://i.imgur.com/kuo1cqE.jpg"} alt="Upcoming Concert Poster" />
			<h2>Pop Goes The Choir!</h2>
			<span className="date">Sunday, April 26</span>
			<br/>
			<span className="postponed">-Postponed due to current events</span>
			<br />
			<span className="time">2:30pm</span>
			<br />
			<span className="location">Paul Shaghoian Concert Hall</span>
		</BodyContainer>
		<Footer />
	</UpcomingContainer>
);

export default UpcomingPage;
