import React from "react";
import s from "../styles/Pagination.module.css";

const Pagination = ({ pokePerPage, totalPokes, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPokes / pokePerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={s.container}>
      {pageNumbers.map((number) => (
        <p key={number} className={s.page}>
          <button onClick={() => paginate(number)} className={s.link}>
            {number}
          </button>
        </p>
      ))}
    </div>
  );
};

export default Pagination;
