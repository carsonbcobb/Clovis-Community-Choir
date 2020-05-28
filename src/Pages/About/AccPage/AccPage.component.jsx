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

const AccPage = () => (
	<AboutContainer>
		<HeaderImage>
			<img
				src={"https://i.imgur.com/2B7spPf.jpg?3"}
				alt="Accompanist: Randy Berger"
			/>
		</HeaderImage>
		<BodyContainer>
			<Title>
				<h2>Our Accompanist</h2>
			</Title>
			<BodyHeader>
				<h1>Randy Berger</h1>
			</BodyHeader>
			<BodyText>
				<p>
				Randy Berger is pleased to be the piano accompanist for the Clovis
Community Choir since its inception. Along with the opportunity to work
with Director Ed Cobb, Randy really enjoys playing for such a large group
and adding the right musical nuances to each song that is rehearsed and
performed.
</p>
<p>Since retiring as Choral Director in 2018 from Bullard TALENT, a K-8
performing arts magnet school in Fresno Unified, Randy has been keeping
busy by accompanying for other choral groups and soloists. He is currently the Lead Musician at Sierra View Presbyterian Church in Fresno.
Being a multi-instrumentalist, he also freelances in recording projects for others and
himself, as well as providing sound for live events.</p>
<p>
He and his wife, Sherrill, have 2 sons, Lee and Joel, and 3 grandchildren,
as well as 3 amazing cats and a dog!</p>
			</BodyText>
		</BodyContainer>
		<Footer style={{ height: "10vh" }} />
	</AboutContainer>
);

export default AccPage;
