import React, { useState } from "react";
import CustomButton from "../customButton/customButton.component";
import CustomInput from "../customInput/customInput.component";
import CustomTextField from "../customTextField/customTextField.component";
import { KEYS } from "../../Keys";
import './contactForm.styles.scss';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    // On Input Change
    const onInputChangeHandle = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'message':
                setMessage(value);
                break;
            default:
                break;
        }
    }
    return (
        <div className="contactFormContainer container-fluid">
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <h2>WE WOULD LOVE TO HEAR FROM YOU</h2>
                </div>
                <form>
                    <div className="row">
                        <div className="col-12">
                            <label htmlFor="name">Full Name</label>
                        </div>
                        <div className="col-12">
                            <CustomInput id={'name'} type={'text'} name={'name'} placeholder={'John Smith'} value={name} onChange={onInputChangeHandle} />
                        </div>
                        <div className="col-12">
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="col-12">
                            <CustomInput id={'email'} type={'email'} name={'email'} placeholder={'example@email.com'} value={email} onChange={onInputChangeHandle} />
                        </div>
                        <div className="col-12">
                            <label htmlFor="message">Message</label>
                        </div>
                        <div className="col-12">
                            <CustomTextField id={'message'} name={'message'} placeholder={'Message'} value={message} onChange={onInputChangeHandle} />
                        </div>
                        <div className="col-2 ms-auto me-auto">
                            <CustomButton staticMessage={'Send Message'} />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;