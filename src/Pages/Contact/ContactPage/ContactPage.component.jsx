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

const ContactPage = () => (
	<ContactContainer>
		<HeaderImage>
			<img src={"https://i.imgur.com/MiHwCBX.jpg"} alt="Contact Header" />
		</HeaderImage>
		<BodyContainer>
			<Title>
				<h2>Contact Us</h2>
			</Title>
			<BodyHeader>
				<h1>Questions or Comments?</h1>
			</BodyHeader>
			<BodyText>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, ex?
					Veniam tempore qui sequi sint harum, asperiores quas quia dolor cum
					nam cumque aliquam.
				</p>
				<p>
					Reach out to us via:
					<br />
					Email: ed@ccc.com <br />
				</p>
			</BodyText>
			<ButtonContainer>
				<Button className="contact-button" href="mailto:someone@yoursite.com">
					Email Us!
				</Button>
			</ButtonContainer>
		</BodyContainer>
		<Footer style={{ height: "10vh" }} />
	</ContactContainer>
);

export default ContactPage;
