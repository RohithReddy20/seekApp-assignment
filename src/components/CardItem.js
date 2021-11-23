//importing react and writing a function CardItem and exporting it
import React from 'react';
import './CardItem.css';
import firebase,{ realdb } from '../service/firebase';
import { toast } from 'react-toastify';
// import { ref } from '../App';



function CardItem(props) {

    
    
    //get user uid
    const userId = firebase.auth().currentUser.uid;
    
     function notify(message) {
        toast.success(message, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }
    const addData = () => {
        realdb.child(userId).push(
            {
                
                    name: props.name,
                    email: props.email,
                    phone: props.phone,
                    address: props.address,
                    image: props.image,
                    gender: props.gender
                
            }
            
        );
        notify(`${props.name} saved to My People`);
    }
        
    // const docRef = db.collection('users');

    return (
        <div id={props.id} className="card">
            <div className="card-image">
                <img src={props.image} alt={props.name} />
            </div>
            <div className="card-body">
                <div className="name">
                    <h2>{props.name} </h2><span><p> {props.gender==="male" ? <i className="fas fa-mars fa-lg"/> : <i className="fas fa-venus fa-lg"/> } {props.gender}</p></span>
                </div>
                <div className="contact-info">
                    <div className="email">
                    <p><i className="fas fa-envelope"></i> {props.email}</p>
                    </div>
                    <div className="phone">
                        <p><i className="fas fa-phone"></i> &nbsp;{props.phone}</p>
                    </div>
                </div>
           
                <div className="address">
                    <p><i className="fas fa-location fa-lg"></i>{props.address}</p>
                </div>
            </div>
            <div className="card-footer">
                <button className="btn" onClick={addData}>Save</button>
            </div>
        </div>
    );
}

export default CardItem;