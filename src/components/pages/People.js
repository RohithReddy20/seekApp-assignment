import React, { useState, useEffect } from "react";
import CardItem from "../CardItem";
import "../CardItem.css";
import $ from 'jquery';

function People() {
  const [state, setState] = useState([]);
  const [page, setPage] = useState(1);

  async function fetchData() {
    const response = await fetch(
      `https://randomuser.me/api/?page=${page}&results=20`
    );
    const data = await response.json();
    // console.log(data);
    setState([...state, ...data.results]);
  }

  useEffect(() => {
    fetchData();
    $('.btn').css("display",'initial');
  }, [page]);

  window.onscroll = function () {
    //check if the page has scrolled to the bottom
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setPage(page + 1);
    }
  };

  return (
    <div className="people">
      <div className="card-container">
        {state.length > 0 &&
          state.map((el, i) => {
              return(
            <CardItem
              key={i}
              id={i}
              image={el.picture.large}
              gender={el.gender}
              name={el.name.title + ". "+ el.name.first+" "+el.name.last}
              email={el.email}
              phone={el.cell}
              address={el.location.city + ", "+el.location.country}
            />)
          })}
      </div>
    </div>
  );
}

export default People;

//{el.gender}
//{el.email}
//{el.cell}
//{el.name.title} {el.name.first} {el.name.last}  
//{el.location.city} {el.location.country}
//{el.picture.large}