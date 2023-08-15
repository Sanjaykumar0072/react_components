import React, { Component } from "react";
import emailjs from "@emailjs/browser";
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';

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
        console.log(import.meta.env.VITE_PUBLIC_KEY);
    }

    doSubmit = () => {
        let user_captcha = document.getElementById('user_captcha_input').value;
 
        if (validateCaptcha(user_captcha) === true) {
            alert('Captcha Matched');
            // this.handleSubmit();
            document.getElementById('user_captcha_input').value = "";
         } else {
            alert('Captcha Does Not Match');
            document.getElementById('user_captcha_input').value = "";
         }
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        const serviceId = import.meta.env.VITE_SERVICEID;
        const templateId = import.meta.env.VITE_TEMPLATEID;
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
            <section>
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
                            <div><input placeholder="Enter Captcha Value" id="user_captcha_input" name="user_captcha_input" type="text" /></div>
                        </div>                
                    </div>
                    <button className="btn" disabled={loading} onClick={() => this.doSubmit()}>subscribe</button>
                </form>
            </section>
        );
    }
}

export default ContactUs;
