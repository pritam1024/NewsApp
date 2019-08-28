import React, { Component } from "react";
import Sources from "./components/sources";
import axios from "axios";
import News from "./components/news";
import "./App.css";

class App extends Component {
  state = {
    sources: [],
    articles: [
      {
        title: "Choose A Source",
        description: "Select source to start reading the top headlines"
      }
    ],
    value: ""
  };

  fetchSources = async () => {
    const { data } = await axios.get(
      "https://newsapi.org/v2/sources?apiKey=b4545b8f6921462e939829eb257719b0"
    );
    const sources = data.sources;
    return sources;
  };

  fetchNews = async source => {
    const { data } = await axios.get(
      `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=b4545b8f6921462e939829eb257719b0`
    );
    const articles = data.articles;
    return articles;
  };

  async componentDidMount() {
    const sources = await this.fetchSources();
    this.setState({ sources });
  }

  handleChange = async event => {
    const value = event.target.value;
    const articles = await this.fetchNews(value);
    this.setState({ value, articles });
    console.log(this.state.value);
  };

  render() {
    const { sources, articles, value } = this.state;
    return (
      <div>
        <Sources
          sources={sources}
          value={value}
          onHandleChange={this.handleChange}
        />
        <News articles={articles} />
      </div>
    );
  }
}

export default App;
