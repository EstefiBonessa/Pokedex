import React from "react";
import Pikachu from "../images/pikachu";
import fire from "../images/png/fire.png";
import bug from "../images/png/bug.png";
import dark from "../images/png/dark.png";
import dragon from "../images/png/dragon.png";
import electric from "../images/png/electric.png";
import fairy from "../images/png/fairy.png";
import fighting from "../images/png/fighting.png";
import flying from "../images/png/flying.png";
import ghost from "../images/png/ghost.png";
import grass from "../images/png/grass.png";
import ice from "../images/png/ice.png";
import normal from "../images/png/normal.png";
import poison from "../images/png/posion.png";
import psichic from "../images/png/psichic.png";
import rock from "../images/png/rock.png";
import steel from "../images/png/steel.png";
import water from "../images/png/water.png";
import ground from "../images/png/ground.png";

import s from "../styles/PokeDetail.module.css";

export default function PokeDetail({ pokeDetail, handleClick }) {
  function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
  }
  console.log(pokeDetail);
  return (
    <div className={s.container}>
      <div className={s.revContainer}>
        <div className={s.buttonCont}>
          <button className={s.button} onClick={handleClick}>
            x
          </button>
        </div>
        <div className={s.imgCont}>
          <div className={s.imgCont2}>
            <img
              alt={pokeDetail.name}
              className={s.img}
              src={pokeDetail.sprites.other.dream_world.front_default}
            ></img>
          </div>
          <div>
            <p className={s.name}>{capitalize(pokeDetail.name)}</p>
          </div>
        </div>
        <div className={s.infoCont}>
          <div className={s.dataCont}>
            <div className={s.flexy}>
              <p className={s.pId}> # {pokeDetail.id}</p>
            </div>
            <div className={s.margin}>
              <p className={s.type}>Type: </p>

              <div className={s.type}>
                {(pokeDetail.types[0].type.name === "fire" && (
                  <img src={fire} className={s.tipo}></img>
                )) ||
                  (pokeDetail.types[0].type.name === "bug" && (
                    <img src={bug} className={s.tipo}></img>
                  )) ||
                  (pokeDetail.types[0].type.name === "dark" && (
                    <img src={dark} className={s.tipo}></img>
                  )) ||
                  (pokeDetail.types[0].type.name === "electric" && (
                    <img src={electric} className={s.tipo}></img>
                  )) ||
                  (pokeDetail.types[0].type.name === "fairy" && (
                    <img src={fairy} className={s.tipo}></img>
                  )) ||
                  (pokeDetail.types[0].type.name === "fighting" && (
                    <img src={fighting} className={s.tipo}></img>
                  )) ||
                  (pokeDetail.types[0].type.name === "flying" && (
                    <img src={flying} className={s.tipo}></img>
                  )) ||
                  (pokeDetail.types[0].type.name === "ghost" && (
                    <img src={ghost} className={s.tipo}></img>
                  )) ||
                  (pokeDetail.types[0].type.name === "grass" && (
                    <img src={grass} className={s.tipo}></img>
                  )) ||
                  (pokeDetail.types[0].type.name === "ice" && (
                    <img src={ice} className={s.tipo}></img>
                  )) ||
                  (pokeDetail.types[0].type.name === "normal" && (
                    <img src={normal} className={s.tipo}></img>
                  )) ||
                  (pokeDetail.types[0].type.name === "poison" && (
                    <img src={poison} className={s.tipo}></img>
                  )) ||
                  (pokeDetail.types[0].type.name === "psychic" && (
                    <img src={psichic} className={s.tipo}></img>
                  )) ||
                  (pokeDetail.types[0].type.name === "rock" && (
                    <img src={rock} className={s.tipo}></img>
                  )) ||
                  (pokeDetail.types[0].type.name === "steel" && (
                    <img src={steel} className={s.tipo}></img>
                  )) ||
                  (pokeDetail.types[0].type.name === "water" && (
                    <img src={water} className={s.tipo}></img>
                  )) ||
                  (pokeDetail.types[0].type.name === "ground" && (
                    <img src={ground} className={s.tipo}></img>
                  )) ||
                  (pokeDetail.types[0].type.name === "dragon" && (
                    <img src={dragon} className={s.tipo}></img>
                  )) ||
                  null}
              </div>
            </div>
            <div className={s.flex}>
              <p className={s.title}>Height:</p>
              <p className={s.p}> {pokeDetail.height} m.</p>
            </div>
            <div className={s.flex}>
              <p className={s.title}>Weight:</p>
              <p className={s.p}> {pokeDetail.weight} kg.</p>
            </div>
            <div className={s.margin}>
              <p className={s.title}>Abilities: </p>
              {pokeDetail.abilities.map((ability) => (
                <p className={s.p}>{capitalize(ability.ability.name)}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
