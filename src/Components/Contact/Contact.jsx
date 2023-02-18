import React from 'react';
import './Contact.css'
import imgfc from '../../assets/fcbook.png'

const Contact = () => {
    return(
        <section className="contact" id="contact">
        <div className="max-width">
            <h2 className="titleC">Contact me</h2>
            <div className="contact-content">
    
    
                <div className="column right">
                    <div className="text">Message me</div>
                    <form action="" id="form"  className="form"  method="post">
                        <div className="fields">
                            <div className="field name">
                                <label htmlFor="name">Nombre y Apellido </label>
                                <input type="text" name="name" id="name" placeholder="" required/>
                            </div>
                            <div className="field email">
                                <label htmlFor="email">Email </label>
                                <input type="email" name="email" id="email" placeholder="" required/>
                            </div>
                        </div>
                        <div className="field">
                            <label htmlFor="subject">Subject </label>
                            <input type="text" name="subject" id="subject" placeholder="" required/>
                        </div>
                        <div className="field textarea">
                            <label htmlFor="message">Message... </label>
                            <textarea cols="30" rows="10" name="message" id="message" placeholder="" required></textarea>
                        </div>
                        <div className="button-area">
                            <button type="submit" value="submit">Send message</button>
                        </div>
                    </form>
                    <a href="mailto:caroruizsalimei@gmail.com" id="trucazo"></a>
                    
                   
                </div>
                <div className="icons first">
                <li><a href="https://www.facebook.com/carolina.salimei.509511"><span className="fab fa-facebook-f"></span></a></li>
                <li><a href="https://www.instagram.com/carosalimei_/?hl=es"><span className="fab fa-instagram"></span></a></li>
                <li> <a href="https://www.linkedin.com/in/carolina-salimei-a6279922b/"><span className="fab fa-linkedin-in"></span></a></li>
                <li><a href="https://github.com/carolinasalimei"><span className="fab fa-github"></span></a></li>
    
            </div>
         
               
    
          
    
               
            </div>
      
    
        </div>
    
    </section>
    


    )
}

export { Contact }