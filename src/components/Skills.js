import React from 'react';
import { Link } from 'react-router-dom';
import {
    FaJava,
    FaPython,
    FaReact,
    FaNodeJs,
    FaHtml5,
    FaCss3Alt,

  } from 'react-icons/fa';
import { 
    SiOcaml, 
    SiCplusplus, 
    SiJavascript, 
    SiMongodb,
    SiGatsby
} from 'react-icons/si';
import { AiOutlineConsoleSql } from "react-icons/ai";
import { IconContext } from 'react-icons/lib';
import './Skills.css';

function Skills() {
    
    return (
        <IconContext.Provider value={{color: '#fff', size: 64}}>
        <div>
            <div className='skills__section'>
                <div className='skills__wrapper'>
                    <h1 className='skills__heading'>Skills</h1>
                    <div className='skills__container'>
                        <Link to='/' className='skills__container-card'>
                            <div className='pricing__container-cardInfo'>
                                <div className='icon'>
                                    <img src='images/general.svg' alt="general" className='card-img'/>
                                </div>
                                <h3>General</h3>
                                <ul className='skills__container-features'>
                                    <li><FaJava size={26}/>    Java</li>
                                    <li><FaPython size={26}/>   Python</li>
                                    <li><SiOcaml size={26}/>    OCaml</li>
                                    <li><SiCplusplus size={26}/>    C++</li>
                                </ul>
                            </div>
                        </Link>
                        <Link to='/' className='skills__container-card'>
                            <div className='pricing__container-cardInfo'>
                                <div className='icon'>
                                    <img src='images/web.svg' alt="web" className='card-img'/>
                                </div>
                                <h3>Web</h3>
                                <ul className='skills__container-features'>
                                    <li><FaReact size={19}/>   React</li>
                                    <li><FaNodeJs size={19}/>   Node</li>
                                    <li><SiJavascript size={19}/>     JavaScript</li>
                                    <li><FaHtml5 size={19}/>   HTML</li>
                                    <li><FaCss3Alt size={19}/>   CSS</li>
                                    <li><SiGatsby size={19}/>   Gatsby</li>
                                </ul>
                            </div>
                        </Link>
                        <Link to='/' className='skills__container-card'>
                            <div className='pricing__container-cardInfo'>
                                <div className='icon'>
                                    <img src='images/database.svg' alt="database" className='card-img'/>
                                </div>
                                <h3>Database</h3>
                                <ul className='skills__container-features'>
                                    <li><SiMongodb size={26}/>  MongoDB</li>
                                    <li><AiOutlineConsoleSql size={26}/>  SQL</li>
                                </ul>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </IconContext.Provider>
    );
}

export default Skills;
