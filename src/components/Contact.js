import React from 'react';
import './contact.css';


function Contact(props) {
    return (
        <>
       <figure className = "Contact">
            <img className = "avatar" src = {props.avatar} alt={props.name}/>
            <div>{props.name}</div>
       <figure className = "status">
       <div className= "Status">
       <p className = "status-text"> {props.line ? "online" : "offline" } </p>
       <p className ={props.line?  "status-online" : "status-offline" }> </p>
       </div> 
       </figure>
        </figure>
        </>      
    );
}
/* <cite {props.line? className = "status-online" <p>"online"</p> : className = "status-offline" <p>"offline"</p>}*/

export default Contact;