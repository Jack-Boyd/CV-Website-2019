import React from 'react';
import {Form, FormGroup, Input, Label, Button} from 'reactstrap';

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      message: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = (e) => {
     this.setState({ [e.target.name]: e.target.value});
  }
  handleSubmit = (e) => {
    e.preventDefault();
  }
  render() {
    return (
      <section className="contact">
        <div className="contact-form">

          <Form >
            <h2>Contact Me</h2>
            <FormGroup>
              <Label for="name">Name: </Label>
              <Input type="text" name="name" onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup>
              <Label for="email">Email: </Label>
              <Input type="email" name="email" onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup>
              <Label for="message">Message: </Label>
              <Input type="textarea" name="message" onChange={this.handleChange}/>
            </FormGroup>
            <Button onClick={this.handleSubmit} className="button"><span>Submit</span></Button>
          </Form>
          </div>
          <div className="overlay"></div>
      </section>

    );
  }
}

export default Contact;