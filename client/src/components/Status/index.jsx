import React from "react";
import './Status.css'

function Status ({online}) {
    return(
        
        
        <div className={`status ${online?' online ':''}` }>{online?'online':'offline'}</div>
        
    )
}



export default Status;