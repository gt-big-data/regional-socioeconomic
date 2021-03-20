import React, {Component} from 'react'
import { Dropdown } from 'semantic-ui-react'
import countries from "../dataFiles/countries";

class DropDownClass extends Component {
    constructor () {
        super();
        this.state = {
            country_chosen: "none"
        }
        
    } 
    
    change_country = (e, data) => {
        var country_name = 
        this.setState({country_chosen: data.value});
        console.log(data);
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
                <p>{`Current Country: ${this.state.country_chosen}`}</p>
            </>
        );
    }
}

export default DropDownClass