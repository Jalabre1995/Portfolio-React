import React, { Component } from 'react';

import Navbar from "../../components/Navbar.js";
import Field from "../../components/Field.js";
import Button from "../../components/Button.js";

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            message: "",
        };
        ///Going to use a a hook to ensure this, when calling 'this.updateField' refers to Contact nand not Field////
        this.updateField = this.updateField.bind(this);
    }
    updateField(field,value) {
        this.setState({[ field]: value});
        
    

    }
    render() {
        return (
            <div>
                <Navbar />
                <h1>Contact</h1>
                 {/*Name Field */}
                <Field onChange={(event) => this.updateField('name', event.target.value)} 
                onFocus={this.state.updateField}
                value={this.state.name} />
                {/*Email Field */}
                
                <Field onChange={(event) => this.updateField('email', event.target.value)}
                 value={this.state.email} />
                {/*message textarea */}
                
                <Field onChange={(event) => this.updateField('message', event.target.value)}
                textarea={true}
                value={this.state.message} />
                
                {/*Submit Button */}
                <Button formValues={this.state} email="joshuaalabre@gmail.com" />
            </div>
        )
    }
}
export default Contact;