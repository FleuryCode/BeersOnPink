import React, { useState } from "react";
import './contactForm.styles.scss';
import CustomButton from "../customButton/customButton.component";
import CustomInput from "../customInput/customInput.component";
import CustomTextField from "../customTextField/customTextField.component";
import { ReCAPTCHA } from 'react-google-recaptcha';
import { KEYS } from "../../Keys";


const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [recaptchaToken, setRecaptchaToken] = useState('');
    const [displayMessage, setDisplayMessage] = useState('');
    const [messageSent, setMessageSent] = useState(false);

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

    // Recaptcha
    const recaptchaRef = React.useRef();
    const recaptchaKey = KEYS.recpatchaKey;
    const updateRecpatcha  = (token) => {
        setRecaptchaToken(token);
    };
    // Formspark
    const formSparkId = KEYS.formSparkID;
    const formSparkUrl = `https://submit-form.com/${formSparkId}`;
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
                        <div className="col-6">
                            <ReCAPTCHA
                            ref={recaptchaRef}
                            sitekey={recaptchaKey}
                            onChange={updateRecpatcha}
                            />
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