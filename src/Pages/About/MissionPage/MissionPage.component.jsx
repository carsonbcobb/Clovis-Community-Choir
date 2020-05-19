import React from "react";

import Footer from "../../../components/Footer/Footer.component";

import {
	AboutContainer,
	HeaderImage,
	BodyContainer,
	BodyHeader,
	BodyText,
	Title,
} from "../About.styles";

const MissionPage = () => (
	<AboutContainer>
		<HeaderImage>
			<img src={"https://i.imgur.com/U1rNSCs.jpg?2"} alt="Our Mission" />
		</HeaderImage>
		<BodyContainer>
			<Title>
				<h2>Our Mission</h2>
			</Title>
			<BodyHeader>
				<h1>Building community one song at a time.</h1>
			</BodyHeader>
			<BodyText>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, ex?
					Veniam tempore qui sequi sint harum, asperiores quas quia dolor cum
					nam cumque aliquam. Minus nulla cum sed facilis earum architecto
					deserunt officiis perspiciatis dicta. Rem repudiandae a fugiat, sequi
					laudantium consequatur consectetur nesciunt deleniti quidem. Sit fugit
					error quibusdam.
				</p>
			</BodyText>
		</BodyContainer>
		<Footer style={{ height: "10vh" }} />
	</AboutContainer>
);

export default MissionPage;
