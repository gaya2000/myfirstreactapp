import React from 'react';
import classes from '../SideBar/SideBar.css'
const sideBar=()=>
{
    return(
        <div className={classes.bar}>
            <br></br>
            <p>Blog</p>
            <br className={classes.line}></br>
            <p>Guides</p>
            <br></br>
            <p>Live Webinars</p>
            <br></br>
            <p>Pepper U</p>
            <br></br>
            <p>Creator Stories</p>
            <br></br>
            <p>Pepper Community</p>
            <br></br>
            <p>Pepper-Azzi</p>
            <br></br>
            <p>Pepper Social</p>
            <br></br>


        </div>
    );
};
export default sideBar;