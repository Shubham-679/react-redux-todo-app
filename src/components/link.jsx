import React from 'react';

const Link = (props) => {
    console.log("link component",props)
      return ( 
        <button className="button btn-secondary btn-sm" onClick={props.onClick} disabled={props.active} style={{ marginLeft: '4px'}}>
            {props.children}
        </button>
     );      
}

export default Link;