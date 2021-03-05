import React, { useState } from "react";
import s from "../styles/PokeCards.module.css";
import bola from "../images/bola2.png";
import load from "../images/pokemongo.gif";
import PokeDetail from "./PokeDetail";
import axios from "axios";

export default function PokeCards({ poke, loading }) {
  const [pokeDetail, setPokeDetail] = useState("");

  const handleClick = () => setPokeDetail("");

  function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
  }

  const getPokeDetail = async (pokeName) => {
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokeName}`
    );
    setPokeDetail(res.data);
    pokeDetail && console.log(pokeDetail);
  };
  if (loading) {
    return (
      <div>
        <img alt="Loading" src={load}></img>
        <h2>Loading ...</h2>
      </div>
    );
  }
  return (
    <div className={s.cardContainer}>
      {poke.map((pok) => (
        <div
          key={pok.name}
          className={s.card}
          onClick={() => getPokeDetail(pok.name)}
        >
          <img alt="" src={bola}></img>
          <p className={s.name}>{capitalize(pok.name)}</p>
        </div>
      ))}
      {pokeDetail ? (
        <PokeDetail pokeDetail={pokeDetail} handleClick={handleClick} />
      ) : null}
    </div>
  );
}
