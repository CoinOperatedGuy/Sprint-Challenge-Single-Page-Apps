import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function CharacterCard(props) {
  const [character, setCharacter] = useState();
  console.log('props', props)
  useEffect((props) => {
    const id = props.match.params.id;

      axios 
        .get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => {
          setCharacter(response.data.results);
        })
        .catch(error => {
          console.error(error);
        });
        
  }, []);

  if (!character) {
    return <div>Loading character information...</div>;
  }
  
  const { id, name, status, species } = character;
  return (
    <div>
      <div key={id}>
        <h2>{name}</h2>
        <div>Status: {status}</div>
        <div>Species: {species}</div>
      </div>
    </div>
  );
}
