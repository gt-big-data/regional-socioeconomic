
import React, {Component} from 'react'
import { Dropdown } from 'semantic-ui-react'
import countries from "../dataFiles/modifiedCountries";
import Venezuela from "./images/Antarctica/vector.svg";

class DropDownClass extends Component {
    constructor () {
        super();
        this.state = {
            country_chosen: require("./images/Antarctica/vector.svg")
        }
        
        
    } 
    
    change_country = (e, data) => {
        var imagePath = require("./images" + data.value)
        this.setState({country_chosen: imagePath});
        console.log(this.state.country_chosen);
    }

    do_nothing = (e) => {
        console.log("this did nothing")
    }    
    render() {
        const menuStyle = {
            width: "30%",
            color: "black"
        }

        return(
            <>
                <Dropdown
                    onChange = {this.change_country}
                    style = {menuStyle}
                    placeholder='Select Country'
                    fluid
                    selection
                    options={countries}
                />
                <img src={this.state.country_chosen.default} alt="not found"/>
            </>
        );
    }
}

export default DropDownClass
