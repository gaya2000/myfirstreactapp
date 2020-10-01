import React from 'react';
import classes from '../Head/Head.css'

const Head = (props)=>
{
    return(
        <div className={classes.flexContainer}>
        <div className={classes.Head}>Top <span className={classes.Trending}>#Trending</span> on Pepper Varsity 
        <span className={classes.goToVarsity}>GO TO VARSITY -></span>
        </div>
        </div>
    );
}
export default Head;