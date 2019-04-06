import React from "react";
import Movie from "./../Movie"
export default (props)=>{
    console.log(props);
    
    return (
        <div>
            {
                props.watchlist.map(obj => <Movie {...obj}/>)
            }
        </div>
    )

}