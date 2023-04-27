import React from "react"

export default function Login(props){
    return(
        <form className="form-inline">
            <div className="form-group mx-sm-3">
            <label for= 'inputUser'className="sr-only" htmlFor="email">Email</label>
            <input type="text" className="form-control" id='inputUser' placeholder="Email" />
           </div>
           <div className="form-group mx-sm-3">
            <label htmlFor="password" for="inputPass" className="sr-only">Password</label>
            <input type="password" className="form-control" id="inputPass" placeholder="Password" />
           </div>
           <div className="form-group mx-sm-3">
            <span></span>
           <button className="btn btn-outline-success" type="submit">LOGIN</button>
           </div>
        </form>
    );
}