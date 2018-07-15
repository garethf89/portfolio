import React, { Component } from "react";

import Input from  '../../Components/Form/Input';
import Textarea from  '../../Components/Form/Teaxtarea';
import Button from '../../Components/General/Button';

class Contact extends Component {

  constructor(){
    super();
    this.state = {
      personName : '',
      personEmail: '',
      personEnq: '',
      error: false
    }
  }


  handleChange = (event) => {
    event.preventDefault();
    const target = event.target;
    this.setState({
      [target.name]: target.value
    });
  }

  validate = (event) => {
    event.preventDefault();
    this.validateEmpty();
  }

  validateEmpty()
  {
    for (const val in this.state) {
      if(this.state[val] === '')
      {
        this.setState({
          error : true
        });
        return false;
      }
    };
    this.setState({
      error : false
    });
  }

  render() {

    return (
        <article id="contact_me" className="site_row centered">  
          <h2>Contact me</h2>
          <form id="contact_form" onSubmit={this.validate} noValidate method="post">
          <Input
              label="Name"
              type="text"
              name="personName"
              class="person_name"
              required={true}
              onChange={this.handleChange}
            />
          <Input
              label="Email"
              type="email"
              name="personEmail"
              class="person_email"
              required={true}
              onChange={this.handleChange}
            />
            <Textarea
              label="Message"
              name="personEnq"
              class="person_enq"
              required={true}
              rows="4"
              onChange={this.handleChange}
            />

            {this.state.error && 
            <section id="contact_error" class="site_width fadeAnimation">
             <p class="error">Please correctly fill in all fields.</p>
            </section>    

            }

            <Button 
              text="Submit"
              id="submit_message"
              icon="envelope"
              prefix="far"
            />
          </form>
          <p class="requiredWarning">
              <span class="required">* = Required field</span>
          </p>

        </article>
    );
  }
}


export default Contact;
