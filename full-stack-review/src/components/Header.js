import React, {component} from 'react'; 
import logo from '../big-data.jpg'
import './Header.css' 

export default function Header(){
    return (
        <div className='Header'>
            <h1>Word Bank</h1>
            <img src= {logo} alt= 'pic'/>
        </div>
    )
}