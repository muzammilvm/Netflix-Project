import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import './app.css'
import { orginals, action, comedy, horror, romance, documentaries } from './url'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={orginals} title='Netflix Orginals' />
      <RowPost url={action} title='Action Movies' isSmall />
      <RowPost url={comedy} title='Comedy Movies' isSmall />
      <RowPost url={horror} title='Horrer Movies' isSmall />
      <RowPost url={romance} title='Romance Movies' isSmall />
      <RowPost url={documentaries} title='Documentaries' isSmall />
    </div>
  )
}

export default App;

