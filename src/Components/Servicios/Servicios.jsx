import React from 'react';
import './Servicios.css'
import imagen1 from '../../assets/servicios1.jpeg';
import imagen2 from '../../assets/servicios2.jpeg';
import imagen3 from '../../assets/servicios3.jpeg';
import imagen4 from '../../assets/servicios4.jpeg';
import imagen5 from '../../assets/servicios5.jpeg';
import imagen6 from '../../assets/servicio6.jpeg';
import imagen7 from '../../assets/servicio7.jpeg';
import imagen8 from '../../assets/servicios8.jpeg';

const Servicios = () => {
    return(
        
             <section className="services" id="services">
                <div className="teams-header"></div>
      <h2 className="title">Mis Servicios</h2>
        <div className="max-width">

            <div className="serv-content">

                <div className="cardS">
                    <div className="boxS">
                        <a href='#'>Web Design</a>
                        <img src={imagen1} alt=""/> 
                    </div>
                    </div>

                    
                    <div className="cardS">
                    <div className="boxS">
                        <a href='#'>Logo Banner</a>
                        <img src={imagen2} alt=""/>   
                    </div>
                </div>
                <div className="cardS">
                    <div className="boxS">
                        <a href='#'>Cocina Domicilio</a>
                        <img src={imagen3} alt=""/> 
                    </div>
                    </div>

                    
                    <div className="cardS">
                    <div className="boxS">
                        <a href='#'>Web Design</a>
                        <img src={imagen4} alt=""/>   
                    </div>
                </div> 
            </div>

            <div className="serv-content">

                <div className="cardS">
                    <div className="boxS">
                        <a href='#'>A   &  B</a>
                        <img src={imagen5} alt=""/> 
                    </div>
                    </div>

                    
                    <div className="cardS">
                    <div className="boxS">
                        <a href='#'>Web Design</a>
                        <img src={imagen6} alt=""/>   
                    </div>
                </div>
                <div className="cardS">
                    <div className="boxS">
                        <a href='#'>Web Design</a>
                        <img src={imagen7} alt=""/> 
                    </div>
                    </div>

                    
                    <div className="cardS">
                    <div className="boxS">
                        <a href='#'>Business Card</a>
                        <img src={imagen8} alt=""/>   
                    </div>
                </div> 
            </div>















        </div>
        
    </section>
   
    )
}


export { Servicios }