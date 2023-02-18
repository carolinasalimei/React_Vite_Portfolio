import React from 'react';
import './About.css'
import imgMe from'../../assets/iam.jpeg'
const About
 = () => {
    return(
    
    <section className="about" >
    <div className="max-width">

        <div className="about-content">
            <div className="column left">
                <img src={imgMe} alt=""/>
            </div>
            <div className="column right">
                <h2 className="hire">Contratame que soy</h2>


                <div className="why"><span className="typing-2"></span></div>


                <a href="#">1300+   Cientes</a>
                <a className="btnGreen" href="#">75    Paises</a>
                <a className="btnPink" href="#">1700+  Productos</a>
            </div>
        </div>
    </div>
</section>)
}

export { About }