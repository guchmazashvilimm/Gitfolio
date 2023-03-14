import React from "react";
import "./Skills.css";
const Skills = ()=>{
    return(
        <>
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My technical level</span>

            <div className="skills__container container grid">
            <div className='skills__content'>
            <h3 className='skills__title'></h3>

            <div className='skills'>
                <div className='skills__group '>
                    <div className='skill'>
                        <i class='bx bxl-html5 sk-bx'></i>
                        <h3 className="skills__name">HTML</h3>
                        
                    </div>
                    <div className='skill '>
                        <i class='bx bxl-css3 sk-bx'></i>
                        <h3 className="skills__name">CSS</h3>
                        
                    </div>
                    <div className='skill col'>
                        <i class='bx bxl-javascript sk-bx'></i>
                        <h3 className="skills__name"> JavaScript</h3>
                        
                    </div>
                    <div className='skill col'>
                        <i class='bx bxl-bootstrap sk-bx'></i>
                        <h3 className="skills__name"> Bootstrap</h3>
                    </div>
                    
                    
                </div>
                <div className="skills__group">
                <div className='skill col'>
                        <i class='bx bxl-react sk-bx'></i>
                        <h3 className="skills__name">React</h3>
                           
                    </div>
                    <div className='skill col'>
                        <i class='bx bxl-jquery sk-bx'></i>
                        <h3 className="skills__name">jQuery</h3>

                    </div>
                    <div className='skill col'>
                        <i class='bx bxl-python sk-bx'></i>
                        <h3 className="skills__name"> Python</h3>
                    </div>
                    <div className='skill col'>
                       <i class='bx bxl-git sk-bx'></i>
                       <h3 className="skills__name"> Git</h3>
                    </div>
                </div>
               
                
            </div>
        </div>


            </div>
        </section>
        </>
    )
}
export default Skills;