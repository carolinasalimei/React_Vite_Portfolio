import React from 'react';
import './Teams.css';

import imgAppel from '../../assets/appel.png';
import imgAbb from '../../assets/airbnb.png';
import imgFivee from '../../assets/fivee.png';
import imgConvite from '../../assets/convite.png';
import imgUp from '../../assets/upwork.png';
import FlechaIzq from '../../assets/left.png';
import FlechaDer from '../../assets/right.png';

const Teams = () => {
 
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <button><img src={FlechaDer} alt="right"/></button>,
        prevArrow: <button><img src={FlechaIzq} alt="left"/></button>,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      };
    
  
  return (
   
    <section className="teams" id="teams">
    <div className="teams-header">
      <h2 className="title">Mis Clientes</h2>
      <div className="teams-arrows">
        <button className="arrow"><img src={FlechaIzq} alt="left" /></button>
        <button className="arrow"><img src={FlechaDer} alt="right" /></button>
      </div>
    </div>

      <div className="cards-container">
        <div className="card">
          <div className="box">
            <img src={imgAppel} alt="" />
          </div>
        </div>
        <div className="card">
          <div className="box">
            <img src={imgAbb} alt="" />
          </div>
        </div>
        <div className="card">
          <div className="box">
            <img src={imgFivee} alt="" />
          </div>
        </div>
        <div className="card">
          <div className="box">
            <img src={imgConvite} alt="" />
          </div>
        </div>
        <div className="card">
          <div className="box">
            <img src={imgUp} alt="" />
          </div>
        </div>
      </div>

    </section>
  );
};

export { Teams };








