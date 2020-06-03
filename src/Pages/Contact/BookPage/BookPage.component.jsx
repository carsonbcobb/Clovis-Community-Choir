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

const BookPage = () => (
	<ContactContainer>
		<HeaderImage>
			<img src={"https://i.imgur.com/zchbgqy.jpg?1"} alt="Choir Performance at Grizzly Stadium" />
		</HeaderImage>
		<BodyContainer>
			<Title>
				<h2>Book Us</h2>
			</Title>
			<BodyHeader>
				<h1>Interested in having the Choir sing for an event?</h1>
			</BodyHeader>
			<BodyText>
				<p>
					Our season typically includes 4 concerts with room for a few other
					events around the community. We have also provided small groups for
					specific functions. If you have an idea or an event for which you’d
					like us to participate, give us a call or send a request by email.
				</p>
			</BodyText>
			<ButtonContainer>
				<Button className="contact-button" href="mailto:Cloviscommunitychoir@gmail.com">Email Us!</Button>
			</ButtonContainer>
		</BodyContainer>
		<Footer style={{ height: "10vh" }} />
	</ContactContainer>
);

export default BookPage;
