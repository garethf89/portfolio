import React, { Component } from "react";

import Input from  '../../Components/Form/Input';
import Textarea from  '../../Components/Form/Teaxtarea';
import Button from '../../Components/General/Button';

import FormValidator from '../../Helpers/FormValidator';
import ValidationMessages from '../../Helpers/ValidationMessages';

import Email from '../../Services/Email';

import { BeatLoader } from 'react-spinners';

class Contact extends Component {

  constructor(){
    super();
    this.state = {
      personName : '',
      personEmail: '',
      personEnq: '',
      error: false,
      loading : false
    }

    this.emailService = new Email();

    this.validator = new FormValidator([
      { field: 'personName', method: 'isEmpty', validWhen: false, message: ValidationMessages.NAME},
      { field: 'personEmail', method: 'isEmail', validWhen: true, message: ValidationMessages.EMAIL},
      { field: 'personEmail', method: 'isEmpty', validWhen: false, message: ValidationMessages.EMAIL},
      { field: 'personEnq', method: 'isEmpty', validWhen: false, message: ValidationMessages.ENQ}
    ]);

  }

  handleChange = (event) => {
    event.preventDefault();
    const target = event.target;
    this.setState({
      [target.name]: target.value
    });
  }

  sendForm = () => {
    this.emailService.submit(this.state).then(() => {
      this.setState({
        apiError : false,
        success: true,
        loading: false
      });
    }).catch(() => {
      this.setState({
        apiError : true,
        success: false,
        loading: false
      });
    });
  }

  validate = (event) => {
    event.preventDefault();
    const valid = this.validator.validate(this.state);

    if(!valid.isValid){
      this.setState({
        error : true
      });
      return false;
    }

    this.setState({
      error : false,
      submitted: true,
      loading:true
    });
    this.sendForm();
  }

  render() {

    let hideOrShow = this.state.submitted ? 'contact-hide' : '';

    return (
        <article id="contact_me" className="site_row centered">  

          {this.state.success && 
            <section id="contact_success" aria-hidden="true" className="site_width fadeAnimation">
    
              <h2>Thank you!</h2>

              <p>Your email was successfully sent, thanks for your interest!</p>

            </section>
          }

          <section class="contact-social-block">
              <ul>
                  <li><a href="//www.twitter.com/gazmatron1" rel="noopener" target="_blank" class="icon fa-twitter"><span class="label">Twitter</span></a></li>
                  <li><a href="//www.facebook.com/gazmatron1" rel="noopener"target="_blank" class="icon fa-facebook"><span class="label">Facebook</span></a></li>
                  <li><a href="//uk.linkedin.com/in/garethferguson1" rel="noopener" target="_blank" class="icon fa-linkedin"><span class="label">LinkedIn</span></a></li>
              </ul>
          </section>

          <h2 className={hideOrShow}>Contact me</h2>
  
          <form id="contact_form" className={hideOrShow} onSubmit={this.validate} noValidate method="post">
          <Input
              label="Name"
              type="text"
              name="personName"
              className="person_name"
              required={true}
              onChange={this.handleChange}
            />
          <Input
              label="Email"
              type="email"
              name="personEmail"
              className="person_email"
              required={true}
              onChange={this.handleChange}
            />
            <Textarea
              label="Message"
              name="personEnq"
              className="person_enq"
              required={true}
              rows="4"
              onChange={this.handleChange}
            />

            {this.state.apiError && 
              <section id="contact_error" className="site_width fadeAnimation">
                  <p class="error">Failed to send enquiry! You could try directly emailing gareth.f@hotmail.co.uk</p>
              </section>
            }

            {this.state.error && 
              <section id="contact_error" className="site_width fadeAnimation">
              <p className="error">Please correctly fill in all fields.</p>
              </section>    
            }

            <Button 
              text="Submit"
              id="submit_message"
              icon="envelope"
              prefix="far"
            />
            <p className="requiredWarning">
              <span className="required">* = Required field</span>
            </p>
          </form>
          
          <div className="form-loader">
            <BeatLoader
              color={'rgba(109, 144, 48,1)'} 
              loading={this.state.loading} 
            />
          </div>

        </article>
    );
  }
}


export default Contact;
