import React, { Component } from 'react';

import Navbar from "../../components/Navbar.js";
import Field from 

class Contact extends Component {
    constructor(props) {
        supoer(props);
        this.state = {
            name: "",
            email: "",
            message: "",
        };
    }
    render() {
        return (
            <div> 
                <Field onChange={} value={} />
                <Field onChange={} value={} />
                <Field textarea onChange={} value={} />
                <Button formValues={this.state} email="joshuaalabre@gmail.com" />
            </div>
        )
    }
}