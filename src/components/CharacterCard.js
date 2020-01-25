import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function CharacterCard(props) {
  const [character, setCharacter] = useState();
  // console.log('props', props)
  useEffect(() => {
    console.log('props', props)
    const id = props.match.params.id;

      axios 
        .get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => {
          setCharacter(response.data);
          console.log('single data', response.data)
        })
        .catch(error => {
          console.error(error);
        });
        
  }, []);

  if (!character) {
    return <div>Loading character information...</div>;
  }
  
  const { id, name, image, origin, status, species } = character;
  return (
    <div>
      <div key={id}>
        <h2>{name}</h2>
        <img src={image} />
        <div>Origin: {origin}</div>
        <div>Status: {status}</div>
        <div>Species: {species}</div>
      </div>
    </div>
  );
}
