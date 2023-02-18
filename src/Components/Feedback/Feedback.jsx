import React from 'react';
import './Feedback.css'
import FlechaIzq from '../../assets/left.png';
import FlechaDer from '../../assets/right.png';
import img1 from'../../assets/clientes1.jpeg'
import img2 from'../../assets/clientes 2.jpeg'
import img3 from'../../assets/clientes3.jpg'
import img4 from '../../assets/clientes4.jpeg'


const Feedback = () => {
    return(
        <section className="feed" id="feed">
        <div className="max-width">


       
      <h1 className="title1">Feedback de Clientes</h1>
      <h3 className="title1">--sobre mis servicios--</h3>

               <div className="cards">
                    <div className="boxes">
                        <img src={img1}alt=''/>    
                        <div className="text">Lucila Marcaida</div>
                        <p className='cards-text'>Excelente en el area de A & B</p>
                    </div>
                </div>



 <div className="cards">
                    <div className="boxes">
                    <img src={img2}alt=''/>
               
                   
                        <div className="text">Clara Harriague</div>
                        <p>Muy buen manejo del restaurante.</p>
                    </div>
                </div>
                <div className="cards">
                    <div className="boxes">
                    <img src={img3}alt=''/>
                   
                  
                        <div className="text">Candelaria Ruiz</div>
                        <p>Muy buena diseñadora </p>
                    </div>
                </div>
                <div className="cards">
                    <div className="boxes">

                    <img src={img4}alt=''/>
                    
                        <div className="text">Valentina Seresi</div>
                        <p>Excelente en eventos-Docencia .</p>
                    </div>
                </div>
                






















            </div>
            </section>
    
    
    )
}

export { Feedback }