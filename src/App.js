import React from "react";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage.js";
import CharacterList from "./components/CharacterList.js";
import { Route } from 'react-router-dom';
import CharacterCard from "./components/CharacterCard.js";


export default function App() {
  return (
    <main>
      <Header />
      <WelcomePage />
      <Route exact path="/" component={CharacterList} />
      <Route path="/character/:id" component={CharacterCard} />
    </main>
  );
}
