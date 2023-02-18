import React from 'react';
import './Home.css'

const Home = () => {
    return(
        
        
        <section className="home" >
            <div className="max-width">

                <div className="home-content">

                    <div className="text-1">Mi nombre es,</div>
                    <div className="text-2">Carolina Salimei</div>
                    <div className="text-3">Soy Developer <span className="typing"></span></div>
                    <a href="#">Hire Me</a>
                    <a className="btnMore" href="#">Learn more</a>

                </div>
            </div>
          
        </section>
    
    )
}

export { Home }