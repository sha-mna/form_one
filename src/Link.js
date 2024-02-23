import React from 'react';

function Link ({title, content, link}) {

   
    return (
        <div>
            <a href="https://reactjs.org/">{title}</a>
            <h1>{link}</h1>
            <p>
                {content}
            </p>
        </div>
    )
}

export default Link;