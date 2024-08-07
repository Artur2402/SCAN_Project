import React from "react";
import "./Search.css";
import SearchForm from "./SearchForm/SearchForm";
import { observer } from "mobx-react-lite";

const Search = observer(() => {
  return (
      <div className="search">
        <h1 className="search-title">
          Найдите необходимые данные в пару кликов.
        </h1>
        <p className="search-details">
          Задайте параметры поиска. <br />
          Чем больше заполните, тем точнее поиск
        </p>
        <div className="search-body">
          <SearchForm />
          <div className="search-images">
            <img src='/Logo/Search/document.svg' alt="document" className="doc-img" />
            <img src='/Logo/Search/folders.svg' alt="folders" className="folders-img" />
            <img src='/Logo/Search/rocketman.svg' alt="rocketman" className="rocketman-img" />
          </div>
        </div>
      </div>
  );
});

export default Search;