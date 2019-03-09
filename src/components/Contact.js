import React from 'react';
import {Form, FormGroup, Input, Label, Button} from 'reactstrap';
import axios from 'axios';

const API_PATH = 'http://localhost:8080/api/contact/index.php';

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
    axios({
      method: 'post',
      url: `${API_PATH}`,
      headers: {'content-type': 'application/json'},
      data: this.state
    }).then((result) => {
      this.setState({
        mailSent: result.data.sent
      });
      console.log(this.state);
    }).catch((error) => this.setState({error: error.message}));
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
        <Button onClick={this.handleSubmit}>Submit</Button>
      </Form>
      </div>
      </section>

    );
  }
}

export default Contact;