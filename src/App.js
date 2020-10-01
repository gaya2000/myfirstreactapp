import React, { Component } from 'react';
 import classes from './App.css'
import Head from './Head/Head';
import SideBar from './SideBar/SideBar'
import Content from './Content/Content'
class App extends Component {
  
    state={
      
      
      ContentState:[{image:'https://data.whicdn.com/images/273689852/original.jpg',
      text:'Facebook ads for beginner retention and loyalty a Facebook ads for',
      desc:"As she sat watching the world go by, something caught her eye. It wasn't so much its color or shape, but the way it was moving. She squinted to see if she could better understand what it was and where it was going, but it didn't help. As she continued to stare into the distance, she didn't understand why this uneasiness was building inside her body. She felt like she should get up and run. If only she could make out what it was.",
      time:"20 minutes",
      link:"click here!!"},{image:'https://data.whicdn.com/images/273689852/original.jpg',
      text:'Facebook ads for beginner retention and loyalty a Facebook ads for',
      desc:"As she sat watching the world go by, something caught her eye. It wasn't so much its color or shape, but the way it was moving. She squinted to see if she could better understand what it was and where it was going, but it didn't help. As she continued to stare into the distance, she didn't understand why this uneasiness was building inside her body. She felt like she should get up and run. If only she could make out what it was.",
      time:"20 minutes",
      link:"click here!!"},{image:'https://data.whicdn.com/images/273689852/original.jpg',
      text:'Facebook ads for beginner retention and loyalty a Facebook ads for',
      desc:"As she sat watching the world go by, something caught her eye. It wasn't so much its color or shape, but the way it was moving. She squinted to see if she could better understand what it was and where it was going, but it didn't help. As she continued to stare into the distance, she didn't understand why this uneasiness was building inside her body. She felt like she should get up and run. If only she could make out what it was.",
      time:"20 minutes",
      link:"click here!!"}
    ]
       
    }
 
  
    render() 
  {
    let contentComp=
    (
      
      this.state.ContentState.map((e)=>{
        return <Content textarr={e.text} imgadd={e.image} para={e.desc} time={e.time}></Content>;
      })
     
    );
        return (
        <div  className="App">
         <Head></Head>
         <div className={classes.hori}>
         <SideBar></SideBar>
         <div className={classes.cc} >
         {contentComp}
         </div>
         </div>
          
         </div>
        )
         
   }
 

   }
  
export default App;
