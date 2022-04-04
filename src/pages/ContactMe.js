import React from 'react';
import Background from '../components/Background';
import Footer from '../components/Footer';
import Nav from '../components/Nav';


const ContactMe = () => {
    return (
        <div>
            <Nav />
            <Background />
            <div className="contactMe">
            <h1>Contact Me</h1>
            <div className="contactContainer">
                <div className="contactMe_text">
                    <h2>I'm currently looking for an internship !</h2>
                    <h3>If you want to contact me, please use the form below</h3>
                </div>
                <div className="contactMe_form">
                    <form method='POST' action=''>
                        <div className="form_row">
                            <input type="text" name="surname" id="name" />
                            <input type="text" name="name" id="name" />
                        </div>
                        <div className="form_row">
                            <input type="phone" name="Phone" id="phone" />
                            <input type="email" name="email" id="email" />
                        </div>
                        <div className="form_row">
                            <textarea name="message" id="message" cols="30" rows="10"></textarea>
                        </div>
                        <input type="submit" value="Send" />
                    </form>
                </div>
            </div>
            </div>
            <Footer />
        </div>
    );
};

export default ContactMe;