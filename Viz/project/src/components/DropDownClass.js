import React, {Component} from 'react'
import { Dropdown } from 'semantic-ui-react'
import countries from "../dataFiles/countries";

class DropDownClass extends Component {
    constructor () {
        super();
        this.state = {}
    }  

    render() {
        const menuStyle = {
            width: "30%",
            color: "black"
        }

        return(
            <>
                <Dropdown
                    style = {menuStyle}
                    placeholder='Select Country'
                    fluid
                    selection
                    options={countries}
                />
            </>
        );
    }
}

export default DropDownClass