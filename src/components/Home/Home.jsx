import React from 'react'
import "./Home.css";
import Social from "../Home/Social";
import Data from '../About/Data';
import ScrollDown from '../Home/ScrollDown';
const Home = ()=>{
    return (
        <>
        <section className='home__section' id="home">
            <div className='home__container container grid'>
                <div className='home__content grid'>
                    <Social/>

                    <div className='home__img'></div>

                    <Data/>

                </div>
                <ScrollDown/>
            </div>
        </section>
        </>
    )
}
export default Home;