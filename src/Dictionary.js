import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";
export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleKeywordChange(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }
  function handleResponse(response) {
    console.log(response.data[0]);
    console.log(response.data[0].meanings[0].definitions[0].definition);
    setResults(response.data[0]);
  }

  function handleSearch(event) {
    event.preventDefault();
    if (keyword.trim().length !== 0) {
      search();
    } else {
      alert("Please enter search term.");
    }
  }

  function search() {
    //documentation:https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    let unsplashApiKey = "n9fzX_dDAPXtWliyJC5BTr0ukFQ-iQf2baisGFwspR0";
    let unsplashApiURL = `https://api.unsplash.com/search/photos?page=1&query=${keyword}&client_id=${unsplashApiKey}&per_page=6&orientation=landscape`;
    axios.get(unsplashApiURL).then(handleUnsplashResponse);
  }

  function handleUnsplashResponse(response) {
    setPhotos(response.data.results);
  }

  function load() {
    search();
    setLoaded(true);
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <form onSubmit={handleSearch} className="searchBar text-center">
          <input
            type="search"
            onChange={handleKeywordChange}
            defaultValue={props.defaultKeyword}
          />
        </form>

        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return <h3>Loading...</h3>;
  }
}
