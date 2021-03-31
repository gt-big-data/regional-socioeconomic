import React, {Component} from 'react';
import { Dropdown } from 'semantic-ui-react';
import DropDownClass from "../components/DropDownClass";
import MapDisplayClass from './MapDisplayClass';


class MainPageClass extends Component {
    constructor () {
        super();
    } 

    render () {
        return (
            <>
                <DropDownClass/>
                <MapDisplayClass/>
            </>
        );
    }

}

export default MainPageClass;