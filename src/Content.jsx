import React from 'react';
import './App.css';
import PlayCircleOutlineOutlinedIcon from '@material-ui/icons/PlayCircleOutlineOutlined';
import { Link } from 'react-router-dom';

const Content = () => {
    
    
    return(
        <div className="center-video">
        <h1>
         Wonderful <br></br>Nigeria
       </h1>
       <div className="video">
       <Link to="/https://www.youtube.com/watch?v=AVkphsjh8HI">
       <PlayCircleOutlineOutlinedIcon style={ {fontSize: 40} }/>
       </Link>
           <h4>See Video <br/> <p>Nigeria may 2020</p></h4>
       </div>
   </div>
    );
};

   


export default Content;