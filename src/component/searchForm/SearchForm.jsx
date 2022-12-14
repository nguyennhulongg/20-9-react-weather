import { useState } from "react";
import "./searchForm.css";

const SearchForm = (props) => {

  const {setCurrentCity} = props;

  const [searchValue, setSearchValue] = useState('');

  const handleEnterCity = (e) => {
    const value = e.target.value;
    setSearchValue(value);
  }

  const handleSearch = (e) => {
    e.preventDefault();
    setCurrentCity(searchValue);
    document.querySelector('.search').reset()
  }

  return (
    <div className="search-form">
      <form action="" onSubmit={handleSearch} className="search">
        <input 
          onChange={handleEnterCity} 
          type="text"
          placeholder="Enter a city..."/>
      </form>
    </div>
  );
}

export default SearchForm;
