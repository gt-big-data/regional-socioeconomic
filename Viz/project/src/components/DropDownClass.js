import React, {Component} from 'react'
import { Dropdown } from 'semantic-ui-react'
import countries from "../dataFiles/modifiedCountries";

class DropDownClass extends Component {
    constructor () {
        super();
        this.state = {
            country_chosen: "thing"
        }
        
        
    } 
    
    change_country = (e, data) => {
        var country_image_path = require("./images" + data.value);
        this.setState({country_chosen: country_image_path});
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
                <img src={this.country_chosen} alt="A country was supposed to show up..."/>
            </>
        );
    }
}

export default DropDownClass