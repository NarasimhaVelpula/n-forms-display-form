import React from 'react'
import './Header.css'
import logo from './logo.PNG'
import { IconButton } from '@material-ui/core';
import {Button} from '@material-ui/core'
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} height="90px" />
            </div>
            <div className="leftSide">
                
                <Link to="/sendResponse">
                <Button variant="contained" color="primary" >
                Send Response
                </Button>
                </Link>
            </div>
            
        </div>
    )
}

export default Header
