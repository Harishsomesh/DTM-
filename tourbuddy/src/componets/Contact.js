import React from 'react';
import x1 from "../images/x5.jpeg"
import "./Contact.css"

function Contact(){
    return (
        <div className='Contact'>
            <h1>Contact us </h1>
            <div className='contact-1'>
                <img src={x1} alt='hello'></img>

            <div className='contact-sub'>
                <div>
                    <h3>name</h3>
                    <input type='text'/>
                </div>

                <div>
                    <h3>email</h3>
                    <input type='email'/>
                </div>
                <div>
                    <h3>number</h3>
                    <input type='num'/>
                    
                </div>

                <button>send</button>
            </div>
            
            </div>
            
        </div>
    );
}

export default Contact;