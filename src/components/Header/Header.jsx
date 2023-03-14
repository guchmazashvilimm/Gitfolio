import React from 'react'
import "./Header.css";
import { useState } from 'react';
import hw from "../../assets/hello_world.png";

const Header = ()=>{

    window.addEventListener("scroll",function(){
        const header = document.querySelector(".header");
        if (this.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    })  



    const [Toggle,showMenu] = useState(false);
    const [activeNav,setActiveNav] = useState("#home");


    return (
        <>
        <header className='header'>
            <nav className='nav container '>
                <a href="index.html" className='nav__logo'><i class='bx bx-star bx-md'></i></a>
                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className='nav__list grid'>
                        <li className='nav__item'>
                            <a href="#home" onClick={()=>{
                                setActiveNav("#home")
                            }} className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>Home</a>
                        </li>
                        <li className='nav__item'>
                            <a href="#about" 
                            onClick={()=>{
                                setActiveNav("#about")
                            }} className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}>About</a>
                        </li>
                        <li className='nav__item'>
                            <a href="#skills" onClick={()=>{
                                setActiveNav("#skills")
                            }} className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}>Skills</a>
                        </li>
                        <li className='nav__item'>
                            <a href="#portfolio" onClick={()=>{
                                setActiveNav("#portfolio")
                            }} className={activeNav === "#portfolio" ? "nav__link active-link" : "nav__link"}>Portfolio</a>
                        </li>
                        <li className='nav__item'>
                            <a href="#contact" onClick={()=>{
                                setActiveNav("#contact")
                            }} className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}>Contact</a>
                        </li>
                        
                    </ul>
                    <i class="uil uil-times nav__close" onClick={()=>showMenu(!Toggle)}></i>
                </div>
                <div className='nav__toggle' onClick={()=>showMenu(!Toggle)}>
                    <i class="uil uil-apps"></i>
                </div>
            </nav>

            
        </header>
        </>
    )
}
export default Header;