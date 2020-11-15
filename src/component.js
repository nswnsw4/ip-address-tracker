import React from 'react';

function Com({info,data}){
    return (
        <div className="data-container">
            <h1 className="info">{info}</h1>
            <hr className="line"></hr>
            <p className="data">{data}</p>
        </div>
    )
}

export default Com;