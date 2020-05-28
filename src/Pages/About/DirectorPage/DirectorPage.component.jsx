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

const DirectorPage = () => (
	<AboutContainer>
		<HeaderImage>
			<img src={"https://i.imgur.com/zV7XAWs.jpg?4"} alt="Director: Ed Cobb" />
		</HeaderImage>
		<BodyContainer>
			<Title>
				<h2>Our Director</h2>
			</Title>
			<BodyHeader>
				<h1>Ed Cobb</h1>
			</BodyHeader>
			<BodyText>
				<p>
					{" "}
					After having been approached by the Clovis Community Education office
					with the idea of starting a new community chorus, Ed Cobb said “Sure!
					Let’s put on a Patriotic Concert, and see how it goes.” He made some
					calls, sent a few notes and anxiously awaited the first rehearsal.
					Nearly 50 singers showed up that first night and since then, Ed’s
					leadership has encouraged an environment that currently enriches the
					lives of just under 100 singers with a wide array of musical
					experiences, creating a non-auditioned choir for the community to
					enjoy!
				</p>
				<p>
					Ed studied music at Texas Tech University, where he was Drum Major of
					the world-famous “Goin’ Band from Raiderland.” Following school, he
					began touring in a Christian music group, The Continental Singers,
					where he eventually became a director, conducting choral and
					instrumental groups in concert tours across the United States and into
					30 countries worldwide. In his 30-plus year musical career, Ed has
					conducted choirs and orchestras in 4 churches throughout Southern and
					Central California. His groups, with hundreds of participants, have
					presented large scale productions, concerts and recordings. As well,
					he has conducted choirs for numerous civic events, and conferences.
				</p>
				<p>
					In addition to his work with the Clovis Community Choir, Ed,
					currently, teaches music at a private school in Fresno.
				</p>
			</BodyText>
		</BodyContainer>
		<Footer style={{ height: "10vh" }} />
	</AboutContainer>
);

export default DirectorPage;
