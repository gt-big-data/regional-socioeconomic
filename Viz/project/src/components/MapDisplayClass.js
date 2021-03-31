import React, {Component} from 'react'
import { Dropdown } from 'semantic-ui-react'
import images from "./images";
import React0 from './images/yt/vector.svg';

class MapDisplayClass extends Component {
    constructor () {
        super();
        
        this.state = {
            current_display: images.ae
        }
    } 

    renderImage(countryAbbrev) {
        var imageMap = images
    }

    render () {
        return (
            <div className="Map">
                <img src={images.ae} alt="US Map" />
                <img src = {this.current_display} alt="no work" />
            </div>
        );
    }
}
export default MapDisplayClass;