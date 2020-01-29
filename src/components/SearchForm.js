import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function SearchForm() {
  const [search, setSearch] = useState("");
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getCharacters = () => {
      axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(response => {
          console.log(response.data.results);
          setCharacters(response.data.results);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
  }, []};
    
  useEffect(() => {
    const filtered = characters.filter(characterName => characterName.includes(search));
    setFilteredCharacters(filtered);
  }, [search])
  
  console.log('Characters: ', characters)

  const handleChange = e => {
    e.preventDefault();
    setSearch(e.target.value);
    console.log(e.target.value);
  };
 
  return (
    <section className="search-form">
      <input
        type="text"
        placeholder="Search for Character Here!"
        onChange={handleChange}
        value={search}
      />
      {characters.map(characterName => (
        <div key={characterName.name}>
          {characterName.name}
        </div>
      ))}
    </section>
  );
}
