import React from "react"

export default function Card(props){
return (
    <div className="card" style={{width: 250}}>
        <img src={props.image} alt="" />
        <div className="card-body">
            <h5 className="card-tittle">{props.name}</h5>
            <p className="card-text">{props.status}</p>
            <p className="card-text">{props.gender}</p>
            <p className="card-text">{props.species}</p>
            <p className="card-text">{props.origin.name}</p>
            <button type="button" class="btn btn-outline-success"
            onClick={()=>window.alert('Emulamos que se cierra la card')}>x</button>
        </div>

    </div>
);
    
 
}