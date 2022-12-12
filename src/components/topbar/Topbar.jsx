//import React from 'react'
import "./Topbar.scss";
import {Person,Mail} from '@material-ui/icons';
// import PersonIcon from '@mui/icons-material/Person';
// import MailIcon from '@mui/icons-material/Mail';

export default function Topbar() {
  return (
    <div className='topbar'>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">SankeyTech..</a>
          <div className="itemContainer">

            <Person className="icon"/>
            <span> +91 9309563675</span>

          </div>

          <div className="itemContainer">

            <Mail className="icon"/>
            <span> sanketjirapure1@gmail.com</span>

          </div>

        </div>
        
        <div className="right">
          <div className="hamburger">
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
          

        </div>
      </div>
      
    </div>
  )
}
