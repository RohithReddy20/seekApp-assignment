import React,{ useEffect, useState } from 'react'
import CardItem from '../CardItem';
import '../CardItem.css';
import firebase, { realdb } from '../../service/firebase'
import $ from 'jquery';

function MyPeople() {

    const userId = firebase.auth().currentUser.uid;

    const [myPeople, setMyPeople] = useState([]);

    useEffect(() => {
        realdb.child(userId).on('value', (snapshot) => {
            snapshot.forEach((element) => {
                let data = element.val();
                setMyPeople(arr => [...arr, data]);
            });
        });
    }
   
    , []);
    useEffect(() => {
        $('.btn').css("display",'none');
        $('.card').css("height","460px");
    });
    return (
        <>
         

           

         
          <div className="people">
      <div className="card-container">
        {
          myPeople.map((el, i) => {
              return(
            <CardItem
              key={i}
              id={i}
              image={el.image}
              gender={el.gender}
              name={el.name}
              email={el.email}
              phone={el.phone}
              address={el.address}
            />)
          })}
      </div>
      { myPeople.length === 0 && <h2 className="empty">Add Some People</h2> }
    </div>
        </>
    );
}

export default MyPeople;
