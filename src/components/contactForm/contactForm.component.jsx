import React, { useState } from "react";
import './contactForm.styles.scss';
import CustomButton from "../customButton/customButton.component";
import CustomInput from "../customInput/customInput.component";
import CustomTextField from "../customTextField/customTextField.component";
import ReCAPTCHA from 'react-google-recaptcha';
import { KEYS } from "../../Keys";
import axios from 'axios';
import SendArrowButton from "../sendArrowButton/sendArrowButton.component";

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [recaptchaToken, setRecaptchaToken] = useState('');
    const [displayMessage, setDisplayMessage] = useState('');
    const [messageSent, setMessageSent] = useState(false);
    const [messageSending, setMessageSending] = useState(false);

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
    const updateRecpatcha = (token) => {
        setRecaptchaToken(token);
    };
    // Formspark
    const formSparkId = KEYS.formSparkID;
    const formSparkUrl = `https://submit-form.com/${formSparkId}`;

    // Axios Sending
    const sendAxiosMessage = async () => {
        const payload = {
            email: email,
            name: name,
            message: message,
            "g-recaptcha-response": recaptchaToken
        };

        // Sending to FormSpark Servers
        try {
            await axios.post(formSparkUrl, payload);
            // Reset Input Fields
            setEmail('');
            setName('');
            setMessage('');
            setDisplayMessage('Thank you for your message!');
            setMessageSent(true);
        } catch (error) {
            console.log(error);
            setDisplayMessage('Sorry, something went wrong.');
            setMessageSent(true);
        }
    };

    const sendMessageButtonClick = async (event) => {
        if (email !== '' && name !== '' && message !== '') {
            event.preventDefault();
            setMessageSending(true);
            await sendAxiosMessage();
            setMessageSending(false);
        } else {
            setMessageSent(true);
            setDisplayMessage('Please fill in all the fields');
        }
    };
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
                        <div className="col-12 col-md-6 ms-auto me-md-0 ms-md-0 me-auto d-flex justify-content-center">
                            <ReCAPTCHA
                                ref={recaptchaRef}
                                sitekey={recaptchaKey}
                                onChange={updateRecpatcha}
                            />
                        </div>
                        <div className="col-12 col-md-2 ms-auto me-auto mt-4 mt-md-0">
                            <div className="sendButtonContainer d-none d-md-flex">
                                <CustomButton onClick={sendMessageButtonClick} messageSending={messageSending} staticMessage={'Send Message'} />
                            </div>
                            <div className="sendArrowContainer d-flex d-md-none justify-content-center">
                                <SendArrowButton onClick={sendMessageButtonClick} messageSending={messageSending} />
                            </div>
                        </div>
                        <div className={`${messageSent ? 'd-flex' : 'd-none'} col-12 justify-content-center`}>
                            <h5 className="displayMessage" >{displayMessage}</h5>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;