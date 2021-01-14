import React from 'react';
import {Animated} from "react-animated-css";
import Address from '../../img/address.png';
import Phone from '../../img/contact.png';
import Mail from '../../img/mail.png';

const Contact = () => {
    return (
        <div className="page-container">
            <div className="contact-container">
                <Animated className="row" animationIn="slideInLeft" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                    <div className="row-left">
                        <img className="img-100" src={Address} alt="address" />
                    </div>
                    <div className="row-right">
                        <h4>Uciha Global Venture Inc<br/>B-2-05, CoPlace 2, 2260 Jalan Usahawan 1, <br/>63000 Cyberjaya, Selangor, MALAYSIA</h4>
                    </div>
                </Animated>
                <Animated className="row" animationIn="slideInLeft" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                    <div className="row-left">
                        <img className="img-100" src={Mail} alt="address" />
                    </div>
                    <div className="row-right">
                        <h4>support@uciha-gvc.com</h4>
                    </div>
                </Animated>
                <Animated className="row" animationIn="slideInLeft" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                    <div className="row-left">
                        <img className="img-100" src={Phone} alt="address" />
                    </div>
                    <div className="row-right">
                        <h4>03-1234-3452</h4>
                    </div>
                </Animated>
            </div>
            <Animated className="contact-form" animationIn="fadeIn" animationOut="fadeOut" animationInDuration={3000} animationOutDuration={1000} isVisible={true}>
                <iframe title="location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.617936666677!2d101.66072771450666!3d2.9256740978691025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdb6578a59e387%3A0x2a10fe23b3099779!2sCoPlace%202!5e0!3m2!1sen!2smy!4v1610604448875!5m2!1sen!2smy" width="500" height="450" frameborder="1" style={{border: 0}} allowfullscreen="" aria-hidden="true" tabindex="0"></iframe>
            </Animated>
        </div>
    );
}

export default Contact;
