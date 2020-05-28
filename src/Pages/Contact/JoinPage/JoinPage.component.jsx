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
				<h1>Would you like to sing with us?</h1>
			</BodyHeader>
			<BodyText>
				<p>
					We are always welcoming new singers to the Clovis Community Choir!
					And, remember…there are no auditions. Our members have varying levels
					of musical experience, so don’t worry if you’ve never sung in a group
					before, or it’s been a long time. We’ll be there to help you. Sign up
					online, or by phone, or coming to a rehearsal. It’s that easy!
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
