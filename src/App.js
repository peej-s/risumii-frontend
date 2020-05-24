import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import SearchResult from './components/SearchResult';

const style = {
  margin: 15,
};

class App extends Component {
  state = {
    searchQuery: "",
    searchResults: null,
    recommendResults: null,
  }


  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = async (event, submitType, trackData) => {
    var url
    if (submitType === "search") {
      this.setState({ recommendResults: null })

      url = "https://risumii-project.nn.r.appspot.com/api/v1/search?q=" + this.state.searchQuery
      const response = await fetch(url)
      const data = await response.json();
      this.setState({ searchResults: data })
    }
    if (submitType === "recommend") {
      this.setState({ searchResults: null })

      url = "https://risumii-project.nn.r.appspot.com/api/v1/recommend/" + trackData.id
      const response = await fetch(url)
      const data = await response.json();
      this.setState({ searchQuery: trackData.name, recommendResults: data })
    }

  }

  getRecommendResults(results) {
    var recommendedResults = this.getRenderedResults(results.tracks)
    return (
      <div>
        <h2 style={style}>Recommended tracks for {results.seed_name}</h2>
        {recommendedResults}
      </div>
    )
  }

  getRenderedResults(tracks) {
    var results = []
    tracks.forEach(trackData => {
      results.push(
        <SearchResult
          trackData={trackData}
          handleSubmit={this.handleSubmit}
          key={trackData.id}
        />
      )
    })

    return results
  }


  render() {
    return (
      <div >
        <h1 style={style}>
          Welcome to Risumii
        </h1>
        <SearchBar
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          searchQuery={this.state.searchQuery}
        />
        {this.state.searchResults ?
          this.getRenderedResults(this.state.searchResults.tracks) :
          null
        }
        {this.state.recommendResults ?
          this.getRecommendResults(this.state.recommendResults) :
          null
        }
      </div>
    );
  }
}

export default App;
