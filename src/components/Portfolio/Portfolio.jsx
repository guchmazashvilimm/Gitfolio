import React from 'react'
import "./Portfolio.css";
import Projects from "./Projects";
const Portfolio = ()=>{
    return(
        <>
        <section className="portfolio section" id="portfolio">
            <h2 className='section__title'>Portfolio</h2>
            <span className='section__subtitle'>My personal journey</span>
             
             <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className="qualification__button button--flex ">
                        <i className='uil uil-graduation-cap qualification__icon'></i>
                         Education
                    </div>

                    <div className="qualification__button button--flex">
                        <i className='uil uil-briefcase-alt qualification__icon'></i>
                         Experience
                    </div>
                </div>
                <div className="qualification__sections">
                    <div className="qualification__content">
                        <div className="qualification__data">
                            <div>
                                <h3 className='qualification__title'>Information technology</h3>
                                <span className='qualification__subtitle'>Business and Technology University</span>
                                <div className='qualification__calender'>
                                    <i className='uil uil-calendar-alt cal-icon'></i>
                                    2021 - Present
                                </div>
                            </div>
                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                            <div>
                                <h3 className='qualification__title'>Frontend Developer Intern</h3>
                                <span className='qualification__subtitle'>B2C(AI based E-commerce)</span>
                                <div className='qualification__calender'>
                                    <i className='uil uil-calendar-alt cal-icon'></i>
                                    2022
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
             </div>
             <Projects/>
             
        
        
        </section>

        </>
    )
}
export default Portfolio;