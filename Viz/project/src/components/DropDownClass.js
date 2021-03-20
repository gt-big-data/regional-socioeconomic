import React, {Component} from 'react'
import { Dropdown } from 'semantic-ui-react'
import countries from "../dataFiles/countries";

class DropDownClass extends Component {
    constructor () {
        super();
<<<<<<< Updated upstream
        this.state = {}
    }  
=======
        this.state = {
            country_chosen: "none"
        }
    } 
    
    change_country = (e, data) => {
        this.setState({country_chosen: data.value});
        console.log(data);
    }
>>>>>>> Stashed changes

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