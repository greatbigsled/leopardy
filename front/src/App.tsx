import React from 'react';
// import logo from './logo.svg';
import './App.css';
import RoundTitle from './components/RoundTitle/RoundTitle'
import QuestionField from './components/QuestionField/QuestionField'
import PlayerList from './components/PlayerList/PlayerList'
import { items } from './data/questions.json'
import { testPlayers } from './data/players';

function App() {
  return (
    <div className="app">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <RoundTitle title="Первый раунд"/>
      <QuestionField questions={items}></QuestionField>
      <PlayerList players={testPlayers} />
    </div>
  );
}

export default App;
