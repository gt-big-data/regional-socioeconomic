import React, {Component} from 'react';
import ReactLogo from './us.svg';

class Map extends Component {
    render() {
        return (
            <div className="Map">
                <img src={ReactLogo} alt="US Map" />
            </div>
        );
    }
  }
  export default Map;