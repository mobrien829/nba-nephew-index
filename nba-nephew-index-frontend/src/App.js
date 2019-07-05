import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { TwitterTimelineEmbed, TwitterTweetEmbed } from "react-twitter-embed";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <p>Blah</p>
        <TwitterTweetEmbed tweetId={"1147220527326646272"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="BarstoolBigCat"
          options={{ height: 400, width: 600 }}
        />
      </div>
    </div>
  );
}

export default App;
