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

const HistoryPage = () => (
	<AboutContainer>
		<HeaderImage>
			<img src={"https://i.imgur.com/OnMN8bF.jpg"} alt="Our History" />
		</HeaderImage>
		<BodyContainer>
			<Title>
				<h2>Our History</h2>
			</Title>
			<BodyHeader>
				<h1>Many Years Ago, in 2014, we began to sing...</h1>
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

export default HistoryPage;
