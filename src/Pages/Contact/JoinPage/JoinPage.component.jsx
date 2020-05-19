import React from "react";

import Footer from "../../../components/Footer/Footer.component";

import { Button } from "semantic-ui-react";
import {
	ContactContainer,
	HeaderImage,
	BodyContainer,
	BodyHeader,
	BodyText,
	Title,
	ButtonContainer,
} from "../Contact.styles";

const JoinPage = () => (
	<ContactContainer>
		<HeaderImage>
			<img src={"https://i.imgur.com/3onXk7q.jpg"} alt="Director: Ed Cobb" />
		</HeaderImage>
		<BodyContainer>
			<Title>
				<h2>Join Us</h2>
			</Title>
			<BodyHeader>
				<h1>Become a member of our choir</h1>
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
			<ButtonContainer>
				<Button
					className="contact-button"
					href="https://cloviscommunityed.augusoft.net/"
					target="_blank"
				>
					Sign Up!
				</Button>
			</ButtonContainer>
		</BodyContainer>
		<Footer style={{ height: "10vh" }} />
	</ContactContainer>
);

export default JoinPage;
