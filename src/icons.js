import React from 'react';
import { social } from './data';
import './Navbar.css';


const Icons = () => {
  return (
        <ul className='row'>
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li className='social-icons' key={id}>
                <a href={url}>{icon} </a>
              </li>
            );
          })}
        </ul>
  )
};

export default Icons;
