import React, { lazy, Suspense } from "react";
import { GlobalStyle } from "./global.styles";
import { Route, Switch } from "react-router-dom";
import Spinner from "./components/Spinner/Spinner.component";
import Header from "./components/Header/Header.component";

const UpcomingPage = lazy(() =>
	import("./Pages/Events/UpcomingPage/UpcomingPage.component")
);
const PastPage = lazy(() =>
	import("./Pages/Events/PastPage/PastPage.component")
);
const JoinPage = lazy(() =>
	import("./Pages/Contact/JoinPage/JoinPage.component")
);
const ContactPage = lazy(() =>
	import("./Pages/Contact/ContactPage/ContactPage.component")
);
const BookPage = lazy(() =>
	import("./Pages/Contact/BookPage/BookPage.component")
);
const AboutPage = lazy(() =>
	import("./Pages/About/AboutPage/AboutPage.component")
);
const HistoryPage = lazy(() =>
	import("./Pages/About/HistoryPage/HistoryPage.component")
);
const AccPage = lazy(() => import("./Pages/About/AccPage/AccPage.component"));

const DirectorPage = lazy(() =>
	import("./Pages/About/DirectorPage/DirectorPage.component")
);

const HomePage = lazy(() => import("./Pages/Homepage/Homepage.component"));

function App() {
	return (
		<div className="App">
			<GlobalStyle />
			<Header />
			<Switch>
				<Suspense fallback={<Spinner />}>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/OurDirector" component={DirectorPage} />
					<Route exact path="/OurAcc" component={AccPage} />
					<Route exact path="/OurHistory" component={HistoryPage} />
					<Route exact path="/AboutUs" component={AboutPage} />
					<Route exact path="/Book" component={BookPage} />
					<Route exact path="/Contact" component={ContactPage} />
					<Route exact path="/Join" component={JoinPage} />
					<Route exact path="/UpcomingEvents" component={UpcomingPage} />
					<Route exact path="/PastEvents" component={PastPage} />
				</Suspense>
			</Switch>
		</div>
	);
}

export default App;
