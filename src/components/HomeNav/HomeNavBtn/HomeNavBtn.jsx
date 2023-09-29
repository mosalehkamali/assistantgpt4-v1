import React from "react";
import {Link} from 'react-router-dom';
import './HomeNavBtn.css';

function HomeNavBtn(props){
    return(
        <div className="HomeNavBtn">
             <Link className='HomeNavLink' to={props.path}>
                {props.content}
                </Link>
        </div>
    )
}

export default HomeNavBtn;