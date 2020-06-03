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

const AboutPage = () => (
	<AboutContainer>
		<HeaderImage>
			<img src={"https://i.imgur.com/U1rNSCs.jpg?2"} alt="Choir Performing in Concert" />
		</HeaderImage>
		<BodyContainer>
			<Title>
				<h2>About Us</h2>
			</Title>
			<BodyHeader>
				<h1>Building community one song at a time.</h1>
			</BodyHeader>
			<BodyText>
				<p>
					A membership of 90 plus voices, diverse experience levels and one love
					for music and the community. Clovis Community Choir, is a
					non-auditioned choral group established in 2014 in Clovis California.
					Our singers range from those who are highly skilled to those who have
					never sung in a choir before, but we all have these things in common:
				</p>
				<p>
					*A passion for singing choral music of all styles: Inspirational
					ballads and heartwarming favorites.  Quality arrangements of pop music
					and show tunes. Patriotic and Americana to classical pieces by the
					best composers. Acapella selection or accompanied by varieties of
					instruments!
				</p>
				<p>
					 *Enjoy the weekly aspect of all that takes place in a fast paced and
					fun, yet challenging rehearsal with other singers from the community.
					Each member of varying age and experience.  Learn from each other and
					grow together, musically and socially.  A “high note” of the week!
				</p>
				<p>
					*Desire the thrill of presenting top-notch concerts that bring joy,
					inspiration and pride to our community in ways that only choral music,
					presented with dedication and excellence, can do!
				</p>
				<p>
					The choir rehearses weekly during its season and is broken into 3
					segments. Late August through December, February through April, and
					May through June. We are sponsored by Clovis Adult School Community
					Education, and each year the Choir performs 4 major concerts, and
					various other performances around the community…and, our concerts are
					free to the public!
				</p>
			</BodyText>
		</BodyContainer>
		<Footer style={{ height: "10vh" }} />
	</AboutContainer>
);

export default AboutPage;
