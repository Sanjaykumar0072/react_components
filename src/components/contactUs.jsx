import React, { Component } from "react";
import emailjs from "@emailjs/browser";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import Menu from './componentMenu';

class ContactUs extends Component {
    constructor(props) {
        super(props);

        this.inputRefs = [
            React.createRef(),
            React.createRef(),
            React.createRef(),
            React.createRef()
        ];

        this.state = {
            loading: false
        };
    }

    componentDidMount() {
        emailjs.init(import.meta.env.VITE_PUBLIC_KEY);
        loadCaptchaEnginge(6);
    }

    doSubmit = () => {
        let userCaptcha = document.getElementById('user_captcha_input').value;

        if (validateCaptcha(userCaptcha)) {
            this.handleSubmit();
        } else {
            alert('Captcha Does Not Match');
        }
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        const serviceId = import.meta.env.VITE_SERVICEID;
        const templateId = import.meta.env.VITE_TEMPLATEID;

        // For these API keys goto https://www.emailjs.com/ 
        // > sign Up with your email address 
        // > connect with gmail account, create a template for email subscription
        // > Then You will get all these keys 
        // > And Save the keys in the .env file as
        //     # EmailJs  ****** (copy this code and edit the keys) ********
        //     VITE_PUBLIC_KEY  = "XXXXXXXXXXXXXX"
        //     VITE_SERVICEID = "service_XXXXXX"
        //     VITE_TEMPLATEID = "template_XXXXXX" 
        // > Then try the contact form.

        try {
            await emailjs.send(serviceId, templateId, {
                recipent: this.inputRefs[0].current.value,
                email: this.inputRefs[1].current.value,
                number: this.inputRefs[2].current.value,
                message: this.inputRefs[3].current.value
            });

            alert("Form Submitted");
        } catch (error) {
            console.log(error);
        } finally {
            this.setState({ loading: false });
        }
    };

    render() {
        const { loading } = this.state;

        return (
            <>
                <Menu />
                <h1>Custom ContactUS EmailJs</h1>
                <section className="contactus">
                    <aside></aside>
                    <form>
                        <div className="form_group">
                            <label htmlFor="">Name</label>
                            <input ref={this.inputRefs[0]} type="text" placeholder="enter your name" />
                        </div>
                        <div className="form_group">
                            <label htmlFor="">Email</label>
                            <input ref={this.inputRefs[1]} type="email" placeholder="enter your email" />
                        </div>
                        <div className="form_group">
                            <label htmlFor="">Number</label>
                            <input ref={this.inputRefs[2]} type="number" placeholder="enter your number" />
                        </div>
                        <div className="form_group">
                            <label htmlFor="">Message</label>
                            <textarea ref={this.inputRefs[3]} cols="30" rows="5" placeholder="message us what you think"></textarea>
                        </div>
                        <div className="form-group">
                            <div className="col mt-3"><LoadCanvasTemplate /></div>
                            <div className="col mt-3">
                                <div><input placeholder="Enter Captcha" id="user_captcha_input" name="user_captcha_input" type="text" size="30" /></div>
                            </div>
                        </div>
                        <button className="btn" disabled={loading} onClick={() => this.doSubmit()}>subscribe</button>
                    </form>
                </section>
            </>
        );
    }
}

export default ContactUs;
