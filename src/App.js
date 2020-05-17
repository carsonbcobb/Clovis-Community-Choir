import React from 'react';
import { GlobalStyle } from "./global.styles";
import { Route, Switch } from "react-router-dom";


import Header from './components/Header/Header.component';


import HomePage from './Pages/Homepage/Homepage.component';
import DirectorPage from './Pages/About/DirectorPage/DirectorPage.component';
import HistoryPage from './Pages/About/HistoryPage/HistoryPage.component';
import MissionPage from './Pages/About/MissionPage/MissionPage.component';
import BookPage from './Pages/Contact/BookPage/BookPage.component';
import ContactPage from './Pages/Contact/ContactPage/ContactPage.component';
import JoinPage from './Pages/Contact/JoinPage/JoinPage.component';
import PastPage from './Pages/Events/PastPage/PastPage.component';
import UpcomingPage from './Pages/Events/UpcomingPage/UpcomingPage.component';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/OurDirector" component={DirectorPage} />
        <Route exact path="/OurHistory" component={HistoryPage} />
        <Route exact path="/OurMission" component={MissionPage} />
        <Route exact path="/Book" component={BookPage} />
        <Route exact path="/Contact" component={ContactPage} />
        <Route exact path="/Join" component={JoinPage} />
        <Route exact path="/UpcomingEvents" component={UpcomingPage} />
        <Route exact path="/PastEvents" component={PastPage} />
      </Switch>
    </div>
  );
}

export default App;
