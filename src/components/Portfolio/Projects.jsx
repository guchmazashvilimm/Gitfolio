import React from 'react'
import "./Projects.css";
import { Data } from './Data';

import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const Projects = ()=>{

    return(
        <>
        <section className="projects container section">
            <div>
            <h2 className='section__title'>My Projects</h2>
            <span className='section__subtitle'></span>

            <Swiper className='projects__container'
             loop={true}
             grabCursor={true}
             spaceBetween={24}
             pagination={{
               clickable: true,
             }}
             breakpoints={{
               576: {
                 slidesPerView: 1,
               },
               768: {
                 slidesPerView: 1,
                 spaceBetween: 48,
               },
             }}
             modules={[Pagination]}
    
            >
                {Data.map(({id,image,title,description,link})=>{
                    return (
                        <SwiperSlide className='projects__card' key={id}>
                            <img src={image} alt=''
                            className='projects__img'></img>
                            <div>
                                <h3 className='projects__name'><a href={link} target="_blank">{title}</a></h3>
                                <p className='projects__description'>{description}</p>
                            </div>
                        </SwiperSlide>
                        

                    )
                })}
              
            </Swiper>
            </div>
            <div>
              <div >
                <a className='button button--flex' href="https://github.com/guchmazashvilimm?tab=repositories" target="_blank">View All Projects</a>

              </div>
            </div>
            
                

        </section>
        
        
        </>
    )

}
export default Projects;