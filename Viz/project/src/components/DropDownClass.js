import React, {Component} from 'react'
import { Dropdown } from 'semantic-ui-react'
import countries from "../dataFiles/modifiedCountries";
import Venezuela from "./images/Antarctica/vector.svg";
import index from '../index.css';
import RawandaInfoPage from "./RawandaInfoPage";
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';

class DropDownClass extends Component {

    constructor () {
        super();
        this.state = {
            country_chosen: require("./images/Antarctica/vector.svg"),
            country_string: "/Antarctica/vector.svg",
            country_name: "Antarctica"
        }
    } 

    Next_Click = (e) =>  {
        var current = 0;
        for (var i = 0; i < countries.length; i++) {
            if ((countries[i].value) == (this.state.country_string)) {
                current = countries[i].num;
                break;
            }
        }
        console.log(current );
        var imagePath1 = require("./images" + countries[current].value);
        this.setState({country_chosen: imagePath1});
        this.setState({country_string: countries[current].value});
        this.setState({country_name: countries[current].text});
        console.log(this.state.country_string);
        //console.log()
    }

    Previous_Click = (e) =>  {
        var current = 0;
        for (var i = 0; i < countries.length; i++) {
            if ((countries[i].value) == (this.state.country_string)) {
                current = countries[i].num;
                break;
            }
        }
        console.log(current);
        current-=2;
        console.log(current);
        console.log(countries[current].value);
        var imagePath1 = require("./images" + countries[current].value);
        this.setState({country_chosen: imagePath1});
        this.setState({country_string: countries[current].value});
        this.setState({country_name: countries[current].text});
        console.log(this.state.country_string);
        //console.log()
    }
    
    change_country = (e, data) => {
        var imagePath = require("./images" + data.value)
        this.setState({country_chosen: imagePath});
        this.setState({country_string: data.value});
        var current = 0;
        for (var i = 0; i < countries.length; i++) {
            if ((countries[i].value) == (data.value)) {
                current = countries[i].num;
                break;
            }
        }
        this.setState({country_name: countries[current-1].text});
        //console.log(this.state.country_chosen);
        console.log(data);
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
            <p> Click to Choose Country </p>
                <Dropdown
                    onChange = {this.change_country}
                    style = {menuStyle}
                    placeholder='Select Country'
                    fluid
                    selection
                    options={countries}
                />
                <p> Current Country : {this.state.country_name}</p>
                <img src={this.state.country_chosen.default} alt="not found" width="400" height="400"/>
                <div className = "button1"> 
                    <a href="#" onClick={this.Previous_Click}>
                    Previous
                    </a>
                </div>

                <div className = "button2"> 
                    <a href="#" onClick={this.Next_Click}>
                        Next
                    </a>
                </div>
                
                <Router>
                    <Link to="/RawandaInfoPage">
                    <div className = "info"> 
                        More Information
                        </div>
                    </Link>
                    <Switch>
                        <Route path="/RawandaInfoPage">
                            <RawandaInfoPage/>
                        </Route>
                    </Switch>
                </Router>
            </>
        );
    }
}

export default DropDownClass
