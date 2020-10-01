import React from 'react';
import classes from '../Content/Content.css';
const Content=(props)=>{
    
    return(
        <div className={classes.box}>
            <img src={props.imgadd} className={classes.image}></img>
          <p className={classes.text}> {props.textarr} </p>
          <p className={classes.para}>{props.para}</p> 
        <p className={classes.time}>{props.time}</p>
        <button className={classes.button}>WATCH NOW</button>
        </div>

    );
}
export default Content;