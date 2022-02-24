import React from "react";
import CustomInput from "../customInput/customInput.component";
import './contactForm.styles.scss';

class ContactForm extends React.Component {
    render() {
        return (
            <div className="contactFormContainer container-fluid">
                <div className="row">
                    <div className="col-12">
                        <h2>WE WOULD LOVE TO HEAR FROM YOU</h2>
                    </div>
                    <form>
                        <div className="row">
                            <div className="col-12">
                                <CustomInput />
                            </div>
                            <div className="col-12">
                                test2
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default ContactForm;