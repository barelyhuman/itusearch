import React, { Component } from "react";
import axios from "axios";
import _ from "underscore";

import SearchBar from "../components/SearchBar";
import Container from "../containers/Container";
import DataCard from "../components/DataCard";

class SearchView extends Component {
  state = {
    searchbar: {
      value: ""
    },
    filtered: {
      all: "",
      tracks: "",
      artists: ""
    }
  };

  handleSearchChange = e => {
    const n = Object.assign({}, this.state);
    n.searchbar.value = e.target.value;
    this.setState(n, () => {
      this.fetchSearchData();
    });
  };

  filterData = (basedOn, data) => {
    let x = [];
    x = data.filter(item => item.wrapperType === basedOn);
    return x;
  };

  fetchSearchData = _.debounce(() => {
    const { value } = this.state.searchbar;
    const self = this;
    axios
      .get("https://itunes.apple.com/search?term=" + value)
      .then(res => {
        const n = Object.assign({}, self.state);
        const data = res.data.results;
        if (data.length > 0 && n.searchbar.suggestions !== data) {
          n.filtered.tracks = data;
          self.setState(n);
        }
      })
      .catch(err => {});
  }, 300);

  render() {
    const { searchbar, filtered } = this.state;
    const tracks = filtered.tracks
      ? filtered.tracks.map(track => (
          <DataCard key={track.trackId} trackDetails={track} />
        ))
      : [];
    return (
      <Container className="flex flex-col flex-just-center">
        <SearchBar
          styles={{
            width: "65%",
            alignSelf: "center"
          }}
          textStyle={{
            textAlign: "center",
            fontSize: 20
          }}
          value={searchbar.value}
          onChangeHandler={this.handleSearchChange}
        />
        <Container className="card-container">
          {filtered.tracks.length > 0 ? (
            <div className="scrollable flex flex-wrap">{tracks}</div>
          ) : null}
        </Container>
      </Container>
    );
  }
}

export default SearchView;
