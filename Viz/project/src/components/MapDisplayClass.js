import React, {Component} from 'react'
import { Dropdown } from 'semantic-ui-react'
//import images from "./images/ad/vector.svg";
import ReactLogo from './us.svg';

class MapDisplayClass extends Component {
    constructor () {
        super();
        
        this.state = {
            current_display: "ae"
        }
    } 

    render () {
        return (
            <div className="Map">
                <img src={ReactLogo} alt="US Map" />
            </div>
        );
    }
}
export default MapDisplayClass;