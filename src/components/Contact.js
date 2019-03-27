import React from 'react';
import {Form, FormGroup, Input, Label, Button} from 'reactstrap';
import database from '../firebase/firebase';

class Contact extends React.Component {

  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      message: '',
      sent: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = (e) => {
     this.setState({ [e.target.name]: e.target.value});
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({sent: true});
    //save email to database for checking, does not send email.
    //could potentially do this with greater knowledge of nodemailer (or axios)
    database.ref('emails').push(this.state);
    this.setState({name: '', email: '', message: ''});
  }
  render() {
    return (
      <section className="contact">
        <div className="contact-form">

          <Form onSubmit={this.handleSubmit} >
            <h2>Contact Me</h2>
            {this.state.sent && <p className="success">Thankyou for sending a message. I will be in touch shortly.</p>}
            <FormGroup>
              <Label for="name">Name: </Label>
              <Input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup>
              <Label for="email">Email: </Label>
              <Input type="email" name="email" value={this.state.email} onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup>
              <Label for="message">Message: </Label>
              <Input type="textarea" name="message" value={this.state.message} onChange={this.handleChange}/>
            </FormGroup>
            <button className="button no-margin"><span>Submit</span></button>
          </Form>
          </div>
          <div className="overlay"></div>
      </section>

    );
  }
}

export default Contact;